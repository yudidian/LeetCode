function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  overturn(root)
  return root
  function overturn(root) {
    if (root === null) {
      return
    }
    const temp = root.left
    root.left = root.right
    root.right = temp
    overturn(root.left)
    overturn(root.right)
  }
};
