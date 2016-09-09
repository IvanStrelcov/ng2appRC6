const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const db = require('./core/dbPromise');

const app = express();
app.use(cors());
app.use(express.static('../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Routes
const users = require('./routes/users');

app.use('/api/users', users);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json('error', {
    message: err.message,
    error: err
  });
});

app.listen(port, function () {
  console.log('App is running on http://localhost:' + port);
});
