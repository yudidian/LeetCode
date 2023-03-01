/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0
  let sum = 0
  backtrack(nums, 0, sum)
  return count

  function backtrack(nums, index, sum) {
    if (index === nums.length) {
      if (sum === target) {
        count++
      }
      return
    }
    sum += nums[index]
    backtrack(nums, index + 1, sum)
    sum -= nums[index]

    sum -= nums[index]
    backtrack(nums, index + 1, sum)
    sum += nums[index]
  }
};
// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
console.log(findTargetSumWays(nums = [1, 1, 1, 1, 1], target = 3))
