/**
 * @param {number[]} w
 */
const Solution = function (w) {
  const preSum = new Array(w.length + 1).fill(0)
  // 生成前缀和数组
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + w[i - 1]
  }
  this.preSum = preSum
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const start = this.preSum[1]
  const end = this.preSum[this.preSum.length - 1]
  const number = Math.floor(Math.random() * end + 1)
  console.log(number, this.preSum)
  return find(this.preSum, number)
  function find(preSum, target) {
    let left = 0, right = preSum.length - 1
    while (left<=right) {
      let mid = left + Math.floor((right - left) / 2)
      if (preSum[mid] === target) {
        right = mid - 1
      } else if(preSum[mid] < target) {
        left = mid + 1
      } else if(preSum[mid] > target) {
        right = mid - 1
      }
    }
    return left - 1
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
const obj = new Solution([1])
console.log(obj.pickIndex())
