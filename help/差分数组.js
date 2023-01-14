class DiffArr {
  constructor(nums) {
    this.nums = nums
  }
  diff() {
    const diffArr = new Array(this.nums.length).fill(this.nums[0])
    for (let i = 1; i < diffArr.length; i++) {
      diffArr[i] = this.nums[i] - this.nums[i - 1]
    }
    this.diffArr = diffArr
    return diffArr
  }
  restoreDiff(diffArr) {
    for (let i = 1; i < diffArr.length; i++) {
      diffArr[i] = diffArr[i - 1] + diffArr[i]
    }
    return diffArr
  }
  increment(i, j, val) {
    this.diffArr[i] += val
    if (j + 1 < this.diffArr.length) {
      this.diffArr[i] -= val
    }
  }
}
const diffArr = new DiffArr([8,2,6,3,1])
const arr = diffArr.diff()
console.log(arr)
console.log(diffArr.restoreDiff(arr))
