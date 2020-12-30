// 基类
function Person(name) {
  // 属性
  this.name = name;
  this.hobbies = ["play"];
  // 实例方法
  this.sleep = function () {
    console.log(this.name + "正在睡觉！");
  };
}

// 原型方法
Person.prototype.eat = function (food) {
  console.log(this.name + "正在吃：" + food);
};

function Teacher(name) {
  Person.call(this, name);
}

var tea = new Teacher("nini");
var tea1 = new Teacher("nana");

tea.hobbies.push("sing");

console.log(tea.hobbies, tea1.hobbies);
console.log(tea.name, tea1.name);

// tea.eat('饭') // 报错
tea.sleep(); // nini正在睡觉！
console.log(tea instanceof People); // false 这里是false ,证明不是父类
console.log(tea instanceof Teacher); // true

// 优点：
//   1. 可以往父类传参
//   2. 多个实例对父类【引用类型】的操作不会被篡改，this隔离
// 缺点：
//   1. 无法访问父类中原型上的方法和属性。例如：eat方法报错
//   2. 多个实例的创建，会初始化多次的 父类 副本。例如：People.call会随着子类实例创建被多次调用
