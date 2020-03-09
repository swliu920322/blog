{
  function Parent() {

  }

  function Child() {

  }

  Child.prototype = new Parent();
  Child.prototype.constructor = Child;

  /* 原型链继承
  *  简单
  *  共享原型的引用，子实例无法传参
  * */

}
{
  function Person() {
    this.a = 'a';
  }

  function Man(val) {
    Person.apply(this, arguments);
  }

  /* 构造函数继承
  * 解决了子实例共享父类引用  可以传参
  * 无法实现函数复用，子类实例有新的函数，太多占用内存
  * */
}
{
  function Parent() {

  }

  Parent.prototype.func = function () {

  };

  function Child() {
    Parent.apply(this, arguments);
  }

  Child.prototype = new Parent();

  /*
  *   属性不共享，创建实例可传参， 公用父原型的方法
  *   子原型有父类原型实例属性，子类屏蔽了父类的
  *
  * */
}
