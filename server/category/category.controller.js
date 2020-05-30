const Category = require('./category.model');
// eslint-disable-next-line import/newline-after-import
const lodash = require('lodash');
const { has } = lodash;

/**
 * Load Category and append to req.
 */
function load(req, res, next, id) {
  Category.get(id)
    .then((data) => {
      req.category = data; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

function show(req, res) {
  return res.json(req.category);
}

/**
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function create(req, res, next) {
  const model = new Category({
    title: req.body.title,
    icon: req.body.icon,
    parentId: req.body.parentId ? req.body.parentId : null,
  });

  model.save()
    .then(saved => res.json(saved))
    .catch(e => next(e));
}

/**
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function update(req, res, next) {
  const category = req.category;
  if (has(req.body, 'title')) {
    category.title = req.body.title;
  }
  if (has(req.body, 'icon')) {
    category.icon = req.body.icon;
  }
  if (has(req.body, 'parentId')) {
    category.parentId = Category.find(req.body.parentId);
  }
  category.save()
    .then(saved => res.json(saved))
    .catch(e => next(e));
}

/**
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Category.list({ limit, skip })
    .then(data => res.json(data))
    .catch(e => next(e));
}

/**
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function remove(req, res, next) {
  const category = req.category;
  category.remove()
    .then(deleted => res.json(deleted))
    .catch(e => next(e));
}

module.exports = { create, update, list, remove, get: show, load };
