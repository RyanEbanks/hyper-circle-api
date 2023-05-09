const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/').get(getThoughts).get(getSingleThought).post(createThought).put(updateThought).delete(deleteThought);


module.exports = router;
