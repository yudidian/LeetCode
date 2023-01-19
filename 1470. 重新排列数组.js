/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const res = []
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[i + n])
  }
  return res
};

// 输入：nums = [2,5,1,3,4,7], n = 3
// 输出：[2,3,5,4,1,7]
console.log(shuffle(nums = [2,5,1,3,4,7], n = 3))
