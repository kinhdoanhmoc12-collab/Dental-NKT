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
  console.log('--- Check exact path of project on VPS ---');
  console.log(await sshExec('ls -la /var/www/dental-nkt/public/scans/'));
  
  console.log('\n--- Nginx running user ---');
  console.log(await sshExec('ps aux | grep nginx'));

  console.log('\n--- Test chmod permissions ---');
  // Cấp quyền đọc ghi đầy đủ cho toàn bộ thư mục public để Nginx có thể serve trực tiếp
  console.log(await sshExec('chmod -R 755 /var/www/dental-nkt/public && chmod -R 755 /var/www/dental-nkt/public/scans'));

  console.log('\n--- Nginx check again ---');
  console.log(await sshExec('curl -I http://127.0.0.1/scans/case-1.html'));
  
  console.log('\n--- Nginx Error Log (last 10 lines) ---');
  console.log(await sshExec('tail -n 10 /var/log/nginx/error.log'));
}
main();
