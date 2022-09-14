const router = require('express').Router();
const appRoutes = require('./appRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;