//one function to combine two already sorted array (helper function)
const combine = (arr1, arr2)=>{
    result = [] 
    //no nested loops!
    //need two index numbers to keep track of, one for the first array, and one for the second array
    let i = 0 //keeps track of array 1
    let j = 0 //keesp track of array 2

    while(i<arr1.length && j < arr2.length){//do this process repetitively
        //compare the values at index 0 for both arrays and whichever one is smaller, i push to the result
            //whichever array i push the value from, i will increment the index of it 
            //whichever array i did not push the value from, its index will stay there
        if(arr1[i]< arr2[j]){ //if arr1 has the smaller value
            result.push(arr1[i])
            i++
        }else if (arr2[j]<arr1[i]){ //if arr2 has the smaller value
            result.push(arr2[j])
            j++
        }else{ //if both arrrays have equal value
            result.push(arr2[i])
            result.push(arr2[j])
            i++
            j++
        }
    }
    // console.log(i, arr1.length)
    // console.log(j, arr2.length)
    //whichever array still has remaining values, we will push the rest into our result
    while(i < arr1.length){ //still have remaining values in arr1
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){ //still have remaining values in arr2
        result.push(arr2[j])
        j++
    }

    // console.log(result)
    return result
    
}



//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/  with this array [2,4,6,3,5,1,9,0] start at step 74 for the logic if you need a hint

// combine([0,2,3,4,6], [0,1,5,9,10,11,15]) 


const merge = (arr)=>{
    //this function will break down one unsorted array into single element arrays and recursively call the combine function to combine the already sorted arrays- hint--> you can use .slice()
    
    if(arr.length>1){//we want to break down the array into halves as long as the length of array is greater than 1
        //identify the middle
        let mid = Math.floor(arr.length/2)
        //get the left half and the right half using .slice()
        // console.log("loggin the midpoint", mid)
        let lefthalf = arr.slice(0, mid)
        let righthalf = arr.slice(mid, arr.length)

        // console.log("loggin the lefthalf", lefthalf)
        // console.log("loggin the lefthalf", righthalf)
        let left = merge(lefthalf)
        let right = merge(righthalf)
        return combine(left, right)
    }else{
        return arr
    }

}




console.log(merge([2,4,6,3,5,1,9,0,-1]))



