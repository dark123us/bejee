import React, { useState }  from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Tasks, Pagination, Auth, Message } from '../components/index.js';
import styles from '../styles/main.module.css';
import { getToken, getMessage, getTasks, getPagination, getSortBy,
} from '../redux/selector.js';
import { createTask, editTask, selectPage, loadTasks, showError, onLogout, onSortBy,
} from '../redux/action.js';


const Main = ({ token, message, tasks, pages, 
  createTask, editTask, selectPage, showError, onLogout,
  sortBy, onSortBy,
}) => {
  const [redirectLogin, setRedirect] = useState(false);

	const handleAdd = data => {
  		createTask(data);
	}
  const handleEdit = (data)=> {
    console.log(data);
    editTask(data);

  }
  const handleLogin = () => {
    if (token) {
      onLogout();
    } else {
      setRedirect(true);
    }
  }
  const handleSelectPage = (numberPage) => {
    if (numberPage > 0 && numberPage !== pages.current && numberPage <= pages.count){
      selectPage(numberPage);
    }
  }

  if (redirectLogin) return (<> <Redirect to="/login" /> </>);
  
	return (
			<div className={styles.body}>
        <div className="row">
          <div className="col-sm-10" />
          <div className="col-sm-2 ">
  			  	<Auth onClick ={() => handleLogin()} token={token} />
          </div>
        </div>
				<Message data={message} />
				<Tasks data={tasks} 
          allowEdit={!!token}
					onAdd={ ({username, email, text }) => createTask({username, email, text})} 
          onEdit={ ({task, newtext, newstatus}) => handleEdit({task, newtext, newstatus})}
          sortBy={sortBy}
          onSortBy={(field) => onSortBy(field)}
				/>
				<Pagination 
            onSelect={numberPage => handleSelectPage(numberPage)}
            current={pages.current} 
            count={pages.count} 
        />
      </div>
    )
}

const mapStateToProps = state => ({
  token: getToken(state), 
  message: getMessage(state),
	tasks: getTasks(state),
	pages: getPagination(state),
  sortBy: getSortBy(state),
});

const mapDispatchToProps = dispatch => ({
	createTask: ({username, email, text}) => dispatch(createTask({username, email, text})),
  editTask: ({task, newtext, newstatus}) => dispatch(editTask({task, newtext, newstatus})),
	selectPage: numberPage => dispatch(selectPage(numberPage)),
  showError: msg => dispatch(showError(msg)),
  onLogout: () => dispatch(onLogout()),
  onSortBy: field => dispatch(onSortBy(field)),
});

const connectMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default connectMain;
