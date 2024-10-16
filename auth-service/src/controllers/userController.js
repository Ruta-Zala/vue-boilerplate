const { getAllUsers } = require("../services/userService")

const fetchAllUsers = async (req, res) => {
    try {
        const response = await getAllUsers()
        res.status(201).json(response)

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    fetchAllUsers
}