/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  if (s.length === 1 || s.length === 0) {
    return s
  }
  const need = new Map()
  const count = new Map()
  const window = []
  let right = 0
  for (let i = 0; i < s.length; i++) {
    if (!count.has(s[i])) {
      count.set(s[i], 1)
    } else {
      count.set(s[i], count.get(s[i]) + 1)
    }
  }
  while (right < s.length) {
    const c = s[right]
    right++
    if (!need.has(c)) {
      if (window.length > 0) {
        while (window.length > 0 && window[window.length - 1].charCodeAt(0) > c.charCodeAt(0) && (count.get(window[window.length - 1]) > 1)) {
          const del = window.pop()
          need.delete(del)
          count.set(del, count.get(del) - 1)
        }
      }
      window.push(c)
      need.set(c, 1)
    } else {
      count.set(c, count.get(c) - 1)
    }
  }
  return window.join("")
};
// 输入：s = "bcabc"
// 输出："abc"
// 输入：s = "cbacdcbc"
// 输出："acdb"
// 输入：s = "cdadabcc"
// 输出："adbc"
console.log(removeDuplicateLetters("cdadabcc"))
