function currying(fn, ...args) {
  console.log(args);
  let allArgs = args;
  return function next(...argums) {
    if (allArgs.length === fn.length) {
      return fn.apply(null, allArgs);
    } else {
      allArgs = allArgs.concat(argums);
      return next;
    }
  };
}

function uncurrying(fn) {
  return function (obj, ...args) {
    fn.apply(obj, args);
  };
}
