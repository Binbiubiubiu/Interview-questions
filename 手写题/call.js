Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx || {};
  let fn = this;
  let key = Symbol();
  ctx[key] = fn;
  let result = ctx[key](...args);
  delete ctx[key];
  return result;
};

function add(a, b) {
  return a + b;
}

console.log(add.myCall(null, 1, 2));
