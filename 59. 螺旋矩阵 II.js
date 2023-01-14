/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const res = []
  for (let i = 0; i < n; i++) {
    res.push([])
  }
  let val = 1
  let upper_bound = 0
  let left_bound = 0
  let right_bound = n - 1
  let lower_bound = n - 1
  while (val <= n * n) {
    if (upper_bound <= lower_bound) {
      for (let i = left_bound; i <= right_bound; i++) {
        res[upper_bound][i] = val
        val++
      }
      upper_bound++
    }
    if (left_bound <= right_bound) {
      for (let i = upper_bound; i <= lower_bound; i++) {
        res[i][right_bound] = val
        val++
      }
      right_bound--
    }
    if (upper_bound <= lower_bound) {
      for (let i = right_bound; i >= left_bound; i--) {
        res[lower_bound][i] = val
        val++
      }
      lower_bound--
    }
    if (left_bound <= right_bound) {
      for (let i = lower_bound; i >= upper_bound; i--) {
        res[i][left_bound] = val
        val++
      }
      left_bound++
    }
  }
  return res
};

console.log(generateMatrix(4))
