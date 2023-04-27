const dgram = require('dgram');
const client = dgram.createSocket('udp4');

// receive socket

client.bind(8080);

let messages = 0;

client.on('listening', () => {
  console.log(`[DDOS] Listening on port 8080...`)
});

client.addListener('message', (message) => {
  messages++;
});


setInterval(() => {
  console.log(`[DDOS] ${messages} packets per second`)
  messages = 0;
}, 1000)
