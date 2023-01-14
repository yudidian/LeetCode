// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode()
  dummy.next = head
  const x = fundEndIndex(dummy, n + 1)
  x.next = x.next.next
  return head

  function fundEndIndex(head, n) {
    let p1 = head
    while (n > 0) {
      p1 = p1.next
      n--
    }
    let p2 = head
    while (p1 !== null) {
      p1 = p1.next
      p2 = p2.next
    }
    return p2
  }
};
