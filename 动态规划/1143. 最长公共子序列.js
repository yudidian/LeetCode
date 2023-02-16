/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length - 1
  let len2 = text2.length - 1

  const map = new Array(len1+1)
  for (let i = 0; i < map.length; i++) {
    map[i] = []
    for (let j = 0; j <= len2; j++) {
      map[i].push(Infinity)
    }
  }
  return dp(len1, len2)

  function dp(i, j) {
    if (i === -1 || j === -1) {
      return 0
    }
    if (map[i][j] !== Infinity) {
      console.log(map[i][j])
      return map[i][j]
    }
    if (text1[i] === text2[j]) {
      return dp(i - 1, j - 1) + 1
    } else {
      map[i][j] = Math.max(dp(i - 1, j), dp(i, j - 1))
      return map[i][j]
    }
  }
};

// 输入：text1 = "abcde", text2 = "ace"
// 输出：3
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。

console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace"))
