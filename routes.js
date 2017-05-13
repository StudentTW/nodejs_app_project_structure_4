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