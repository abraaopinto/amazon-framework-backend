const Router = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: process.env.npm_package_name,
    version: process.env.npm_package_version
  });
});

module.exports = router;