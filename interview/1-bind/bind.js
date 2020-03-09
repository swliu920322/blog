if (!Function.prototype.bind) {
  Function.prototype.bind = function (onThis) { // 宿主作用域
    if (typeof this !== 'function') {
      throw new Error('Function.prototype.bind must be a function');
    }
    // 获取bind的额外参数
    var args = [].slice.call(arguments, 1);
    // bind函数本身
    var fToBind = this;
    // 用来继承原型链
    var fNOP = function () {
    };
    // 定义返回bind函数
    var fBind = function () {
      // 如果是new this为fBind
      return fToBind.apply(
        (this instanceof fBind ? this : onThis),
        // args
        args.concat([].slice.call(arguments))
      );
    };
    // 维护原型链
    if (this.prototype) {
      fNOP.prototype = this.prototype;
    }
    fBind.prototype = new fNOP();
    return fBind;
  };
}

this.name = 20;

function test(data, data2) {
  this.name = '🐶构造函数';
  console.log(data2);
};
test.prototype.init = function () {
  console.log(this.name);
};
var result = test.bind(this, '🍌月薪三万');
result('呀哈哈');
var a = new result('aaa');
a.init();
