function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0
  let res = 0
  traverse(root)
  return res
  function traverse(root) {
    if (root === null) {
      return
    }
    traverse(root.left)
    count++
    if (count === k) {
      res = root.val
      return
    }
    traverse(root.right)
  }
};
// 2,1,3
/*
* 2
*
* */
