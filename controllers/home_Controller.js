const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');

module.exports.home = async function(req, res){

    const bug = await Bug.find({});

    const projects = await project.find({});
  
   
   
    


    return res.render('home', {
        title:"project | Home",
        all_projects: projects,
        all_bugs: bug
    });
}
