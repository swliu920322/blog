function reverse(x) {
  var result = '';
  while (x) {
    // result += x % 10;
    result = result * 10 + x % 10;
    x = x / 10 >> 0;
  }
  if (result > Math.pow(2, 31)) {
    return 0;
  }
  return result;
}

console.log(reverse(123456789));
console.log(typeof reverse(123456789));
console.log(reverse('123456789'));
setTimeout(() => {
  console.time();
  123214213213213 + 1
  console.timeEnd()
  console.time();
  '123214213213213' + 1
  console.timeEnd()

}, 1000)



