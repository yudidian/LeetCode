function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  if (root === null) {
    return null
  }
  // 记录节点值
  const map = new Map()
  const res = []
  const traverse = (root) => {
    if (root === null) {
      return "$"
    }
    const leftVal = traverse(root.left)
    const rightVal = traverse(root.right)
    const str = leftVal + "," + rightVal + "," + root.val
    if (!map.has(str)) {
      map.set(str, 1)
    } else {
      if (map.get(str) < 2) {
        res.push(root)
      }
      map.set(str, map.get(str) + 1)
    }
    return str
  }
  traverse(root)
  return res
};
