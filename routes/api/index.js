const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoute');
const thoughtRoutes = require('./thoughtRoute');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/thoughts/:thoughtId/reactions', reactionRoutes);


module.exports = router;