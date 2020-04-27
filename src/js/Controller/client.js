var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(501).json({ error: 'Ooopsie not implemented yet!' });
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