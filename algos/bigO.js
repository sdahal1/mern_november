//time complexity and space complexity
    //time complexity is how long the algo takes to run
    //space complexity is how much memory is required or used up to run the algo


function countUpTo(n){
    let total = 0; //one operation
    for(let i =1; i<=n; i++){ //i=1 is 2nd operation, i<=n is 3rd operation
        total += i //n*2
    }



    
    return total
}

//if n is 1 => 7 operations
//if n is 100 ==> 502
//if n is 1000 ==> 5002

// let t1 = Date.now()
// console.log(countUpTo(50000000000))
// let t2 = Date.now()
// console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)




function countUpTheLoot(n){
    return n*(n+1)/2
}


// let t1 = Date.now()
// console.log(countUpTheLoot(50000000000))
// let t2 = Date.now()
// console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)





//so which countup function is better? what does better mean?
    //faster ***
    //less memory-intensive (number of variables and datastructures stored in memory to run this)


//counting operations:
    //rather than counting the exact seconds, which are so variable...lets count the number of simple operations the computer has to perform based on the size of the input
    //example of operations:
        //multiplication
        //addition/subtraction
        //division
        //setting a variable to equal a value (assignments)
        //i++ is actually two operations--> addition and assignment
        //comparisons


//the quicker countUptheLoot function requires a constant of 3 operations regardless of the size of the input--CONSTANT TIME! --> f(n) = 1 ---> O(1) (CONSTANT TIME)

//the slower algo, countUpTo() function requires a number of operations in directly in proportion with n as n grows (O(n))--LINEAR TIME! --> its technically as low as 2n or as high as 5n+2, but we simplify that to n, meaning---> if n doubles, the number of operations will also roughly double.  --> represented as O(n) (LINEAR TIME)




//so what is Big O?
    //Big O notation is a way to formalize fuzzy counting
    //it allows us to talk formally about how the runtime (# of operations) of an algorithm grows as the size of the input grows
    //Constant --> (f(n) = 1) (fastest)
    //Linear --> (f(n)= n) --> O(n)
    //Quadratic (think nested loops) --> (f(n) = n^2) --> O(n^2)
    
    //Logarithmic --> f(n) could be something different from all the above too! (f(n)= nLogn or f(n) = log n)


//nested loop--> as the size of the input increases, the number of operations (aka the time) increases exponentially
function logallpairs(num){
    for(let i =0; i< num; i++){
        for(let j= 0; j<num; j++){
            console.log(i,j)
        }
    }
}

logallpairs(500)


//O(2n)=> O(n)
//O(500)=> O(1)
//O(13n^2)=> O(n^2)
//O(n^2+ 5n +8)=> O(n^2)--> O(n^n)


let x = [3,7,9,13,20,100,110]

// for(let i = 0; i< x.length; i++){
//     if(x[i] ==110){
//         return true
//     }
// }






//more examples

function logAtLeast5(n){
    for(let i = 1; i<=Math.max(5,n); i++){
        console.log(i)
    }
}

//O(n)

function logAtMost5(n){
    for(let i = 1; i<=Math.min(5,n); i++){
        console.log(i)
    }
}

logAtMost5(200000)
//O(1)


//pop quiz
//1. Simplify the big O expression as much as possible -> O(n + 10)
    //answer: O(n)

//2. Simplify the big O expression as much as possible -> O(100 * n) 
    //answer: O(n)

//3. Simply the following big O expression as much as possible - O(25) 
    //answer: O(1)

//4. Simply the following big O expression as much as possible -  O(n^2 + n^3) 
    //a. O(n^2)
    //b. O(n^3)--> CORRECT ANSWER
    //c. O(n)

//5. Simply the following big O expression as much as possible - O(n + n + n + n) 
    //answer O(n)



//further study--> search these terms on youtube university or google ivy league
    //space complexity algorithm
    //time complexity algorithm
    //big o notation
    //






