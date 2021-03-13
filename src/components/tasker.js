import React from 'react';

export const TaskInput = () => (
	<div>TaskInput</div>
)

export const TaskHeader = () => (
	<div className="row">
		<div className="col-sm-2">ИМЯ</div>
		<div className="col-sm-2">EMAIL</div>
		<div className="col-sm-8">ТЕКСТ</div>
	</div>

)

export const Task = ({name, email, text}) => (
	<div className="row">
		<div className="col-sm-2">{name}</div>
		<div className="col-sm-2">{email}</div>
		<div className="col-sm-8">{text}</div>
	</div>
)

export const Tasks = ({tasks}) => {
	return (
		<div className="container">
			<TaskHeader />
			{tasks.map( task => (<Task name={task.name} email={task.email} text={task.text} />) ) }
		</div>
	)
}
