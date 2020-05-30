const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const categoryRoutes = require('./server/category/category.route');
const settingRoutes = require('./server/setting/setting.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);


// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount auth routes at /category
router.use('/category', categoryRoutes);

// mount setting routes at /setting
router.use('/setting', settingRoutes);

module.exports = router;
