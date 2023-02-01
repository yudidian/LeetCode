const nums = [14, 12, 15, 13, 11, 16, 1,5,4,78,89,5]
function bubbleSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= nums.length - i; j++) {
      if (nums[j-1] > nums[j]) {
        const temp = nums[j-1]
        nums[j-1] = nums[j]
        nums[j] = temp
      }
    }
  }
}
bubbleSort(nums)
console.log(nums)
