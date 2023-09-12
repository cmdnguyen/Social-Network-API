const { User, Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateUser (req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $set: req.body },
        { runValidators: true, new: true });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addFriend (req, res) {
    try {
      console.log('Adding a friend')

    // Verify that the user ID in req.params.userId is valid
    console.log("User ID to add a friend for:", req.params.userId);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: {friends: req.body.userId} },
        { runValidators: true, new: true })
      
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      console.log("Updated User:", user);
      res.json(user)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      console.log('Deleting a friend')
      console.log('User:', req.params.userId)
      console.log('Friend:', req.params.friendId)
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId  } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};


