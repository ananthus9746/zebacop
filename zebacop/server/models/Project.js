const mongoose = require('mongoose')

const ProjectSchema=new mongoose.Schema({
    projectName:{
        type:String
    },
    ProjectType:{
        type:String
    }, 
    ProjectTypeother:{
        type:String
    },
    introduction:{
        type:String
    },
    tokeynSymbol:{
        type:String
    },
    fund:{
        type:String
    },
    yesHowMuch:{
        type:String
    }, 
    publicOrAnonymous:{
        type:String
    }, 
    publicOrAnonymous:{
        type:String
    },
    currentStatus:{
        type:String
    },
    blockchain:{
        type:String
    },
    otherBlockchain:{
        type:String
    },
    img:{
        type:String
    },
    status:{
        type:String,
    },
    finalStatus:{
        type:String,
    },
    created : {
        type:Date
    },
    started : {
        type :Date
    },
    finished :{
        type : Date
    }
},{timestamps:true }
)

module.exports= mongoose.model('Project',ProjectSchema)