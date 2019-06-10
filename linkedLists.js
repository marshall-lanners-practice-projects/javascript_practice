/*
  made a linked list with functions:
  push, pop, insertAt, removeAt, log
*/

class Node {
  constructor(element){
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  push(element){

    let node = new Node(element)

    if (this.size === 0){
      this.head = node
    } else {
      let current = this.head

      while(current.next){
        current = current.next
      }

      current.next = node

    }

    this.size++
  }

  log(){
    if (this.size === 0){
      console.log('no elements')
    } else {
      let current = this.head
      while(current){
        console.log(current.element)
        current = current.next
      }
    }
    console.log()
  }

  pop(){
    if (this.size === 0){
      console.log('nothing to pop')
      return
    }
    if (this.size === 1){
      this.head === null
    } else {
      let current = this.head, prev
      while(current.next){
        prev = current
        current = current.next
      }
      prev.next = null
    }

    this.size--
  }
  
  insertAt(element, index){

    let node = new Node(element),
    current = this.head,
    prev

    if (index < 0 || index > this.size - 1){
      console.log('incorrect input')
      return
    }

    if (index === 0){
      this.head = node
      node.next = current
    } else {

      let counter = 0

      while (counter < index){
        counter++
        prev = current
        current = current.next
      }

      prev.next = node
      node.next = current

    }

    this.size++
  }

  removeAt(index){

    let current = this.head, prev

    if (index < 0 || index > this.size - 1){
      console.log('incorrect input')
      return
    }

    if (index === 0){
      this.head = current.next
    } else {
      let counter = 0
      while(counter < index){
        counter++
        prev = current
        current = current.next
      }
      prev.next = current.next
    }

    this.size--
  }

  
  removeDups(){
    if (this.size === 0 || this.size === 1){
      console.log('no duplicates to remove')
      return
    }
    let hash = {}
    let current = this.head, prev

    while(current){
      if (hash[current.element] === 1){
        prev.next = current.next
        current = current.next
      } else {
        hash[current.element] = 1
        prev = current
        current = current.next
      }
    }
  }

}

let l1 = new LinkedList()
console.log(l1)
console.log()

l1.push(1)
l1.push(2)
l1.push(3)
l1.push(4)
l1.push(5)
l1.log()
l1.pop()
l1.log()
l1.insertAt(155, 2)
l1.log()
l1.removeAt(2)
l1.log()
