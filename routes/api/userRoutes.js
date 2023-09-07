const router = require('express').Router();

const {getUsers, createUser, getSingleUser, deleteUser, updateUser} = require("../../controllers/userController.js")

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)

// router.route(":userId/friends/:friendId").post(addFriend).delete(removeFriend)

module.exports = router;
