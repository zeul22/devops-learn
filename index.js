import express from "express"


const app=express();

app.get("/test",(req,res)=>{
    res.send("You are getting this value!")
})

app.listen(8080,()=>{
    console.log("Server is running on 8080")
})