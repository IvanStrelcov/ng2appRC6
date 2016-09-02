var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var pg = require('pg');
pg.defaults.ssl = true;
var DATABASE_URL = 'postgres://ljkysafegvycdv:t9oRGvf2DzC2VT9Lew0C6F23PZ@ec2-54-247-127-6.eu-west-1.compute.amazonaws.com:5432/d3o0rqr9kbtajh';

var app = express();
app.use(cors());
app.use(express.static(path.join( __dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/users', function(req, res) {
  pg.connect(DATABASE_URL, function(err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client
    .query('SELECT * FROM users', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.json(result.rows);
      done();
    })
  });
});

app.post('/api/users', function(req, res) {
  pg.connect(DATABASE_URL, function(err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client
    .query('INSERT INTO users(image, company_position, user_name, phone, company_adress, company) VALUES($1, $2, $3, $4, $5, $6)',[req.body.image, req.body.company_position, req.body.name, req.body.phone, req.body.company_adress, req.body.company], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.json(result.rows);
      done();
    })
  });
});

app.get('/api/users/:id', function(req, res) {
  pg.connect(DATABASE_URL, function(err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client
    .query('SELECT * FROM USERS as u WHERE u.user_id = $1', [req.params.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.json(result.rows);
      done();
    })
  });
});

app.delete('/api/users/:id', function(req, res) {
  pg.connect(DATABASE_URL, function(err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client
    .query('DELETE FROM USERS WHERE user_id = $1', [req.params.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.json(result.rows);
      done();
    })
  });
});

app.get('/api/users/search', function(req, res) {
  pg.connect(DATABASE_URL, function(err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client
    .query('SELECT * FROM USERS where LOWER(users.user_name) SIMILAR TO LOWER($1)', [ '%' + req.query.name + '%' ], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.json(result.rows);
      done();
    })
  });
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('App is running on http://localhost:' + port);
});
