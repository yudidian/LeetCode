function mergeSort(nums) {
  const newNums = new Array(nums.length)
  sort(nums, 0, nums.length - 1)

  function sort(nums, left, right) {
    if (left === right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    sort(nums, left, mid)
    sort(nums, mid + 1, right)
    merge(nums, left, mid, right)
  }

  function merge(nums, left, mid, right) {
    for (let i = left; i <= right; i++) {
      newNums[i] = nums[i]
    }
    let k = right
    let m = mid
    let n = right
    // 合并数组
    while (m >= left || n > mid) {
      if (m < left && n > mid) {
        nums[k] = newNums[n]
        n--
      } else if (m >= left && n <= mid) {
        nums[k] = newNums[m]
        m--
      } else if (newNums[m] < newNums[n]) {
        nums[k] = newNums[n]
        n--
      } else {
        nums[k] = newNums[m]
        m--
      }
      k--
    }
  }
}


const nums = [14, 12, 15, 13, 11, 16]
mergeSort(nums)
console.log(nums)
