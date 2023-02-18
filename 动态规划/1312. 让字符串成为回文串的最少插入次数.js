/**
 * @param {string} str
 * @return {number}
 */
var minInsertions = function (str) {
  const map = new Array(str.length)
  for (let i = 0; i < map.length; i++) {
    map[i] = []
    for (let j = 0; j < map.length; j++) {
      map[i].push(Infinity)
    }
  }
  let left = 0, right = str.length - 1
  return dp(left, right)

  function dp(left, right) {
    if (left >= right) {
      return 0
    }
    if (map[left][right] !== Infinity) {
      return map[left][right]
    }
    if (str[left] === str[right]) {
      return dp(left + 1, right - 1)
    } else {
      map[left][right] = Math.min(dp(left + 1, right) + 1, dp(left, right - 1) + 1)
      return map[left][right]
    }
  }
};
/*
* mm bd
* bd => mbdadbm
* */
// 输入：s = "mbadm"
// 输出：2
// 解释：字符串可变为 "mbdadbm" 或者 "mdbabdm"

console.log(minInsertions(s = "zjveiiwvc"))
