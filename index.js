const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const db = require('./config/mongoose');
const Project = require('./models/creating_schema');
const Bugs = require('./models/bug_schema');

const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static('./assets'));


app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in the running the server : ${err}`);

    }
    console.log(`Server in running on port: ${port}`);
})