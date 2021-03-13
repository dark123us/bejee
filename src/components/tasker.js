import React, { useState } from 'react';

export const TaskInput = ({onCreate}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleCreate = e => {
    e.preventDefault();
    onCreate(username, email, text);
    setUsername(""); setEmail(""); setText("");
  }

  return (
    <form className="row " onSubmit={() => handleCreate()}>
      <div className="col-sm-3">
        <input type="text" className="form-control" onChange={ e => setUsername(e.target.value) } value={username} />
      </div>
      <div className="col-sm-3">
        <input type="text" className="form-control" onChange={ e => setEmail(e.target.value) } value={email} />
      </div>
      <div className="col-sm-6">
        <textarea type="text" className="form-control" onChange={ e => setText(e.target.value) } value={text} />
      </div>
      <div className="row">
        <div className="col-auto">
          <button type="submit" className="btn btn-success" onClick={ e => handleCreate(e) } >Создать</button>
        </div>
      </div>
    </form>
  )
}

export const TaskHeader = ({onSortByUsername, onSortByEmail, onSortByText}) => (
	<div className="row">
		<div className="col-sm-3" onClick={onSortByUsername}>ИМЯ</div>
		<div className="col-sm-3" onClick={onSortByEmail}>EMAIL</div>
		<div className="col-sm-6" onClick={onSortByText}>ТЕКСТ</div>
	</div>

)

export const Task = ({username, email, text}) => (
	<div className="row">
		<div className="col-sm-3 overflow-auto">{username}</div>
		<div className="col-sm-3 overflow-auto">{email}</div>
		<div className="col-sm-6 overflow-auto">{text}</div>
	</div>
)

export const Tasks = ({data, onCreate}) => {
	return (
		<div className="container">
			<TaskHeader />
			{data.map( (task,i) => (<Task key={i} username={task.username} email={task.email} text={task.text} />) ) }
      <TaskInput onCreate={onCreate}/>
		</div>
	)
}
