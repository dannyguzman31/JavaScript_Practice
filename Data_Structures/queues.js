/************ QUEUES ***********/

// A FIFO data structure (First in First Out)

// BIG O 
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(n)

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // adds to the queue
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode; // looking at the end

        }
        return ++this.size;
    }

    // returns and removes the first thing added in the the queue
    dequeue(){

        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

      // prints in an array
  print(){
    var arr = [];
    var current = this.first
    while(current){
        arr.push(current.value)
        current = current.next
    }
    console.log(arr);
}

}
// Test
var list = new Queue();

list.enqueue(100);
list.enqueue(101);
list.enqueue(102);
list.enqueue(103);
list.enqueue(104);
list.enqueue(105);
list.enqueue(106);
list.enqueue(107);
console.log(list.print());
list.dequeue();
console.log(list.print());