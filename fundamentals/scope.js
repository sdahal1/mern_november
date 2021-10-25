// // var, const, let --> 3 ways to declare variables

// var name = "Lebron James"
// const numChampionships = 4
// const teammates = ['AD', 'Rondo', 'Westbrook']
// var willLakersWin = false

// const numdayInWeek = 7

// teammates.pop()


// // numChampionships = numChampionships + 1
// console.log(teammates)

// var sayHi = function(){
//     console.log("hi")
//     return "Hi"
// }


// function customHello(name){
//     console.log("hello ", name)
//     console.log("num championships is", numChampionships)
//     var secretword = "wazzaaaap"
//     return secretword
// }







// // console.log(customHello("lebron"))


// var student1 = {
//     name: "Chris LaMee",
//     numBelts: 2,
//     homeTeam: "Seahawks"
// }

// // console.log(student1.name)

// // sayHi()

// //scoping---> something (variables and functions) is globally scoped if its not declared inside any function


// function countToNum(num){ //functions create their own scope for variables declared with var
//     let sum = 0
//     for(let i = 0; i< num; i++){
//         let thing = "this is a thing"
//         sum += i
//         console.log(i)
//     }

//     console.log(sum)

//     // console.log(' i outside the for loop is:', i)

// }
// countToNum(10)

// //3 ways to declare variables are: var, let, const
// //all of those above ways to declare variables are globally scoped if they are not inside a function
// //functions create a new scope for "var" declarations -> vars are available outside forloops if they are declared inside a forloop, lets are not
// //for loop and conditionals create a new scope for 'let' and 'const' declarations
// //const is a way to declare a variable that you dont want reassigned to a different value


var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}
  actuallyPrintingNames();
}
printNames(beatles);
                     
