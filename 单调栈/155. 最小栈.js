var MinStack = function() {
  this.mainStack = []
  this.monotoneStack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.mainStack.push(val)
  if (this.monotoneStack.length === 0) {
    this.monotoneStack.push(val)
  } else {
    if (this.monotoneStack[this.monotoneStack.length -1] <= val) {
      this.monotoneStack.push(val)
    } else {
      while (this.monotoneStack[this.monotoneStack.length -1] > val && this.monotoneStack.length > 0) {
        this.monotoneStack.pop()
      }
      this.monotoneStack.push(val)
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const val = this.mainStack.pop()
  console.log(this.monotoneStack, this.mainStack, val)
  if (val === this.monotoneStack[0]) {
    this.monotoneStack.shift()
    console.log("主栈", this.mainStack)
  }
  console.log(this.monotoneStack, this.mainStack)

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.mainStack[this.mainStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.monotoneStack[0]
};

var obj = new MinStack()
obj.push(2);
obj.push(0);
obj.push(3);
obj.push(0);
console.log(obj.getMin())
obj.pop();
console.log(obj.getMin())
obj.pop();
console.log(obj.getMin())
obj.pop();
console.log(obj.getMin())
