
var a = Array.from({length: 100}, (i, index) => index);
var b = Array.from({length: 100}, (i, index) => index);
b.length = 200;
console.time('a');
a.push(100);
console.timeEnd('a')

console.time('b');
b[2]=100;
console.timeEnd('b');

function f(b) {
  switch (true) {
    case b: {
      console.log(b);
      break;
    };
    default:
  }
}
f(1)
f(true)
