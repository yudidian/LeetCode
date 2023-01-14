function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  if (lists.length === 0) return null
  const res = [];
  for (let v of lists) {
    while (v) {
      res.push(v.val);
      v = v.next;
    }
  }
  if (res.length === 0) return null;
  res.sort((num1,num2) => num1 - num2);
  const temp = [];
  for (let v of res) {
    temp.push(new ListNode(v))
  }
  for (let i = 0; i < temp.length-1; i++) {
    temp[i].next = temp[i+1];
  }
  temp[temp.length-1].next = null;
  return temp[0]
};
