const Stack = require('./Stack')
// 实现一个栈，除了常见的push，pop方法外，提供一个min方法，返回栈里最小的元素，且时间复杂度为O(1)
function MinStack() {
  // 用于存取数据
  const dataStack = new Stack()
  // 专门存储最小值
  const minStack = new Stack()
  // 添加一个元素到栈顶
  this.push = item => {
    dataStack.push(item)

    // 当minStack栈为空时或则添加元素比minStack栈顶元素小时则将item压入minStack
    if (minStack.isEmpty() || item<minStack.top()){
      minStack.push(item)
    } else {
      // 如果item不比minStack的小且minStack不为空，则将minStack的栈顶元素再压入minStack栈顶一次，方便pop方法实现
      minStack.push(minStack.top())
    }
  }
  // 弹出栈顶元素
  this.pop = () => {
    minStack.pop()
    return dataStack.pop()
  }

  // 返回栈里最小的元素，且时间复杂度为O(1)
  this.min = () => {
    return minStack.top()
  }
}

module.exports = MinStack