const express = require('express');

const { handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser } = require("../controllers/user")

const router = express.Router();

// REST API
router.route("/")
    // get all user details
    .get(handleGetAllUsers)
    // create new user
    .post(handleCreateNewUser);

router.route("/:id")
    // get user by id
    .get(handleGetUserById)
    // edit user last name by id
    .patch(handleUpdateUserById)
    // delete user by id
    .delete(handleDeleteUserById);


module.exports = router;