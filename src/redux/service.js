const TOKEN = 'TOKEN';

export const getToken = () => ({ token: localStorage.getItem(TOKEN) })
export const setToken = (token) => { localStorage.setItem(TOKEN, token); }
