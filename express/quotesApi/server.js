const express = require("express") //import express library
const app = express() //initialize express and store it in a variable
const port = 8000 //indicate the port we want to run our express application (which is basically just an api we are building)

app.use(express.json()) //so that the application can parse json and read information sent in post requests
app.use(express.urlencoded({extended:true})) //so that the application can read contents of the object that is sent in post requests

//using an array of objects to represent our data because we don't have a database yet
let quotesDBBootleg = [
    {content:"Success is not final, failure is not fatal, it is the courage to continue that counts.", author:"Winston Churchill"},
    {content:"Success is the ability to go from one failure to the next with no loss of enthusiasm", author:"Winston Churchill"},
    {content:"Not my pig, not my farm", author:"Ol McDonalds"},
    {content:"A thousand mile journey begins with one step", author:"Confucious"},
    {content:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", author:"Albert Einstein"}
]

app.get("/", (req,res)=>{
    res.json({status:"ok", msg:"hello world"}) //when the route "/" is requested, respond with json object
})

//retrieve all the quotes--> GET METHOD
app.get("/api/quotes", (req,res)=>{
    res.json({
        numQuotes: quotesDBBootleg.length,
        results:quotesDBBootleg
    })
})

//retrieve one quote at a certain index--> GET METHOD
app.get("/api/quotes/:idx", (req,res)=>{
    res.json({
        results:quotesDBBootleg[req.params.idx] //req.params is how you access he variables your route, like :idx
    })
})

//insert one quote--> POST METHOD--> data is being sent to api to create something new
app.post("/api/quotes", (req,res)=>{
    console.log("request.body is the incoming information containing a new quote", req.body)
    quotesDBBootleg.push(req.body)
    res.json({
        msg: "OK, you added a quote. Good job!",
        results: quotesDBBootleg
    })
})

//update a quote --> PUT method--> data is being sent to api to update existing quote
app.put("/api/quotes/:idx", (req,res)=>{
    //req.params.idx represents the index number of the quote we want to update
    //req.body represents the content sent to update the quote with
    quotesDBBootleg[req.params.idx] = req.body
    res.json({
        msg:"successfully updated",
        results: quotesDBBootleg
    })
})


//delete a quote--> DELETE METHOD
app.delete("/api/quotes/:idx", (req,res)=>{
    //to remove a value at a specific index of an array, use .splice()
    quotesDBBootleg.splice(req.params.idx, 1)
    res.json({
        count:quotesDBBootleg.length,
        msg:"successfully deleted one quote",
        results: quotesDBBootleg
    })
})











app.listen(port, ()=>console.log(`listening on port ${port}`)) //tells the application to listen for requests on port 8000

