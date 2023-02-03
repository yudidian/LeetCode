const {createArr} = require("../help/createArr")
const nums = createArr(100000)
console.log(nums)
function bubbleSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        const temp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = temp
      }
    }
  }
}

console.time("bubbleSort")
bubbleSort(nums)
console.log(nums)
console.timeEnd("bubbleSort")

