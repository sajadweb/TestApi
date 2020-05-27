const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const productCtrl = require('./product.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/product - Get list of users */
  .get(productCtrl.list)

  /** POST /api/product - Create new product */
  .post(validate(paramValidation.createUser), productCtrl.create);

router.route('/:id')
  /** GET /api/product/:id - Get product */
  .get(productCtrl.get)

  /** PUT /api/product/:id - Update product */
  .put(validate(paramValidation.updateUser), productCtrl.update)

  /** DELETE /api/product/:id - Delete product */
  .delete(productCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('id', productCtrl.load);

module.exports = router;
