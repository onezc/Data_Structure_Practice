// 队列实现（只允许在队列的头部删除元素，在队列的末尾添加新的元素）
function Queue() {
  var items = []
  // 队列尾部添加一个元素
  this.enqueue = item => {
    items.push(item)
  }
  // 队列头部删除一个元素并返回删除的元素
  this.dequeue = () => items.shift()
  // 查看队列头部元素
  this.head = () => items[0]
  // 查看队列尾部元素
  this.foot = () => items[items.length - 1]
  // 队列大小
  this.size = () => items.length
  // 清空队列
  this.clear = () => {
    items.splice(0, items.length)
  }
  // 判断队列是否为空
  this.isEmpty = () => items.length === 0

}

module.exports = Queue