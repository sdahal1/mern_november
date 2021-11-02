//rotate string--> given a string and a number, return a string that is the rotated version of the original by x number of characters


function rotateString(string,num){
    // blank string for output
    let output = "";
    // rotating more than the number of letters in teh string doesn't matter, so use modulo to get the remainder
    let rotations = num%string.length;
    // loop to grab letters from teh back of the word and move to the front based on teh number of rotations
    for (let i = 1; i <= rotations; i++) {
        output = string[string.length-i] + output;
    }
    // loop to add the remainder of the word
    for (let i = 0; i < string.length - rotations; i++) {
        output += string[i];
    }
    // return the output string
    return output;

}


// rotateString("hello", 2) //"lohel"
    //1st rotation- ohell
    //2nd rotation- lohel
// rotateString("steph curry is best shooter of all time", 4) //"timesteph curry is best shooter of all"
    //1st rotation - "esteph curry is best shooter of all tim"
    //2nd rotation - "mesteph curry is best shooter of all ti"
    //3rd rotation - "imesteph curry is best shooter of all t"
    //4th rotation - "timesteph curry is best shooter of all "


// rotateString("them roots tho", 6)



//bonus- isRotation-->given two strings, return a boolean on if they are rotations of one another
function isRotation(str1, str2){
    //if the two strings are not equal lenghts, then they are not rotations of on another
    if(str1.length != str2.length){
        return false
    }
    //rotate one string string.length number of times
    for(let i = 0; i< str1.length; i++){
        console.log(rotateString(str2,i))
        //if at anypoint rotateString(str2,i) matches string 1 then return true
        if(rotateString(str2,i) == str1){
            console.log("i is this-->", i )
            return true
        }
    }
    return false



}

console.log(isRotation("hello", "lohel"))//true
    //llohe  != hello
    //elloh != hello
    //hello == hello-> 
console.log(isRotation("abcd", "dacc")) //false

    //cdac != abcd
    //ccda != abcd
    //accd != abcd
    //dacc != abcd


