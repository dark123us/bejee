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
      <div className="col-sm-5">
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

export const TaskHeader = ({onSortBy}) => (
	<div className="row">
		<div className="col-sm-3" onClick={() => onSortBy('username')}>ИМЯ</div>
		<div className="col-sm-3" onClick={() => onSortBy('email')}>EMAIL</div>
		<div className="col-sm-5" onClick={() => onSortBy('text')}>ТЕКСТ</div>
		<div className="col-sm-1" onClick={() => onSortBy('status')}>Статус</div>
	</div>

)

export const Task = ({username, email, text, status}) => (
	<div className="row">
		<div className="col-sm-3 overflow-auto">{username}</div>
		<div className="col-sm-3 overflow-auto">{email}</div>
		<div className="col-sm-5 overflow-auto">{text}</div>
		<div className="col-sm-1 overflow-auto">{status}</div>
	</div>
)

export const Tasks = ({data, onCreate, onSortBy}) => {
	return (
		<div className="container">
			<TaskHeader onSortBy={onSortBy}/>
			{data.map( (task,i) => (<Task key={i} username={task.username} email={task.email} text={task.text} />) ) }
      <TaskInput onCreate={onCreate}/>
		</div>
	)
}
