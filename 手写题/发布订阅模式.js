class Subscribe {
  constructor() {
    this.tiopics = {};
  }
  subscribe(name, fn) {
    if (!this.tiopics[name]) {
      this.tiopics[name] = [];
    }
    this.tiopics[name].push(fn);
  }

  publish(name, ...arg) {
    this.tiopics[name].forEach((cb) => cb(...arg));
  }
}

let pubsub = new Subscribe();
// 订阅事件 first
pubsub.subscribe("first", function (a, b) {
  console.log(a, b);
});
// 订阅事件 first 允许注册多次
pubsub.subscribe("first", function (a, b) {
  console.log(a, b);
});
// 订阅事件 second
pubsub.subscribe("second", function (a, b) {
  console.log(a, b);
});

//发布事件
pubsub.publish("first", "hello", "word");
pubsub.publish("second", "hello1", "word1");
