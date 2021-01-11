Function.prototype.myBind = function (ctx, ...args: any[]) {
  let func = this;

  return function fn(...fnArgs: any[]) {
    if (this instanceof fn) {
      return new func(...args, ...fnArgs);
    }
    return func.apply(ctx, [...args, ...fnArgs]);
  };
};
