
// Moving Our First Method that we wrote directly in app.js, We just methods here not routing.
//
//REST GET method at address "/"
// app.get('/', function (req, res) {
//     //req is data as input for this GET REST Method
//     //res is data is output to send back with this GET REST Method
//     res.send('Hello world');
//     //res.send is method to send the response as output
//
// });


//exports will use this method to be available in our app scope to use in any where.


//First Method, We have already seen in previous apps
//Its a GET Method with name "welcome" , which executes when app is listening at address "/"  from routes after app server address http://0.0.0.0:8080/
exports.welcome =  function (req, res) {
    res.send('Hello world');
};

//Second Method, We have already seen in previous apps
//Its a GET Method with name "aboutUs" , which executes when app is listening at address "/AboutUs" from routes after app server address http://0.0.0.0:8080/AboutUs
exports.aboutUs = function (req, res) {
    res.send('This is my Node JS App');
};


//Third Method, We have already seen in previous apps
//Its a GET Method  with anme "services", which executes when app is listening at address "/Services"  from routes after app server address http://0.0.0.0:8080/Services
exports.services = function (req, res) {
    res.send('I Develop Node JS Apps');
};


//Fourth Method, We have already seen in previous apps
//Its a GET Method  with name "contactUs", which executes when app is listening at address "/ContactUs"  from routes after app server address http://0.0.0.0:8080/ContactUs
exports.contactUs = function (req, res) {
    res.send('You Can contact me at abcd@xyz.com');
};



