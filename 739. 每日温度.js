/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
  const stack = []
  const res = new Array(temperatures.length)
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop()
    }
    res[i] = stack.length ? stack[stack.length - 1] - i : 0
    stack.push(i)
  }
  return res
};
//输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
