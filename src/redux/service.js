import {
  DEVELOPER, SITE, URI, TOKEN,
} from "./constant.js";

export const getToken = () => { return localStorage.getItem(TOKEN) };
export const setToken = (token) => { localStorage.setItem(TOKEN, token); };
export const clearToken = () => { localStorage.removeItem(TOKEN); };

export const api = async ({command, method, reqParams, formParams}) => {
    command = command || "";
    method = method || "GET";
    reqParams = reqParams || {};
    formParams = formParams || {};
    const res = {
        ok: false,
        message: 'Что-то пошло не так'
    }
    reqParams.developer = DEVELOPER;
    try {
        const url = SITE + URI + command + "?"+ new URLSearchParams(reqParams);
        const options = {
            mode: 'cors', 
            method: method, 
        };
        if (method === 'POST') {
            const formData = new FormData();
            for (let key in formParams){
                formData.append(key, formParams[key]);
            }
            options.body = formData;
        }
        const response = await fetch(url, options);
        if (response.ok){
            const data = await response.json();
            if (data.status === 'ok'){
                res.ok = true;
                res.message = data.message;
            } else {
                res.ok = false;
                res.message = data.message
            }
        }
    } catch (e){
        res.ok = false;
        res.message ='Что-то пошло не так';
    }
    return res;
}

