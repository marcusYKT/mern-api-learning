const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();

	res.status(200).json(goals);
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

	const goal = await Goal.create({
		text: req.body.text,
	});

	res.status(200).json(goal);
});

// @desc put Goals
// @route put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error('Goal not found');
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedGoal);
});

// @desc delete Goals
// @route delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error('Goal not found');
	}

	const deletedGoal = await Goal.findByIdAndDelete(req.params.id, req.body);

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
