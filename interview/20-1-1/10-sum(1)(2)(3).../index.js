function sum() {
  var args = [].slice.call(arguments);

  function _add() {
    args = args.concat([].slice.call(arguments));
    return _add;
  }

  // _add.__proto__.valueOf = function () {
  //   return args.reduce((prev, cur) => prev + cur)
  // }
  _add.valueOf = function () {
    return args.reduce((prev, cur) => prev + cur);
  };
  return _add;
}

console.dir(sum(1)(2)(3, 4, 5)(6, 7).valueOf());
