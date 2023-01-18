/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      right = mid - 1
    } else if(nums[mid] < target) {
      left = mid + 1
    }
  }
  return -1
};
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,2,2,2,2,12], 2))
