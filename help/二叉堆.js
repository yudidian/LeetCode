class Heap {
  constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;
  }

  maxHeapify(i) {
    let max = i;

    if(i >= this.size){
      return;
    }
    // 当前序号的左节点
    const l = i * 2 + 1;
    // 当前需要的右节点
    const r = i * 2 + 2;

    // 求当前节点与其左右节点三者中的最大值
    if(l < this.size && this.data[l] > this.data[max]){
      max = l;
    }
    if(r < this.size && this.data[r] > this.data[max]){
      max = r;
    }

    // 最终max节点是其本身,则已经满足最大堆性质，停止操作
    if(max === i) {
      return;
    }

    // 父节点与最大值节点做交换
    this.changeValue(i, max)

    // 递归向下继续执行
    return this.maxHeapify(max);
  }
  minHeapify(i) {
    let min = i;

    if(i >= this.size){
      return;
    }
    // 当前序号的左节点
    const l = i * 2 + 1;
    // 当前需要的右节点
    const r = i * 2 + 2;

    // 求当前节点与其左右节点三者中的最大值
    if(l < this.size && this.data[l] < this.data[min]){
      min = l;
    }
    if(r < this.size && this.data[r] < this.data[min]){
      min = r;
    }

    // 最终max节点是其本身,则已经满足最大堆性质，停止操作
    if(min === i) {
      return;
    }

    // 父节点与最大值节点做交换
    this.changeValue(i, min)

    // 递归向下继续执行
    return this.minHeapify(min);
  }
  // 默认升序
  rebuildHeap(flag = true){
    // 叶子节点
    const L = Math.floor(this.size / 2);
    for(let i = L - 1; i >= 0; i--){
      if (flag) {
        this.maxHeapify(i)
      } else {
        this.minHeapify(i)
      }
    }
  }
  changeValue(index, changeIndex) {
    const temp = this.data[index]
    this.data[index] = this.data[changeIndex]
    this.data[changeIndex] = temp
  }
  insert(val){
    if (this.isHeap(val)) {
      this.size++
      this.data.push(val)
      this.rebuildHeap()
    } else{
      this.size++
      this.data.push(val)
    }
  }
  isHeap(val) {
    // 先取到最后一个子节点
    const L = Math.floor(this.size / 2) - 1
    // 当前序号的左节点
    const left = L * 2 + 1;
    // 当前需要的右节点
    const right = L * 2 + 2;
    const leftValue = this.data[left] || Number.MIN_SAFE_INTEGER
    const rightValue = this.data[right] || Number.MIN_SAFE_INTEGER
    const MaxVal = Math.max(val, leftValue, rightValue)
    return MaxVal === val;
  }
}

// 二叉树左侧节点表达式 index * 2 + 1
// 二叉树右侧节点表达式 index * 2 + 2
const heap = new Heap([21, 11, 1, 42, 15, 321, 12, 77,99])
heap.rebuildHeap()
heap.insert(15)
console.log(heap.data)
