const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Issue_Tracker');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connection to db'));

db.once('open', function(){
    console.log('successfully connected to the database');
})