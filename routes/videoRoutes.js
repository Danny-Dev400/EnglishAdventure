const routerx = require('express-promise-router');
const VideoController = require('../controllers/videoController')
const router = routerx();

router.get('/list', VideoController.listar);

module.exports = router;