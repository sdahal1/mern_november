//https://www.rapidtables.com/convert/number/binary-to-decimal.html

const binaryToDecimal = (bin) => {
    let decimal = 0 
    bin = bin.toString()
    console.log(bin.length)
    for(let i = 0; i < bin.length; i++){
        bin[i] == 1 ? decimal += Math.pow(2, bin.length-i-1) : ''
    }
    return decimal
}


binaryToDecimal("101100") //44



const binaryToDecimal = (str) =>{
    let result = 0
    // let counter = 0
    for(let i = str.length-1; i>=0; i--){
        if(str[i]!=0){
            result += (2**(str.length-1-i))
        }
        // counter++
    }
    return result
}


console.log(binaryToDecimal('101100'))