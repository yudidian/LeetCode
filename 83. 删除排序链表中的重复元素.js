function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let fast = head.next
  let slow = head
  while (fast !== null) {
    if (fast.val === slow.val) {
      fast = fast.next
      slow.next = fast
      continue
    }
    slow = slow.next
    fast = fast.next
  }
  return head
};
