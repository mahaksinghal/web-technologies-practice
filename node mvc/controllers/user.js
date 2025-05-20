const { model } = require("mongoose");
const User = require("../models/user")

async function handleGetAllUsers(req, resp) {
    const allDbUsers = await User.find({});
    console.log(req.url);
    return resp.json(allDbUsers);
}

async function handleGetUserById(req, resp) {
    const user = await User.findById(req.params.id);
    if (!user) return resp.status(404).json({ error: "User not found" });
    return resp.json(user);
}

async function handleUpdateUserById(req, resp) {
    // edit user with id
    await User.findByIdAndUpdate(req.params.id, { last_name: "Sharma" })
    return resp.json({ status: "success" });
}

async function handleDeleteUserById(req, resp) {
    // delete user with id
    await User.findByIdAndDelete(req.params.id)
    return resp.json({ status: "User deleted" })
}

async function handleCreateNewUser(req, resp) {
    const body = req.body;
    console.log(body);
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title) {
        return resp.status(400).json({ mssg: "All fields are required...." });
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    console.log(result);

    return resp.status(201).json({ mssg: "Success", id: result._id });
}

module.exports = { handleGetAllUsers, 
                handleGetUserById, 
                handleUpdateUserById, 
                handleDeleteUserById, 
                handleCreateNewUser }