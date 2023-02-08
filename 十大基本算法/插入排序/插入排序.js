const {createArr} = require("../../help/createArr")

function insertionSort(nums) {
  let p = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      swap(nums, i - 1, i)
      p = i - 1
      while (p > 0 && nums[p - 1] > nums[p]) {
        swap(nums, p - 1, p)
        p--
      }
    }
  }
  console.log(nums)
}

function swap(nums, left, right) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

/*
* [8, 5, 6, 4, 3, 7, 10, 2]
* [3, 4, 5, 6, 7, 8, 2, 10]
* */
const nums = createArr(100000)
console.time("insertionSort")
insertionSort(nums)
console.timeEnd("insertionSort")
