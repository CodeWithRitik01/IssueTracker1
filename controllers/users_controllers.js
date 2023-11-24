const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');




module.exports.addToDB = async function(req, res){
    const user = await project.create(req.body);
    console.log('new project created', user);
    return res.redirect('/');
}

module.exports.create = async function(req, res){
    const Project = await project.findById(req.params.id)
    .populate({
        path: 'Bugs'
    });;

    return res.render('newProject', {
        title: "Create Project",
        
    })
}

module.exports.destroy = async function(req, res){
    const Project = await project.findById(req.params.id);
    await project.deleteOne();
    return res.redirect('/');
}

