const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
} = require('../controllers/thoughtsController');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId').delete(deleteThought);

module.exports = router;