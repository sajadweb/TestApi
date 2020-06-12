const User = require('../user/user.model');
const moment = require('moment');
const Role = require('./role');
const Status = require('./status');

function saveUser(username, mobile, password) {
  const newUser = new User({
    username,
    mobile,
    password,
    role: Role.USER,
    status: Status.PENDING,
    otp: {
      code: '9461',
      expiredAt: moment()
        .add(5, 'm')
    }
  });
  return newUser.save();
}


module.exports = { saveUser };
