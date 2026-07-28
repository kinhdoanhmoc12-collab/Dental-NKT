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
  console.log('--- Cleaning local changes and pulling latest code on VPS ---');
  const pullRes = await sshExec('cd /var/www/dental-nkt && git reset --hard && git clean -fd && git pull');
  console.log(pullRes);

  console.log('\n--- Building application on VPS ---');
  const buildRes = await sshExec('cd /var/www/dental-nkt && npm run build');
  console.log(buildRes);

  console.log('\n--- Restarting PM2 process ---');
  const pm2Res = await sshExec('pm2 reload dental-nkt');
  console.log(pm2Res);
}
main();
