const { ProjectHelper,UpdateProjectHelper,getProjectHelper } = require("../helpers/adminHelper")

const Project = async (req, res) => {
    console.log("admin croller", req.body)
    // console.log("image..", req.file)


    try {
        ProjectHelper(req.body).then((response) => {
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
    console.log("get projects..")
    getProjectHelper().then((projects)=>{
        res.status(200).json({ message: "projects..", projects })

    })
}

module.exports = { Project,UpdateProject,getprojects }