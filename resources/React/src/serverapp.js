const express = require('express');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
//const jwt = require('express-jwt');

const app = express();

// The following two app.all allow chrome to play nice in local host
app.all('/api/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
  return next();
});
app.all('/api/*', (req, res, next) => {
  if (req.method.toLowerCase() !== 'options') {
    return next();
  }
  return res.send(204);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(jwt({
//  secret: new Buffer('bHOdTo3urN1-MT6t7b7Iy8v6SYTv2S62BCyZd-Ihj2P_AUH9DTntDbgZ1xi5EWq9', 'base64'),
//  audience: 'soJu1fcdA5pKxHU3yTOdjzPv7VAZOueM',
//}));

// Include all routes
app.use('/api/v1', require('./routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      // No stack trace in production
      error: app.get('env') === 'development' ? {} : err,
    });
  });
}


module.exports = app;
