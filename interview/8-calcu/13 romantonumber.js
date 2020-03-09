var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var res = 0;
  /*  let pre = map[s[0]];
    let temp = s.slice(1);
    while (temp) {
      const next = map[temp[0]];
      if (next > pre) {
        res -= pre;
      } else {
        res += pre;
      }
      pre = next;
      temp = temp.slice(1);
    }*/
  while (s.length > 1) {
    const value = map[s[0]];
    if (map[s[1]] > value) {
      res -= 2 * value;
    }
    res += value;
    s = s.slice(1);
    // while(s.length > 1) {
    //   var value = map[s[0]];
    //   if (map[s[1]] > value) {
    //     res -= value;
    //   } else {
    //     res += value;
    //   }
    //   s = s.slice(1);
    // }
  } // 注重while跟for的转化，注意边界条件
  // for (let i = 1; i < s.length; ++i) {
  //   const next = map[s[i]];
  //   if (next > pre) {
  //     res -= pre;
  //   } else {
  //     res += pre;
  //   }
  //   pre = next;
  // }
  res += map[s[0]];
  return res;
}; //  取第一个为参照物，跟第二个对比，再把第二个作为参照物,或者内部相邻比较，注意规律


// var romanToInt = function (s) {
//   const romanObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };
//   return s.split('').reduce((sum, current, index, arr) => {
//     sum = sum + romanObj[current];
//     if ((current === 'V' || current === 'X') && arr[index - 1] === 'I') sum -= 2;
//     if ((current === 'L' || current === 'C') && arr[index - 1] === 'X') sum -= 20;
//     if ((current === 'D' || current === 'M') && arr[index - 1] === 'C') sum -= 200;
//     return sum;
//   }, 0);
// };

// 先加，然后根据固定情况在处理
//
// var romanToInt = function (s) {
//   const obj = {
//     'I': 1,
//     'IV': 4,
//     'V': 5,
//     'IX': 9,
//     'X': 10,
//     'XL': 40,
//     'L': 50,
//     'XC': 90,
//     'C': 100,
//     'CD': 400,
//     'D': 500,
//     'CM': 900,
//     'M': 1000
//   };
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     const a = s[i];
//     const t = s[i] + s[i + 1];
//     if (obj[t] === undefined) {
//       sum += obj[a];
//     } else {
//       sum += obj[t];
//       i++;
//     }
//   }
//   return sum;
// };
// 如果匹配不上2个，就先匹配一个，

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var res = 0;
  while (s.length > 1) {
    var value = map[s[0]];
    if (map[s[1]] > value) {
      res -= value;
    } else {
      res += value;
    }
    s = s.slice(1);
  }
  return res += map[s[0]];
};

console.log(romanToInt('III'));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
