import React, { useState, useEffect } from 'react';

export const TaskEdit = ({onSave, onCancel, data}) => {
  const [newtext, setText] = useState("");
  const [checked, setCheck] = useState(data.status >= 10);
  useEffect(()=> {
    console.log(data);
    setText(data.text);
    setCheck(data.status >= 10);
  }, [data])

  const handleSubmit = e => {
    e.preventDefault();
    onSave({newtext, checked});
  }

  return (
    <form className="row " onSubmit={e => handleSubmit(e)}>
      <div className="col-sm-3 overflow-auto">
        {data.username}
      </div>
      <div className="col-sm-3 overflow-auto">
        {data.email}
      </div>
      <div className="col-sm-4">
        <textarea type="text" className="form-control" onChange={ e => setText(e.target.value) } value={newtext} />
      </div>
      <div className="col-sm-2">
        <input type="checkbox" className="form-control form-check-input" 
          onChange={ () => setCheck(!checked) } checked={checked} />
      </div>
      <div className="row">
        <div className="col-auto">
          <button type="submit" className="btn btn-success" onClick={ e => handleSubmit(e) } >Изменить </button> 
          <button className="btn btn-secondary" onClick={ () => onCancel() } >Отмена</button> 
        </div>
      </div>
    </form>
  )
}

export const TaskAdd = ({onSave}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSave({username, email, text});
    setUsername(""); setEmail(""); setText("");
  }

  return (
    <form className="row " onSubmit={e => handleSubmit(e)}>
      <div className="col-sm-3">
        <input type="text" className="form-control" onChange={ e => setUsername(e.target.value) } value={username} />
      </div>
      <div className="col-sm-3">
        <input type="text" className="form-control" onChange={ e => setEmail(e.target.value) } value={email} />
      </div>
      <div className="col-sm-4">
        <textarea type="text" className="form-control" onChange={ e => setText(e.target.value) } value={text} />
      </div>
      <div className="row">
        <div className="col-auto">
         <button type="submit" className="btn btn-success" onClick={ e => handleSubmit(e) } > Создать </button> 
        </div>
      </div>
    </form>
  )
}

export const TaskHeader = ({onSortBy}) => (
	<div className="row">
		<div className="col-sm-3 cursor-pointer" onClick={() => onSortBy('username')}>ИМЯ</div>
		<div className="col-sm-3 cursor-pointer" onClick={() => onSortBy('email')}>EMAIL</div>
		<div className="col-sm-4" >ТЕКСТ</div>
		<div className="col-sm-2 cursor-pointer" onClick={() => onSortBy('status')}>Статус</div>
	</div>

)

export const Task = ({data, allowEdit, onSelect}) => {
  const handleSelect = () => {
    if (allowEdit) onSelect(data);
  }
  const text = {
    0: "задача не выполнена",
    1: "задача не выполнена, отредактирована админом",
    10: "задача выполнена",
    11: "задача отредактирована админом и выполнена",
  }
  const status = (allowEdit)?
    (<>{text[data.status]} <i className="bi-pencil" /> </>):
    (<> </>); 
  return (
    <div className={allowEdit?"row cursor-pointer":"row"} onClick={() => handleSelect()}>
      <div className="col-sm-3 overflow-auto">{data.username}</div>
      <div className="col-sm-3 overflow-auto">{data.email}</div>
      <div className="col-sm-4 overflow-auto">{data.text}</div>
      <div className="col-sm-2 overflow-auto">{status} </div>
    </div>
  )
}

export const Tasks = ({sortBy, data, allowEdit, onSortBy, onAdd, onEdit}) => {
  const [editmode, setEditmode] = useState(false);
  const [selectedTask, selectTask] = useState({});
  const clearSelect  = () => {
    selectTask({});
    setEditmode(false);
  }
  useEffect( () => {
    clearSelect();
  },[data]);
  const handleSelectTask = task => {
    selectTask(task);
    setEditmode(true);
  }
  const handleEdit = ({newtext, checked}) => {
    const flagTextChange = (selectedTask.status === 1 || selectedTask.status == 11 || newtext !== selectedTask.text) & 1;
    const flagStatus = (checked)?10:0;
    const newstatus = flagTextChange + flagStatus;
    if (newstatus > 0) onEdit({task: selectedTask, newtext, newstatus});
    clearSelect();
  }
  const tasks = data.map( task => (
    <Task key={task.id} data={task} allowEdit={allowEdit} onSelect={task => handleSelectTask(task)}/>
  ));
  const taskEdit = (editmode)?
    (<TaskEdit 
        data={selectedTask} 
        onSave={ ({newtext, checked}) => handleEdit({newtext, checked}) } 
        onCancel={clearSelect} 
      />):
    (<TaskAdd onSave={({username, email, text}) => onAdd({username, email, text})} />)
	return (
		<div className="container">
			<TaskHeader sortBy={sortBy} onSortBy={onSortBy}/>
      {tasks}
      {taskEdit}
		</div>
	)
}
