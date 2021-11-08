const mongoose = require("mongoose")

const NinjaSchema = new mongoose.Schema({
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
    }
})

const Ninja = mongoose.model("Ninja", NinjaSchema)

module.exports = Ninja;

