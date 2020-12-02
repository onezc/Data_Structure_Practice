const Queue = require("./Queue")

module.exports = list => {
  // 判断list是否为数组
  if (Object.prototype.toString.call(list) !== '[object Array]') throw new Error("not Array")
  const queue = new Queue()
  // 将list所有元素入队
  list.forEach(item => queue.enqueue(item))
  // 第几个元素 
  let index = 1
  while (queue.size() !== 1) {
    // 弹出头部元素，根据index判断其是否需要删除
    const item = queue.dequeue()
    // 每隔两个需删除掉一个，那么不是被删除的元素则放回队列尾部
    if (index % 3 !== 0) {
      queue.enqueue(item)
    }
    index++
  }

  return queue.head()
}
// 0 1 2 
// 0 1 
// 1