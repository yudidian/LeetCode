/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s.length === 1 && t.length === 1 && s === t) {
    return s
  }
  if (t.length > s.length) {
    return ""
  }
  let result = ""
  const arr = s.split("")
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // 判断字符串是否包含t
      const res = check(i, j)
      if (res === "") continue
      if(res.length < t.length) continue
      if (result.length === 0) {
        result = res
      } else {
        result = result.length >= res.length ? res : result
      }
    }
  }

  function check(i, j) {
    const checkArr = arr.slice(i, j + 1)
    const newArr = [...checkArr]
    for (let k = 0; k < t.length; k++) {
      const index = newArr.findIndex((item) => item === t[k] )
      if (index === -1) {
        return ""
      }
      newArr.splice(index,1)
    }
    return checkArr.join("")
  }

  return result
};
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

console.log(minWindow("baa","aa"))
