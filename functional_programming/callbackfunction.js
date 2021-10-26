//a callback function is just a function that is given as an input to another function

// setTimeout(function(){
//     console.log("wazzaaaa")
// }, 5000)

// setTimeout(()=>console.log("wazzaaaa"), 5000)

function doThis(){
    console.log("wazzzaaa")
    //more logic can be here
}

setTimeout(doThis, 5000);
