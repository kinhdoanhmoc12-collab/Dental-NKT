const { Client } = require('ssh2');
const VPS = { host: '82.38.138.44', port: 22, username: 'root', password: '$C1u88P6@lvc', readyTimeout: 30000 };

function sshExec(cmd) {
  return new Promise((res) => {
    const c = new Client();
    let o = '';
    c.on('ready', () => {
      c.exec(cmd, (e, s) => {
        if (e) { c.end(); return res(e.message); }
        s.on('data', d => o += d);
        s.stderr.on('data', d => o += d);
        s.on('close', () => { c.end(); res(o.trim()); });
      });
    });
    c.on('error', e => res(e.message));
    c.connect(VPS);
  });
}

async function main() {
  const config = `
server {
    server_name nhakhoatre.vn www.nhakhoatre.vn;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Serve 3D scans directly from disk (Nginx speed optimize)
    location /scans/ {
        alias /var/www/dental-nkt/public/scans/;
        access_log off;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Serve uploads directly from disk
    location /uploads/ {
        alias /var/www/dental-nkt/public/uploads/;
        access_log off;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Backend API Proxy
    location /api/v1/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Frontend Proxy
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/nhakhoatre.vn/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/nhakhoatre.vn/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
server {
    if ($host = www.nhakhoatre.vn) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = nhakhoatre.vn) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name nhakhoatre.vn www.nhakhoatre.vn;
    return 404; # managed by Certbot
}
`;

  console.log('--- Updating Nginx to serve static /scans/ and /uploads/ directly ---');
  const escaped = config.replace(/'/g, "'\\''");
  console.log(await sshExec(`echo '${escaped}' > /etc/nginx/conf.d/nhakhoatre.conf`));

  console.log('\n--- Testing Nginx Config ---');
  console.log(await sshExec('nginx -t'));

  console.log('\n--- Reloading Nginx ---');
  console.log(await sshExec('systemctl reload nginx'));
  
  console.log('\n--- Testing connection to static files via curl internally ---');
  console.log(await sshExec('curl -I http://127.0.0.1/scans/case-1.html'));
  console.log(await sshExec('curl -I http://127.0.0.1/scans/case-2.html'));
}
main();
