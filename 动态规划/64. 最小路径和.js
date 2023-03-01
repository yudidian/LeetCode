/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const map = new Array(grid.length).fill(-1).map(item => {
    item = []
    for (let i = 0; i < grid.length; i++) {
      item.push(false)
    }
    return item
  })
  return dp(grid.length - 1, grid[0].length - 1, grid)

  function dp(i, j, grid) {
    // 确定基本情况
    if (i === 0 && j === 0) {
      return grid[i][j]
    }
    if (i < 0 || j < 0) {
      return 9999999
    }
    if (map[i][j]) {
      return map[i][j]
    }
    map[i][j] = Math.min(dp(i - 1, j, grid), dp(i, j - 1, grid)) + grid[i][j]
    return map[i][j]
  }
};
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
