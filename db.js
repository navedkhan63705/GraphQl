const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://navedkh637505_db_user:12121212@cluster0.zsvg07u.mongodb.net/', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

module.exports = db;