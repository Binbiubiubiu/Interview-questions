Function.prototype.myBind = function (ctx = {}, ...args) {
  let func = this;

  return function fn(...fnArgs) {
    if (this instanceof fn) {
      return new func(...args, ...fnArgs);
    }

    return func.apply(ctx, [...args, ...fnArgs]);
  };
};

function add(a, b, c) {
  console.log(a, b, c);
  this.result = a + b + c;
}

add.prototype.toString = function () {
  return this.result;
};

let newType = add.myBind(null, 1, 2);

console.log(new newType(3));
