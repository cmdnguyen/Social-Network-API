// Imports the Thought and User models
const { Thought, User } = require("../models");

// Export the CRUD methods for Thought model
module.exports = {
  // GET route for all thoughts
  async getThought(req, res) {
    try {
      // Finds all thoughts
      const thoughts = await Thought.find();
      // Returns all the thoughts
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET route for thought by id
  async getSingleThought(req, res) {
    try {
      // Find a thought by id
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      // Returns the thought
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // POST route for new thought
  async createThought(req, res) {
    try {
      // Creates the thought from the user input in the request body
      const thought = await Thought.create(req.body);
      // Finds the userId in the request body and adds the thought with a new thought id
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!user) {
        return res
          .status(404)
          .json({ message: "Thought created, but found no user with that ID" });
      }
      // If successful, returns with the created thought
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // PUT route for a thought by id
  async updateThought(req, res) {
    try {
      // Finds a thought by id and updates the values in the request body
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      // If successful, returns with the updated thought
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE route for a thought by id
  async deleteThought(req, res) {
    try {
      // Find a thought by id and removes it from the database
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      // Finds the user associated with the thought and removes the thought id from the user
      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { runValidators: true, new: true }
      );
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!user) {
        return res
          .status(404)
          .json({ message: "Thought deleted, but no user found" });
      }
      // If successful, returns a message saying the thought is deleted
      res.json({ message: "Thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // POST route to reaction to a thought
  async createReaction(req, res) {
    try {
      // Finds a thought by id and adds the reaction based on the req.body
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      // If successful, returns with the thought showing the reaction is created
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE route for reaction to a thought
  async deleteReaction(req, res) {
    try {
      // Finds a thought by id and removes the reaction by id
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      // If thoughtId is not found, returns a message saying there's no thought with the id
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      // If successful, returns with the thought showing the reaction has been removed
      res.json({ thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
