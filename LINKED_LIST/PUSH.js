class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newwNODE = new Node(value)
        this.head = newwNODE
        this.tail = newwNODE
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) return undefined
        let temp = this.head  //temp = last node we want to remove
        let pre = this.head   //pre = node before the last node
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
}

let start = new LinkedList(10)


start.push(77)
start.push(44)
start.push(4)
start.push(84)

start.pop()
start.pop()
start.pop()

console.log(start);
