function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  // 小于X
  const lessNode = new ListNode()
  // 大于等于X
  const lagerNode = new ListNode()
  let less = lessNode
  let lager = lagerNode
  while (head !== null) {
    if (head.val < x) {
      less.next = head
      less = less.next
    } else {
      lager.next = head
      lager = lager.next
    }
    const temp = head.next
    head.next = null
    head = temp
  }
  less.next = lagerNode.next
  return lessNode.next
};
