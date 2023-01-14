/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function(bookings, n) {
  const arr = new Array(n).fill(0)
  for (let i = 0; i < bookings.length; i++) {
    let start = bookings[i][0]
    let end = bookings[i][1]
    let val = bookings[i][2]
    arr[start - 1] += val
    if (end < arr.length) {
      arr[end] -= val
    }
  }
  function restoreDiff(diffArr) {
    for (let i = 1; i < diffArr.length; i++) {
      diffArr[i] = diffArr[i - 1] + diffArr[i]
    }
    return diffArr
  }
  return restoreDiff(arr)
};

// 输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
// 输出：[10,55,45,25,25]
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5))
