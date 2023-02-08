let res = undefined
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  if (nums.length === 1) {
    return nums[k - 1]
  }
  partition(nums, 0, nums.length - 1, nums.length - k)
  return res
};

function partition(nums, left, right, k) {
  if (left > right) {
    return
  }
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
  if (j === k) {
    res = nums[k]
  } else if (j < k) {
    partition(nums, j + 1, right, k)
  } else {
    partition(nums, left, j - 1, k)
  }
}

function swap(nums, left, right) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

console.log(findKthLargest([2, 1], k = 2))
