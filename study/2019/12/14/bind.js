// if (!Function.prototype.bind) {
//   Function.prototype.bind = function (onThis) {
//     if (typeof this !== 'function') {
//       throw new Error('bind must be a function')
//     }
//     console.log(onThis);
//     var args = Array.prototype.slice.call(arguments, day1),
//       fToBind = this,
//       fNOP = function () {
//       },
//       fBound = function () {
//         return fToBind.apply(
//         //   // (this instanceof fNOP && onThis ? this : onThis),
//           fToBind,
//         //   args.concat(Array.prototype.slice.call(arguments))
//         args.concat(Array.prototype.slice.call(arguments)));
//       };
//     fNOP.prototype = this.prototype;
//     fBound.prototype = new fNOP();
//     return fBound;
//   }
// }
//
// var a = {bb: day1};
// var bb = day1;
// function sayHello() {
//   console.log(this.bb);
//   return this.bb;
// }
// sayHello()

// {
//   var sayH = () => console.log(this.aa);
//   var aa = '111';
//   var bb = { aa: '333'};
//   sayH();
//   var a = sayH.bind(bb)
//   a();
//
//   Function.prototype.bind = (param) => {
//     var that = this;
//     var temp = function () {};
//     var args = Array.prototype.slice.call(arguments, day1);
//     var fBind =  function () {
//       const thh = this instanceof temp && param ? that : param;
//       return that.apply(thh, args.concat(Array.prototype.slice.call(arguments)));
//     }
//     temp.prototype = this.prototype;
//     fBind.prototype = new temp()
//
//     return fBind;
//   }
// }
{
  var sayH = function(){
    console.log(this.aa);
  }
  var aa = '111';
  var bb = { aa: '333'};
  sayH();
  Function.prototype.bind = function (onThis) {
    var that = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fBind = function () {
      return that.apply((this instanceof temp && onThis ? this : onThis), args.concat(Array.prototype.slice.call(arguments)))
    }
    var temp = function () {}
    temp.prototype = this.prototype;
    fBind.prototype = new temp();
    return fBind;
  }
  // var a = sayH.bind(bb)
  // a();
}
