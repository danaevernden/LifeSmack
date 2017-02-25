const router = require('express').Router();
const fs = require('fs');

fs.readdirSync(__dirname).forEach((file) => {
  if (file === 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') {
    return;
  }
  const name = file.substr(0, file.indexOf('.'));
  /* eslint-disable global-require, import/no-dynamic-require */
  router.use(`/${name}`, require(`./${name}`));
});

module.exports = router;
