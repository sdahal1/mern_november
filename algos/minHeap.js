class Heap{
    constructor(){
        this.heap = [null]
    }

    insert(val){
        //push the value into the heap, inserting it initially at the last index
        this.heap.push(val);
        

        //calculate the index of the current new value inserted
        let current = this.heap.length-1
        //calculate the parent from the current index
        let parent = Math.floor(current/2)

        //check if the value at the parent index is greater than the value at the current index of our new value
        while(this.heap[parent] > this.heap[current]){
            //if the value at the parent is greater than the value at the current, then we need to swap
            [this.heap[parent], this.heap[current]]=[this.heap[current],this.heap[parent]]

            //update the pointers to current and parent indexes 
            current = parent
            parent = Math.floor(current/2)

            //edge case for negative numbers
            if(this.heap[current]<0 && this.heap[parent]==null){
                break
            }

        }




        return this;
    }

}


heap1 = new Heap()


heap1.insert(10).insert(5).insert(38).insert(3).insert(-3).insert(2.4)
console.log(heap1)