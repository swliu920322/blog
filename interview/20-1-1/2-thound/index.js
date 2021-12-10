var num = 323456789.22;

function reserve(num) {
  let st = num + '';
  let res = '';
  st.split('').reverse().forEach((i, index) => {
    if (index % 3 === 0) {
      res= ',' + res
    }
    res = i + res;
  })
  console.log(res)
  return res
}

function trans(x) {
  let st = num + '';
  var result = '';
  while (st.length > 3) { // 少于4个直接停止
    result = ',' + st.slice(-3) + result;  // 从后往前截取
    st = st.slice(0, -3); // 切掉后面三个
  }
  if (st) {
    result = st + result;
  }
  return result;
}

function tt(nn) {
  var result = '';
  var count = 0;
  while (nn > 1000) {
    result = nn % 10 + result;
    nn = nn / 10 >> 0;
    count++;
    if (count % 3 === 0) {
      result = ',' + result;
    }
  }
  result = nn + result;
  return result;
}

function numFormat(num) {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
console.time(1)
console.log(num.toLocaleString());
console.timeEnd(1)

console.time(2)
trans(num)
console.timeEnd(2)

console.time(3)
tt(num)
console.timeEnd(3)
console.time(4)
reserve(num)
console.timeEnd(4)
console.time(5)
numFormat(num)
console.timeEnd(5)
