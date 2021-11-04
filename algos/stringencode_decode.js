const encode = (str) =>{
    let result = str[0]
    let currentCharacter = str[0]
    let total = 1
    for(let i = 1; i<str.length; i++){
        if(str[i] == currentCharacter){
            total+=1
        }
        else {
            result+=total
            total=1
            currentCharacter = str[i]
            result += currentCharacter
        }
    }
    result+=total
    return result
}

console.log(encode('aaabbcdddd'))

const decode = (str) => {
    let output = ''
    currentCharacter = str[0]
    for(let i = 1; i<str.length; i+=2){
        output += currentCharacter.repeat(parseInt(str[i]))
        currentCharacter = str[i+1]
    }
    console.log(output)
}


decode('a2b3c1')


const decodeWithBigNumbers = (str) => {
    let output = ''
    currentCharacter = str[0]
    num = ''
    for(let i = 1; i<str.length; i++){
        if(!isNaN(str[i])){
            num += str[i]
        }
        else{
            output += currentCharacter.repeat(parseInt(num))
            currentCharacter = str[i]
            num = ''
        }
    }
    output += currentCharacter.repeat(parseInt(num)) 
    console.log(output)
}

decodeWithBigNumbers('a12b10c3')