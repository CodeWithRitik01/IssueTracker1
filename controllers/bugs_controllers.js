const project = require('../models/creating_schema');
const bug = require('../models/bug_schema');



module.exports.bugform = async function(req, res){
   
    return res.render('create_bug',{
        title: "create bugs",
    })
}


module.exports.addToBug = async function(req, res){
    try{
        let Project = await project.findById(req.body.project);
        let Bugss = await bug.create({
           title: req.body.title,
           Description: req.body.Description,
           Author: req.body.Author,
           project: req.body.project
        });
        console.log("this is project", Project);
        console.log("print this", Bugss);
        Project.bug.push(Bugss);
   
        await Project.save();
         
         console.log('new bug created', Bugss);
 
     
 
     return res.redirect('/show/bug');
    }catch(err){
        console.error('Error in creating a bug:', err);
        return res.status(500).send('Error in creating a bug');
    }
   
}

module.exports.destroy = async function(req, res){
    const Bug = await bug.findById(req.params.id);
    console.log(Bug);
    let projectId = Bug.project;
    console.log(projectId);
    await Bug.deleteOne();

    let Project = await project.findByIdAndUpdate(projectId, {$pull: {bug: req.params.id}});
    return res.redirect('/show/bug');
}

module.exports.createBugs = async function(req, res){
    const projects = await project.find({});
    
    const bugs = await bug.find({});

    return res.render('project_bugs', {
        title: "create bugs",
        all_projects: projects,
        all_bugs: bugs
       })
  

  
}