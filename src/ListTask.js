import React from 'react';
import Task from './task';
import { useSelector} from 'react-redux';


const TaskList = () => {
	const tasks = useSelector(state => state.tasks.tasks);


	return (
		<ul className='list-group'>
			{tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</ul>
	)
}

export default TaskList;