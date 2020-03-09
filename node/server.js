const net = require('net');
const server = net.createServer(socket => {
  socket.on('data', buffer => {
    console.log(buffer, buffer.toString())
    const lessionId = buffer.readInt32BE();
    buffer.write(Buffer.from(data[lessionId]))
  })
})
server.listen(4000);

const data = {
  1: '1111',
  2: '2222',
  3: '3333',
  4: '4444',
  5: '5555',
}
