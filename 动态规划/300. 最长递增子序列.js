/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let max = 1
  const dp = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(find(i, nums[i]), dp[i])
    max = Math.max(max, dp[i])
  }
  return max
  function find(index, val) {
    let res = 1
    for (let i = 0; i <= index; i++) {
      if (nums[i] < val) {
        res = Math.max(res, dp[i] + 1)
      }
    }
    return res
  }
};
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
console.log(lengthOfLIS(nums = [0,1,0,3,2,3]))
