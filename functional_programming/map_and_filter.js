const values = [1, 2, 3, 4, 5];

// for(let i = 0; i<values.length; i++){
//     values[i] = values[i]*2
// }

result = values.map((x)=>x*2)

console.log(result)

evenNums = values.filter(x=> x%2==0)
console.log(evenNums)

