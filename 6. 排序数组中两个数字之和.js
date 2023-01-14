/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left <= right) {
    const res = numbers[left] + numbers[right]
    if (numbers[left] + numbers[right] === target) {
      return [left+1, right+1]
    }
    if (res > target) {
      right--
    } else {
      left++
    }
  }
  return []
};
