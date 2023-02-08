const {createArr} = require("../../help/createArr");

function countSort(nums) {
  const n = nums.length
  const res = {}
  for (let i = 0; i < n; i++) {
    if (res[nums[i]] !== undefined) {
      res[nums[i]] += 1
    } else{
      res[nums[i]] = 1
    }
  }
  nums = []
  for (const key in res) {
    while (res[key] > 0) {
      nums.push(parseInt(key))
      res[key]--
    }
  }
  return nums
}
const nums = createArr(100000)
console.time("quickSort")
console.log(countSort(nums))
console.timeEnd("quickSort")
