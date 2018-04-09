// Get dependencies
const express = require('express');
const path = require('path');

const app = express();
const refreshRoutes = express.Router();


//===================CONFIGURE===========================
// Add headers
app.use((req, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


// ==================STATIC REQUESTS====================
// Run the app by serving the static files
// in the dist directory
refreshRoutes.use(express.static(path.resolve(__dirname, '../build')));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
refreshRoutes.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

// ===================SET UP ROUTES==========================
app.use(refreshRoutes);

//===========================================================
//==========================================================
//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

//====================START SERVER============================
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;
