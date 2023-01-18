/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const splitArray = function(nums, k) {
  let left = Math.max(...nums)
  let right = nums.reduce((pre, item) => {
    return pre + item
  }, 0)
  let splitNumber = 0
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i]
      if (sum > mid) {
        splitNumber++
        sum = 0
        i = i -1
      }
      if (sum === mid) {
        splitNumber++
        sum = 0
      }
    }
    if (sum !== 0) {
      splitNumber++
    }
    console.log("splitNumber", splitNumber, "left", left, "right", right, "mid", mid, "sum", sum)
    if (splitNumber === k) {
      right = mid - 1
    } else if(splitNumber < k) {
      right = mid - 1
    } else if(splitNumber > k) {
      left = mid + 1
    }
    splitNumber = 0
  }
  return left
};

// 输入：nums = [7,2,5,10,8], m = 2
// 输入：nums = [1,2,3,4,5], m = 2
// 输出：18

console.log(splitArray([1,4,4], 3))
