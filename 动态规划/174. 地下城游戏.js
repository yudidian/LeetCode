/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  // 行数
  const row = dungeon.length - 1
  const col = dungeon[0].length - 1
  return dp(row, col)

  function dp(i, j) {
    //base
    if (i === 0 && j === 0) {
      return dungeon[i][j]
    }
    if (i < 0 || j < 0) {
      return 999999
    }
    const val_1 = dp(i - 1, j)
    const val_2 = dp(i, j - 1)

    return Math.min(dp(i - 1, j), dp(i, j - 1)) + dungeon[i][j]
  }
};

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]))
