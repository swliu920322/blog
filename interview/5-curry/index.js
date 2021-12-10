let curry = fn => {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function () {
        return curried.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
};
const add = (x, y, z,m) => x + y + z + m;
const buf = curry(add);

console.log(buf(1)(2)(3));
console.log(buf(1, 2, 3));
