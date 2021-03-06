const mongoose = require('mongoose');
const util = require('util');


// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
const debug = require('debug')('myapp:index');
// make bluebird default Promise
// eslint-disable-next-line import/newline-after-import
Promise = require('bluebird'); // eslint-disable-line no-global-assign
mongoose.Promise = Promise;
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
if (config.mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
if (!module.parent) {
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}
module.exports = app;
