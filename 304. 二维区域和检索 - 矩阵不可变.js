/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
  this.preSumList = []
  for (let i = 0; i < matrix.length; i++) {
    this.preSumList.push(new Array(matrix[i].length + 1).fill(0))
  }
  for (let i = 0; i < this.preSumList.length; i++) {
    for (let j = 1; j < this.preSumList[i].length; j++) {
      this.preSumList[i][j] = this.preSumList[i][j - 1] + matrix[i][j-1]
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let res = 0
  while (row1<= row2) {
    res += this.preSumList[row1][col2 + 1] - this.preSumList[row1][col1]
    row1++
  }
  return res
};
const numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
console.log(numMatrix.preSumList)
console.log(numMatrix.sumRegion(2, 1, 4, 3))
