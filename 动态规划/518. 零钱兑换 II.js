/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(coins.length + 1)
  for (let i = 0; i <= coins.length; i++) {
    dp[i] = []
    for (let j = 0; j <= amount; j++) {
      if (j === 0) {
        dp[i][j] = 1
      } else {
        dp[i][j] = 0
      }
    }
  }
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      }
    }
  }
  return dp[coins.length][amount]
};
// 输入：amount = 5, coins = [1, 2, 5]
// 输出：4
// 解释：有四种方式可以凑成总金额：
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// for 状态1 in 状态1的所有取值：
//     for 状态2 in 状态2的所有取值：
//         for ...
//             dp[状态1][状态2][...] = 计算(选择1，选择2...)
console.log(change(amount = 5, coins = [1, 2, 5]))
