const express = require("express"); //we are using express to create an web api
const mongoose = require("mongoose") //talks to mongo db and we don't have to do mogo db commands
const cors = require("cors") //

const app = express(); //create an instance of express and store it in the variable "app"
const port = 8000;

app.use(express.json()) //allows the application to read json
app.use(express.urlencoded({extended:true})) //allows the application to extract form information
app.use(cors()) //this allows the express application (backend) to share information and resources with the front end(react app client)

// app.use(express.json(), express.urlencoded({extended:true}), cors()) --> you can do this too instead


//these imports of mongoose.config and the routes should be below the "app.use() commands above"
require("./server/config/mongoose.config")

require("./server/routes/ninja.routes")(app) //passing the app object to the routes so the routes can do this like "app.get, app.put, app.post, etc;"




app.listen(port, ()=>{console.log(`listening on port ${port} `)}) //app listening for requests to a certain port--> 8000

