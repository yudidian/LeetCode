function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
  if (root === null) {
    return [].join(",")
  }
  if (root.left === null && root.right === null) {
    return root.val
  }
  const res =  []
  traverse(root, res)
  return res.join(",")
};
const traverse = function (root, res) {
  if (root === null) {
    res.push("None")
    return
  }
  res.push(root.val)
  traverse(root.left, res)
  traverse(root.right, res)
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
  if (data.length === 1) {
    return new TreeNode(data[0])
  }
  const arr = data.split(",")
  return buildTree(arr)
};
let index = 0
const buildTree = function (data) {
  if (index > data.length - 1) {
    return null
  }
  if (data[index] === "None") {
    index++
    return null
  }
  // 先确定根节点
  const rootVal = data[index]
  // 生成节点
  const root = new TreeNode(rootVal)
  index++
  root.left = buildTree(data)
  root.right = buildTree(data)
  return root
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// 输入：root = [1,2,3,null,null,4,5]
// 输出：[1,2,3,null,null,4,5]

const tree = deserialize("1, 2")

console.dir(tree, {depth: null})
console.log(serialize(tree))
