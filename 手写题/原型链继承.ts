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
  this.name = name;
}
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;
Teacher.prototype.name = "不会生效";

var tea = new Teacher("nini");
var tea1 = new Teacher("nana");

tea.hobbies.push("sing");

console.log(tea.hobbies, tea1.hobbies);
console.log(tea.name, tea1.name);
tea.eat("饭");
tea.sleep();
console.log(tea instanceof Person);
console.log(tea instanceof Teacher);

// 优点：
//   1. 实例是子类的实例，也是父类的实例
//   2. 可以访问父类中所有属性和方法（实例和原型上都可以）

// 缺点：
//   1. 无法给父类传参 Teacher.prototype = new People();
//   2. 多个实例对父类【引用类型】的操作会被篡改。例如：hobbies被共享
