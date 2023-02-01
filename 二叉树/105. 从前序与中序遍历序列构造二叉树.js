function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }
  if (preorder.length === 0) {
    return new TreeNode(preorder[0])
  }
  // 获取根节点值
  const rootVal = preorder[0]
  // 构造根节点
  const root = new TreeNode(rootVal)
  // 查找中序根节点位置
  const rootIndex = inorder.findIndex((item) => item === rootVal)
  // 根据中序根节点位置划分数组
  const leftPreorder = preorder.slice(1, rootIndex + 1)
  const rightPreorder = preorder.slice(rootIndex + 1, preorder.length)
  const leftInorder = inorder.slice(0, rootIndex)
  const rightInorder = inorder.slice(rootIndex + 1, inorder.length)

  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
};
console.log(buildTree(preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]))
