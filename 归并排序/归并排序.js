function sort(nums, left, right) {
  if (left === right) {
    return nums[left]
  }
  const mid = Math.floor((left + right) / 2)
  sort(nums, left, mid)
  sort(nums, mid+ 1, right)
}
