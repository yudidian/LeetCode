/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let sum = 0

  dp(0, 0, grid)
  console.log(sum)
  function dp(i, j, grid) {
    console.log(sum, i, j)
    if (i === grid.length - 1 && j === grid[0].length -1) {
      console.log(sum + grid[i][j])
      return sum + grid[i][j]
    }
    if (i < grid.length -1 && j < grid[0].length - 1) {
      console.log(grid[i][j])
      sum += Math.min(dp(i + 1, j, grid) + grid[i][j], dp(i, j + 1, grid) + grid[i][j])

    } else if (i === grid.length -1 && j < grid[0].length) {
      sum += dp(i, j + 1, grid) + grid[i][j]
    } else if (i < grid.length && j === grid[0].length -1) {
      sum += dp(i + 1, j, grid) + grid[i][j]
    }

  }
};
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
minPathSum([[1,3,1]])
