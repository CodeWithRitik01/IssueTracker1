const project = require('../models/creating_schema');
const Bug = require('../models/bug_schema');

module.exports.home = async function(req, res){
    const projects = await project.find({})
    .sort('-createdAt')
    .populate({
        path: 'bug'
    });
    

    const bug = await Bug.find({});

    return res.render('home', {
        title:"project | Home",
        all_projects: projects,
        all_bugs: bug
    });
}
