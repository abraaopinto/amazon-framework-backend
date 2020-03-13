const Router = require('express');
const router = Router();
const logger = require('../config/winston');

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: process.env.npm_package_name,
    version: process.env.npm_package_version
  });
  logger.info(` Requisição realizada com sucesso ${ req.hostname } `);
});

module.exports = router;