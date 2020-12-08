// 链表：链表是物理存储单元上非连续的、非顺序的存储结构，由一系列节点组成
module.exports = function() {
  // 节点：节点包含两部分，一部分是存储数据元素的数据与，一部分是指向下一节点的指针域
  const Node = function(data) {
    this.data = data
    this.next = null
  }
  // 长度
  let length = 0
  // 头节点
  let head = null
  // 尾节点
  let foot = null
  // 添加一个新元素 添加成功返回true
  this.append = data => {
    // 创建新节点
    var node = new Node(data)
    // 如果是空链表
    if (head === null) {
      head = node
      foot = node
    } else {
      foot.next = node
      foot = node
    }
    length++
    return true
  }
  // 返回链表大小
  this.length = () => length
  // 在指定位置插入新元素
  this.insert = (index, data) => {
    if (index === length) {
      this.append(data)
    } else if (index > length || index < 0) {
      return false
    } else {
      const newNode = new Node(Data)
      if (index === 0) {
        newNode.next = head
        head = newNode
      } else {
        var insertIndex = 1
        var curNode = head
        // 找到应该插入的位置
        while (insertIndex < index) {
          curNode = curNode.next
          insertIndex ++
        }
        const nextNode = curNode.next
        curNode.next = newNode
        newNode.next = nextNode
      }
      length++
      return true
    }
  }
  // 删除指定位置的节点
  this.remove = index => {
    if (index < 0 || index >= length) {
      return null
    } else {
      let delNode = null
      if (index === 0) {
        delNode = head
        head = head.next
      } else {
        let delIndex = 0
        let preNode = null
        let curNode = head
        while (delIndex < index) {
          delIndex ++
          preNode = curNode
          curNode = curNode.next
        }
        delNode = curNode
        preNode.next = curNode.next
        // 如果删除的是尾结点,重新赋值foot
        if (curNode.next === null) {
          foot = preNode
        }
      }
      length --
      delNode.next = null
      return delNode.data
    }
  }
  // 删除尾节点
  this.removeFoot = () => this.remove(length - 1)
  // 删除头节点
  this.removeHead = () => this.remove(0)
  // 返回指定位置节点的值
  this.get = index => {
    if (index < 0 || index >= length) {
      return null
    }
    let nodeIndex = 0
    let curNode = head
    while (nodeIndex < index) {
      curNode = curNode.next
      nodeIndex ++
    }
    return curNode.data
  }
  // 返回链表头节点的值
  this.head = () => this.get(0)
  // 返回尾节点的值
  this.foot = () => this.get(length - 1)
  // 返回指定元素的索引（如果有相同元素则返回第一个）
  this.indexOf = data => {
    let index = -1
    let curNode = head
    while (curNode) {
      index ++
      if (curNode.data === data) {
        return index
      } else {
        curNode = curNode.next
      }
    }
    return -1
  }
  // 判断链表是否为空
  this.isEmpty = () => length === 0
  // 清空链表
  this.clear = () => {
    head = null
    foot = null
    length = 0
  }
  // 打印链表
  this.print = () => {
    let curNode = head
    let strLink = ''
    while (curNode) {
      strLink += curNode.data.toString() + "->"
      curNode = curNode.next
    }
    strLink += "null"
    console.log(strLink) // zc-print
    console.log("length:" + length) // zc-print
    return strLink
  }
}