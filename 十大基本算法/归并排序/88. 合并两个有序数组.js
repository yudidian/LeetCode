/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums1.length; i++) {
      nums1[i] = nums2[i]
    }
    return;
  }
  if (n === 0) {
    return
  }
  let k = nums1.length - 1
  // 中点
  m = m - 1
  n = n - 1
  while (k >= 0) {
    if (m < 0 && n >= 0) {
      nums1[k] = nums2[n]
      n--
    } else if (nums1[m] < nums2[n]) {
      nums1[k] = nums2[n]
      n--
    } else {
      nums1[k] = nums1[m]
      m--
    }
    k--
  }
};
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// const nums1 = [2, 0]
// merge(nums1, m = 1, nums2 = [1], n = 1)
// console.log(nums1)
// function merge2(nums, left, mid, right) {
//   const newNums = new Array(nums.length)
//   for (let i = left; i <= right; i++) {
//     newNums[i] = nums[i]
//   }
//   console.log("new", newNums)
//   let k = right
//   let m = mid
//   let n = right
//   // 合并数组
//   while (m >= left || n > mid) {
//     if (m < left && n > mid) {
//       nums[k] = newNums[n]
//       n--
//     } else if (n <= mid && m >= left) {
//       nums[k] = newNums[m]
//       m--
//     } else if (newNums[m] < newNums[n]) {
//       nums[k] = newNums[n]
//       n--
//     } else {
//       nums[k] = newNums[m]
//       m--
//     }
//     console.log(nums)
//     k--
//   }
// }
//
// const nums = [12, 14, 15, 13, 11, 16]
// merge2(nums, 3, 3, 4)
// // merge2(nums, 0,1,3)
// console.log(nums)
