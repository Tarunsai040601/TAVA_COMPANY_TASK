const mongoose=require('mongoose')
const dotenv=require('dotenv').config({quiet:true})
const connectionDatabase=async()=>{
    const data=await mongoose.connect(process.env.DATAURL,{dbName:process.env.DB_NAME})
    try {
        console.log(`data base connected sucessfully `)
    } catch (error) {
        console.log(`data base issue`)
    }
}
const connectionData=connectionDatabase()
module.exports=connectionData