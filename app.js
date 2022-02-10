const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
//const User = require('./utils/db')

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const treningiRouter = require('./routes/treningi');
const wybitniBiegaczeRouter = require('./routes/wybitniBiegacze');
const dlaczegoWartoRouter = require('./routes/dlaczegoWarto');

const app = express();

const passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'pug');

app.use(session({
  secret: 'tajny kod',
  resave: true,
  saveUninitialized: true
  }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/treningi',treningiRouter);
app.use('/wybitniBiegacze',wybitniBiegaczeRouter);
app.use('/dlaczegoWarto',dlaczegoWartoRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
