// Imports Express Router and the methods from the thoughtController
const router = require("express").Router();
const {
  getThought,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// api/thoughts
router.route("/").get(getThought).post(createThought);

// api/thoughts/:thoughtid
router.route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

// api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
