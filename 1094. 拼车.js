/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function(trips, capacity) {
  const arr = new Array(7).fill(0)
  for (let i = 0; i < trips.length; i++) {
    let start = trips[i][1]
    let end = trips[i][2]
    let val = trips[i][0]
    arr[start] += val
    // 乘客下车
    arr[end] -= val
  }
  function restoreDiff(diffArr) {
    if (diffArr[0] > capacity) return false
    for (let i = 1; i < diffArr.length; i++) {
      diffArr[i] = diffArr[i - 1] + diffArr[i]
      // if (diffArr[i] > capacity) {
      //   return false
      // }
    }
    console.log(diffArr)
    return true
  }
  return restoreDiff(arr)
};
// 输入：trips = [[2,1,5],[3,3,7]], capacity = 4
// 输出：false
console.log(carPooling([[9,0,1],[3,3,7]], 4))
