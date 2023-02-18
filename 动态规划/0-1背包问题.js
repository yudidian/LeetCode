// N = 3, W = 4
// wt = [2, 1, 3]
// val = [4, 2, 3]

function packageIssue(n, w, wt, val) {
  const dp = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    dp[i] = []
    for (let j = 0; j <= w; j++) {
      if (j === 0 || i === 0) {
        dp[i][j] = 0
      } else {
        dp[i][j] = Infinity
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      if (j - wt[i-1] < 0) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j- wt[i-1]] +val[i-1], dp[i-1][w])
      }
    }
  }
}
