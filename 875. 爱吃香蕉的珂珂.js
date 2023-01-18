/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  let left = 1
  let right = piles.reduce((pre, item) => {
    return pre + item
  }, 0)
  let needTime = 0
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    for (let i = 0; i < piles.length; i++) {
      if (piles[i] <= mid) {
        needTime++
      } else if (piles[i] > mid) {
        needTime += Math.ceil(piles[i] / mid)
      }
    }
    if (needTime === h) {
      right = mid - 1
    } else if (needTime > h) {
      left = mid + 1
    } else if (needTime < h) {
      right = mid - 1
    }
    needTime = 0
  }
  return left
};
// 输入：piles = [3,6,7,11], h = 8
// [30,11,23,4,20]
// 5
// [332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184]
// 823855818
// 输出：4

console.log(minEatingSpeed([332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184], 823855818))
// console.log(minEatingSpeed([2,2], 2))
// console.log(minEatingSpeed([3,6,7,11], 8))
// console.log(minEatingSpeed([30,11,23,4,20], 5))
// console.log(minEatingSpeed([524908576], 524908575))
