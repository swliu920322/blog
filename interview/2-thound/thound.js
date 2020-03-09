var num = '124213213';
{
  console.log(parseFloat(num).toLocaleString());
}
{
  var result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  console.log(result)
}

{
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
}
