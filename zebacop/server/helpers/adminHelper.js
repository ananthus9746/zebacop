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

const UpdateProjectHelper = async (data, projectId) => {
    console.log("adminhelper...", data.update, projectId)
    try {
        return new Promise(async (resolve, reject) => {

            await Project.findByIdAndUpdate({ _id: projectId }, { $set: { status: data.update } }).then((res) => {
                console.log("updated..", res)
                resolve()
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

            await Project.find({}).then((projects) => {
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