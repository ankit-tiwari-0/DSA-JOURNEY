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
}

let start = new LinkedList(10)


start.push(77)
start.push(44)
start.push(4)
start.push(84)

console.log(start);
