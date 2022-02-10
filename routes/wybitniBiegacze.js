const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('wybitniBiegacze', {
    title: 'Express'
  });
});

module.exports = router;
