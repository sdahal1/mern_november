const NinjaController = require("../controllers/ninja.controller") 

//these are route that go to a function in our controller
module.exports = app =>{
    app.get("/", NinjaController.helloWorld) 

    //find random ninja
    app.get("/api/ninjas/random", NinjaController.findRandomNinja)

    //find all ninjas
    app.get("/api/ninjas", NinjaController.findAllNinjas)

    //create new ninja
    app.post("/api/ninjas",NinjaController.createNinja)

    //find one ninja
    app.get("/api/ninjas/:id", NinjaController.findOneNinja)

    //update a ninja
    app.put("/api/ninjas/:id", NinjaController.updateOneNinja)

    //delete a ninja
    app.delete("/api/ninjas/delete/:id",NinjaController.deleteOneNinja)

    

}