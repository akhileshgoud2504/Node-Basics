const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hi,In Home Page Bro..!</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hola,In About Page Bro..!</h1>")
})

app.listen("2000",()=>console.log("Running local host on 2000 buddy...!"))