/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  let res = -1
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const val = map.get(arr[i])
      map.set(arr[i], val + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  for (const key of map.keys()) {
    if (parseInt(key) === map.get(key)) {
      res = res > map.get(key) ? res : map.get(key)
    }
  }
  return res
};
// 输入：arr = [2,2,3,4]
// 输出：2
console.log(findLucky([4,3,2,2,4,1,3,4,3]))


// const findLucky = function (arr) {
//   let left = 0, right = arr.length - 1
//   let res = -1
//   const map = new Map()
//   while (left <= right) {
//     if (map.has(arr[left])) {
//       const val = map.get(arr[left])
//       map.set(arr[left], val + 1)
//     } else {
//       map.set(arr[left], 1)
//     }
//     left++
//     if (map.has(arr[right])) {
//       const val = map.get(arr[right])
//       map.set(arr[right], val + 1)
//     } else {
//       map.set(arr[right], 1)
//     }
//     right--
//   }
//   if (arr.length % 2 !== 0) {
//     const index = Math.floor(arr.length / 2)
//     const val = map.get(arr[index])
//     map.set(arr[index], val - 1)
//   }
//   for (const key of map.keys()) {
//     if (parseInt(key) === map.get(key)) {
//       res = res > map.get(key) ? res : map.get(key)
//     }
//   }
//   return res
// };
