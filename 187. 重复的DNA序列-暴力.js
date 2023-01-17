/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
  const len = s.length - 10
  console.log(len)
  const res = {}
  const arr = []
  for (let i = 0; i <= len; i++) {
    const str = s.slice(i, i + 10)
    const reg = new RegExp(str)
    const list = s.match(reg)
    if (res[list[0]] !== undefined) {
      res[list[0]] += 1
    } else {
      res[list[0]] = 1
    }
  }
  console.log(res)
  for (const resKey in res) {
    if (res[resKey]> 1) {
      arr.push(resKey)
    }
  }
  return arr
};
// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
