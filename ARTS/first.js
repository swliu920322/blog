var reverse = function (x) {
  var arr = Math.abs(x).toString().split('').reverse()
  try {
    const total = arr.reduce((pre, cur) => parseInt(pre, 10) * 10 + parseInt(cur, 10))
    if (total > 2 ** 31 - 1) {
      return 0
    }
    return total * Math.sign(total)
  } catch (e) {
    console.log(e)
  }
};

var reverseTwo = function (x) {
  const sign = Math.sign(x);
  var result = 0;

  while (x !== 0) {
    var last = Math.abs(x) % 10;
    x = Math.floor(Math.abs(x) / 10);
    result = result * 10 + last;
  }
  if (result > 2 ** 31 - 1) {
    return 0
  }
  return result * sign;
};

var a = function* () {
  let i = 1;
  while (i < 10) {
    yield i;
    i++;
  }
}
var b = a();
console.log(b.next());
console.log(b.next());
console.log(b.next());
