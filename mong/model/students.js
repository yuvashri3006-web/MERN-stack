const mongoose = require("mongoose");
const { type } = require("node:os");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    }
});


const Student = mongoose.model("Apple",studentSchema);


module.exports = Student;