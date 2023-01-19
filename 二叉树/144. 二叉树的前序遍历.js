function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  if (root === null) {
    return []
  }
  const res = []
  res.push(root.val)
  leftNode(root.left)
  rightNode(root.right)
  return res
  function leftNode(root) {
    if (root === null) {
      return
    }
    res.push(root.val)
    leftNode(root.left)
    rightNode(root.right)
  }
  function rightNode(root) {
    if (root === null) {
      return
    }
    res.push(root.val)
    leftNode(root.left)
    rightNode(root.right)
  }
};
