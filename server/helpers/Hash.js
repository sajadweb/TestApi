const bcrypt = require('bcrypt');

function create(password, callback) {
  // eslint-disable-next-line consistent-return
  // bcrypt.genSalt(10, (err, salt) => {
  //   if (err) {
  //     return callback(err);
  //   }
  //
  //   bcrypt.hash(password, salt, callback);
  // });
}

function verify(plainPass, hashword, callback) {
  // bcrypt.compare(plainPass, hashword, (err, isPasswordMatch) => (err == null ?
  //   callback(null, isPasswordMatch) :
  //   callback(err)));
}

module.exports = { create, verify };
