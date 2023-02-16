/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  /*
  * 下一个位置三种情况
  * matrix[i + 1][j] 、 matrix[i + 1][j -1]、 matrix[i + 1][j + 1]
  */
  const len = matrix.length
  const map = new Array(len)
  for (let i = 0; i < len; i++) {
    map[i] = []
    for (let j = 0; j < len; j++) {
      map[i].push(Number.MAX_VALUE)
    }
  }
  let res = Number.MAX_VALUE
  for (let i = 0; i < len; i++) {
    res = Math.min(res, dp(len - 1, i))
  }
  return res

  function dp(i, j) {
    if (i < 0 || j < 0 || j >= matrix.length) {
      return 9999
    }
    if (i === 0) {
      return matrix[i][j]
    }
    if (map[i][j] !== Number.MAX_VALUE) {
      return map[i][j]
    }
    map[i][j] = matrix[i][j] + Math.min(dp(i - 1, j), dp(i - 1, j + 1), dp(i - 1, j - 1))
    return map[i][j]
  }
};
// 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：如图所示，为和最小的两条下降路径

console.log(minFallingPathSum(matrix = [[2,1,3],[6,5,4],[7,8,9]]))
