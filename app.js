const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const registrationrouter=require("./controllers/registrationrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://melgith2002:melgith2002@cluster0.vqeinn7.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/resume",registrationrouter)

app.listen(2006,()=>{
    console.log("localhost running")
})