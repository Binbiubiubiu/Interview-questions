function New(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}
