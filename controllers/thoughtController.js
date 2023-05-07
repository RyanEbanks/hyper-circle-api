const { Thought, Reaction } = require('../models');

module.exports = {
    //GET all thought
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    //GET single thought
    getThoughts(req, res) {
        Thought.findOne({ _id: req.params.courseId })
        .select('-__V')
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Create a thought
  createUser(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Update a thought
  updateUser(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought
  deleteUser(req, res) {
    Thought.findOneAndDelete({ _id: req.params.courseId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() => res.json({ message: 'Thought and Reactions Deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
}