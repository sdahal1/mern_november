//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS

function one() {
    return 1;
    
}

function two( num ) {
    return num*2;
}

let result = one() + one()
// console.log(result)



let anothaone = two( two( two( one() ) ) );

console.log(anothaone)

//one()-->1
//two(1)-->2
//two()-->4
//two()

// 8;


two(one())