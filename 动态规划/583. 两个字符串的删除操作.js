/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  return dp(word1.length -1, word2.length -1)
  function dp(i, j) {
    if (j === -1) {
      return i + 1
    }
    if (i === -1) {
      return j + 1
    }
    // 相等不做任何操作
    if (word1[i] === word2[j]) {
      return dp(i-1, j-1)
    } else {
      // 分别对应增删查改
      return Math.min(dp(i, j-1) + 1, dp(i - 1, j) + 1, dp(i-1, j-1) + 1)
    }
  }
};

/*
* sea
* ea
* */
// 输入: word1 = "sea", word2 = "eat"
// 输出: 2
// 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"

console.log(minDistance(word1 = "sea", word2 = "eat"))
