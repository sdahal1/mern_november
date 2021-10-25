const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };



//the old way (es5)
// let fname = person.firstName
// let lname = person.lastName
// let email = person.email

let {firstName:fname, lastName:lname, email} = person //destructuring properties firstName, lastName, email from the object person
console.log(fname, lname, email)


const animals = ['horse', 'french bulldog', 'fish', 'cat', 'bird'];

//the old way(es5)
// dog = animals[1]
// cat = animals[3]
// bird = animals[4]

let [ ,dog, ,cat,bird] = animals 
let [,,,feline] = animals

console.log(cat)
console.log(dog, feline, bird)













