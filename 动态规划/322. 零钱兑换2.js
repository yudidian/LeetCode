/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 初始化dp数组,这里注意dp数组的长度应该是多一个。因为需要考虑总金额为0的时候。
  let dp = new Array(amount + 1).fill(Infinity);
  // 对于总金额为0的进行初始化
  dp[0] = 0;
  // 开始更新dp数组中的每一个值
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {  // 更新的时候，只有当当前的总金额是大于或者等于这个硬币面额的才行。
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  // 对于不能组合的，返回-1.
  if (dp[amount] === Infinity) {
    return -1;
  } else {
    return dp[amount];
  }
};
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

console.log(coinChange(coins = [1, 2, 5], amount = 100))
