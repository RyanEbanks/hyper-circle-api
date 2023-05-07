const { Reaction } = require('../models');

module.exports = {
    // Create a reaction
  createUser(req, res) {
    Reaction.create(req.body)
      .then((reaction) => res.json(reaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a reaction
  deleteUser(req, res) {
    Reaction.findOneAndDelete({ _id: req.params.courseId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No course with that ID' })
          : Reaction.deleteMany({ _id: { $in: reaction } })
      )
      .then(() => res.json({ message: 'Reactions Deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
}