import React, { useState }  from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Tasks, Pagination, Auth, Message } from '../components/index.js';
import styles from '../styles/main.module.css';
import { getToken, getMessage, getTasks, getPagination } from '../redux/selector.js';
import { createTask, selectPage, loadTasks, showError, onLogout, sortBy,
} from '../redux/action.js';


const Main = ({ token, message, tasks, pages, 
  createTask, selectPage, showError, onLogout,
  sortBy,
}) => {
  const [redirectLogin, setRedirect] = useState(false);

	const handleCreateTask = (name, email, text) => {
    if (!(name && email && text)) {
      showError("поля не заполнены");
    } else {
  		createTask( name, email, text );
    }
	}
  const handleLogin = () => {
    if (token) {
      onLogout();
    } else {
      setRedirect(true);
    }
  }
  const handleSort = field => {
    sortBy(field);
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
					onCreate={(name, email, text) => handleCreateTask(name, email, text)} 
          onSortBy={(field) => handleSort(field)}
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
});

const mapDispatchToProps = dispatch => ({
	createTask: (name, email, text) => dispatch(createTask(name, email, text)),
	selectPage: numberPage => dispatch(selectPage(numberPage)),
  showError: msg => dispatch(showError(msg)),
  onLogout: () => dispatch(onLogout()),
  sortBy: field => dispatch(sortBy(field)),
});

const connectMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default connectMain;
