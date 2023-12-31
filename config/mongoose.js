const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/Issue_Tracker';
mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connection to db'));

db.once('open', function(){
    console.log('successfully connected to the database');
})