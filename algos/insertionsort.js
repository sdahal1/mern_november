//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionsort(arr){
    for( let i = 1; i < arr.length; i++) {
        let j = i; //we create j so that we have a variable that starts where i is, that we can decrement down to the left, without affecting i
        while(j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j--;
        }
    }
    console.log(arr)
    return arr
}

insertionsort([2,4,6,3,5,1,9,0])

//i = 1->2->3->4->5
//j =1 ->2->3->2->1->4->3->5->4->...0->6

