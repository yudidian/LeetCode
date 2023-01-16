/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let left = 0, right = 0, res = 0
  const need = new Map()
  while (right < s.length) {
    const c = s[right]
    right++
    if (!need.has(c)) {
      need.set(c, 1)
    } else {
      let val = need.get(c)
      need.set(c, val + 1)
    }
    while (need.has(c) && need.get(c) > 1) {
      const del = s[left]
      left++
      let val = need.get(del)
      need.set(del, val - 1)
      if (need.get(del) === 0) {
        need.delete(del)
      }
      res = Math.max(res, right - left)
    }
  }
  return Math.max(res, need.size)
};
// 输入: s = "abcaebcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
console.log(lengthOfLongestSubstring("pwwkew"))
