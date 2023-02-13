/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const map = new Map()
  return list(n)
  function list(n) {
    console.log(n, map)
    if (n === 0) {
      return 0
    }
    if (n === 1 || n === 2) {
      return 1
    }
    if (map.has(n)) {
      return map.get(n)
    } else {
      const val = list(n - 1) + list(n - 2)
      map.set(n, val)
      return val
    }
  }
};
console.log(fib(10))
