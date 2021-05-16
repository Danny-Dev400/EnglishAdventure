const routerx = require('express-promise-router');
const userRouter = require('./userRoutes');
const videoRouter = require('./videoRoutes');

const router = routerx();

router.use('/usuario', userRouter);
router.use('/videos', videoRouter);

module.exports = router;