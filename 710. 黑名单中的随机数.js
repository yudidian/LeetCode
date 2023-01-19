/**
 * @param {number} n
 * @param {number[]} blacklist
 */
const Solution = function(n, blacklist) {
  this.size = n
  this.map = new Map()
  for (let i = 0; i < blacklist.length; i++) {
    this.map.set(i, 666)
  }
  const center = n - blacklist.length
  let last = n - 1
  for (let i = 0; i < blacklist.length; i++) {
    while (this.map.has(i)) {
      last--
    }
    this.map.set(i, last)
    last--
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const len = this.size
  const val = Math.floor(Math.random() * len)
  if (this.map.has(val)) {
    this.pick()
  } else {
    return val
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
