
/*
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/runing',
  {useNewUrlParser: true, useUnifiedTopology: true},
  function(err) {
    if(err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane');
    }
});

// schemat dokumentu opisującego użytkowników w kolekcji users
var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  admin: {type: Boolean, default: false}
});

userSchema.methods.validPassword = function(pass) {
  // return sha1(pass)==this.password;
  return sha2(pass).toString("hex")==this.password;
};

module.exports = mongoose.model('user', userSchema);
