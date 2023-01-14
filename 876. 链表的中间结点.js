// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy.next.next
  let slow = dummy.next
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast === null) {
    return  slow
  } else {
    return slow.next
  }

};
