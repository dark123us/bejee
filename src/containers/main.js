import React, { useState, useEffect }  from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Tasks, Pagination, Auth, Messages, Loading } from '../components/index.js';
import { getToken, getMessage, getTasks, getPagination, getSortBy,
    getStateLoading, isShowLogin,
} from '../redux/selector.js';
import { createTask, editTask, selectPage, showError, 
    onLogout, onSortBy, closeMessage, showMessage,
} from '../redux/action.js';

const Main = ({ token, message, tasks, pages, isLoading,
    createTask, editTask, selectPage, showError, onLogout,
    sortBy, onSortBy, onCloseMessage, onShowMessage, isShowLogin,
}) => {
    const [redirectLogin, setRedirect] = useState(false);
    const handleLogin = () => {
        if (token) {
            onLogout();
        } else {
            setRedirect(true);
        }
    }
    useEffect(() => {
        if (isShowLogin) setRedirect(true);
    }, [isShowLogin, setRedirect]);
    const handleSelectPage = (numberPage) => {
        if (numberPage > 0 && numberPage !== pages.current && numberPage <= pages.count){
            selectPage(numberPage);
        }
    }
    if (redirectLogin) return (<> <Redirect to="/login" /> </>);
    
    return (
        <div>
            <div className="row">
                <div className="col-sm-10" />
                    <div className="col-sm-2 text-end">
                        <Auth onClick ={() => handleLogin()} token={token} />
                    </div>
                </div>
            <div className="container border rounded">
                <div className="row">
                    <div className="col-sm-12">
                        <Tasks data={tasks} 
                            allowEdit={!!token}
                            onAdd={ ({username, email, text }) => createTask({username, email, text})} 
                            onEdit={ ({task, newtext, newstatus}) => editTask({task, newtext, newstatus})}
                            sortBy={sortBy}
                            onSortBy={(field) => onSortBy(field)}		/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Pagination 
                            onSelect={numberPage => handleSelectPage(numberPage)}
                            current={pages.current} 
                            count={pages.count}  />
                    </div>
                </div>  
                <Loading state={isLoading} />
            </div>
            <Messages data={message} onClose={ msg => onCloseMessage(msg)}/>
        </div>
    )
}

const mapStateToProps = state => ({
    token: getToken(state), 
    message: getMessage(state),
    tasks: getTasks(state),
    pages: getPagination(state),
    sortBy: getSortBy(state),
    isLoading: getStateLoading(state),
    isShowLogin: isShowLogin(state),
});

const mapDispatchToProps = dispatch => ({
    createTask: ({username, email, text}) => dispatch(createTask({username, email, text})),
    editTask: ({task, newtext, newstatus}) => dispatch(editTask({task, newtext, newstatus})),
    selectPage: numberPage => dispatch(selectPage(numberPage)),
    showError: msg => dispatch(showError(msg)),
    onLogout: () => dispatch(onLogout()),
    onSortBy: field => dispatch(onSortBy(field)),
    onCloseMessage: message => dispatch(closeMessage(message)),
    onShowMessage: message => dispatch(showMessage(message)),
});

const connectMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default connectMain;
