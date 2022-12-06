function Person() {
  this.name = 'lucas'
};
const getSingleInstance = (function () {
  var single;
  return function () {
    return single || (single = new Person())
  }
})();
const a = new getSingleInstance();
const b = new getSingleInstance();
console.log(a === b);

const gett = (function () {
  var single;
  if (!single) {
    single = new Person();
  }
  return () => single
})()
var c = gett();
var d = gett();
console.log(c === d)

var cc = function () {
  // return new Person()
  return 1
  // return {age: day1}
}
console.log(new cc())
console.log(cc())