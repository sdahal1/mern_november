//instructions: Given a string, create a function that returns to you a new array containing only the latest instance of each letter from the sentence, without any duplicates. Make it case sensitive first so 'S' and 's' are not considered duplicates

function dedupeStr(str){
    let obj = {}
    for(let i = str.length-1; i>=0; i--){
        obj[str[i]] = i
    }
    let result = Object.keys(obj) //extract the keys from the object and put it into an array
    return result.reverse()

    
}

console.log(dedupeStr("Snaps! crackles! pops!"))// ['S', 'n', 'r', 'a', 'c', 'k', 'l', 'e', ' ', 'o', 'p', 's', '!' ]










