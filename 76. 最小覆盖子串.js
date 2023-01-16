/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  let left = 0, right = 0, valid = 0, res = ""
  const need = new Map()
  const window = new Map()
  for (let i = 0; i < t.length; i++) {
    if (need.has(t[i])) {
      const val = need.get(t[i])
      need.set(t[i], val + 1)
    } else {
      need.set(t[i], 1)
      window.set(t[i], 0)
    }
  }
  while (right < s.length) {
    const c = s[right]
    if (need.has(c)) {
      const val = window.get(c)
      window.set(c, val + 1)
      if (window.get(c) === need.get(c)) {
        // 键中的值相同说明有一个条件满足 valid++
        valid++
      }
    }
    right++
    // 判断左侧是否要收缩
    while (valid === need.size) {
      const del = s[left]
      if (left < right) {
        const temp = s.slice(left, right)
        if (res.length === 0) {
          res = temp
        } else {
          res = res.length >= temp.length ? temp : res
        }
      }
      left++
      if (need.has(del)) {
        const val = window.get(del)
        window.set(del, val - 1)
        if (window.get(del) < need.get(del)) {
          valid--
        }
      }
    }
  }
  return res
};
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// "cabwefgewcwaefgcf"
// "cae"

console.log(minWindow("aa","aaa"))
