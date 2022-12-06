const cb = ((previousValue, currentValue, currentIndex, array) => {
  // console.log({previousValue, currentValue, currentIndex, array})
  return previousValue + currentValue;
})

var a = [1, 2, 3, 4, 5, 6];


// const av = a.reduce(cb)

// console.log(av)

Array.prototype.red = function (cb, initail) {
  var arr = this;
  var base = typeof initail === 'undefined' ? arr[0] : initail;
  var startPoint = typeof initail === 'undefined' ? 1 : 0;
  arr.slice(startPoint)
    .forEach((val, index) => {
      base = cb(base, val, index + startPoint, arr)
    })
  return base;
}

// console.log(a.red(cb));


Array.prototype.dd = function (cb, initial) {
  var arr = this;
  var base = typeof initial === 'undefined' ? arr[0] : initial
  var start = typeof initial === 'undefined' ? 1 : 0;
  arr.slice(start)
    .forEach((val, index) => {
      base = cb(base, val, index + start, arr)
    })
  return base;
}

// console.log(a.dd(cb))


Array.prototype.ma = function (cb) {
  // var res = [];
  // arr.forEach((val, index) => {
  //   res[index] = cb(val)
  // })
  // return res
  this.forEach((i, index) => this[index] = cb(i));
  return this
};

// console.log(a.map(i => i + day1))
// console.log(a.ma(i => i + day1))


Array.prototype.rr = function (cb, ini) {
  var arr = this;
  var base = typeof ini === 'undefined' ? arr[0] : ini;
  var start = typeof ini === 'undefined' ? 1 : 0;
  const temp = arr.slice(start);
  console.log(temp)
  for (var i = 0; i < temp.length; ++i) {
    console.log(i)
    base = cb(base, temp[i], i + start, arr)
    // console.log(base)
  }
  return base;
}

console.log(a.rr(cb));









