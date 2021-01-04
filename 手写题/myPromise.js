// 判断是否为函数
const isFunction = (obj) => typeof obj === "function";

// 判断是否为对象
const isObject = (obj) => !!obj && typeof obj === "object";

// 判断是否为 thenable
const isThenable = (obj) => (isFunction(obj) || isObject(obj)) && "then" in obj;

// 判断是否是 MyPromise
const isMyPromise = (promise) => promise instanceof MyPromise;

// MyPromise 状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// handleCallback 函数，根据 state 状态，判断是走 fulfilled 路径还是 rejected 路径
const handleCallback = (callback, state, result) => {
  const { onFulfilled, onRejected, resolve, reject } = callback;

  try {
    if (state === FULFILLED) {
      if (isFunction(onFulfilled)) {
        resolve(onFulfilled(result));
      } else {
        resolve(result);
      }
    } else if (state === REJECTED) {
      if (isFunction(onRejected)) {
        resolve(onRejected(result));
      } else {
        reject(result);
      }
    }
  } catch (error) {
    reject(error);
  }
};
// 清空之前的内容
const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) {
    handleCallback(callbacks.shift(), state, result);
  }
};

// 状态一旦不是 pending，就不允许再次转换
const transition = (promise, state, result) => {
  if (promise.state !== PENDING) {
    return;
  }

  promise.state = state;
  promise.result = result;

  setTimeout(() => {
    handleCallbacks(promise.callbacks, state, result);
  }, 0);
};

const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    return reject(new TypeError("Can not fulfill promise with itself"));
  }

  if (isMyPromise(result)) {
    return result.then(resolve, reject);
  }

  if (isThenable(result)) {
    try {
      if (isFunction(result.then)) {
        return new MyPromise(then.bind(result)).then(resolve, reject);
      }
    } catch (error) {
      reject(error);
      return;
    }
  }

  resolve(result);
};

// 设置 Promise
const MyPromise = function (f) {
  // 设置初始化状态
  this.state = PENDING;
  this.result = null;

  // then() 可以被多次调用，所以需要设置数组进行记录
  this.callbacks = [];

  // 构造 onFulfilled 来切换到 fulfilled，构造 onRejected 来切换到 rejected 状态
  const onFulfilled = (value) => transition(this, FULFILLED, value);
  const onRejected = (reason) => transition(this, REJECTED, reason);

  // 配合 ignore 来保证 resolve/reject 只有一次调用作用
  let ignore = false;

  // 配合 ignore 来保证 resolve/reject 只有一次调用作用
  let resolove = (value) => {
    if (ignore) {
      return;
    }
    ignore = true;
    resolvePromise(this, value, onFulfilled, onRejected);
  };

  let reject = (reason) => {
    if (ignore) {
      return;
    }
    ignore = true;
    onRejected(reason);
  };

  // 进行尝试
  try {
    // 将 resolve 和 reject 作为参数传入 f 函数，方便调用
    f(resolove, reject);
  } catch (error) {
    // 如果 f 函数执行报错，那么错误就作为 reject 的 reason 来用
    reject(error);
  }
};

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 3.2 .then() 方法返回 Promise，所以需要 return 一个出去

  return new MyPromise((resolve, reject) => {
    // 3.3 设置 callback
    const callback = { onFulfilled, onRejected, resolve, reject };

    // 3.4 如果 state 处于 pending 状态，就存储进 callbacks 列表里
    if (this.state === PENDING) {
      this.callbacks.push(callback);
    } else {
      // 3.5 如果不是，就扔个 handleCallback 去处理
      // 至于为什么用 setTimeout？因为我们模拟不了微任务，那就用宏任务去解决吧
      setTimeout(() => {
        handleCallback(callback, this.state, this.result);
      }, 0);
    }
  });
};
