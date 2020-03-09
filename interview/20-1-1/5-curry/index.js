function curry(fn) {
  return function _add(...args) {
    // var _args = [].slice.call(arguments);
    // if (_args.length < fn.length) {
    if (args.length < fn.length) {
      return function xx() {
        // _args = _args.concat([].slice.call(arguments));
        // if (_args.length >= fn.length) {
        //   return fn.apply(null, _args);
        // }
        // return xx;      // TODO 控制反转
        return _add.apply(null, args.concat([].slice.call(arguments)));
      };
    }

    return fn.apply(null, args);
  };
}

function cc(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function () {
        return curried.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
}


const add = (x, y, z) => x + y + z;
const buf = curry(add);
const buff = cc(add);

setTimeout(() => {

  console.time();
  console.log(buf(1, 2, 3));
  console.timeEnd();
  console.time();
  console.log(buf(1)(2)(3));
  console.timeEnd();
  console.time();
  console.log(buff(1)(2)(3));
  console.timeEnd();
  console.time();
  console.log(buff(1, 2, 3));
  console.timeEnd();
}, 100);

