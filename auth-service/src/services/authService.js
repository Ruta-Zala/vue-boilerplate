const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name
    },
        process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name
    },
        process.env.JWT_REFRESH_SECRET, {
        expiresIn: '10d',
    });
};

const registerUser = async (email, password, name) => {
    const userExists = await getUserByEmail(email)

    if (userExists) {
        throw new Error('User already exists');
    }

    const user = new User({ email, password, name });
    await user.save();

    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    return {
        token,
        refreshToken,
        user: { name: user.name, email: user.email, role: user.role }
    }
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
}

const loginUser = async (email, password) => {
    const user = await getUserByEmail(email)
    if (!user) {
        throw new Error('User does not exists!');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        throw new Error('Password does not match!');
    }

    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        token,
        refreshToken,
        user: { name: user.name, email: user.email, role: user.role }
    }

};

const validateToken = (token) => {
    try {
        const user = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return {
            user,
            token
        }

    } catch (error) {
        console.error({ error });
        throw new Error('Refresh Token is invalid or expired');
    }
};

const logoutUser = () => {
    // write a logic to logoutUser 
}

module.exports = {
    registerUser,
    loginUser,
    validateToken,
    logoutUser
};