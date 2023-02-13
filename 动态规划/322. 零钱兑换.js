var coinChange = function (coins, amount) {
  const map = new Array(amount + 1).fill(Infinity)
  map[0] = 0
  return find(coins, amount)

  function find(coins, amount) {
    let res = Number.MAX_VALUE
    if (amount === 0) {
      return 0
    }
    if (amount < 0) {
      return -1
    }
    if (map[amount] !== Infinity) {
      return map[amount]
    }
    for (let i = 0; i < coins.length; i++) {
      const val = find(coins, amount - coins[i]) + 1
      if (val > 0) {
        res = Math.min(res, val)
      }
    }
    if (res === Number.MAX_VALUE) {
      map[amount] = -1
    } else {
      map[amount] = res
    }
    return map[amount]
  }
};
console.log(coinChange([2], 3))
