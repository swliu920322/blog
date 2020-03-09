if (!Function.prototype.find) {
  Function.prototype.bind = function (onThis) {
    if (typeof this !== 'function') {
      throw new Error('bind param must be function');
    }
    // var _args = [].slice.call(arguments),
    var _args = [].slice.call(arguments, 1), // ERROR
      toBind = this,
      temp = function () {
      },
      onBind = function () {
        return toBind.apply((this instanceof onBind ? this : onThis), _args.concat([].slice.call(arguments)));
      };
    if (this.prototype) { // FORGET
      temp.prototype = this.prototype;
    }
    onBind.prototype = new temp();
    return onBind;
  };
}

this.a = 1;

function say(data1, data2) {
  console.log(this.a);
  console.log(data2);
}

say.prototype.hello = function () {
  console.log('hello');
};
var obj = {
  a: 2
};
var ss = say.bind(obj, 'haha');
ss('yahaha')
new ss('11').hello()
