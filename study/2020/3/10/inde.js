

var a = new Function(['a', 'b', 'c', 'd'], 'return a + b + c +d');
console.log(a(1,2,3,4))

var d = new Function('a', 'return Promise.resolve(a)');

d(1).then(res => console.log(res))