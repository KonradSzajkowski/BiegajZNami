const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('dlaczegoWarto', {
    title: 'Express'
  });
});

module.exports = router;
