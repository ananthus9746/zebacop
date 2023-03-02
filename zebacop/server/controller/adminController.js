const { ProjectHelper,UpdateProjectHelper,getProjectHelper,ProjectDateUpdateHelper,
    DeleteHelper,getAllprojectsHelper,getOngoingprojectsHelper,getEndedprojectsHelper,editprojectProjectHelper,getSingleProjectHelper,projectEditUpdateHelper} = require("../helpers/adminHelper")

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
     console.log(file.filename);
     let projectData={
        Img:file.filename,
        data: req.body
     }

    try {

        ProjectHelper(projectData).then((response) => {
            res.status(200).json({ message: "data inserted", response })
            console.log("data inserted")
        }).catch((err) => {
            res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
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

// ----------------DATE AND CONTRACT ID UPDATE------------------
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
// ----------------------------------------------------------------


// ---------------------------DELETE---------------------------------
const DeleteProject=async (req,res)=>{
    console.log("delete..id",req.params.id)
    try{
        DeleteHelper(req.params.id).then((deleted) => {
            console.log("upadted ctrl date for response",deleted)
            
            res.status(200).json({deleted })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    }catch(err){
        console.log(err)
    }
}
// -----------------------GET ALL PROEJECTS USER-----------------------//

const getAllprojects=async (req,res)=>{
    console.log("allproject ctrl user..",req.body)

    try{

        getAllprojectsHelper(req.params.status).then((projects)=>{
            res.status(200).json({ message: "projects..", projects })
    
        }) 

    }catch(err){
        console.log("err",err)
    }
}

const getOngoingprojects=async (req,res)=>{
    console.log("Ongoing ctrl user..",req.body)

    try{

        
        getOngoingprojectsHelper(req.params.status).then((projects)=>{
            res.status(200).json({ message: "ongoing project..", projects })
    
        }) 


    }catch(err){
        console.log("err",err)
    }
}

const getEndedprojects=async (req,res)=>{
    console.log("Ended ctrl user..",req.body)

    try{



        getEndedprojectsHelper(req.params.status).then((projects)=>{
            res.status(200).json({ message: "Ende projects..", projects })
    
        }) 


    }catch(err){
        console.log("err",err)
    }
}



const editproject =async(req,res)=>{
    console.log("get projects..",req.body)

    editprojectProjectHelper().then((projects)=>{
        res.status(200).json({ message: "edit projects..", projects })

    })
}





const getSingleProjects= (req,res)=>{
    console.log("single id ctrl user..",req.params.id)

    try{

        getSingleProjectHelper(req.params.id).then((projects)=>{
            res.status(200).json({ message: " single projects..", projects })
    
        }) 

    }catch(err){
        console.log("err",err)
    }
}



const projectEditUpdate = async (req, res) => {
    console.log("upadte project ctr..", req.body)

    const file = req.file;
    console.log( req.body); 
    console.log("file img..",file);



    try {
        projectEditUpdateHelper(req.body,file).then((updatedProject) => {
            console.log("edit upadted ctrl date for response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}



module.exports = { Project,UpdateProject,getprojects,ProjectDateUpdate,DeleteProject,
    getAllprojects,getOngoingprojects,getEndedprojects,editproject ,getSingleProjects,projectEditUpdate}






















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