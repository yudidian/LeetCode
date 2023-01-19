/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
  let left = 0, right = 0
  const need = new Map()
  let window = []
  while (right < s.length) {
    const c = s[right]
    right++
    if (!need.has(c)) {
      window.push(c)
      const len = window.length
      need.set(c, len - 1)
    } else {
      const del = s[left]
      console.log("del", del)
      if (need.has(del)) {
        const val = need.get(del)
        need.set(del, val - 1)
      } else {
        window.push(del)
      }
      left++
    }
  }
  return window
};
// 输入：s = "bcabc"
// 输出："abc"
console.log(removeDuplicateLetters("bcabce"))
