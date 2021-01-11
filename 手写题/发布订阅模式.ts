class Subscribe {
  tiopics: {};
  constructor() {
    this.tiopics = {};
  }
  subscribe(name: string, fn: Function) {
    if (!this.tiopics[name]) {
      this.tiopics[name] = [];
    }
    this.tiopics[name].push(fn);
  }

  publish(name: string, ...arg: any[]) {
    this.tiopics[name].forEach((cb: (...args: any[]) => void) => cb(...arg));
  }
}

let pubsub = new Subscribe();
// 订阅事件 first
pubsub.subscribe("first", function (a: any, b: any) {
  console.log(a, b);
});
// 订阅事件 first 允许注册多次
pubsub.subscribe("first", function (a: any, b: any) {
  console.log(a, b);
});
// 订阅事件 second
pubsub.subscribe("second", function (a: any, b: any) {
  console.log(a, b);
});

//发布事件
pubsub.publish("first", "hello", "word");
pubsub.publish("second", "hello1", "word1");
