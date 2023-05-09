const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoute');
const thoughtRoutes = require('./thoughtRoute');

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/api', reactionRoutes);


module.exports = router;