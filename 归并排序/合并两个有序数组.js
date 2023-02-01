function merge(num1, num2) {
  const res = new Array(num1.length + num2.length)
  let i = num1.length - 1
  let j = num2.length - 1
  let k = num1.length + num2.length - 1
  while (i >= 0 || j >= 0) {
    if (i < 0 && j >= 0) {
      res[k] = num2[j]
      j--
    } else if (j < 0 && i >= 0) {
      res[k] = num1[i]
      i--
    } else if (num1[i] < num2[j]) {
      res[k] = num2[j]
      j--
    } else {
      res[k] = num1[i]
      i--
    }
    k--
  }
  return res
}

const res = merge([1, 2, 8], [0, 1, 3, 4])
console.log(res)
