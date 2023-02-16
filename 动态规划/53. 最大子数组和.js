/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let left = 0, right = 0
  let res = -10000
  let sumWind = 0
  while (right < nums.length) {
    sumWind+=nums[right]
    right++
    res = sumWind > res ? sumWind : res
    while (sumWind < 0) {
      sumWind-= nums[left]
      left++
    }
  }
  return res
};

// 输入：nums = [-2,1,-3,4,1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

maxSubArray(nums = [-2, 1, -3, 4, 1, 2, 1, -5, 4])
