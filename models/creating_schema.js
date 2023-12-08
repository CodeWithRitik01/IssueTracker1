const mongoose = require('mongoose');

const creatingProject = new mongoose.Schema({
    ProjectName:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    bug: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bugs'
        }
    ],
},{
    timestamps: true
});

const Project = mongoose.model('Project', creatingProject);

module.exports = Project;