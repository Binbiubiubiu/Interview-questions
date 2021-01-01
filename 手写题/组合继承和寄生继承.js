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
  People.call(this, name);
}

Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

var tea = new Teacher("nini");
var tea1 = new Teacher("nana");

tea.hobbies.push("sing");

console.log(tea.hobbies, tea1.hobbies); // [ 'play', 'sing' ] [ 'play' ]
console.log(tea.name, tea1.name); //nini  nana

// tea.eat('饭') // nini正在吃饭
tea.sleep(); // nini正在睡觉！
console.log(tea instanceof People); // true
console.log(tea instanceof Teacher); // true

//寄生继承

function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype);
  // 修正指向
  prototype.constructor = subType;
  superType.prototype = prototype;
}

// Teacher.prototype = Object.create(Person.prototype)这句就可以改为
inheritPrototype(Teacher, People); //直接传入子类和父类，实现继承关系
// 优点：
//   1. 完美的实现了继承，避免以上所有缺点
// 缺点：
//   1. 暂无
