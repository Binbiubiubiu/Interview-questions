Function.prototype.myApply = function (ctx, args = []) {
  let fn = this;
  let key = Symbol();
  ctx[key] = fn;
  let result = ctx[key](...args);
  delete ctx[key];
  return result;
};
