const NinjaController = require("../controllers/ninja.controller") 
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');




const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter }); //configure the upload setting with the storage and file filter

// console.log("STORAGE IS THIS--->", storage)
// console.log("file filter is this--->", fileFilter)
// console.log("upload is this--->", upload)




//these are route that go to a function in our controller
module.exports = app =>{



    app.get("/", NinjaController.helloWorld) 

    //find random ninja
    app.get("/api/ninjas/random", NinjaController.findRandomNinja)

    //find all ninjas
    app.get("/api/ninjas", NinjaController.findAllNinjas)

    //create new ninja
    app.post("/api/ninjas",upload.single("photo"), NinjaController.createNinja)

    //find one ninja
    app.get("/api/ninjas/:id", NinjaController.findOneNinja)

    //update a ninja
    app.put("/api/ninjas/:id", NinjaController.updateOneNinja)

    //delete a ninja
    app.delete("/api/ninjas/delete/:id",NinjaController.deleteOneNinja)

    

}