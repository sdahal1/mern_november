const express = require("express");
const mongoose = require("mongoose")

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))



//these imports of mongoose.config and the routes should be below the "app.use() commands above"
require("./server/config/mongoose.config")

require("./server/routes/ninja.routes")(app)



app.listen(port, ()=>{console.log(`listening on port ${port} `)})

