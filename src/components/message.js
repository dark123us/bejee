import React, { useEffect, useState } from 'react';
const TIMEOUT_MESSAGE = 10;

export const Message = ({data, onClose}) => {
    const types = {
        warning: "alert alert-warning alert-dismissible fade show",
        success: "alert alert-success alert-dismissible fade show",
        error: "alert alert-danger alert-dismissible fade show",
    }
    const progressTypes = {
        warning: "progress-bar bg-warning",
        success: "progress-bar bg-success",
        error: "progress-bar bg-danger",
    }
    
    const [val, setVal] = useState(TIMEOUT_MESSAGE);
    const [width, setWidth] = useState(100);
    useEffect( () => {
        const timer = setInterval(() => {
            if (val <= 0){
                onClose(data);
            } else {
                setVal(val-1);
                setWidth((100 * val / TIMEOUT_MESSAGE) | 0);
            }
        }, 1000);
        return () => clearInterval(timer)
    }, [data, onClose, val ]);

    return (
        <div className={types[data.type]} role="alert">
            <div>
                <strong>{data.strong}</strong> {data.message} 
                <button type="button" className="btn-close" 
                    data-bs-dismiss="alert" aria-label="Close" onClick={() => onClose(data)}>
                </button>
            </div>
            <div className="progress" style={{height: "1px"}}>
                <div className={progressTypes[data.type]} role="progressbar"
                    style={{width: ""+width+"%"}} aria-valuenow={width} />
            </div>
        </div>
  )

}
const Messages = ({data, onClose}) => {
    const rows = data.slice(0, 10).map( msg => (
        <div className="row" key={msg.id} >
            <div className="col-sm-8" />
            <div className="com-sm-4">
                <Message key={msg.id}
                    onClose={ val => onClose(val)} 
                    data={ msg } />
            </div>
        </div>
    )); 
    
    return(
        <div className="fullscreen">
            {rows}
        </div>
    )
}

export default Messages;

