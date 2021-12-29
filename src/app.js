const express = require('express');
require('./db/conn');


const app = express()
const port = 2000;

app.get("/",(req,res)=>{
    res.send("Hello from the other side");
})

app.post("/students",(req,res)=>{
    res.send("this is a student api");
})

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
})