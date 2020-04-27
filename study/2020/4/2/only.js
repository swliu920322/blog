var o = {
  a: 'a',
  b: 'b',
  c: 'c'
}

const only = (obj, arr) => {
  let res = {}
  // arr.forEach(i => {
  //   if (i in obj) {
  //     res[i] = obj[i]
  //   }
  // })
  // console.log(res)
  // return res;
  return arr.reduce((prev, key) => {
    prev[key] = obj[key]
  }, res)
}


only(o, ['a', 'b'])   // {a: 'a',  b: 'b'}