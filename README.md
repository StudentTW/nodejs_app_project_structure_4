# nodejs_app_project_structure_4
Node JS App Basic Folder And Project Structure To Build Complex Apps

Node JS Project & Folder Structure

1.	Open our previous app
2.	https://github.com/StudentTW/nodejs_basic_app_REST_methods_3
3.	Add 2 Folders 
          
          config
          controllers
          
4.	Create file in dbConnect.js in config
a.	We move Database connection code to this file 


		    //Add this as we require mongoose module to connect with mongodb
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


5.	Add this line in app.js after moving the code

      	require( './config/dbConnect' );
6.	Create controller.js in controllers folder
7.	Now write all method functions in controller.js

          //First Method, We have already seen in previous apps
          //Its a GET Method with name "welcome" , which executes when app is listening at address "/"  from routes after app           //  server address http://0.0.0.0:8080/
          
          exports.welcome =  function (req, res) {
              res.send('Hello world');
          };

          //Second Method, We have already seen in previous apps
          //Its a GET Method with name "aboutUs" , which executes when app is listening at address "/AboutUs" from routes                // after app server address http://0.0.0.0:8080/AboutUs
          
          exports.aboutUs = function (req, res) {
              res.send('This is my Node JS App');
          };


          //Third Method, We have already seen in previous apps
          //Its a GET Method  with anme "services", which executes when app is listening at address "/Services"  from routes              //after app server address http://0.0.0.0:8080/Services
          
          exports.services = function (req, res) {
              res.send('I Develop Node JS Apps');
          };


          //Fourth Method, We have already seen in previous apps
          //Its a GET Method  with name "contactUs", which executes when app is listening at address "/ContactUs"  from routes            after app server address http://0.0.0.0:8080/ContactUs
          
          exports.contactUs = function (req, res) {
              res.send('You Can contact me at abcd@xyz.com');
          };



9.	exports. is used to make this function avalible to app to access it anywhere after importing this controller.js using require tag.
10.	Now we will link this functions to REST GET Methods as below
11.	Create routes.js in root folder 
12.	Now create REST GET Routes in routes.js
13.	module.exports is used to make this routes available for app to access anywhere in project after imporing it. (14th point is about how to import this)


        module.exports = function(app){
            var appMethods = require('./controllers/controller');

             //Here we setup REST GET routes to allow the methods to execute on specific route.
            //This will call welcome method function  in controller.js when route is http://0.0.0.0:8080/
            app.get('/', appMethods.welcome);

            //This will call aboutUs method  function in controller.js when route is http://0.0.0.0:8080/AboutUs
            app.get('/AboutUs', appMethods.aboutUs);

            //This will call services method function in controller.js when route is http://0.0.0.0:8080/Services
            app.get('/Services', appMethods.services);

            //This will call contactUs method function in controller.js when route is http://0.0.0.0:8080/ContactUs
            app.get('/ContactUs', appMethods.contactUs);

          };

14.	now after creating this add this line in app.js
	
          require('./routes')(app);

15.	The above line will be used to import all routes in the app
16.	Now we have created routes to route all GET requests using the address given in routes and execute the method functions of each respective GET request.
17.	Now save the files and start the server with “npm start”
18.	Now open Browser and navigate to http://0.0.0.0:8080/
                
                Hello world

20.	Now open Browser and navigate to http://0.0.0.0:8080/AboutUs

            This is my Node JS App'

21.	Check remaining GET Methods
22.	We will discuss Post REST Methods in next project



