const Queue = require("../Queue")
test("队列 队列的实现", () => {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(4)
  expect(queue.size()).toBe(2)
  expect(queue.head()).toBe(1)
  expect(queue.foot()).toBe(4)
  queue.enqueue(2)
  expect(queue.size()).toBe(3)
  expect(queue.head()).toBe(1)
  expect(queue.foot()).toBe(2)
  queue.dequeue()
  expect(queue.size()).toBe(2)
  expect(queue.head()).toBe(4)
  expect(queue.foot()).toBe(2)
  expect(queue.isEmpty()).toBe(false)
  queue.clear()
  expect(queue.isEmpty()).toBe(true)
})

const delRing = require("../delRing")
test("队列练习1 有一个数组a[100]存放0--99；要求每隔两个数删除掉一个数，到末尾是循环至开头继续进行，求最后一个被删除掉的数", () => {
  const list = []
  for (let i=0; i<=99; i++) {
    list.push(i)
  }
  expect(delRing([0, 1, 2])).toBe(1)
  expect(delRing(list)).toBe(90)
})