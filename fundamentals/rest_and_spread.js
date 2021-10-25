const animals = ['horse', 'french bulldog', 'fish', 'cat', 'bird'];


let [,frenchie,,...restofpets] = animals

console.log(frenchie)
console.log(restofpets)


copyOfanimals = animals //do not make a copy of an array this way, use the rest operator (...) instead use the spread and rest operator 
let [...therealcopy] = animals
// console.log(animals)
// console.log(copyOfanimals)
// console.log(therealcopy)

// console.log(therealcopy==animals)

therealcopy[0] = "Epona"


console.log("***************** updated the copy")
// console.log(animals)
// console.log(copyOfanimals)
// console.log(therealcopy)



const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  
let attemptedpersonCopy = person
let {...theRealPersonCopy} = person
// attemptedpersonCopy.firstName = "Damian" //DO NOT MAKE A "COPY" of AN OBJECT LIKE THIS, THIS WILL NOT MAKE A COPY!!
theRealPersonCopy.firstName = "Damian"


theRealPersonCopy.addresses[0].address = "The galaxy"



console.log(person)
console.log(theRealPersonCopy)


let {firstName,lastName,username, ...restOfProperties} = person

// console.log(firstName)
// console.log(lastName)
// console.log(restOfProperties)







