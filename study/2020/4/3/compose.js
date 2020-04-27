const fn1 = () => console.log(1);
const fn2 = () => console.log(2);
const fn3 = () => console.log(3);
const fn4 = () => console.log(4);
let funcs = [fn1, fn2, fn3, fn4];

const compose = (...funcs) => {
  return args => funcs.reduceRight((previousValue, currentValue) => {
    currentValue(previousValue)
  }, args)
}
let composeFunc = compose(...funcs);

// composeFunc(1)

const func = (func1, func2) => args => func2.call(this, func1.apply(args))
const compo3 = (...args) => {
  return args.reduceRight(func, args.pop())
}
// const aa = compo3(...funcs)
// console.log(aa(1))


const compp = (...args) => {
  let init = args.pop();
  return (...arg) => {
    args.reverse().reduce((previousValue, currentValue) => {
      return previousValue.then(res => currentValue.call(null, res))
    }, Promise.resolve(init.apply(null, arg)))
  }
}


// const composes = (...args) => {
//   let init = args.pop()
//   return (...arg) =>
//     args.reverse().reduce((sequence, func) => {
//         return sequence.then(result => func.call(null, result))
//       }
//       , Promise.resolve(init.apply(null, arg)))
// }

// const e = compp(...funcs)
// e(1)

// lodash
var composebb = function (funcs) {
  var length = funcs.length;
  var index = length;
  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new Error('must be function')
    }
  }
  return function (...args) {
    var index = 0;
    var result = length ? funcs.reverse()[index].apply(this, args) : args[0]
    while (++index < length) {
      result = funcs[index].call(this, result)
    }
    return result;
  }
}
// composebb(funcs)(1);
const com = (...funcs) => funcs.reduce(((previousValue, currentValue) => (...args) => previousValue(currentValue(...args))))
const my = (...funcs) => args => funcs.reduceRight((previousValue, currentValue) => currentValue(previousValue), args)

com(...funcs)(1);
my(...funcs)(1);