const mongoose = require('mongoose');

const creatingBug = new mongoose.Schema({
    title:{
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
   project:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
   }
},{
    timestamps: true
});

const Bugs = mongoose.model('Bugs', creatingBug);

module.exports = Bugs;
