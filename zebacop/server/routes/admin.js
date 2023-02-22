const express  = require('express')
const router=express.Router()
const {Project,UpdateProject,getprojects,ProjectDateUpdate} =require('../controller/adminController')

router.get('/',(req,res)=>{
    res.json("admin")
})








const multer = require("multer");



const upload = multer({ _dir: "uploads" });


router.post('/project',upload.single("image"),Project)//this request came from user. submiting project application


router.get('/getprojects/:status',getprojects)


router.put('/project',UpdateProject)//updating project status and other details


router.put('/projectdateupdate',ProjectDateUpdate)





module.exports=router