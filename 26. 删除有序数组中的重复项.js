/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let fast = 0
  let slow = 0
  if (nums.length === 1 || nums.length === 0) {
    return nums.length
  }
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  slow +=  1
  return nums.slice(0, slow).length
};
