const {createArr} = require("../../help/createArr");

function bucketSort(nums) {
  const arr = []
  // 确定最大值最小值
  const max = Math.max(...nums)
  const mix = Math.min(...nums)
  // 定义桶
  const bucket = new Array(5)
  for (let i = 0; i < 5; i++) {
    bucket[i] = []
  }
  // 定义除数
  const val = max / bucket.length
  // 值装入桶中
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(Math.ceil((nums[i] / val) - 1))
    bucket[index].push(nums[i])
  }
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i].length > 0) {
      // 对每个桶里面的数值排序
      quickSort(bucket[i])
      // 将排好的值添加到数组中
      arr.push(...bucket[i])
    }
  }
  return arr
}
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
const nums = createArr(100)
console.time("bucketSort")
console.dir(bucketSort(nums), {depth: null})
console.timeEnd("bucketSort")


