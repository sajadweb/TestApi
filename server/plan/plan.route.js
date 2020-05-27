const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const planCtrl = require('./plan.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/plan - Get list of users */
  .get(planCtrl.list)

  /** POST /api/plan - Create new plan */
  .post(validate(paramValidation.createUser), planCtrl.create);

router.route('/:id')
  /** GET /api/plan/:id - Get plan */
  .get(planCtrl.get)

  /** PUT /api/plan/:id - Update plan */
  .put(validate(paramValidation.updateUser), planCtrl.update)

  /** DELETE /api/plan/:id - Delete plan */
  .delete(planCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('id', planCtrl.load);

module.exports = router;
