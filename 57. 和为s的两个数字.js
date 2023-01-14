/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const res = nums[left] + nums[right]
    if (nums[left] + nums[right] === target) {
      return [left+1, right+1]
    }
    if (res > target) {
      right--
    } else {
      left++
    }
  }
  return []
};
