var app, port;

app = require('./js/app');

//needs to be moved to some config
port = 3000;

app.listen(port, function() {
  return console.log("Listening on " + port + "\nPress CTRL-C to stop server.");
});
