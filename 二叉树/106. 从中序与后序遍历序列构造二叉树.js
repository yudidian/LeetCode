function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  if (postorder.length === 0) {
    return null
  }
  if (postorder.length === 1) {
    return new TreeNode(postorder[0])
  }
  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length -1)
};
const build = function (inorder, iStart, iEnd, postorder, pStart, pEnd) {
  if (iStart > iEnd) {
    return null
  }
  // 确定根节点
  const rootVal = postorder[pEnd]
  const root = new TreeNode(postorder[pEnd])
  const index = inorder.findIndex(item => item === rootVal)
  const leftSize = index - iStart
  root.left = build(inorder, iStart, index -1, postorder, pStart, pStart + leftSize - 1)
  root.right = build(inorder, index + 1, iEnd, postorder, pStart + leftSize, pEnd - 1)
  return root
}

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
console.log(buildTree(inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]))
