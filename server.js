var app, port;

app = require('./.app/app');

//needs to be moved to some config
port = process.env.PORT || 3000;

app.listen(port, function() {
  return console.log("Listening on " + port + "\nPress CTRL-C to stop server.");
});
