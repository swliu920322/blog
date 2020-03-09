const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  const that = this;
  this.state = PENDING;
  this.val = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];

  // function resolve(value) {
  //   if (that.state === PENDING) {
  //     that.state = RESOLVED
  //     that.value = value
  //     that.resolvedCallbacks.map(cb => cb(that.value))
  //   }
  // }
  //
  // function reject(value) {
  //   if (that.state === PENDING) {
  //     that.state = REJECTED
  //     that.value = value
  //     that.rejectedCallbacks.map(cb => cb(that.value))
  //   }
  // }

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject());
    }
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = RESOLVED;
        that.value = value;
        that.resolvedCallbacks.map(cb => cb(that.value));
      }
    }, 0);
  }

  function reject(value) {
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = REJECTED;
        that.value = value;
        that.rejectedCallbacks.map(cb => cb(that.value));
      }
    }, 0);
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => {
    throw r;
  };
  if (that.state === PENDING) {
    // that.resolvedCallbacks.push(onFulfilled);
    // that.rejectedCallbacks.push(onRejected);
    return (promise2 = new MyPromise((resolve, reject) => {
      that.resolvedCallbacks.push(() => {
        try {
          const x = onFulfilled(that.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      that.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(that.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });
    }));
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value);
  }
  if (that.state === REJECTED) {
    onRejected(that.value);
  }
};
new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    console.log('aaa');
  }, 0);
}).then(value => {
  console.log(value);
  return value;
}).then(res => {
  console.log(res)
})
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//     console.log('aaa');
//   }, 0);
// }).then(value => {
//   console.log(value);
// });

// function resolutionProcedure(promise2, x, resolve, reject) {
//   if (promise2 === x) {
//     return reject(new TypeError('Error'))
//   }
// }
