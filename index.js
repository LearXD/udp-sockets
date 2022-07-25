const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const fs = require('fs');
const path = require('path');

let packets = [];

const args = process.argv;

const address = args[2]
const port = args[3]

const times = args[4] ?? 1000

if(!address || !port)
  return console.log('[ERROR] Use: \'node . <address> <port> [<times>]\'')

  
fs.readdirSync(path.join(__dirname, 'buffers')).map((file, a) => {
  const filePath = path.join(__dirname, 'buffers', file)
  const data = JSON.parse(fs.readFileSync(filePath));
  data.buffer && packets.push(data.buffer)
})  


client.on('error', (e) => {
  console.log('[ERROR]: ' + e)
  process.kill(process.pid);
})

setInterval(() => {
    packets.forEach(buffer => {
      client.send(buffer, 0, buffer.length, port, address);
    })
    
    console.log(`[UDP-SOCKETS] Sending ${packets.length} packets to ${address}:${port}...`)
}, (1000 / (times <= 0 ? 1000 : times)))