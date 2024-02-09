const mongoose=require("mongoose")

const registrationschema=new mongoose.Schema(
    {
        name:String,
        email:String,
        address:String,
        phno:String,
        password:String
    }
)

module.exports=mongoose.model("registration",registrationschema)