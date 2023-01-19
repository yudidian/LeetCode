const RandomizedSet = function() {
  this.map = new Map()
  this.res = []
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  const index = this.res.length
  if (this.map.has(val)) {
    return false
  } else {
    this.map.set(val, index)
    this.res.push(val)
    return true
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false
  } else {
    const index = this.map.get(val)
    this.res[index] = this.res[this.res.length - 1]
    this.map.set(this.res[index], index)
    this.res.pop()
    this.map.delete(val)
    return true
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const len = this.res.length
  const index = Math.floor(Math.random() * len)
  return this.res[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
const obj = new RandomizedSet()
console.log(obj.insert(0))
console.log(obj.remove(0))
console.log(obj.insert(0))
console.log(obj.getRandom())
console.log(obj.res)
