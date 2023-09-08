const router = require('express').Router();

const { getThought, createThought, getSingleThought, deleteThought, updateThought } = require("../../controllers/thoughtController.js")

router.route('/').get(getThought).post(createThought)

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought)

// router.route("/:thoughtId/reactions").post(createReaction)

// router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction)

module.exports = router;