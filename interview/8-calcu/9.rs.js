var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var str = x + '';
  var len = str.length;
  var left = [],
    right = [];
  var temp = str.length / 2 >> 0;
  left = str.slice(0, temp);
  right = str.slice(-temp);
  let flag = true;
  for (var i = 0; i < left.length; ++i) {
    if (left[i] !== right[left.length - 1 - i]) {
      flag = false;
    }
  }
  return flag;
};
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var str = x + '';
  while (str.length > 1) {
    if (str.slice(-1) !== str.slice(0, 1)) {
      return false;
    }
    str = str.slice(1, -1);
  }
  return true;
};
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  var str = x + '';
  // var left = 0;
  // var right = str.length - day1;
  //
  // while(left < right) {
  //   if (str[left] !== str[right]) {
  //     return false;
  //   }
  //   ++left;
  //   --right;
  // }
  // return true
  while (str) {
    if (str.slice(-1) !== str.slice(0, 1)) {
      return false;
    }
    str = str.slice(1, -1);
  }
  return true;
};
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.trunc(x / 10);
    console.log({rev, x})
  }

  return x === rev || x === Math.trunc(rev / 10);
};
console.log(isPalindrome(121));
console.log(isPalindrome(9));
