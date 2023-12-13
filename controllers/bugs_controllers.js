const project = require('../models/creating_schema');
const bug = require('../models/bug_schema');



// it will create new bug in database
module.exports.addToBug = async function(req, res){
    try{
        let Project = await project.findById(req.body.project);
        if(Project){
            let Bugss = await bug.create({
                title: req.body.title,
                Description: req.body.Description,
                Author: req.body.Author,
                labels: req.body.label,
                project: req.body.project
             });
             Project.bug.push(Bugss);
             await Project.save();
        
        }
     return res.redirect('/show/bug');
    }catch(err){
        console.error('Error in creating a bug:', err);
        return res.status(500).send('Error in creating a bug');
    }
   
}

// funtion to delete the bug
module.exports.destroy = async function(req, res){
    const Bug = await bug.findById(req.params.id);
    let projectId = Bug.project;
    await Bug.deleteOne();

    let Project = await project.findByIdAndUpdate(projectId, {$pull: {bug: req.params.id}});
    return res.redirect('/show/bug');
}


// this will redirect and render important things to Project's bug page
module.exports.createBugs = async function(req, res){
    const projects = await project.find({})
    .populate('bug')
    .populate({
     path: 'bug'
    });
    

    return res.render('project_bugs', {
        title: "create bugs",
        Project: projects,
       })
  

  
}