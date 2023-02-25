const Project = require('../models/Project')


// let projectData={
//     Img:file.filename,
//     data: req.body
//  }

const ProjectHelper = async (projectData) => {

        console.log("data..",projectData.data)
        let Img=projectData.Img
        let formData= projectData.data;

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
                currentStatus: formData.currentStatus,
                blockchain: formData.blockchain,
                otherBlockchain: formData.otherBlockchain,
                projectImage:Img,
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
    console.log("update adminhelper project id...", projectUpdate.projectId)
    // console.log("start date 1..", projectUpdate.date[0])
    // console.log("end date 2..", projectUpdate.date[1])
    // console.log("contract id..", projectUpdate.contactId)
    // startDate:projectUpdate.date[0],
    // endDate:projectUpdate.date[1],
    // contractid: projectUpdate.contactId



    try {
        return new Promise(async (resolve, reject) => {
            await Project.findByIdAndUpdate({ _id: projectUpdate.projectId },
                {
                    $set: {
                        status: projectUpdate.status,
                    }
                }, { new: true }).then((updatedProject) => {
                    console.log("updated status project..", updatedProject)
                    resolve(updatedProject)
                })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const getProjectHelper = async (status) => {
    console.log("getproject helper")
    try {
        return new Promise(async (resolve, reject) => {

            await Project.find({ status: status }).then((projects) => {
                console.log("geted projects..", projects)
                resolve(projects)
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}


const ProjectDateUpdateHelper = async (projectUpdate) => {
    console.log("update adminhelper project id...", projectUpdate.projectId)
    console.log("start date 1..", projectUpdate.date[0])
    console.log("end date 2..", projectUpdate.date[1])
    console.log("contract id..", projectUpdate.contactId)
   
    try {
        return new Promise(async (resolve, reject) => {

            await Project.findByIdAndUpdate({ _id: projectUpdate.projectId },
                {
                    $set: {
                        // finalStatus: projectUpdate.finalStatus,
                        status: projectUpdate.finalStatus,
                        startDate:projectUpdate.date[0],
                        endDate:projectUpdate.date[1],
                        contractid: projectUpdate.contactId
                    }

                }, { new: true }).then((updatedProject) => {

                    console.log("updated status project..", updatedProject)
                    resolve(updatedProject)
                })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const DeleteHelper =async (projectId)=>{
    console.log("doc id for delete..",projectId)
    try{

        return new Promise(async(resolve,reject)=>{

            await Project.findOneAndDelete({_id:projectId},{ new: true }).then((deleted)=>{
                console.log("deleted doc..",deleted)
                resolve(deleted)
            })
        })
       
    }
    catch(err){
        console.log(err)
    }
}

const getAllprojectsHelper=async (data)=>{
    console.log("all project.. hlp",data)
    try{


        return new Promise(async (resolve, reject) => {
            await Project.find({ status:["started", "ended"] } ).then((projects) => {
                console.log("geted started and ended projects..", projects)
                resolve(projects)
            })
        })


    }catch(err){
        console.log("err",er)
    }
}


const getOngoingprojectsHelper=async ()=>{
    console.log("STARTED.. hlp")
    try{


        return new Promise(async (resolve, reject) => {
            await Project.find({ status:["started"] } ).then((projects) => {
                console.log("geted started projects..", projects)
                resolve(projects)
            })
        })


    }catch(err){
        console.log("err",er)
    }
}

const getEndedprojectsHelper=async ()=>{
    console.log("ended.. hlp")
    try{


        return new Promise(async (resolve, reject) => {
            await Project.find({ status:["ended"] } ).then((projects) => {
                console.log("geted ended projects..", projects)
                resolve(projects)
            })
        })


    }catch(err){
        console.log("err",er)
    }
}




module.exports = { ProjectHelper, UpdateProjectHelper, getProjectHelper, ProjectDateUpdateHelper,DeleteHelper ,getAllprojectsHelper,getOngoingprojectsHelper,getEndedprojectsHelper}