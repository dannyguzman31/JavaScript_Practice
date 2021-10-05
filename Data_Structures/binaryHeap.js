/********* BINARY HEAP ***********/

// Very similar to a BST but with some different rules.
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes. 

/*          Max Binary Heap                Min Binary Heap
                   41                             1
               39      33                     2      3
            18   27  12   13               17  19  36  7
*/

// For any index of an array "n..."
// the left child is store at "2n + 1"
// the right child is at " 2n + 2"


class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
       let idx = this.values.length -1;
       const element = this.values[idx];
       while(idx > 0){
           let parentIdx = Math.floor((idx -1)/2);
           let parent = this.values[parentIdx];
           if(element <= parent) break;
           this.values[parentIdx] = element;
           this.values[idx] = parent;
           idx = parentIdx; // update index
       }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap);