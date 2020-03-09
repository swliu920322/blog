// first
var reverse = function (x) {
  const value = Math.abs(x);
  const di = (x < 0 ? -1 : 1);
  if ((di === 1 && value >= Math.pow(2, 31)) || di === -1 && value > Math.pow(2, 31)) {
    return 0;
  }
  return di * (value + '').split('').reverse().join('');
};
//
var reverse = function (x) { 1234567
  var bb = 0;
  while (x) {
    bb = bb * 10 + x % 10;
    x = Math.trunc(x / 10);
  }
  const temp = Math.pow(2, 31);
  if (bb < -temp || bb > temp) {
    bb = 0;
  }
  return bb;
};

var reverse = function (x) {
  var res = 0;
  var limit = Math.pow(2, 31);
  while(x) {
    res = res * 10 + x % 10;
    x = x / 10 >> 0;
  }
  if (res > limit || res < -limit) {
    return 0
  }
  return res;
};
