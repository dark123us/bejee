import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Tasks, Pagination, Auth, Message } from '../components/index.js';
import styles from '../styles/main.module.css';
import { getToken, getMessage, getTasks, getPagination } from '../redux/selector.js';
import { createTask, selectPage, loadTasks } from '../redux/action.js';

const Main = ({ createTask, auth, message, tasks, pages, selectPage, onTest }) => {
	const handleCreateTask = (name, email, text) => {
		createTask(name, email, text);
	}
  const handleSelectPage = (numberPage) => {
    if (numberPage > 0 && numberPage != pages.current && numberPage <= pages.count){
      selectPage(numberPage);
      console.log(numberPage);
    }
  }

  const handleTest = () => {
    onTest();
  }
  
	return(
			<div className={styles.body}>
				<Auth data={auth} />
				<Message data={message} />
				<Tasks data={tasks} 
					onCreate={(name, email, text) => handleCreateTask(name, email, text)} 
				/>
				<Pagination 
            onSelect={numberPage => handleSelectPage(numberPage)}
            current={pages.current} 
            count={pages.count} 
        />
    <button className="btn" onClick={() => handleTest() } >TEST</button>
			</div>
    )
}

const mapStateToProps = state => ({
	token: getToken(state),
	message: getMessage(state),
	tasks: getTasks(state),
	pages: getPagination(state),
});

const mapDispatchToProps = dispatch => ({
	createTask: (name, email, text) => dispatch(createTask(name, email, text)),
	selectPage: numberPage => dispatch(selectPage(numberPage)),
  onTest: () => dispatch(loadTasks()),
});

const connectMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default connectMain;
