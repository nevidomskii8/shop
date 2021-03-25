const { Router } = require('express');
const apiRouter = Router();
const goodsRouter = require('./goods');
const adminRouter = require('./admin');
const orderRouter = require('./order');

apiRouter.use('/goods', goodsRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/order', orderRouter)

module.exports = apiRouter;