const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;

    this.resolveCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        setTimeout(() => {
          this.state = FULFILLED;
          this.value = value;
          this.resolveCallbacks.map((cb) => cb(this.value));
        }, 0);
      }
    };

    const rejected = (err) => {
      setTimeout(() => {
        this.state = REJECTED;
        this.reason = err;
        this.rejectedCallbacks.map((cb) => cb(this.reason));
      }, 0);
    };

    try {
      executor(resolve, rejected);
    } catch (err) {
      rejected(err);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    let p2 = new MyPromise((resolve, reject) => {
      try {
        if (this.state === FULFILLED) {
          let x = onFulfilled(this.value);
          this.resolvePromise(p2, x, resolve, reject);
        }

        if (this.state === REJECTED) {
          let x = onRejected(this.reason);
          this.resolvePromise(p2, x, resolve, reject);
        }

        if (this.state === PENDING) {
          this.resolveCallbacks.push(() => {
            let x = onFulfilled(this.value);
            this.resolvePromise(p2, x, resolve, reject);
          });
          this.rejectedCallbacks.push(() => {
            let x = onRejected(this.value);
            this.resolvePromise(p2, x, resolve, reject);
          });
        }
      } catch (err) {
        reject(err);
      }
    });

    return p2;
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
      return reject(new TypeError("Chaining cycle detected for promise"));
    }

    let called;
    if (!!x && (typeof x === "object" || typeof x === "function")) {
      try {
        let then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              this.resolvePromise(promise2, y, resolve, reject);
            },
            (err) => {
              if (called) return;
              called = true;
              reject(err);
            }
          );
        } else {
          resolve(x);
        }
      } catch (err) {
        if (called) return;
        called = true;
        reject(err);
      }
    } else {
      resolve(x);
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

MyPromise.resolve = (val) => {
  return new MyPromise((resolve) => {
    resolve(val);
  });
};

MyPromise.reject = (val) => {
  return new MyPromise((_, reject) => {
    reject(val);
  });
};

MyPromise.race = (ps) => {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < ps.length; i++) {
      ps.then(resolve, reject);
    }
  });
};

MyPromise.all = (ps) => {
  let arr = [];
  let i = 0;
  return new MyPromise((resolve, reject) => {
    function processData(index, data) {
      arr[index] = data;
      i++;
      if (i === ps.length - 1) {
        resolve(arr);
      }
    }
    for (let i = 0; i < ps.length; i++) {
      ps.then((data) => {
        processData(i, data);
      }, reject);
    }
  });
};

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 2000);
})
  .then((val) => {
    console.log(val);
    return val;
  })
  .then((val) => {
    console.log(val);
  });
