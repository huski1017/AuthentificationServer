const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('What up mate? Trying to know more about me?')
});

app.listen(8000, () => {
  console.log('App listening on port 8000!')
});