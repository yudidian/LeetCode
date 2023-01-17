// 查询的字符串
const str = "sagetgsgsgs123seg54tsets54s1g3es1eahhjkyuiycnaqr465e8t7456ga456qrqrfdage"
// 要查询的字符串
const pat = "tse"
// 查询字符串的长度
const L = pat.length
// 进制
const R = 256
// 求模数
const Q = 1658598167
// 高位值
let RL = 1
for (let i = 0; i < L - 1; i++) {
  RL = (RL * R) % Q
}

function findStr(str, pat) {
  let left = 0, right = 0, needHash = 0, windowHash = 0
  for (let i = 0; i < pat.length; i++) {
    needHash = (R * needHash + pat.charCodeAt(i)) % Q
  }
  while (right < str.length) {
    windowHash = ((windowHash * R) % Q + str.charCodeAt(right)) % Q
    right++
    if (right - left === L) {
      if (windowHash === needHash) {
        if (pat === str.slice(left, right)) {
          return left
        }
      }
      windowHash = (windowHash - (str.charCodeAt(left) * RL) % Q + Q) % Q
      left++
    }
  }
  return -1
}

console.log(findStr(str, pat))
