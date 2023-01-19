/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const advantageCount = function(nums1, nums2) {
  const n = nums1.length;
  const index1 = new Array(n).fill(0);
  const index2 = new Array(n).fill(0);
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    index1[i] = i;
    index2[i] = i;
  }
  index1.sort((i, j) => nums1[i] - nums1[j]);
  index2.sort((i, j) => nums2[i] - nums2[j]);
  let left = 0, right = n - 1
  for (let i = 0; i < n; i++) {
    if (nums1[index1[i]] > nums2[index2[left]]) {
      res[index2[left]] = nums1[index1[i]]
      left++
    } else{
      res[index2[right]] = nums1[index1[i]]
      right--
    }
  }
  return res
};

// 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
// 输出：[2,11,7,15]
// 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
// 输出：[24,32,8,12]
// console.log(advantageCount(nums1 = [2,7,11,15], nums2 = [1,10,4,11]))
// console.log(advantageCount(nums1 = [12,24,8,32], nums2 = [13,25,32,11]))
console.log(advantageCount(nums1 = [9,1,2,4,5], nums2 = [6,2,9,1,4]))
