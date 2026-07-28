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
  console.log('--- Trạng thái PM2 ---');
  console.log(await sshExec('pm2 list'));
  console.log('\n--- Logs của dental-nkt (Next.js) ---');
  console.log(await sshExec('pm2 logs dental-nkt --lines 20 --nostream'));
  console.log('\n--- Logs của tu_van_nkt_backend (NestJS) ---');
  console.log(await sshExec('pm2 logs tu_van_nkt_backend --lines 20 --nostream'));
}
main();
