function HeapSort(nums) {
  buildHeap(nums)
  const len = nums.length
  for (let i = len - 1; i > 0; i--) {
    swap(nums, 0, i)
    heapify(0, i, nums)
  }
  console.log(nums)
}

function buildHeap(nums) {
  const len = nums.length
  let rootIndex = Math.floor(len / 2) - 1
  while (rootIndex >= 0) {
    heapify(rootIndex, len, nums)
    rootIndex--
  }
}

function heapify(i, len, nums) {
  const leftIndex = i * 2 + 1
  const rightIndex = i * 2 + 2
  let max = i
  if (leftIndex < len && nums[max] < nums[leftIndex]) {
    max = leftIndex
  }
  if (rightIndex < len && nums[max] < nums[rightIndex]) {
    max = rightIndex
  }
  if (max === i) {
    return
  }
  if (max !== i) {
    swap(nums, i, max)
    heapify(max, len, nums)
  }
}

function swap(nums, left, right) {
  if (left === right) {
    return
  }
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

HeapSort([1, 4, 3, 5, 6])
