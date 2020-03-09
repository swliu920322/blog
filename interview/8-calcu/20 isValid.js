var isValid = function (s) {
  var len = s.length;
  if (len === 0) {
    return true;
  }
  if (len % 2 === 1) {
    return false;
  }
  var arr = Array.from(len / 2 >> 0);
  const deal = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  while (s) {
    // if (s[0] in deal) {
    //   if (deal[s[0]] !== arr.pop()) {
    //     return false;
    //   }
    // } else {
    //   arr.push(s[0]);
    // }
    if (!s[0] in deal) {
      arr.push(s[0])
    } else if (deal[arr.pop] !== s[0]) {
      return false
    }
    s = s.slice(1);
  }
  return arr.length === 0;
};

console.log(isValid('()'));
