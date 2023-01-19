/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const len = nums.length
  const res = new Array(len)
  res[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] + nums[i]
  }
  return res
};
// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
console.log(runningSum([1,2,3,4]))
