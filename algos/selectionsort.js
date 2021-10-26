//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

function selectionsort(arr){
    for(let i = 0; i< arr.length; i++){
        let bigidx = 0
        let bignum = arr[0]
        for(let j = 1; j<arr.length-i; j++){
            if(arr[j] > bignum){
                bignum = arr[j]
                bigidx = j
            }
        }
        //by the time we get here, the inner forloop has finished and we have located where the largest number is
        // let temp = arr[bigidx]
        // arr[bigidx] = arr[arr.length-1-i]
        // arr[arr.length-1-i] = temp

        [arr[bigidx], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[bigidx]]

        

    }

    console.log(arr)

    //loop through array, find the largest value and the index its in, then put it in the correct place
    //hint: might need a nested for loop
}


selectionsort([6,4,5,2,9,3,8])