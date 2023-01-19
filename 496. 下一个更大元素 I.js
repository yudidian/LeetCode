/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const stack = []
  const map = new Map()
  const res = new Array(nums1.length).fill(0)
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop()
    }
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
    stack.push(nums2[i])
  }
  return res.map((_,i) => {
    return map.get(nums1[i])
  })
};
// 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出：[-1,3,-1]

console.log(nextGreaterElement(nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]))
