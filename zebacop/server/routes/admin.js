const express  = require('express')
const router=express.Router()




router.get('/',(req,res)=>{
    res.json("admin")
})
router.post('/application',(req,res)=>{
    console.log("applicaion recieved..",req.body)
    res.json("admin")
})






module.exports=router