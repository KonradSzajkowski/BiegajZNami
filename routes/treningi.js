const { Router } = require('express');
const session = require('express-session');
const router = Router();


router.get('/', function(req, res, next) {
    var sesja = req.session; // Dostęp do sesji po req.session
    console.log(req.session.id);
    if(sesja.auth){
        res.render('Treningi_Zalogowany', {
            title: 'Express'
          });
    }
    else{
        res.render('Treningi_Niezalogowany', {
            title: 'Express'
          });
    }

    })

module.exports = router;