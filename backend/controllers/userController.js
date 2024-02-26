const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const user = require('../models/userModel');

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	const userExist = await User.findOne({ email });

	if (userExist) {
		res.status(400);
		throw new Error('User already exist');
	}

	const salt = await bcrypt.genSalt(10);

	res.json({ message: 'Register user' });
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Login user' });
});

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
	res.json({ message: 'User data display' });
});

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
