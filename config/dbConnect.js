
// added this to import mangoose
var mongoose = require('mongoose');

// Declare Monogo DB  URL that we created as per tutorial
// Replace it with your Mongodb Url

var url='mongodb://admin:admin@ds137801.mlab.com:37801/sampledb1234';

// Connection to Mongo DB with connection url using mongoose

mongoose.connect(url);

// Check DB Connection Status

var db = mongoose.connection;
db.on('error', function callback(err) {console.log("Database connection failed. Error: " + err);});
db.once('open', function callback() {console.log("Database connection successful.");});


