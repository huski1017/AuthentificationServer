const express = require('express');
const dotenv = require('dotenv');
var bodyParser = require('body-parser')

const app = express();
dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

// Controllers
var user = require('./Controller/user.js');
var login = require('./Controller/login.js');
var client = require('./Controller/client.js');

app.use('/api/user', user);
app.use('/api/login', login);
app.use('/api/client', client);

//Sql client declaration
var sql = require('./Services/SqlClient.js');
var sqlClient = new sql();

app.get('/', (req, res) => {
  res.send('What up mate? Trying to know more about me?')
});

app.listen(8000, () => {
  console.log('Authorization server listening on port 8000!')
});