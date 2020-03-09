var longestCommonPrefix = function (strs) {
  var res = '';
  var len = strs.length;
  if (len === 0) {
    return res;
  }
  for (let j = 0; j < strs[0].length; ++j) {
    for (let i = 1; i < len; ++i) {
      if (strs[i][j] !== strs[0][j]) {
        return res;
      }
    }
    res += strs[0][j];
  }
  return res;
};
// indexOf水平扫描,从后往前，直到缩减到每个的indexOf能匹配上为止
var longestCommonPrefix = function (strs) {
  var len = strs.length;
  if (!len) return '';
  let temp = strs[0];
  for (let i = 1; i < len; ++i) {
    while (strs[i].indexOf(temp) !== 0) {
      temp = temp.slice(0, temp.length - 1);
    }
  }
  return temp;
};

var longestCommonPrefix = function(strs) {
  let length = strs.length;
  if(length ===0) {
    return ''
  }
  let temp = strs[0];
  let i = 1;
  for(;i < length; ++i) {
    if (strs[i].indexOf(temp) !== 0) {
      temp = temp.slice(0, -1);
    }
  }
  return temp
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// 从小到大，拼，直到不符合
// 从大到小，截取直到符合
