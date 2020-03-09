
var a = Buffer.from([10,2,3,4]);
var b = Buffer.alloc(20);
console.log(a)
console.log(b)

b.writeInt8(12, 1);
b.writeInt16BE(512, 2);
b.writeInt16LE(12, 4);
console.log(b)
