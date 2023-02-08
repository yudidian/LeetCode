const {createArr} = require("../../help/createArr");

function radixSorting(nums) {
  // 定义十个桶装数据 0-9
  const bucket = new Array(10)
  for (let i = 0; i < bucket.length; i++) {
    bucket[i] = []
  }
  const maxVal = Math.max(...nums).toString()
  for (let i = 0; i < maxVal.length ; i++) {
    putVal(i)
  }
  console.log(nums)
  function putVal(p) {
    let e = Math.pow(10, p)
    for (let i = 0; i < nums.length; i++) {
      const index = Math.floor((nums[i] / e) % 10)
      bucket[index].push(nums[i])
    }
    let index = 0
    for (let i = 0; i < bucket.length; i++) {
      while (bucket[i].length !== 0) {
        nums[index] = bucket[i].shift()
        index++
      }
    }
  }
}
// const nums = createArr(15)
const nums = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.time("radixSorting")
radixSorting(nums)
console.timeEnd("radixSorting")

// function test() {
//   const bucket = new Array(10)
//   for (let i = 0; i < bucket.length; i++) {
//     bucket[i] = []
//   }
//   bucket[1].push(1)
//   console.log(bucket)
// }
// test()
