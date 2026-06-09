const express=require('express');
const { getController, postController } = require('../Controller/controller.js');
const Router_Data=express.Router()
Router_Data.get("/",getController)

Router_Data.post("/chat",postController);

module.exports=Router_Data