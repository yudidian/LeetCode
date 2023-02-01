function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let max = 0
  traverse(root, root.val)
  return max

  function traverse(root) {
    if (root === null) {
      return 0
    }
    const left = traverse(root.left)
    const right = traverse(root.right)
    const temp = left + right
    max = Math.max(temp, max)
    return 1 + Math.max(left, right)
  }
};

