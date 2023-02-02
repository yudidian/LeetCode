/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
return mergeSort(nums)
};
function mergeSort(nums) {
  let count = 0
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
    console.log(nums, left, mid, right)
    let rightStart = mid + 1
    for (let i = left; i <=mid ; i++) {
      console.log(nums[i], nums[rightStart])
      while (rightStart<=right && nums[i] > nums[rightStart] * 2) {
        count += mid - i + 1
        rightStart++
      }
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
  return count
}

console.log(reversePairs([2,4,3,5,1]))
