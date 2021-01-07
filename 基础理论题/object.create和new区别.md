# object.create 和 new 区别

- new 操作符会将那样构造函数的 prototype 指定的原型对象赋值给新对象的[[Prototype]]
- Object.create 将参数 proto 指定的原型对象赋值给新对象的[[Prototype]]。
  如果参数为 null 的话，Object.create 则会创建空对象。

- 特别需要指出的是 Object.create(null)和 new Object()的区别：两者都是创建空对象，但是 new 创建出的空对象会绑定 Object 的 prototype 原型对象，但是 Object.create(null)的空对象是没有任何属性的。
