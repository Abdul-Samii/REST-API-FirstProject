const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-api")
.then(()=>{

    console.log("Conencted successfully")
})
.catch((e)=>{
    console.log("An error! failed to connect");
})