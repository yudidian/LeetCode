var lengthOfLIS = function (nums) {
  // 分堆总集合
  const res = []
  let index = 0
  // 堆从0开始装入
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i]
    if (res[index] === undefined) {
      res.push([val])
    } else {
      let left = 0, right = res.length - 1
      let temp = undefined
      while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (res[mid][res[mid].length - 1] >= val) {
          temp = mid
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      if (temp !== undefined) {
        res[temp].push(val)
      } else {
        index++
        res[index] = []
        res[index].push(val)
      }
    }
  }
  console.log(res)
};
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
console.log(lengthOfLIS(nums = [3,5,6,2,5,4,19,5,6,7,12]))
