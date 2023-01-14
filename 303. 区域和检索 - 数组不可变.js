/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.preSum = new Array(nums.length + 1).fill(0)
  for (let i = 1; i < this.preSum.length; i++) {
    this.preSum[i] = this.preSum[i - 1] + nums[i - 1]
    console.log(this.preSum[i])
  }
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right+1] - this.preSum[left]
};
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.preSum)
console.log(numArray.sumRange(0, 2)) // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)) // return -1 (3 + (-5) + 2 + (-1))
console.log(numArray.sumRange(0, 5)) // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
