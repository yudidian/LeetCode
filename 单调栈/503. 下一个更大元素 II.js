/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function (nums) {
  let pre = nums.length - 1
  for (let i = 0; i < pre; i++) nums.push(nums[i])
  let stack = [], res = new Array(nums.length)
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack && stack[stack.length - 1] <= nums[i]) stack.pop()
    res[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
    stack.push(nums[i])
  }
  // slice不改变原数组,splice改变
  res.splice(pre + 1)
  return res
};

// 输入: nums = [1,2,1,1,2,1]
// 输出: [2,-1,2]
console.log(nextGreaterElements([1, 2, 1]))
