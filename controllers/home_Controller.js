const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');

//it is a homepage
module.exports.home = async function(req, res){

    

    const projects = await project.find({}).sort('-createdAt');
   
    


    return res.render('home', {
        title:"project | Home",
        all_projects: projects,
       
    });
}
