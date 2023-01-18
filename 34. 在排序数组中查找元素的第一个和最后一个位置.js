/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  let left = 0, right = nums.length - 1
  const res = []
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if(nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  if (nums[left] !== target) {
    res.push(-1)
  } else {
    res.push(left)
  }
  left = 0
  right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if(nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  if (nums[right] !== target) {
    res.push(-1)
  } else {
    res.push(right)
  }
  return res
};
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
console.log(searchRange([5,7,7,8,8,10], 8))
