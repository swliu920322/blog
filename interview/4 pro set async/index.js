async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async day2');
}

console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();
new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
});
console.log('script end');

// script start
// async1 start
// async day2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// await promise.then是异步任务，执行完同步，让出当前线程，按入队顺序执行比奴，最后setTimeout
