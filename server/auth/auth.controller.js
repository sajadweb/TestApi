const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const Role = require('./role');
const Status = require('./status');
const Hash = require('../helpers/Hash');
const sms = require('../helpers/Kavenegar');
const APIError = require('../helpers/APIError');
const config = require('../../config/config');
const User = require('../user/user.model');

// sample user, used for authentication
const user = {
  username: 'react',
  password: 'password'
};

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {
  return res.json({ hi: true });
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  if (req.body.username === user.username && req.body.password === user.password) {
    const token = jwt.sign({
      username: user.username
    }, config.jwtSecret);
    return res.json({
      token,
      username: user.username
    });
  }

  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  return next(err);
}

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function register(req, res, next) {
  const { username, mobile, password } = req.body;
  sms.otp("09332369461","hi sajad")
  return res.json({ hi: false });

  // return User.whereFirst({ $or: [{ mobile }, { username }] })
  //   .then((user) => {
  //     // if user exist
  //         //if new user and expird
  //             //send code
  //         //else
  //             //forbiden
  //     //else
  //       //save user
  //
  //
  //
  //     if (user) {
  //
  //     }
  //   })
  //   .catch(e => next(e));

  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  // if (req.body.username === user.username && req.body.password === user.password) {
  //   const token = jwt.sign({
  //     username: user.username
  //   }, config.jwtSecret);
  //   return res.json({
  //     token,
  //     username: user.username
  //   });
  // }

  // const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  // return next(err);
}

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function verify(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  if (req.body.username === user.username && req.body.password === user.password) {
    const token = jwt.sign({
      username: user.username
    }, config.jwtSecret);
    return res.json({
      token,
      username: user.username
    });
  }

  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  return next(err);
}

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function otp(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  if (req.body.username === user.username && req.body.password === user.password) {
    const token = jwt.sign({
      username: user.username
    }, config.jwtSecret);
    return res.json({
      token,
      username: user.username
    });
  }

  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  return next(err);
}

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function password(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  if (req.body.username === user.username && req.body.password === user.password) {
    const token = jwt.sign({
      username: user.username
    }, config.jwtSecret);
    return res.json({
      token,
      username: user.username
    });
  }

  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  return next(err);
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

module.exports = { login, getRandomNumber, register, verify, otp, password };
