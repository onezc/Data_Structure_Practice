// 数组方式实现栈（一种特殊的后进先出的线性表，仅能够操作栈顶元素）
function Stack() {
  const items = []
  // 添加一个元素到栈顶
  this.push = item => {
    items.push(item)
  }
  // 弹出栈顶元素
  this.pop = () => items.pop()
  // 返回栈顶元素,没有则返回undefined
  this.top = () => items[items.length - 1]
  // 判断是否为空
  this.isEmpty = () => items.length === 0
  // 返回当前栈里的元素个数
  this.size = () => items.length
  // 清空栈
  this.clear = () => {
    items.splice(0, items.length)
  }
  // 可补充方法，只需满足后进先出的特点
}
module.exports = Stack