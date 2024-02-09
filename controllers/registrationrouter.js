const express=require("express")

const registrationmodel=require("../model/registrationmodel")

const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

const router=express.Router()

router.post("/registration",async(req,res)=>{
    let { data } = { "data": req.body }
    let password = data.password
    const hashedPassword = await hashPasswordGenerator(password)
    data.password = hashedPassword
    let users = new registrationmodel(data)
    let result =await users.save()
    res.json({
        status:"success"
    })
})

module.exports=router