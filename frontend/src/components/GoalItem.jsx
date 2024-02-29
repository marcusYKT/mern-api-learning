import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalsSlice';

function GoalItem({ goal }) {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(deleteGoal(goal._id));
	};

	return (
		<div className="goal">
			<div>
				{new Date(goal.createdAt).toLocaleString('en-US')}
				<h2>{goal.text}</h2>
				<button className="close" onClick={onClick}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
}

export default GoalItem;
