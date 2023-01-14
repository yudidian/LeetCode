/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const nums = s.split("")
  if (nums.length === 1) {
    return s
  }
  let res = []
  for (let i = 0; i < nums.length; i++) {
    const res1 = palindrome(nums, i, i).length > palindrome(nums, i, i+1).length ? palindrome(nums, i, i) : palindrome(nums, i, i+1)
    res = res.length > res1.length ? res: res1
  }
  return res.join("")
  function palindrome(nums, start, end) {
    while (start>=0 && end<nums.length && nums[start] === nums[end]) {
      start--
      end++
    }
    return nums.slice(start+1, end)
  }
};
// 输入：s = "babad"
// 输出："bab"
console.log(longestPalindrome("abb"))
