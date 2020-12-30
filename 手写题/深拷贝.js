let source = {
  d: 4,
  e: {
    e1: "source e1",
  },
};

// 第一种方案
let s = JSON.parse(JSON.stringify(source));
source.e.e1 = "this is new value";
console.log(s, source);

const isObject = (val) => typeof val === "ojbect" && val != null;

function deepClone(source, cache = new WeakMap()) {
  if (!isObject(source)) {
    return source;
  }

  if (cache.has(source)) {
    return cache.get(source);
  }

  let otherType = [Set, Map, WeakMap, WeakSet, RegExp, Date];
  let AType = source.constructor;
  if (otherType.includes(source.constructor)) {
    return new AType(source);
  }

  let target = Array.isArray(source) ? [] : {};

  cache.set(source, target);

  Reflect.ownKeys(source).forEach((key) => {
    if (isObject(source[key])) {
      target[key] = deepClone(source[key]);
    } else {
      target[key] = source[key];
    }
  });

  return target;
}

let b = deepClone(new Set([1]));

console.log(b);
