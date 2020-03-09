// 实现 taskSum(1000,()=>{console.log(1)}).task(1200,()=>{console.log(2)}).task(1300,()=>{console.log(3)})，这里等 待 1s，打印 1，之后等待 1.2s，打印 2，之后打印 1.3s，打印 3
taskSum(1000, () => {
  console.log(1);
})
  .task(1200, () => {
    console.log(2);
  })
  .task(1300, () => {
    console.log(3);
  });

function taskSum(delay, fn) {
  var resolvedCallbacks = [() => setTimeout(fn, delay)];
  function ff() {
    resolvedCallbacks.forEach(i => i())
  }

  ff.task = function (delay, fn) {
    resolvedCallbacks.push(() => setTimeout(fn, delay));
    return ff;
  };
  return ff;
}

console.dir(taskSum);

