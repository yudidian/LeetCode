/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const nums = s.split("")
  if (nums.length === 1) {
    return s
  }
  const res = []
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (nums[left] !== nums[right]) {
      right--
    } else {
      let temp_l = left
      let temp_r = right
      while (left <= right) {
        // console.log(left, right)
        if (nums[left] !== nums[right]) {
          left = temp_l
          temp_r--
          right = temp_r
        } else {
          left++
          right--
        }
      }
      if (right !== temp_r && temp_l <= temp_r) {
        const arr = nums.slice(temp_l, temp_r + 1)
        left = temp_l
        right = nums.length - 1
        if(res.length === 0) {
          res.push([...arr])
        } else {
          if (res[0].length <= arr.length) {
            res[0] = arr
          }
        }
      }
      left++
    }
  }
  if (res[0] && res[0].length >= 1) {
    return res
  } else {
    return ""
  }
};
// 输入：s = "babad"
// 输出："bab"
console.log(longestPalindrome("abb"))
