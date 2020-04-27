var express = require('express');
var router = express.Router();

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
  res.status(501).json({ error: 'Ooopsie not implemented yet!' });
});
  
router.put('/', (req, res) => {
  res.status(501).json({ error: 'Ooopsie not implemented yet!' });
});
  
router.delete('/', (req, res) => {
  res.status(501).json({ error: 'Ooopsie not implemented yet!' });
});

module.exports = router;
