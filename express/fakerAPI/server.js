const express = require("express") //import express library
const app = express() //initialize express and store it in a variable
const port = 8000 //indicate the port we want to run our express application (which is basically just an api we are building)

app.use(express.json()) //so that the application can parse json and read information sent in post requests
app.use(express.urlencoded({extended:true})) //so that the application can read contents of the object that is sent in post requests

const faker = require('faker'); //import faker library

class User{
    constructor(){
        this.id = faker.datatype.uuid() 
        this.firstname = faker.name.firstName()
    }
}


app.get("/api/faker", (req,res)=>{
    let newUser = new User()
    res.json({
        results: newUser
    })
})






app.listen(port, ()=>console.log(`listening on port ${port}`)) //tells the application to listen for requests on port 8000

