function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const dummy = new TreeNode()
let p = dummy
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return
  }
  traverse(root)
};

function traverse(root) {
  if (root === null) {
    return
  }
  p.right = new TreeNode(root.val)
  p = p.right
  traverse(root.left)
  traverse(root.right)
}
