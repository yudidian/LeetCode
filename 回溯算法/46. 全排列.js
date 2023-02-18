const res = []
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const used = new Array(nums.length).fill(false)
  backtrack(nums, [], used)
  return res
};

function backtrack(nums, track, used) {
  if (track.length === nums.length) {
    res.push([...track])

    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue
    }
    track.push(nums[i])
    used[i] = true
    backtrack(nums, track, used)
    track.pop()
    used[i] = false
  }
}
// for 选择 in 选择列表:
//     # 做选择
//     将该选择从选择列表移除
//     路径.add(选择)
//     backtrack(路径, 选择列表)
//     # 撤销选择
//     路径.remove(选择)
//     将该选择再加入选择列表
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

console.log(permute([1, 2, 3]))
