/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  s = s.trim()
  s = s.replace(/\s+/g, " ")
  const arr = s.split("")
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
  let start = 0
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      let end = i - 1
      while (start<=end) {
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
      }
      start = i + 1
    }
    if (i=== arr.length -1) {
      let end = i
      while (start<=end) {
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
      }
    }
  }
  return arr.join("")
};

// 输入：s = "the sky is blue"
// 输出："blue is sky the"

console.log(reverseWords("a good   example"))
