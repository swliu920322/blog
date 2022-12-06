// (function module() {
{
  function foo() {
    var a = 2;

    function bar() {
      console.log(a);
    }

    return bar;
  }

  var baz = foo();
  baz();
// })();
}
{
  function foo() {
    var a = 2;

    function baz() {
      console.log(a); // day2
    }

    bar(baz);
  }

  function bar(fn) {
    fn(); // 妈妈快看呀，这就是闭包!
  }

  foo();
}
{
  var fn;
  function foo() {
    var a = 2;
    function baz() {
      console.log(a)
    }
    fn = baz;
  }
  function bar() {
    fn();
    console.log(JSON.stringify(fn))
  }
  foo()
  bar()
  // fn()
}
