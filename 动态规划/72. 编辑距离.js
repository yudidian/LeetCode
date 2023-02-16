/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const map = []
  for (let i = 0; i < word1.length; i++) {
    map[i] = []
    for (let j = 0; j <word2.length; j++) {
      map[i].push(Infinity)
    }
  }
  return dp(word1.length - 1, word2.length - 1)
  function dp(len1, len2) {
    if (len1 === -1) {
      return len2 + 1;
    }
    if (len2 === -1) {
      return len1 + 1
    }
    if (map[len1][len2] !== Infinity) {
      return map[len1][len2]
    }
    if (word1[len1] === word2[len2]) {
      return dp(len1 - 1, len2 - 1)
    }
    // 分别对应增加、删除、替换操作
    map[len1][len2] = Math.min(dp(len1, len2 -1) + 1, dp(len1 - 1, len2) + 1, dp(len1 -1, len2 -1) + 1)
    return map[len1][len2]
  }
};
/*
"intention"
"execution"
* rad   le
* apple
* */
// 输入：word1 = "horse", word2 = "ros"
// 输出：3
console.log(minDistance(word1 = "a", word2 = "b"))
