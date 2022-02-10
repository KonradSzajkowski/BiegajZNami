const { Router } = require('express');
const passport = require('passport');
const sha2 = require('sha2').SHA256;
const router = Router();
const session = require('express-session');

router.get('/', (req, res) => {
  var sesja = req.session;
  if(sesja.auth){
    res.render('wyloguj', {
      title: 'Express'
    });
  }
  else{
    res.render('login', {
      title: 'Express'
    });
  }
});

router.post('/wyloguj', (req,res) => {
  req.session.destroy();
  console.log("POST");
  res.redirect('/login');
});


router.post('/zalogowano', (req,res) => {
  var sesja = req.session; 
  console.log("POST " + req.body.password + " "+ req.body.username);
  var users = [];
  var admin  = { login:"Admin", password:"Admin" }
  var user1  = { login:"Konrad", password:"Konrad" }
  users.push(admin);
  users.push(user1);

  for(const user of users){

    if(user.login == req.body.username && user.password == req.body.password) { sesja.auth=true;}
  }
  if(sesja.auth === true ) res.redirect('/treningi');
  else res.redirect('/login');

});

module.exports = router;
