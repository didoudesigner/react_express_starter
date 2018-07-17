// Import Express
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// Launch express in app const
const app = express();

// Import Mongoose
const mongoose = require('mongoose');

// Set connection
mongoose.connect('mongodb://localhost:27017/stuckblog');

// The routes
const articlesRoutes = require('./api/routes/articles');
const commentsRoutes = require('./api/routes/comments');
const logsRoutes = require('./api/routes/logs');
const menusRoutes = require('./api/routes/meuns');
const signinRoutes = require('./api/routes/signin');
const signupRoutes = require('./api/routes/signup');
const subscriptionsRoutes = require('./api/routes/subscriptions');
const uploadsRoutes = require('./api/routes/uploads');
const usersRoutes = require('./api/routes/users');


// Filters
 // Body Pareser Filters
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
 // Access Filters
    app.use((req, res, next) => {

                // Website you wish to allow to connect
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

                // Request methods you wish to allow
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

                // Request headers you wish to allow
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

                // Set to true if you need the website to include cookies in the requests sent
                // to the API (e.g. in case you use sessions)
                res.setHeader('Access-Control-Allow-Credentials', true);

                // Pass to next layer of middleware
                next();

    });



// Configurations of the routes
app.use('/articles', articlesRoutes);
app.use('/comments', commentsRoutes);
app.use('/logs', logsRoutes);
app.use('/menus', menusRoutes);
// app.use('/signin', signinRoutes);
// app.use('/signup', signupRoutes);
app.use('/subscriptions', subscriptionsRoutes);
app.use('/uploads', uploadsRoutes);
app.use('/users', usersRoutes);

// Handle Errors
app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send("<h1>404 NOT FOUND</h1>");
});

module.exports = app;