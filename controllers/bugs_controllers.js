const project = require('../models/creating_schema');
const bug = require('../models/bug_schema');

module.exports.createBugs = async function(req, res){
    const projects = await project.find({});
    
    const bugs = await bug.find({});
   return res.render('project_bugs', {
    title: "create bugs",
    all_projects: projects,
    all_bugs: bugs
   })
}

module.exports.bugform = async function(req, res){
   
    return res.render('create_bug',{
        title: "create bugs",
    })
}


module.exports.addToBug = async function(req, res){

   
       const Bugs = await bug.create(req.body);
       const Project = await project.findById(req.body.project);
       Project.bug.push(Bugs);
       await post.save();
        
        console.log('new bug created', Bugs);

    

    return res.redirect('/show/bug');
}