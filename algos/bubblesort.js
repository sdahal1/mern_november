function bubblesort(arr){
    for(var j = 0; j<arr.length; j++){
        for(var i =0; i<arr.length-j; i++ ){
            // console.log("current value is->", arr[i])
            // console.log("value at next index is->", arr[i+1])
            if(arr[i]> arr[i+1]){ //if the value at the current index is great than the value at the next index, that means its out of place and we need to swap
                //[6,4,5,2,9,3,8]
                var temp = arr[i]  //temp = 6
                arr[i]= arr[i+1] //[4,4,5,2,9,3,8]
                arr[i+1] = temp //[4,6,5,2,9,3,8]
            }
            // console.log("after the swap", arr)
        }
    }
    console.log(arr)
    return arr
    
}


bubblesort([6,4,5,2,9,3,8]) //output: [2,3,4,5,6,8,9]