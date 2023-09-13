// Imports the Thought and User models
const { User, Thought } = require("../models");

// Export the CRUD methods for User model
module.exports = {
  // GET route for all users
  async getUsers(req, res) {
    try {
      // Finds all the users
      const users = await User.find();
      // Returns with all the user if successful
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET route for one user
  async getSingleUser(req, res) {
    try {
      // Finds a user by ID
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      // If the userId is not found, returns a message saying there's no user with the id
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // If successful, returns with the user
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // POST route for user
  async createUser(req, res) {
    try {
      // Creates a user using the values from the request body
      const user = await User.create(req.body);
      // Returns the created user if successful
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // PUT route for user
  async updateUser(req, res) {
    try {
      // Finds a user by id and updates it with the values from the request body
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      // If the userId is not found, returns the message saying there's no user with the id
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // Returns with the updated user if successful
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE route for user
  async deleteUser(req, res) {
    try {
      // Finds the user by id and deletes it from the database
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      // If userId is not found, returns the message saying there's no user with the id
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // Finds the thoughts associated with the user id
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      // Returns with the message saying the user and thoughts deleted
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // POST route to add friend
  async addFriend(req, res) {
    try {
      // Finds the user by id and adds the friend with their own userId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body.userId } },
        { runValidators: true, new: true }
      );
      // If the userId is not found, returns the message saying there's no user with the id
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // Returns the user data to prove the friend's id has been added
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE route to remove friend
  async removeFriend(req, res) {
    try {
      // Finds the user by id and removes the friend's id
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      // If the userId is not found, returns the message saying there's no user with the id
      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }
      // Returns the user data to prove the friend's id has been removed
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
