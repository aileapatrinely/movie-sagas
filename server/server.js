const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/movies.router');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', router);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Listening on port: ', port);
});
