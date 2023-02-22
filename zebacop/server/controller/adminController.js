const { ProjectHelper,UpdateProjectHelper,getProjectHelper,ProjectDateUpdateHelper } = require("../helpers/adminHelper")

// const multer = require("multer");



// var storage = multer.diskStorage({

//     destination: "./public/images",
//     filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//     }
//     })
// var upload = multer({ storage: storage }).array('file');


const Project = async (req, res) => {

    const file = req.file;
    console.log( req.body); 
     console.log(file);

    // try {
    //     ProjectHelper(req.body).then((response) => {
    //         res.status(200).json({ message: "data inserted", response })
    //         console.log("data inserted")
    //     }).catch((err) => {
    //         res.status(500).json({ mess: "server err...", err });
    //     })
    // } catch (err) {
    //     console.log(err)
    // }
}






const UpdateProject = async (req, res) => {
    console.log("upadte project..", req.body)
    
    
    try {
        UpdateProjectHelper(req.body).then((updatedProject) => {
            console.log("upadted ctrl date for response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}


const getprojects =async(req,res)=>{
    console.log("get projects..",req.params.status)

    getProjectHelper(req.params.status).then((projects)=>{
        res.status(200).json({ message: "projects..", projects })

    })
}

const ProjectDateUpdate = async (req, res) => {
    console.log("upadte project..", req.body)
    
    
    try {
        ProjectDateUpdateHelper(req.body).then((updatedProject) => {
            console.log("upadted ctrl date for response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { Project,UpdateProject,getprojects,ProjectDateUpdate }






















// const { ProjectHelper,UpdateProjectHelper,getProjectHelper,ProjectDateUpdateHelper } = require("../helpers/adminHelper")


// const multer = require("multer");



// var storage = multer.diskStorage({

//     destination: "./public/images",
//     filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//     }
//     })
// var upload = multer({ storage: storage }).array('file');


// const Project = async (req, res) => {

    
//     console.log("admin croller", req.body)
//     console.log("image..", req.file)

    
// }






// const UpdateProject = async (req, res) => {
//     console.log("upadte project..", req.body)

//     upload(req, res, function (err) {
        
//         return res.status(200).send(req.file)
      
//       })
    
    
//     // try {
//     //     UpdateProjectHelper(req.body).then((updatedProject) => {
//     //         console.log("upadted ctrl date for response",updatedProject)
//     //         res.status(200).json({updatedProject })
//     //     }).catch((err) => {
//     //         // res.status(500).json({ mess: "server err...", err });
//     //     })
//     // } catch (err) {
//     //     console.log(err)
//     // }
// }


// const getprojects =async(req,res)=>{
//     console.log("get projects..",req.params.status)

//     getProjectHelper(req.params.status).then((projects)=>{
//         res.status(200).json({ message: "projects..", projects })

//     })
// }

// const ProjectDateUpdate = async (req, res) => {
//     console.log("upadte project..", req.body)
    
    
//     try {
//         ProjectDateUpdateHelper(req.body).then((updatedProject) => {
//             console.log("upadted ctrl date for response",updatedProject)
//             res.status(200).json({updatedProject })
//         }).catch((err) => {
//             // res.status(500).json({ mess: "server err...", err });
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// module.exports = { Project,UpdateProject,getprojects,ProjectDateUpdate }