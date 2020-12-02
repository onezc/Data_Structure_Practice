const Stack = require('../Stack')
test('栈 栈的实现',() => {
  const _Stack = new Stack()
  _Stack.push(1)
  expect(_Stack.top()).toBe(1)
  expect(_Stack.pop()).toBe(1)
  expect(_Stack.isEmpty()).toBe(true)
  expect(_Stack.size()).toBe(0)
  _Stack.push(2)
  expect(_Stack.size()).toBe(1)
  _Stack.clear()
  expect(_Stack.size()).toBe(0)
})

const judgeLegalBracket = require('../judgeLegalBracket')

test('栈练习1 判断合法括号',() => {
  // 捕获报错
  expect(() => shallow(judgeLegalBracket())).toThrowError()
  expect(judgeLegalBracket('')).toBe(true)
  expect(judgeLegalBracket('(())(()')).toBe(false)
  expect(judgeLegalBracket('sdf(ds(ew(we)rw)rwqq)qwewe')).toBe(true)
  expect(judgeLegalBracket('(sd(qwqw)sd(sd))')).toBe(true)
  expect(judgeLegalBracket('()()sd()(sd()fw))(')).toBe(false)
})

const MinStack = require('../MinStack')
test('栈练习2 实现一个带min方法的栈（时间复杂度为O(1)）',() => {
  const _minStack = new MinStack()
  
  _minStack.push(4)
  _minStack.push(3)
  _minStack.push(5)
  _minStack.push(1)
  expect(_minStack.min()).toBe(1)
  _minStack.pop()
  expect(_minStack.min()).toBe(3)
})
