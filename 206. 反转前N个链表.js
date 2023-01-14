function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let extendNode = null
  function reverse(head, n) {
    if (n === 1){
      extendNode = head.next
      return head
    }
    const last = reverse(head.next)
    head.next.next = head
    head.next = extendNode
    return last
  }
};
