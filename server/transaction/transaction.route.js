const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const transactionCtrl = require('./transaction.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/transaction - Get list of users */
  .get(transactionCtrl.list)

  /** POST /api/transaction - Create new transaction */
  .post(validate(paramValidation.createUser), transactionCtrl.create);

router.route('/:id')
  /** GET /api/transaction/:id - Get transaction */
  .get(transactionCtrl.get)

  /** PUT /api/transaction/:id - Update transaction */
  .put(validate(paramValidation.updateUser), transactionCtrl.update)

  /** DELETE /api/transaction/:id - Delete transaction */
  .delete(transactionCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('id', transactionCtrl.load);

module.exports = router;
