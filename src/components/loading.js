import React, {useEffect, useState} from 'react';

const Loading = ({state}) => {
    const [show, setShow] = useState(false);
    useEffect(()=> {
        setShow(state);
    },[state, setShow])
    return (
        <div className={show?"showmodal":"hidemodal"}>
            <div className="center-position">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span> 
                </div>
            </div>
        </div>
    )
}

export default Loading;
