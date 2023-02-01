function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0])
  }
  let index = 0
  let left = 0
  let right = nums.length - 1
  let max = Number.MIN_VALUE
  while (left <= right) {
    if (nums[left] > max) {
      index = left
      max = nums[left]
    }
    if (nums[right] > max) {
      index = right
      max = nums[right]
    }
    left++
    right--
  }
  const leftArr = nums.slice(0, index)
  const rightArr = nums.slice(index + 1, nums.length)
  const root = new TreeNode(max)
  root.left =  constructMaximumBinaryTree(leftArr)
  root.right = constructMaximumBinaryTree(rightArr)
  return root
};
console.dir(constructMaximumBinaryTree([3,2,1,6,0,5]))
