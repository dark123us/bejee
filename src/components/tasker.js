import React, { useState, useEffect } from 'react';

export const TaskEdit = ({onSave, onCancel, data}) => {
    const [newtext, setText] = useState("");
    const [checked, setCheck] = useState(data.status >= 10);
    useEffect(()=> {
        setText(data.text);
        setCheck(data.status >= 10);
    }, [data]);

    const handleSubmit = e => {
        e.preventDefault();
        onSave({newtext, checked});
    }

    return (
        <div className="card mt-2 mb-2">
            <form className="row" onSubmit={e => handleSubmit(e)}>
                <div className="col-sm-3 overflow-auto">
                    {data.username}
                </div>
                <div className="col-sm-3 overflow-auto">
                    {data.email}
                </div>
                <div className="col-sm-4">
                    <textarea type="text" className="form-control" rows="1"
                        onChange={ e => setText(e.target.value) } value={newtext} />
                </div>
                <div className="col-sm-2 text-start">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="msgStatus"
                            onChange={ () => setCheck(!checked) } checked={checked} />
                        <label className="form-check-label" forhtml="msgStatus">isDone  </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10"/>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-success" onClick={ e => handleSubmit(e) } >Изменить </button> 
                            <button className="btn btn-secondary" onClick={ () => onCancel() } >Отмена</button> 
                        </div>
                    </div>
                </form>
        </div>
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
        <div className="card mt-2 mb-2">
            <form className="row " onSubmit={e => handleSubmit(e)}>
                <div className="col-sm-3">
                    <input type="text" className="form-control" onChange={ e => setUsername(e.target.value) } value={username} />
                </div>
                <div className="col-sm-3">
                    <input type="text" className="form-control" onChange={ e => setEmail(e.target.value) } value={email} />
                </div>
                <div className="col-sm-4">
                    <textarea rows="1" type="text" className="form-control" onChange={ e => setText(e.target.value) } value={text} />
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-success" onClick={ e => handleSubmit(e) } > Создать </button> 
                </div>
            </form>
        </div>
    )
}

export const TaskHeader = ({onSortBy, sortBy}) => {
    const cl = sortBy.direction?<i className="bi-caret-down" />:<i className="bi-caret-up" />;
    const f = sortBy.field;
    return (
        <div className="row fs-3">
            <div className="col-sm-3 cursor-pointer border text-truncate " onClick={() => onSortBy('username')}>
                {f==='username'?cl:""} ИМЯ ПОЛЬЗОВАТЕЛЯ
            </div>
            <div className="col-sm-3 cursor-pointer border text-truncate" onClick={() => onSortBy('email')}>
                {f==='email'?cl:""} EMAIL
            </div>
            <div className="col-sm-4 border text-truncate">ТЕКСТ ЗАДАЧИ</div>
            <div className="col-sm-2 cursor-pointer border text-truncate" onClick={() => onSortBy('status')}>
                {f==='status'?cl:""} СТАТУС
            </div>
        </div>
    )
}

export const Task = ({data, allowEdit, onSelect }) => {
    const handleSelect = () => {
        if (allowEdit) onSelect(data);
    }
    const text = {
        0: "не выполнена",
        1: "не выполнена, отредактирована админом",
        10: "выполнена",
        11: "отредактирована админом и выполнена",
    }
    const status = (<>{text[data.status]}  </>);
    let  rowClass = "row minheight";
    rowClass += allowEdit?" cursor-pointer":"";
    rowClass += " border";
    if (data.status === 0) rowClass += " border-primary";
    if (data.status === 1) rowClass += " border-secondary";
    if (data.status === 10) rowClass += " border-info";
    if (data.status === 11) rowClass += " border-success";
    return (
        <div className={rowClass} onClick={() => handleSelect()}>
            <div className="col-sm-3 text-truncate"> <span className="align-middle"> {data.username} </span></div>
            <div className="col-sm-3 text-truncate">{data.email}</div>
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
        const flagTextChange = (selectedTask.status === 1 || selectedTask.status === 11 || newtext !== selectedTask.text) & 1;
        const flagStatus = (checked)?10:0;
        const newstatus = flagTextChange + flagStatus;
        if (newstatus > 0) onEdit({task: selectedTask, newtext, newstatus});
        clearSelect();
    }
    const tasks = data.map( task => (
        <Task key={task.id} 
            data={task} 
            allowEdit={allowEdit} 
            onSelect={task => handleSelectTask(task)}/>
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
