/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const map = new Array(s.length)
  for (let i = 0; i < map.length; i++) {
    map[i] = []
    for (let j = 0; j < map.length; j++) {
      map[i].push(Infinity)
    }
  }
  return dp(0, s.length - 1)

  function dp(left, right) {
    if (left === right) {
      return 1
    }
    if (left > right) {
      return 0
    }
    if (map[left][right] !== Infinity) {
      return map[left][right]
    }
    if (s[left] === s[right]) {
      map[left][right] = dp(left + 1, right - 1) + 2
      return map[left][right]
    } else {
      map[left][right] = Math.max(dp(left + 1, right), dp(left, right - 1))
      return map[left][right]
    }
  }
};
console.log(longestPalindromeSubseq("cbbd"))
