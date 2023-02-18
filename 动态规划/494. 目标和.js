/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0
  return dp(0, 0)
  function dp(index, res) {
    if (index === nums.length - 1) {
      res + nums[index] === target ? count++ : count
      return count
    }
    const val1 = dp(index + 1, res - nums[index])
    const val2 = dp(index + 1, res + nums[index])
    console.log(val1, val2)
    return count
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
console.log(findTargetSumWays(nums = [1,1,1,1,1], target = 3))
