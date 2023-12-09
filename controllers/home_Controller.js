const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');

module.exports.home = async function(req, res){

    

    const projects = await project.find({}).maxTimeMS(20000).exec(function(err, projects) {
        // Handle the result or error
        if(err){
            console.log('sorry');
            return res.status(500).send('Error in creating a bug');

        }
      });
  
   
   
    


    return res.render('home', {
        title:"project | Home",
        all_projects: projects,
       
    });
}
