const { Users, Thoughts } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    Users.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    Users.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser(req, res) {
    Users.findOneAndDelete({ _id: req.params.userId })
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thoughts.deleteMany({ _id: { $in: users.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
