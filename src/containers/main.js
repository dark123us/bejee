import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Tasks, Pagination, Auth, Message } from '../components/index.js';
import styles from '../styles/main.module.css';
import { getAuth, getMessage, getTasks, getPagination } from '../redux/selector.js';
import { createTask, selectPage } from '../redux/action.js';

const Main = ({ createTask, auth, message, tasks, pages }) => {
	const handleCreateTask = (name, email, text) => {
		createTask(name, email, text);
	}
  
	return(
			<div className={styles.body}>
				<Auth data={auth} />
				<Message data={message} />
				<Tasks data={tasks} 
					onCreate={(name, email, text) => handleCreateTask(name, email, text)} 
				/>
				<Pagination page={pages.current} count={pages.count} />
			</div>
    )
}

const mapStateToProps = state => ({
	auth: getAuth(state),
	message: getMessage(state),
	tasks: getTasks(state),
	pages: getPagination(state),
});

const mapDispatchToProps = dispatch => ({
	createTask: (name, email, text) => dispatch(createTask(name, email, text)),
	selectPage: numberPage => dispatch(selectPage(numberPage)),
});

const connectMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default connectMain;
