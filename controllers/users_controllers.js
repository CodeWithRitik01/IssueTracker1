const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');




module.exports.addToDB = async function(req, res){
    const user = await project.create(req.body);
   
    return res.redirect('/');
}

module.exports.create = async function(req, res){
    const Project = await project.findById(req.params.id);
  

    return res.render('newProject', {
        title: "Create Project",
        all_projects: Project,

    })
}

module.exports.destroy = async function(req, res){
    const Project = await project.findById(req.params.id);
    await project.deleteOne();

    await Bug.deleteMany({project: req.params.id}).exec();
    return res.redirect('/');
}

module.exports.filter = async function(req, res){
     const Project = await project.find({});

     let arr = [];
     for(let i = 0; i<Project.length; i++){
        if(req.params.Author === Project[i].Author){
           let j = 0;
            arr[j] = Project[i];
            j++;
        }

     }
   
    return res.render('filter', {
        title: "filter author",
        array: arr
        
    })
}