function quickSort(nums) {
  sort(nums, 0, nums.length - 1)
}

function sort(nums, left, right) {
  if (left >= right) {
    return
  }
  let mid = quick(nums, left, right)
  sort(nums, left, mid - 1)
  sort(nums, mid + 1, right)
}

function quick(nums, left, right) {
  const val = nums[left]
  let mid = left
  for (let i = mid + 1; i <= right; i++) {
    if (nums[i] < val) {
      swap(nums, mid + 1, i)
      mid++
    }
  }
  swap(nums, left, mid)
  return mid
}

function swap(nums, left, right) {
  if (left === right) {
    return
  }
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

/*
* 0, 3, 1, 5
*
* */
const nums = [0, 3, 1, 5]
quickSort(nums)
console.log(nums)
