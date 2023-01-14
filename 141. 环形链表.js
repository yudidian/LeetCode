function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (head === null) {
    return false
  }
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy.next.next
  let slow = dummy.next
  if (fast === null) {
    return false
  }
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
};
