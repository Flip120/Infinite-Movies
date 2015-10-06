var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var MongoClient = require('mongodb').MongoClient;
var database;

var gitHubData = require('./data/auth-data.json').github;

var configRoutes = require('./routes/config');
var renderRoutes = require('./routes/render');
var movieRoutes = require('./routes/movies');
var authRoutes = require('./routes/auth')(passport);

function initializePassport(){
    passport.use(new GithubStrategy({
        clientID: gitHubData.clientId,
        clientSecret: gitHubData.clientSecret,
        callbackURL: 'http://localhost:3000/auth/callback'
    }, function(accessToken, refreshToken, profile, done){

        process.nextTick(function () {
            done(null, {
                accessToken: accessToken,
                profile: profile
            });
        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
}

function connectToDatabase(){

    var dbData = require('./data/database.json');
    var url = 'mongodb://' + dbData.host+ ':' + dbData.port + '/' + dbData.database;
    MongoClient.connect(url, function(err, db) {

        if(err){
            console.log('Failure to connect to ' + url);
        }
        else{
            database = db;
            console.log('Connected to database!');
        }
    });
}

function initializeRoutes(){
    app.use('/', renderRoutes);
    app.use('/movie', movieRoutes);
    app.use('/configuration', configRoutes);
    app.use('/auth', authRoutes);
}

var app = express();

initializePassport();
connectToDatabase();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.use(session({ secret: gitHubData.secret, resave : true, saveUninitialized : true }));
app.use(passport.initialize());
app.use(passport.session());


//PIPES

app.use(function(req, res, next){
    req.db = database;
    next();
});

// Allow CORS
app.use(function(req, res, next) {

    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin", responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if (req.method == "OPTIONS") {
        res.status = 205;
        res.end();
    } else {
        next();
    }
});

app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    //res.type('application/json');
    next();
});


// routes
initializeRoutes();


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
