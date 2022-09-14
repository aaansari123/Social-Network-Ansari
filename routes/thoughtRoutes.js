const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
} = require('../controllers/thoughtsController');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:userId').get(getSingleThought);

module.exports = router;