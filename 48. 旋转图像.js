/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  console.log(matrix)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i]= temp
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let left = 0
    let right = matrix[i].length - 1
    while (left<= right) {
      const temp = matrix[i][left]
      matrix[i][left] = matrix[i][right]
      matrix[i][right] = temp
      left++
      right--
    }
  }
  console.log(matrix)
};
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
rotate([[1,2,3],[4,5,6],[7,8,9]])
