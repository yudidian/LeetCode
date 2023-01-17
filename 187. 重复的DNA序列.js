/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
  let left = 0, right = 0
  let number = 0
  const R = 4
  const obj = {
    "A": 0,
    "C": 1,
    "G": 2,
    "T": 3
  }
  const set = new Set()
  const map = new Map()
  while (right < s.length) {
    number = number * R + obj[s[right]]
    right++
    if (right - left === 10) {
      if (!map.has(number)) {
        map.set(number, 1)
      } else {
        set.add(s.slice(left,right))
      }
      number = number - obj[s[left]] * Math.pow(R, 9)
      left++
    }
  }
  return [...set]
};
// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
