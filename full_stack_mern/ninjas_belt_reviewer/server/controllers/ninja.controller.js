const Ninja = require("../models/ninja.model")


module.exports.helloWorld = (req, res)=>{
    res.json({msg: "hello belt reviewer"})
}

module.exports.findAllNinjas = (req,res)=>{
    Ninja.find()
        .then(allNinjas =>{
            res.json({results: allNinjas })
        })
        .catch(err=>res.json({err:err}))
}

module.exports.createNinja = (req,res)=>{
    Ninja.create(req.body)
        .then(newlyCreatedNinja =>{
            res.json({results: newlyCreatedNinja })
        })
        .catch(err=>res.json({err:err}))
}

module.exports.findOneNinja = (req,res)=>{
    console.log("TRYING TO FINDD ONE NINJA!")
    Ninja.findOne({_id:req.params.id })
        .then(foundNinja =>{
            res.json({results: foundNinja })
        })
        .catch(err=>res.json({err:err}))
}

module.exports.updateOneNinja = (req,res)=>{
    Ninja.findOneAndUpdate(
        {_id:req.params.id }, //locate which ninja we want to update
        req.body, //info from the form we using to update the ninja with
        {new:true, runValidators:true}
        )
    .then(updatedNinja =>{
        res.json({results: updatedNinja })
    })
    .catch(err=>res.json({err:err}))
}


module.exports.deleteOneNinja = (req,res)=>{
    Ninja.deleteOne({_id:req.params.id })
        .then(deletedNinja =>{
            res.json({results: deletedNinja })
        })
        .catch(err=>res.json({err:err}))
}


module.exports.findRandomNinja = (req,res)=>{
    console.log("trying to find a random ninja")
    //find the length of the array minus 1 and generate a random number between 0-lastIndex

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //run the find all method to get a list of all the ninjas to pick a random index number from
    Ninja.find()
        .then(allNinjas =>{
            console.log("all ninjas is this-->", allNinjas)

            const randomIndex= getRandomInt(allNinjas.length) //this gives a random number from 0 to the last index of the array

            res.json({results: allNinjas[randomIndex]}) //respond with json of the allNinjas array at a random index--> giving a random ninja object

        })
        .catch(err=>res.json({err:err}))


    
    
}
