const express  = require('express')
const router=express.Router()
const {Project,UpdateProject,getprojects} =require('../controller/adminController')
// const multer  = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './images')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })




// getprojects
router.get('/',(req,res)=>{
    res.json("admin")
})


router.post('/project',Project)//this request came from user. submiting project application

// router.post('/project',(req,res)=>{

//     console.log("bodyy...",req.body)
//     console.log(req.file)

//     // let file = req.files.file;

//     console.log(req.files);

//     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)


//     // file.mv("./uploads/" +uniqueSuffix+ file.name);

//     // res.send({
//     //     status: "success",
//     //     message: "File is uploaded",
//     //     data: {
//     //         name: file.name,
//     //         mimetype: file.mimetype,
//     //         size: file.size,
//     //     },
//     // });

// })//this request came from user. submiting project application

router.get('/getprojects',getprojects)


router.put('/project',UpdateProject)//updating project status







module.exports=router