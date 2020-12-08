const LinkList = require("../LinkList")
test("单向链表 单项链表的实现", () => {
  const _linkList = new LinkList()
  _linkList.append(1)
  _linkList.append(2)
  _linkList.print()
  expect(_linkList.length()).toBe(2)
  expect(_linkList.head()).toBe(1)
  expect(_linkList.foot()).toBe(2)
  expect(_linkList.get(0)).toBe(1)
  _linkList.append(3)
  expect(_linkList.foot()).toBe(3)
  expect(_linkList.indexOf(3)).toBe(2)
  expect(_linkList.remove(1)).toBe(2)
  _linkList.print()
})