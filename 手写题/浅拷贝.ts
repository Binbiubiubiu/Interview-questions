// 第一种： 采用es6中的扩展运算符
var source = {
  d: 4,
  e: {
    e1: "source e1",
  },
};

var s = { ...source };
source.d = 5;
source.e.e1 = "source new value";
console.log(s);

// 第二种 可以通过Object.assign实现
var source = {
  d: 4,
  e: {
    e1: "source e1",
  },
};

var s = Object.assign({}, source);
source.d = 5;
source.e.e1 = "source new value";
console.log(s);

// 第三种 采用遍历的方式进行拷贝
function cloneShallow(source) {
  let target = {},
    hasProperty = Object.prototype.hasOwnProperty;
  for (const key in source) {
    if (hasProperty.call(source, key)) {
      target[key] = source[key];
    }
  }

  return target;
}

var s = cloneShallow(source);
source.d = 5;
source.e.e1 = "source new value";
console.log(s);
