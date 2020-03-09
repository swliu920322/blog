const request = require('request');
var a = {
  get haha() {
    console.log('haha');
    return 1;
  }
};

console.log(111);
setTimeout(() => {
  console.log('11')
})
Promise.resolve(22).then(re => {
  console.log(re);
});
console.log(1111)
const payload = {mobile: '13000000001'}
const aa = async () => {
  await new Promise(resolve => {
    request.post('http://120.77.93.46:8892/base/user/login', data = payload, re => {
      console.log('re before');
      console.log('re after');
      resolve(re)
    });
  })
}
// aa().then(re => {
//   console.log('re after')
// })
aa().then(res => console.log(res));
const ab = () => new Promise(resolve => {
  setTimeout(() => {
    console.log('async')
  }, 100)
})

console.log(333)
setTimeout(() => console.log('4444'), 0)