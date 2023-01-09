import dgram from 'dgram';
import ProcessMessage from './src/processMessage';

const server = dgram.createSocket('udp4');

const processMessage = new ProcessMessage()

server.on('error', (err) => {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port}`);
  const messageString = msg.toString()
  processMessage.execute(messageString);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);