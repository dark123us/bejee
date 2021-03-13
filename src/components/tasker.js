import React, { useState } from 'react';

export const TaskInput = ({onCreate}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleCreate = e => {
    e.preventDefault();
    onCreate(name, email, text);
    setName(""); setEmail(""); setText("");
  }

  return (
    <form className="row " onSubmit={() => handleCreate()}>
      <div className="col-sm-3">
        <input type="text" className="form-control" onChange={ e => setName(e.target.value) } value={name} />
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

export const TaskHeader = ({onSortByName, onSortByEmail, onSortByText}) => (
	<div className="row">
		<div className="col-sm-3" onClick={onSortByName}>ИМЯ</div>
		<div className="col-sm-3" onClick={onSortByEmail}>EMAIL</div>
		<div className="col-sm-6" onClick={onSortByText}>ТЕКСТ</div>
	</div>

)

export const Task = ({name, email, text}) => (
	<div className="row">
		<div className="col-sm-3 overflow-auto">{name}</div>
		<div className="col-sm-3 overflow-auto">{email}</div>
		<div className="col-sm-6 overflow-auto">{text}</div>
	</div>
)

export const Tasks = ({data, onCreate}) => {
	return (
		<div className="container">
			<TaskHeader />
			{data.map( (task,i) => (<Task key={i} name={task.name} email={task.email} text={task.text} />) ) }
      <TaskInput onCreate={onCreate}/>
		</div>
	)
}
