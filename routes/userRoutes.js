const routerx = require('express-promise-router');
const UserController = require('../controllers/userController')
const router = routerx();

router.get('/list', UserController.listar);
router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.put('/update', UserController.update);

module.exports = router;