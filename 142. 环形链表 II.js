function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  if (head === null) {
    return null
  }
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy.next.next
  let slow = dummy.next
  if (fast === null) {
    return null
  }
  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      slow = dummy
      while (slow !== fast) {
        fast = fast.next
        slow = slow.next
      }
      return slow
    }
    fast = fast.next.next
    slow = slow.next
  }
  return null
};
