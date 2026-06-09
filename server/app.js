const express=require('express');
const connectionData = require('./Config/Config.js');
const Router_Data = require('./Router/Routers.js');
const dotenv=require('dotenv').config({quiet:true})
const cors=require('cors')
const app=express();
const port=process.env.PORT ||3000;

// built-in middlewares
app.use(express.json()) //this is for json data
app.use(express.urlencoded({extended:true})) // this is for form data


// cors
app.use(cors()) //interaction with FE and BE

// router middleware
app.use("/api",Router_Data)

app.listen(port,()=>{
    console.log(`server is runing on the http://localhost:${port}`)
})
connectionData;