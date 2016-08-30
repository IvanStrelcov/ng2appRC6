var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('.db.json');

var pg = require('pg');
var DATABASE_URL = 'postgres://ljkysafegvycdv:t9oRGvf2DzC2VT9Lew0C6F23PZ@ec2-54-247-127-6.eu-west-1.compute.amazonaws.com:5432/d3o0rqr9kbtajh';
pg.defaults.ssl = true;
pg.connect(DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

var middlewares = jsonServer.defaults({
  static: __dirname + '/dist'
});
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

server.use(middlewares);
server.use("/api", router);

// set the home page route
// server.get('/*', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// });

server.listen(port, function () {
  console.log('App is running on http://localhost:' + port);
});
