const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/Issue_Tracker';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
    socketTimeoutMS: 45000, // 45 seconds timeout for socket operations
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connection to db'));

db.once('open', function(){
    console.log('successfully connected to the database');
})