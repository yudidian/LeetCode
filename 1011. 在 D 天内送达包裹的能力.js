/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
  let right = 0
  let needDays = 0
  let left = Math.max(...weights)
  for (let i = 0; i < weights.length; i++) {
    right += weights[i]
  }
  while (left <= right) {
    let oneDay = 0
    let mid = left + Math.floor((right - left) / 2)
    for (let i = 0; i < weights.length; i++) {
      oneDay += weights[i]
      // 装不下下标回退1
      if (oneDay > mid) {
        i = i - 1
        oneDay = 0
        needDays++
      }
      // 刚好装下重置数据小标不回退
      if (oneDay === mid) {
        oneDay = 0
        needDays++
      }
    }
    if (oneDay !== 0) {
      needDays++
    }
    if (needDays === days) {
      right = mid - 1
      needDays = 0
    } else if (needDays > days) {
      left = mid + 1
      needDays = 0
    } else if (needDays < days) {
      right = mid - 1
      needDays = 0
    }
  }
  return left
};
// 输入：weights = [1,2,3,4,5,6,7,8,9,10], days = 5
// 输出：15
console.log(shipWithinDays([1,2,3,1,1], 5))
