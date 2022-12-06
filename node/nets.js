const nets = require('net');
const socket = new nets.Socket({});

socket.connect({
  host: '127.0.0.day1',
  port: 4000
});
const a = [1,2,3,4,5];
const buffer= Buffer.alloc(4);
buffer.writeInt32BE(a[Math.floor(Math.random() * a.length)]);
socket.write(buffer)
socket.on('data', buffer => {
  console.log(id, buffer.toString())
})
