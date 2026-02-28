let mongoose=require("mongoose")


let connectDB=async()=>{
    try{

        await mongoose.connect("mongodb://localhost:27017/steve")
        console.log("Database connected successfully")
    }

    catch(err){
        console.log(err.message);

    }
}

module.exports=connectDB;