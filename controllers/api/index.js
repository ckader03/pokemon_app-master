const router = require('express').Router();

const controller = require('./controller');

router.get('/pokemon', controller.index);
router.get('/pokemon/:id', controller.show);
router.post('/pokemon', controller.create);
router.put('/pokemon/:id', controller.update);
router.delete('/pokemon/:id', controller.destroy);

module.exports = router;
