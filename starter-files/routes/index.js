const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/StoreController.js')
const { catchErrors } = require('../handlers/errorHandlers.js')

// Do work here
router.get('/', catchErrors(StoreController.getStores));
router.get('/stores', catchErrors(StoreController.getStores));
router.get('/add', StoreController.addStore);
router.post('/add', StoreController.createStore);
router.post('/add/:id', StoreController.updateStore);
router.get('/stores/:id/edit', catchErrors(StoreController.editStore));

router.get('/reverse/:name', (req, res) => {
  console.log('NAME: ${name}')
  const reversed = req.params.name.split('').reverse().join('')
  // res.send(`name.reverse(): ${reversed}`);
  res.render('hello', { name_param : req.params.name, name_query: req.query.name })
});

module.exports = router;
