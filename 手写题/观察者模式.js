class Subject {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

class Observer {
  update() {
    console.log("update");
  }
}

let subject = new Subject();
let ob = new Observer();
//目标添加观察者了
subject.addSub(ob);
//目标发布消息调用观察者的更新方法了
subject.notify(); //update
