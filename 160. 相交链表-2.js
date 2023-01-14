function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let a = headA
  let b = headB

  while (a !== b) {
    if (a === null) {
      a = headB
    } else {
      a = a.next
    }
    if (b === null) {
      b = headA
    } else {
      b = b.next
    }
  }
  return a
};
