const Stack = require('./Stack')
// 判断合法括号
function judgeLegalBracket(str) {
  // 判断是否为字符串
  if (typeof(str) != 'string') throw new Error("not String")
  const _stack = new Stack()
  // 循环遍历字符串
  for (let i=0; i<str.length; i++) {
    // 如果当前遍历到的元素为‘（’则压入栈中
    if (str[i] === '(') {
      _stack.push(str[i])
    } else if (str[i] === ')') {
      // 如果为‘）’，并且_stack栈中不为空则弹出栈顶元素
      if (!_stack.isEmpty()) {
        _stack.pop()
      } else {
        // 如果当前栈为空则证明多了‘）’则返回false
        return false
      }
      
    }
  }
  // 字符串循环遍历结束，则判断当前栈中是否为空，如果不为空，则证明多了‘（’，如果为空则证明两两抵消
  return _stack.isEmpty()

}
module.exports = judgeLegalBracket
