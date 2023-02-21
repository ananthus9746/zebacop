const Project = require('../models/Project')
const ProjectHelper = async (formData) => {
    try {
        return new Promise(async (resolve, reject) => {
            console.log("promis adminhelper...", formData)
            console.log("promise",)

            const project = new Project({
                projectName: formData.projectName,
                ProjectType: formData.ProjectType,
                introduction: formData.introduction,
                tokeynSymbol: formData.tokeynSymbol,
                fund: formData.fund,
                yesHowMuch: formData.yesHowMuch,
                publicOrAnonymous: formData.publicOrAnonymous,
                currentStatus: formData.currentStatus,
                blockchain: formData.blockchain,
                otherBlockchain: formData.otherBlockchain,
                status: "pending",
            })

            await project.save().then((project) => {
                console.log("saved project..", project)
                resolve({ message: "Project saved sucessfully.." })
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const UpdateProjectHelper = async (projectUpdate) => {
    console.log("update adminhelper...", projectUpdate)
    try {
        return new Promise(async (resolve, reject) => {

            await Project.findByIdAndUpdate({ _id:projectUpdate.projectId }, { $set: { status: projectUpdate.status } },{new: true}).then((updatedProject) => {
                console.log("updated status project..", updatedProject)
                resolve(updatedProject)
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}
const  getProjectHelper=async()=>{
    console.log("getproject helper")
    try{
        return new Promise(async (resolve, reject) => {

            await Project.find({status:'pending'}).then((projects) => {
                console.log("geted projects..", projects)
                resolve(projects)
            })
        }) 
    }
    catch(err){
        console.log(err)
    }
}
module.exports = { ProjectHelper, UpdateProjectHelper,getProjectHelper }