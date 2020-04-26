const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('What up mate? Trying to know more about me?')
});

app.get('/account', (req, res) => {
  res.status(501).send('Ooopsie not implemented yet!')
});

app.post('/account', (req, res) => {
  res.status(501).send('Ooopsie not implemented yet!')
});

app.put('/account', (req, res) => {
  res.status(501).send('Ooopsie not implemented yet!')
});

app.delete('/account', (req, res) => {
  res.status(501).send('Ooopsie not implemented yet!')
});

app.listen(8000, () => {
  console.log('App listening on port 8000!')
});