function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  return reverse(head)
  function reverse(head) {
    if (head === null ||head.next ===null){
      return head
    }
    const last = reverse(head.next)
    head.next.next = head
    head.next = null
    return last
  }
};
