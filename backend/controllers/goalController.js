const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get goals' });
});

// @desc set Goals
// @route set /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
	console.log(req.body);
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add in new text field');
	}
	res.status(200).json({ message: 'Set goals' });
});

// @desc put Goals
// @route put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc delete Goals
// @route delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
