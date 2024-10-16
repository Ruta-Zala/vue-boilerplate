const express = require('express');
const { fetchAllUsers } = require("../controllers/userController")
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware')

router.get('/', protect, fetchAllUsers);
module.exports = router;
