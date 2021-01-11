import test, { ExecutionContext } from "ava";
import { printListFromTailToHead } from "../从尾到头打印链表";

class ListNode {
  val: any;
  next: ListNode;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

test.before((t) => {
  const first = new ListNode("A");
  const second = new ListNode("B");
  const third = new ListNode("C");
  first.next = second;
  second.next = third;

  t.context = { first };
});

test("【替从尾到头打印链表】", (t: ExecutionContext<any>) => {
  t.deepEqual(printListFromTailToHead(t.context.first), ["C", "B", "A"]);
});
