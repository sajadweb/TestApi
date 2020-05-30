const express = require('express');
const validate = require('express-validation');
const paramValidation = require('./category.validation');
const categoryCtrl = require('./category.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/category - Get list of users */
  .get(categoryCtrl.list)

  /** POST /api/category - Create new category */
  .post(validate(paramValidation.create), categoryCtrl.create);

router.route('/:id')
  /** GET /api/category/:id - Get category */
  .get(categoryCtrl.get)

  /** PUT /api/category/:id - Update category */
  .put(validate(paramValidation.update), categoryCtrl.update)

  /** DELETE /api/category/:id - Delete category */
  .delete(categoryCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('id', categoryCtrl.load);

module.exports = router;
