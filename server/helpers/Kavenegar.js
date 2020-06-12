const Kavenegar = require('kavenegar');
const config = require('../../config/config');
// eslint-disable-next-line new-cap
const api = Kavenegar.KavenegarApi({
  apikey: config.smsKey
});

function otp(mobile, code) {
  // console.log('send sms ', { mobile, code });
  api.Send({
      message: `کد ارسالی ${code}`,
      sender: '10004346',
      receptor: mobile
    });
}


module.exports = { otp };
