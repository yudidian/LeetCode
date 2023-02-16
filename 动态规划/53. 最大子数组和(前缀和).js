/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const preSum = new Array(nums.length)
  let minPreSum = 0
  let max = -10000
  preSum[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    preSum[i] = nums[i] + preSum[i - 1]
  }
  console.log(preSum)
  for (let i = 0; i < preSum.length; i++) {
    max = Math.max(max, preSum[i] - minPreSum)
    minPreSum = Math.min(preSum[i], minPreSum)
  }
  return max
};

// 输入：nums = [-2,1,-3,4,1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

console.log(maxSubArray(nums = [-2,-1]))
