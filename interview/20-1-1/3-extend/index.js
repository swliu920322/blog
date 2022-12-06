// day1.
// function P() {
//
// }
// function C() {
//
// }
// c.prototype = new P()
//
// // day2
// function P() {
//
// }
// function C(param) {
//   P.apply(this, arguments)
// }
// 3
function P() {
  this.init = function aa() {
    console.log('aa')
  }
}

P.prototype.common = function () {
  console.log(11);
};

function C() {
  P.call(this);
}

C.prototype = new P();
// 参数忘记
var a = new C();
