// const arr = [1,2,3,4];


// Object.freeze(arr)

// let [...copyofarr] = arr
// console.log(arr)
// copyofarr.push(5)
// console.log(copyofarr)


const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);



// grocerylistWithThyme = [...groceryList, {"item": "thyme", "haveIngredient": false}]
// console.log(grocerylistWithThyme)

let [...copyOflist] = groceryList
copyOflist.push({"item": "thyme", "haveIngredient": false})

let anothercopy = groceryList.concat([{"item": "thyme", "haveIngredient": false}])

console.log(anothercopy)
  


const numbers = [10, 5, 3, 12, 22, 8];

numbers.sort(function(a,b){
   return a > b ? 1 : -1
})
console.log(numbers)
  