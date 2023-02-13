/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const db = new Array(envelopes.length).fill(1)
  let max = 1
  // 首先对W进行升序排列
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  for (let i = 0; i < envelopes.length; i++) {
    db[i] = find(i, envelopes[i][0], envelopes[i][1])
    max = Math.max(db[i], max)
  }
  console.log(db, envelopes)
  return max

  function find(index, w, h) {
    let res = 1
    for (let i = 0; i <= index; i++) {
      if (h > envelopes[i][1] && w > envelopes[i][0]) {
        res = Math.max(res, db[i] + 1)
      }
    }
    return res
  }
};
// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]
console.log(maxEnvelopes(envelopes = [[1, 3], [3, 5], [6, 7], [6, 8], [8, 4], [9, 5]]))
