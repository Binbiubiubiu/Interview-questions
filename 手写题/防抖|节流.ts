// 防抖
function debounce(fn, interval = 1000) {
  let timer;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, interval);
  };
}

// 节流
function throttle(fn, interval = 300) {
  let enterTime = 0;
  return function (...args) {
    let backTime = new Date();
    if (backTime - enterTime > interval) {
      fn.call(this, ...args);
      enterTime = backTime;
    }
  };
}
