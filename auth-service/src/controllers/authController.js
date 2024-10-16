const {
    registerUser, loginUser, logoutUser, validateToken
} = require("../services/authService")

const register = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const response = await registerUser(email, password, name);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await loginUser(email, password);
        res.status(200).json(response);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const verifyToken = async (req, res) => {
    const { refresh_token } = req.body
    try {
        if (!refresh_token) {
            return res.status(401).json({ message: 'Refresh token required' });
        }
        return await validateToken(token)

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

const logout = () => {
    logoutUser()
}
module.exports = { register, login, logout, verifyToken };
