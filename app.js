var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

const mechanicRouter = require('./routes/mechanicRoute');
const carRouter = require("./routes/carRoute");
const serviceAppointmentRouter = require('./routes/serviceAppointmentRoute');

const sequalizeInit = require('./config/sequelize/init');
sequalizeInit().catch(err=>{
    console.log(err);
});

const carApiRouter=require('./routes/api/CarApiRoute');
const mechanicApiRouter=require('./routes/api/MechanicApiRoute');
const serviceAppointmentApiRouter=require('./routes/api/ServiceAppointmentApiRoute');
const session=require('express-session');
const authUtil=require('./util/authUtils');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));


const i18n = require('i18n');
i18n.configure({
    locales: ['pl', 'en'], // languages available in the application. Create a separate dictionary for each of them
    directory: path.join(__dirname, 'locales'), // path to the directory where the dictionaries are located
    objectNotation: true, // enables the use of nested keys in object notation
    cookie: 'acme-hr-lang', //the name of the cookie that our application will use to store information about the language currently selected by the user
});
app.use(i18n.init); //initialization and connection to the application context

app.use(session({
    secret: 'my_beloved_password',
    resave: false
}));

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser=loggedUser;
    if(!res.locals.loginError){
        res.locals.loginError = undefined;
    }
    next();
});

app.use('/', indexRouter);
app.use('/mechanics', authUtil.permitAuthenticatedUser,mechanicRouter);
app.use('/car',authUtil.permitAuthenticatedUser, carRouter);
app.use('/serviceappointment',authUtil.permitAuthenticatedUser, serviceAppointmentRouter);

app.use('/api/cars',carApiRouter);
app.use('/api/mechanics',mechanicApiRouter);
app.use('/api/serviceappointment',serviceAppointmentApiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
