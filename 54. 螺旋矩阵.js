/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  const res = []
  // 定义四个边界
  let size = matrix.length * matrix[0].length
  let upper_bound = 0
  let left_bound = 0
  let right_bound = matrix[0].length - 1
  let lower_bound = matrix.length - 1
  // 遍历
  while (res.length < size) {
    if (upper_bound<=lower_bound) {
      for (let i = left_bound; i <= right_bound; i++) {
        res.push(matrix[upper_bound][i])
      }
      upper_bound += 1
    }
    if (left_bound <= right_bound) {
      for (let i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound])
      }
      right_bound -= 1
    }
    if (upper_bound<=lower_bound) {
      for (let i = right_bound; i >= left_bound; i--) {
        res.push(matrix[lower_bound][i])
      }
      lower_bound -= 1
    }
    if (left_bound <= right_bound) {
      for (let i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound])
      }
      left_bound += 1
    }
  }
  return res
};
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
