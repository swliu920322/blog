var num = 323456789;

console.time()
console.log(num.toLocaleString());
console.timeEnd()
function trans(x) {
  let st = num + '';
  var result = '';
  // while (st.length > 2) {
  //   result = result + ',' + st.slice(0, 3);
  //   st = st.slice(3);
  // }
  // if (st.length > 0) {
  //   result = st + result;
  // } else {
  //   result = result.slice(1)
  // }
  while (st.length > 3) { // 少于4个直接停止
    result = ',' + st.slice(-3) + result;  // 从后往前截取
    st = st.slice(0, -3); // 切掉后面三个
    // console.log({result, st});
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
console.time()
console.log(trans(num));
console.timeEnd()
console.time()
console.log(tt(num));
console.timeEnd()
