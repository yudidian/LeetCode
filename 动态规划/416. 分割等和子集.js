/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length === 1) {
    return false
  }
  const sum = nums.reduce((pre,item)=> {
    return pre + item
  }, 0)
  if (sum % 2 !== 0) {
    return false
  } else {
    const dp = new Array(nums.length + 1)
    const W = sum / 2
    for (let i = 0; i <= nums.length; i++) {
      dp[i] = []
      for (let j = 0; j <= W; j++) {
        dp[i][j] = j === 0;
      }
    }

    // 状态一
    for (let i = 1; i <= nums.length; i++) {
      // 状态二
      for (let j = 1; j <= W ; j++) {
        if (j - nums[i-1] < 0) {
          dp[i][j] = dp[i-1][j]
        } else {
          dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
        }
      }
    }
    return dp[nums.length][W]
  }
};

// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
console.log(canPartition([1,5,11,5]))
