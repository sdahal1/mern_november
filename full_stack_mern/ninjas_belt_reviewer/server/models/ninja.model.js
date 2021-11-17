const mongoose = require("mongoose")

const NinjaSchema = new mongoose.Schema({ //creating instructions for a collection (table) 
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters"]
    },
    numProjects:{
        type: Number,
        required: [true, "Number of Projects is required!"]
    },
    gradDate:{
        type: Date,
        required: [true, "Graduation date is required!"]
    },
    isVet:{
        type: Boolean
    },
    profilePicUrl: {
        type: String
    },
    photo: {
        type: String
    }

})

const Ninja = mongoose.model("Ninja", NinjaSchema) //registering the instruction for creating a table above as a table named "Ninja"

module.exports = Ninja; //exporting the Ninja object which represents the ninja table. We are exporting this so the ccontroller knows about this object so it can use this object to CRUD ninjas


