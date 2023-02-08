/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return quickSort(nums)
};
function quickSort(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums
  }
  sort(nums, 0, nums.length - 1)
  return nums
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
function shuffle(nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * (n - i) + i)
    swap(nums, i, index)
  }
}
function swap(nums, left, right) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}
const nums = [3,2,1,5,6,4]
shuffle(nums)
console.log(nums)
console.log(Math.random())
