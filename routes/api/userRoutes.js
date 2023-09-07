const router = require('express').Router();

const {getUsers, createUser} = require("../../controllers/userController.js")

router.route('/').get(getUsers).post(createUser)


// router.route(":userId/friends/:friendId").post(addFriend).delete(removeFriend)


module.exports = router;
