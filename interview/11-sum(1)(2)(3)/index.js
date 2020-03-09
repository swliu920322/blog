const sum = a => b => c => a + b + c;

console.log(sum(1)(2)(3).valueOf());

function ha() {
  var args = [].slice.call(arguments);

  function ff() {
    args = args.concat([].slice.call(arguments));
    return ff;
  }

  ff.valueOf = function () {
    return args.reduce(((previousValue, currentValue) => previousValue + currentValue));
  };
  return ff;
}

console.log(ha(1, 2, 3, 4)(5, 6)(7)(8)(9)(10)(11).valueOf());
console.log(ha(1, 2, 3, 4)(5, 6)(7)(8)(9)(10)(11).valueOf());
