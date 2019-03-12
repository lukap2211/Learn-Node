const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js')
const { catchErrors } = require('../handlers/errorHandlers.js')

// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);

router.post('/add',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore)
);

router.post('/add/:id',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.updateStore)
);

router.get('/stores/:id/edit', catchErrors(storeController.editStore));
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

router.get('/reverse/:name', (req, res) => {
  console.log('NAME: ${name}')
  const reversed = req.params.name.split('').reverse().join('')
  // res.send(`name.reverse(): ${reversed}`);
  res.render('hello', { name_param : req.params.name, name_query: req.query.name })
});

module.exports = router;
