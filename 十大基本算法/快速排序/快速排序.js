const {createArr} = require("../../help/createArr")
function quickSort(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums
  }
  sort(nums, 0, nums.length - 1)
}

function partition(nums, left, right) {
  let val = nums[left]
  let i = left + 1
  let j = right
  while (i <= j) {
    while (i <= right && nums[i] <= val) {
      i++
    }
    while (j >= left && nums[j] > val) {
      j--
    }
    if (i >= j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, left, j)
  return j
}
function sort(nums, left, right) {
  if (left >= right) {
    return
  }
  const mid = partition(nums, left, right)
  sort(nums, left, mid - 1)
  sort(nums, mid + 1, right)
}

function swap(nums, left, right) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

const nums = createArr(100000)
console.time("quickSort")
quickSort(nums)
console.timeEnd("quickSort")
// let p = partition(nums, 0, nums.length - 1)
// console.log(nums, p)
