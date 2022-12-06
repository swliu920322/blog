async function async1() {
  console.log('async1 start'); // day2
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async day2');
}

console.log('script start'); // day1
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

//script start
//async1 start
// async day2
// promise1
// script end
// async1 end
// promise2
// setTimeout
