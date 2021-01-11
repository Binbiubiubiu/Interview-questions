// function ListNode(x) {
//   this.val = x;
//   this.next = null;
// }

/**
 * 输入一个链表，从尾到头打印链表每个节点的值。
 *
 * @param head
 */
export function printListFromTailToHead(head) {
  const res = [];
  let pNode = head;
  while (pNode != null) {
    res.unshift(pNode.val);
    pNode = pNode.next;
  }
  return res;
}
