function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  return findVal(root, val)
  function findVal(root, val) {
    if (root===null) {
      return null
    }
    if (root.val === val) {
      return root
    } else if (root.val > val) {
      return findVal(root.left, val)
    } else {
      return findVal(root.right, val)
    }
  }
};
