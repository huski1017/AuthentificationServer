const express = require('express')
const app = express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var user = require('./Controller/user.js');
var login = require('./Controller/login.js');
var client = require('./Controller/client.js');

app.get('/', (req, res) => {
  res.send('What up mate? Trying to know more about me?')
});

app.use('/api/user', user);
app.use('/api/login', login);
app.use('/api/client', client);

app.listen(8000, () => {
  console.log('Authorization server listening on port 8000!')
});