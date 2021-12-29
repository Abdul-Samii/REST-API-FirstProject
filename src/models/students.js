const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:[unique,"Email already exist"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email")
            }
        }
    },
    address:{
        type:String,
        required:true
    }
})

//creating a new collection

const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;