var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router({
  "users": [
    {
      "id": 1,
      "image": "../../assets/img/a2.jpg",
      "position": "Graphics designer",
      "name": "John Smith",
      "company_adress": "Riviera State 32/106",
      "company": "Twitter, Inc.",
      "phone": "(123) 456-7890",
      "adress": {
        "home_number": 795,
        "street": "Folsom Ave",
        "apartment": "Suite 600",
        "city": "San Francisco",
        "code": "CA 94107"
      }
    }
  ]
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
server.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

server.listen(port, function () {
  console.log('App is running on http://localhost:' + port);
});
