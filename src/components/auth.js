import React, { useState, useEffect } from "react";

export const Auth = ({token, onClick }) => {
  if (token){
    return (<button onClick={() => onClick()} className="btn btn-secondary">Выход</button>)
  } else {
    return (<button onClick={()=> onClick()} className="btn btn-secondary">Вход</button>)
  }
}
export const LoginForm = ({onLogin, onCancel, isCheckingLogin }) => {
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    onLogin(name, passwd);
  };
  const handleCancel = () => {
    onCancel();
  };
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onCancel(true);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onCancel]);
                  

  const btns = (!isCheckingLogin)?(
    <>
      <button type="button" className="btn btn-secondary me-4" 
          onClick={() => handleCancel()} >
        Отмена
      </button>
      <button type="submit" className="btn btn-success ms-4"
          onClick={e => handleLogin(e)}>
        Вход
      </button>
    </>
    ) :(
      <button type="button" className="btn btn-primary" disabled>
        <span className="spinner-border spinner-border-sm me-2" role="status"
          aria-hidden="true" />
        Проверка ...
      </button>
    );

  return (
          <form onSubmit={() => handleLogin()}
                  onReset={()=> handleCancel()}>
              <div className="card pb-4 pt-4">
                  <div className="card-body">
                      <div className="mb-4 row">
                          <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Логин</label>
                          <div className="col-sm-8">
                              <input type="text" className="form-control" 
                                  id="inputUsername" value={name} 
                                  onChange={e => setName(e.target.value)}
                              />
                          </div>
                      </div>
                      <div className="mb-4 row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Пароль</label>
                          <div className="col-sm-8">
                              <input type="password" className="form-control" 
                                  id="inputPassword" onChange={e => setPasswd(e.target.value)}
                                  value={passwd}
                              />
                          </div>
                      </div>
                      <div className="">
                          {btns}
                     </div> 
                  </div>
              </div>

    </form>
)
}

