function mergeSort(nums) {

  sort(nums, 0, nums.length - 1)
}

function sort(nums, left, right) {
  if (left === right) {
    return
  }
  let mid = Math.floor((left + right) / 2)
  sort(nums, left, mid)
  sort(nums, mid + 1, right)
  merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
  let i = mid, j = right, k = right
  const newNums = new Array(nums.length)
  for (let l = left; l <= right; l++) {
    newNums[l] = nums[l]
  }
  while (i >= left || j > mid) {
    if (j <= mid && k >= left) {
      nums[k] = newNums[i]
      i--
    } else if (i < left && k >= left) {
      nums[k] = newNums[j]
      j--
    } else if (newNums[i] > newNums[j]) {
      nums[k] = newNums[i]
      i--
    } else if (newNums[i] <= newNums[j]) {
      nums[k] = newNums[j]
      j--
    }
    k--
  }
}

/*
* 031
* 3    12
* */
const nums = [0, 3, 1, 5, 8, 2, 4, 78, 9]
mergeSort(nums)
console.log(nums)
