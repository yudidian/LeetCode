function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = function (preorder, postorder) {
  const rootVal = preorder[0]
  return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1)
};
const build = function (preorder, preStart, preEnd, postorder, postStart, postEnd) {
  if (preStart > preEnd) {
    return null
  }
  if (preStart === preEnd) {
    return new TreeNode(preorder[preStart])
  }
  // 获取根节点值
  const rootVal = preorder[preStart]
  const leftVal = preorder[preStart + 1]
  const root = new TreeNode(rootVal)
  const index = postorder.findIndex(item => item === leftVal)
  const leftSize = index - postStart + 1
  root.left = build(preorder, preStart + 1, preStart + leftSize, postorder, postStart, index)
  root.right = build(preorder, preStart + leftSize + 1, preEnd, postorder, index + 1, postEnd -1)
  return root
}
//输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// 输出：[1,2,3,4,5,6,7]
console.dir(constructFromPrePost(preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]), {depth: null})
