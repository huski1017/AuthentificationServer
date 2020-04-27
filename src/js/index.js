const express = require('express')
const app = express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var user = require('./user.js');

app.get('/', (req, res) => {
  res.send('What up mate? Trying to know more about me?')
});

app.use('/user', user);

app.listen(8000, () => {
  console.log('App listening on port 8000!')
});