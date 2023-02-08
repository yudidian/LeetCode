const {createArr} = require("../../help/createArr")

function shellSort(nums) {
  for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < nums.length; i++) {
      let j = i
      if (nums[i] < nums[j - gap]) {
        swap(nums, i, j - gap)
        j = j - gap
        while (j - gap >= 0 && nums[j] < nums[j - gap]) {
          swap(nums, j, j - gap)
          j = j - gap
        }
      }
    }

  }
  console.log(nums)
}

function swap(nums, left, right) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}

/*
* [8, 5, 6, 4, 3, 7, 10, 2]
* [3, 4, 5, 6, 7, 8, 2, 10]
* [3,1,0,9,7]
* [0,1,3,9,7]
* []
* */
const nums = createArr(100000)
console.time("insertionSort")
shellSort(nums)
console.timeEnd("insertionSort")
