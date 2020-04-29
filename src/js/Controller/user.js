var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
//var sql = require('sql');

router.get('/', (req, res) => {
  const { id } = req.body;
  if (!id) {
      res.status(400).json({
        error: 'No user Id specified'
      });
  }
  res.status(501).json({ error: req.body });
});
  
router.post('/', (req, res) => {
  const { clientId, userName, displayName, password } = req.body;
  if (!clientId || !userName || !password) {
    res.status(400).json({
      error: 'Invalid informations'
    });
  }
  try {
    const salt = bcrypt.genSalt();
    const hashPassword = bcrypt.hash(password, salt);

  }
  catch {
    res.status(418).json({
      error: 'Something went wrong; I am a teapot'
    })
  }
  res.status(501).json({ error: 'Ooopsie not implemented yet!' });
});
  
router.put('/', (req, res) => {
  res.status(501).json({ error: 'Ooopsie not implemented yet!' });
});
  
router.delete('/', (req, res) => {
  res.status(501).json({ error: 'Ooopsie not implemented yet!' });
});

module.exports = router;
