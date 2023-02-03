const {createArr} = require("../help/createArr");

function countSort(nums) {
  const n = nums.length
  const arr = []
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  for (let i = 0; i < n; i++) {
    if (arr[nums[i]] !== undefined) {
      arr[nums[i]] += 1
    } else{
      arr[nums[i]] = 1
    }
  }
  nums = []
  for (let i = min; i <= max ; i++) {
    while (arr[i] !== undefined && arr[i] > 0) {
      nums.push(i)
      arr[i] -= 1
    }
  }
  console.log(nums)
}
const nums = createArr(100000)
console.time("quickSort")
countSort(nums)
console.timeEnd("quickSort")
