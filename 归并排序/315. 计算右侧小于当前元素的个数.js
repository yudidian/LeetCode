/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function (nums) {
  return mergeSort(nums)
};

function mergeSort(nums) {
  const newNums = new Array(nums.length)
  const arr = new Array(nums.length)
  const count = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    arr[i] = {
      val: nums[i],
      id: i
    }
  }
  sort(nums, 0, nums.length - 1)

  function sort(nums, left, right) {
    if (left === right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    sort(nums, left, mid)
    sort(nums, mid + 1, right)
    merge(arr, left, mid, right)
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
      } else if (newNums[m].val <= newNums[n].val) {
        nums[k] = newNums[n]
        n--
      } else {
        count[newNums[m].id] += n - mid
        nums[k] = newNums[m]
        m--
      }
      k--
    }
  }
  return count
}

const nums = [5,2,6,1]

console.log(countSmaller(nums))
// [ 12, 14, 15, 11, 13, 16 ] 0 2 5
/*
* 17     17
* 11,13,16
* 15,16
* 0,0,0,14,15,16
* */
// 给你一个整数数组 nums ，按要求返回一个新数组counts 。
// 数组 counts 有该性质： counts[i] 的值是 nums[i] 右侧小于nums[i] 的元素的数量。
// 示例 1：
// 输入：nums = [5,2,6,1]
// 输出：[2,1,1,0]
// 解释：
// 5 的右侧有 2 个更小的元素 (2 和 1)
// 2 的右侧仅有 1 个更小的元素 (1)
// 6 的右侧有 1 个更小的元素 (1)
// 1 的右侧有 0 个更小的元素
