const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(fn) {
  this.state = PENDING; //
  this.value = null; //
  this.reason = null; //
  this.onFulfilledCallbacks = []; //
  this.onRejectedCallbacks = []; //
  const resolve = value => { // resolve是如果是棚顶，修改当前value, 对回调函数以此执行
    console.log('first step');
    setTimeout(() => {
      console.log('resolve');
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        // cb = value => value
        this.onFulfilledCallbacks.forEach(cb => {
          this.value = cb(this.value); // 保证value的传递
        });
      }
    });
  };
  const reject = value => {
    setTimeout(() => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = value;
        this.onRejectedCallbacks.forEach(cb => {
          this.reason = cb(this.value);
        });
      }
    });
  };
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// then  = value => value
MyPromise.prototype.then = function (onFulfilled, onReject) {
  console.log('2 and 3');
  typeof onFulfilled === 'function' && this.onFulfilledCallbacks.push(onFulfilled);
  typeof onReject === 'function' && this.onRejectedCallbacks.push(onFulfilled);
  return this;
};
// new MyPromise(fn)
new MyPromise(resolve => {
  resolve(111);
})
  .then(res => {
    console.log(res);
    return res + 1;
  })
  .then(re => {
    console.log(re);
    return re;
  });


var LPromise = function (fn) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  var that = this;

  function resolve(value) {
    if (that.state === PENDING) {
      setTimeout(function () {
        that.state = FULFILLED;
        that.value = value;
        that.onFulfilledCallbacks.forEach(cb => {
          that.value = cb(that.value);
        });
      });
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      setTimeout(function () {
        that.state = REJECTED;
        that.reason = value;
        that.rejectedCallbacks.forEach(cb => {
          that.value = cb(that.value);
        });
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
};

LPromise.prototype.then = function (onFulfilled, onRejected) {
  typeof onFulfilled === 'function' && this.onFulfilledCallbacks.push(onFulfilled);
  typeof onFulfilled === 'function' && this.onRejectedCallbacks.push(onRejected);
  return this;
};

new LPromise(resolve => {
  resolve(11)
})
.then(res => {
  console.log(res)
  return res + 1
})
  .then(res => {
    console.log(res)
    return res + 1
  })

// promise大概就是异步队列的执行，value的修改来保证下一个异步队列的值为之前的值
// 通过异步任务来延长真实宏任务的执行，宏任务是往异步任务中发放队列

//https://www.cnblogs.com/qiqi715/p/10403535.html


document.getElementById()
