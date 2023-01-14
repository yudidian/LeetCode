function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  const set = new Set()
  while (headA !== null) {
    set.add(headA)
    headA = headA.next
  }
  while (headB !== null) {
    if (set.has(headB)) {
      return headB
    } else {
      headB = headB.next
    }
  }
  return null
};
