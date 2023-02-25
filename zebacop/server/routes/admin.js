const express  = require('express')
const multer = require("multer");
const router=express.Router()
const {Project,UpdateProject,getprojects,ProjectDateUpdate,DeleteProject, 
  getAllprojects,getEndedprojects,getOngoingprojects} =require('../controller/adminController')

router.get('/',(req,res)=>{
    res.json("admin")
})


  var storage = multer.diskStorage({
    destination: "./public/images",
    filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
    }
    })
  
const upload = multer({ storage });



router.post('/project',upload.single("image"),Project)//this request came from user. submiting project application

router.get('/getprojects/:status',getprojects)

router.put('/project',UpdateProject)//updating project status and other details

router.put('/projectdateupdate',ProjectDateUpdate)

router.delete('/deleteproject/:id',DeleteProject)


router.get('/getAllprojects',getAllprojects)

router.get('/Ongoingprojects',getOngoingprojects)

router.get('/Ended',getEndedprojects)











module.exports=router