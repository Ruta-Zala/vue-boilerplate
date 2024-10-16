const User = require('../models/userModel');

const getAllUsers = async () => {
    // const users = await User.find().select("-password") // TO EXCLUDE PASSWORD
    const users = await User.find().select("name email role") // TO GET SPECIFIED FIELDS ONLY
    return users
}

module.exports = {
    getAllUsers
}