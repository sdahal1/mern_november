//Write a function that accepts an integer and outputs the binary version of that integer


//https://www.rapidtables.com/convert/number/decimal-to-binary.html

const dec2binary = (num)=>{
    let remainder = "";
    let quotient = num;
    while(quotient > 0){
        remainder = quotient%2 + remainder;
        quotient = Math.floor(quotient / 2);
    }
    return remainder;
}


dec2binary(58)//111010