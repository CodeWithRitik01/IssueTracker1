const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');



// to add project detail in database
module.exports.addToDB = async function(req, res){
    try{
        const user = await project.create({
            ProjectName: req.body.ProjectName,
            Description: req.body.Description,
            Author: req.body.Author
        });
        await user.save();
   
        return res.redirect('/');
    }catch(err){
        res.send(err.message);

    }
 
}

// to create project page 
module.exports.create = async function(req, res){
    const Project = await project.findById(req.params.id);
  

    return res.render('newProject', {
        title: "Create Project",
        all_projects: Project,

    })
}

// to delete project detail from db and from screen
module.exports.destroy = async function(req, res){
    const Project = await project.findById(req.params.id);
    await project.deleteOne();

    await Bug.deleteMany({project: req.params.id}).exec();
    return res.redirect('/');
}


// it will filter project on the basis of Author
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