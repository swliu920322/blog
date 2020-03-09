const a = param => {
  console.log(param);
}
const b = a.bind(this, 'haha');

const c = (fn, delay = 2000) => {
  return function () {
    setTimeout(() => {
      fn.apply(this, arguments);
    }, delay)
  }
};
c(a)('aa');
