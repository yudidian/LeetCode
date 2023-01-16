/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  let left = 0, right = 0, valid = 0, res = []
  const need = new Map()
  const window = new Map()
  for (let i = 0; i < p.length; i++) {
    if (need.has(p[i])) {
      const val = need.get(p[i])
      need.set(p[i], val + 1)
    } else {
      need.set(p[i], 1)
      window.set(p[i], 0)
    }
  }
  while (right< s.length) {
    const c = s[right]
    right++
    if (need.has(c)) {
      const val = window.get(c)
      window.set(c, val + 1)
      if (window.get(c) === need.get(c)) {
        valid++
      }
    }
    while (valid === need.size) {
      const del = s[left]
      if (left < right && p.length === (right - left) ) {
        res.push(left)
      }
      if (window.has(del)) {
        const val = window.get(del)
        window.set(del, val - 1)
        if (window.get(del) < need.get(del)) {
          valid--
        }
      }
      left++
    }
  }
  return res
};
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]

console.log(findAnagrams("cbaebabacd", "abc"))
