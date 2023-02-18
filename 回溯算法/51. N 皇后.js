/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const used = new Array(n)
  const res = []
  for (let i = 0; i < used.length; i++) {
    used[i] = []
    for (let j = 0; j < used.length; j++) {
      used[i].push(false)
    }
  }
  backtrack(n, used, [])
  return res


  function backtrack(n, used, stack) {
    if (stack.length === n) {
      console.log(stack)
      res.push(stack)
      return
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (isTrue(used, i, j)) {
          continue
        }
        stack.push(`${i}+${j}`)
        console.log(stack)
        setFlag(used, true, i, j)
        backtrack(n, used, stack)
        setFlag(used, false, i, j)
        stack.pop()
      }
    }
  }
};

function isTrue(used, i, j) {
  console.log(i,j)
  for (let k = j; k < used.length; k++) {
    if (used[k][j] === true) {
      return true
    }
  }
  for (let k = i; k < used.length; k++) {
    if (used[i][k] === true) {
      return true
    }

  }
  return false
}

function setFlag(used, flag, i, j) {
  for (let k = 0; k < used.length; k++) {
    used[i][k] = flag
  }
  for (let k = 0; k < used.length; k++) {
    used[k][j] = flag

  }
}

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."]

console.log(solveNQueens(4))
