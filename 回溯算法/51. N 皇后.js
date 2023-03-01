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
      res.push([...stack])
      return
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (isTrue(used, i, j)) {
          continue
        }
        console.log(stack)
        stack.push(`${i}+${j}`)
        setFlag(used, true, i, j)
        backtrack(n, used, stack)
        setFlag(used, false, i, j)
        stack.pop()
      }
    }
  }
};

function isTrue(used, i, j) {
  // 只需检查行和列
  for (let k = 0; k < used.length; k++) {
    if (used[i][k] === true) {
      return true
    }
  }
  for (let k = 0; k < used.length; k++) {
    if (used[k][j] === true) {
      return true
    }
  }
  for (let k = 0; k < used.length; k++) {
    if (used[k][k] === true) {
      return true
    }
  }
  for (let k = i, r = j; k < used.length && r < used.length; k++, r++) {
    if (used[k][r] === true) {
      return true
    }
  }
  for (let k = i, r = j; k >= 0 && r >= 0; k--, r--) {
    if (used[k][r] === true) {
      return true
    }
  }
  for (let k = i, r = j; k < used.length && r >= 0; k++, r--) {
    if (used[k][r] === true) {
      return true
    }
  }
  for (let k = i, r = j; k >= 0 && r < used.length; k--, r++) {
    if (used[k][r] === true) {
      return true
    }
  }
  return false
}

function setFlag(used, flag, i, j) {
  used[i][j] = flag
}

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."]

console.log(solveNQueens(4))
