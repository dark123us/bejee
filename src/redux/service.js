const TOKEN = 'TOKEN';

export const getToken = () => ({ token: localStorage.getItem(TOKEN) })
export const setToken = (token) => { localStorage.setItem(TOKEN, token); }

const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

export const escapeHtml = (string) => {
  return String(string).replace(/[&<>"'`=/]/g, function (s) {
    return entityMap[s];
  });
}
