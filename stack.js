/*
  implament a stack in javascript functions
  push, pop, peek, isEmpty, log
*/

class Stack {
  constructor(){
    this.items = []
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    if (this.items.length === 0){
      return 'empty'
    } else {
      return this.items.pop()
    }
  }

  peek(){
    let len = this.items.length - 1
    return this.items[len]
  }

  isEmpty(){
    return this.items.length === 0
  }

  log(){
    let str = '',
    len = this.items.length - 1
    this.items.forEach((item, i) => {
      if (i === len){
        str += item
      } else {
        str += `${item} `
      }
    })
    console.log(str)
  }

}

let stack = new Stack()
stack.push(4)
stack.push(5)
stack.push(6)
console.log(stack.peek())
console.log(stack.isEmpty())
let popped = stack.pop()
console.log(popped)
stack.log()

/*
  implament a stack in javascript functions
  push, pop, peek, isEmpty, log

  How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
*/

class Stack {
  constructor(){
    this.items = [],
    this.min = null,
    this.max = null
  }

  push(element){
    if (this.isEmpty()){
      this.min = element
      this.max = element
    } else {
      if (element > this.max){
        this.max = element
      }
      if (element < this.min){
        this.min = element
      }
    }
    this.items.push(element)
  }

  pop(){

    if (this.isEmpty()){
       this.min = null
       this.max = null
       return
    }

    let pop = this.items.pop()

    if (this.items.length == 1){
      this.min = this.items[0]
      this.max = this.items[0]
      return
    }

    let start = this.items[0]
    max = start, min = start

    if (pop === this.max || pop === this.min){
      this.items.forEach(item => {
        if (item > max){
          this.max = item
        }
        if (item < min){
          this.min = item
        }
      })
    }

    return pop
  }

  isEmpty(){
    return this.items.length === 0
  }

  min(){
    if (this.isEmpty()){
      return
    } else {
      return this.min
    }
  }

  max(){
    if (this.isEmpty()){
      return
    } else {
      return this.max
    }
  }

  log(){
    console.log(this.items.join(" "))
  }

}

let stack = new Stack()
stack.push(4)
stack.push(10)
stack.push(1)
stack.push(90)
stack.push(3)
stack.push(73)
stack.log()
stack.pop()
stack.pop()
stack.pop()
stack.log()
console.log(stack.min)
console.log(stack.max)