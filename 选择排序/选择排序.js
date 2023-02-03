const {createArr} = require("../help/createArr");

function selectionSort(nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    swap(nums, i, minIndex)
  }
}
function swap(nums, left, right) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}
const nums = createArr(100)
console.time("insertionSort")
console.log(nums)
selectionSort(nums)
console.dir(nums, {depth: null})
console.timeEnd("insertionSort")
