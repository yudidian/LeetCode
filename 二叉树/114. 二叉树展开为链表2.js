function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

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
  traverse(root.left)
  traverse(root.right)

  const leftNode = root.left
  const rightNode = root.right
  root.right = leftNode
  root.left = null

  let p = root
  while (p.right!==null) {
    p = p.right
  }
  p.right = rightNode
}
