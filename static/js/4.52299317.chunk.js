(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[4],{49:function(e,t,s){"use strict";s.d(t,"f",(function(){return u})),s.d(t,"e",(function(){return j})),s.d(t,"d",(function(){return b})),s.d(t,"c",(function(){return O})),s.d(t,"a",(function(){return m})),s.d(t,"b",(function(){return x}));var n=s(30),c=s(0),a=s(8),r=function(e){var t=e.onSave,s=e.onCancel,r=e.data,i=Object(c.useState)(""),o=Object(n.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(r.status>=10),d=Object(n.a)(j,2),b=d[0],m=d[1];Object(c.useEffect)((function(){u(r.text),m(r.status>=10)}),[r]);var O=function(e){e.preventDefault(),t({newtext:l,checked:b})};return Object(a.jsx)("div",{className:"card mt-2 mb-2",children:Object(a.jsxs)("form",{className:"row",onSubmit:function(e){return O(e)},children:[Object(a.jsx)("div",{className:"col-sm-3 overflow-auto",children:r.username}),Object(a.jsx)("div",{className:"col-sm-3 overflow-auto",children:r.email}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("textarea",{type:"text",className:"form-control",rows:"1",onChange:function(e){return u(e.target.value)},value:l})}),Object(a.jsx)("div",{className:"col-sm-2 text-start",children:Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{type:"checkbox",className:"form-check-input",id:"msgStatus",onChange:function(){return m(!b)},checked:b}),Object(a.jsx)("label",{className:"form-check-label",forhtml:"msgStatus",children:"isDone  "})]})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-10"}),Object(a.jsxs)("div",{className:"col-sm-2",children:[Object(a.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){return O(e)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c "}),Object(a.jsx)("button",{className:"btn btn-secondary",onClick:function(){return s()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})})},i=function(e){var t=e.onSave,s=Object(c.useState)(""),r=Object(n.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),u=Object(n.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(""),m=Object(n.a)(b,2),O=m[0],x=m[1],f=function(e){e.preventDefault(),t({username:i,email:j,text:O}),o(""),d(""),x("")};return Object(a.jsx)("div",{className:"card mt-2 mb-2",children:Object(a.jsxs)("form",{className:"row ",onSubmit:function(e){return f(e)},children:[Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return o(e.target.value)},value:i})}),Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return d(e.target.value)},value:j})}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("textarea",{rows:"1",type:"text",className:"form-control",onChange:function(e){return x(e.target.value)},value:O})}),Object(a.jsx)("div",{className:"col-sm-2",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){return f(e)},children:" \u0421\u043e\u0437\u0434\u0430\u0442\u044c "})})]})})},o=function(e){var t=e.onSortBy,s=e.sortBy,n=s.direction?Object(a.jsx)("i",{className:"bi-caret-down"}):Object(a.jsx)("i",{className:"bi-caret-up"}),c=s.field;return Object(a.jsxs)("div",{className:"row fs-3",children:[Object(a.jsxs)("div",{className:"col-sm-3 cursor-pointer border text-truncate ",onClick:function(){return t("username")},children:["username"===c?n:""," \u0418\u041c\u042f \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042f"]}),Object(a.jsxs)("div",{className:"col-sm-3 cursor-pointer border text-truncate",onClick:function(){return t("email")},children:["email"===c?n:""," EMAIL"]}),Object(a.jsx)("div",{className:"col-sm-4 border text-truncate",children:"\u0422\u0415\u041a\u0421\u0422 \u0417\u0410\u0414\u0410\u0427\u0418"}),Object(a.jsxs)("div",{className:"col-sm-2 cursor-pointer border text-truncate",onClick:function(){return t("status")},children:["status"===c?n:""," \u0421\u0422\u0410\u0422\u0423\u0421"]})]})},l=function(e){var t=e.data,s=e.allowEdit,n=e.onSelect,c=Object(a.jsxs)(a.Fragment,{children:[{0:"\u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",1:"\u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0430\u0434\u043c\u0438\u043d\u043e\u043c",10:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",11:"\u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0430\u0434\u043c\u0438\u043d\u043e\u043c \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"}[t.status],"  "]}),r="row minheight";return r+=s?" cursor-pointer":"",r+=" border",0===t.status&&(r+=" border-primary"),1===t.status&&(r+=" border-secondary"),10===t.status&&(r+=" border-info"),11===t.status&&(r+=" border-success"),Object(a.jsxs)("div",{className:r,onClick:function(){s&&n(t)},children:[Object(a.jsxs)("div",{className:"col-sm-3 text-truncate",children:[" ",Object(a.jsxs)("span",{className:"align-middle",children:[" ",t.username," "]})]}),Object(a.jsx)("div",{className:"col-sm-3 text-truncate",children:t.email}),Object(a.jsx)("div",{className:"col-sm-4 overflow-auto",children:t.text}),Object(a.jsxs)("div",{className:"col-sm-2 overflow-auto",children:[c," "]})]})},u=function(e){var t=e.sortBy,s=e.data,u=e.allowEdit,j=e.onSortBy,d=e.onAdd,b=e.onEdit,m=Object(c.useState)(!1),O=Object(n.a)(m,2),x=O[0],f=O[1],h=Object(c.useState)({}),v=Object(n.a)(h,2),N=v[0],g=v[1],p=function(){g({}),f(!1)};Object(c.useEffect)((function(){p()}),[s]);var w=s.map((function(e){return Object(a.jsx)(l,{data:e,allowEdit:u,onSelect:function(e){return function(e){g(e),f(!0)}(e)}},e.id)})),k=x?Object(a.jsx)(r,{data:N,onSave:function(e){return function(e){var t=e.newtext,s=e.checked,n=(1&(1===N.status||11===N.status||t!==N.text))+(s?10:0);n>0&&b({task:N,newtext:t,newstatus:n}),p()}({newtext:e.newtext,checked:e.checked})},onCancel:p}):Object(a.jsx)(i,{onSave:function(e){var t=e.username,s=e.email,n=e.text;return d({username:t,email:s,text:n})}});return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(o,{sortBy:t,onSortBy:j}),w,k]})},j=function(e){var t=e.count,s=e.current,n=e.onSelect;if(t<2)return Object(a.jsx)(a.Fragment,{});for(var c=[],r=function(e){c.push(Object(a.jsx)("li",{className:e===s?"page-item active":"page-item",onClick:function(){return n(e)},children:Object(a.jsx)("a",{className:"page-link",href:"#back",children:e})},e))},i=1;i<=t;i++)r(i);return Object(a.jsx)("nav",{"aria-label":"...",children:Object(a.jsxs)("ul",{className:"pagination",children:[Object(a.jsx)("li",{className:1===s?"page-item disabled":"page-item",onClick:function(){return n(s-1)},children:Object(a.jsx)("a",{className:"page-link",href:"#{i}",children:"Previous"})}),c,Object(a.jsx)("li",{className:s===t?"page-item disabled":"page-item",onClick:function(){return n(s+1)},children:Object(a.jsx)("a",{className:"page-link",href:"#next",children:"Next"})})]})})},d=function(e){var t=e.data,s=e.onClose,r=Object(c.useState)(10),i=Object(n.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(100),j=Object(n.a)(u,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){var e=setInterval((function(){o<=0?s(t):(l(o-1),b(100*o/10|0))}),1e3);return function(){return clearInterval(e)}}),[t,s,o]),Object(a.jsxs)("div",{className:{warning:"alert alert-warning alert-dismissible fade show",success:"alert alert-success alert-dismissible fade show",error:"alert alert-danger alert-dismissible fade show"}[t.type],role:"alert",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:t.strong})," ",t.message,Object(a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:function(){return s(t)}})]}),Object(a.jsx)("div",{className:"progress",style:{height:"1px"},children:Object(a.jsx)("div",{className:{warning:"progress-bar bg-warning",success:"progress-bar bg-success",error:"progress-bar bg-danger"}[t.type],role:"progressbar",style:{width:d+"%"},"aria-valuenow":d})})]})},b=function(e){var t=e.data,s=e.onClose,n=t.slice(0,10).map((function(e){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-8"}),Object(a.jsx)("div",{className:"com-sm-4",children:Object(a.jsx)(d,{onClose:function(e){return s(e)},data:e},e.id)})]},e.id)}));return Object(a.jsx)("div",{className:"fullscreen",children:n})},m=function(e){var t=e.token,s=e.onClick;return t?Object(a.jsx)("button",{onClick:function(){return s()},className:"btn btn-secondary",children:"\u0412\u044b\u0445\u043e\u0434"}):Object(a.jsx)("button",{onClick:function(){return s()},className:"btn btn-secondary",children:"\u0412\u0445\u043e\u0434"})},O=function(e){var t=e.onLogin,s=e.onCancel,r=e.isCheckingLogin,i=Object(c.useState)(""),o=Object(n.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(""),d=Object(n.a)(j,2),b=d[0],m=d[1],O=function(e){e.preventDefault(),t(l,b)};Object(c.useEffect)((function(){var e=function(e){27===e.keyCode&&s()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[s]);var x=r?Object(a.jsxs)("button",{type:"button",className:"btn btn-primary",disabled:!0,children:[Object(a.jsx)("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 ..."]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary me-4",onClick:function(){return s()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-success ms-4",onClick:function(e){return O(e)},children:"\u0412\u0445\u043e\u0434"})]});return Object(a.jsx)("form",{onSubmit:function(){return O()},onReset:function(){return s()},children:Object(a.jsx)("div",{className:"card pb-4 pt-4",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"mb-4 row",children:[Object(a.jsx)("label",{htmlFor:"staticEmail",className:"col-sm-4 col-form-label",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(a.jsx)("div",{className:"col-sm-8",children:Object(a.jsx)("input",{type:"text",className:"form-control",id:"inputUsername",value:l,onChange:function(e){return u(e.target.value)}})})]}),Object(a.jsxs)("div",{className:"mb-4 row",children:[Object(a.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("div",{className:"col-sm-8",children:Object(a.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",onChange:function(e){return m(e.target.value)},value:b})})]}),Object(a.jsx)("div",{children:x})]})})})},x=function(e){var t=e.state,s=Object(c.useState)(!1),r=Object(n.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){o(t)}),[t,o]),Object(a.jsx)("div",{className:i?"showmodal":"hidemodal",children:Object(a.jsx)("div",{className:"center-position",children:Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},50:function(e,t,s){"use strict";s.r(t);var n=s(30),c=s(0),a=s(18),r=s(6),i=s(49),o=s(25),l=s(26),u=s(8),j=Object(a.b)((function(e){return{token:Object(o.h)(e),message:Object(o.b)(e),tasks:Object(o.g)(e),pages:Object(o.c)(e),sortBy:Object(o.e)(e),isLoading:Object(o.f)(e),isShowLogin:Object(o.j)(e)}}),(function(e){return{createTask:function(t){var s=t.username,n=t.email,c=t.text;return e(Object(l.c)({username:s,email:n,text:c}))},editTask:function(t){var s=t.task,n=t.newtext,c=t.newstatus;return e(Object(l.d)({task:s,newtext:n,newstatus:c}))},selectPage:function(t){return e(Object(l.i)(t))},showError:function(t){return e(Object(l.j)(t))},onLogout:function(){return e(Object(l.g)())},onSortBy:function(t){return e(Object(l.h)(t))},onCloseMessage:function(t){return e(Object(l.b)(t))},onShowMessage:function(t){return e(Object(l.l)(t))}}}))((function(e){var t=e.token,s=e.message,a=e.tasks,o=e.pages,l=e.isLoading,j=e.createTask,d=e.editTask,b=e.selectPage,m=(e.showError,e.onLogout),O=e.sortBy,x=e.onSortBy,f=e.onCloseMessage,h=(e.onShowMessage,e.isShowLogin),v=Object(c.useState)(!1),N=Object(n.a)(v,2),g=N[0],p=N[1];Object(c.useEffect)((function(){h&&p(!0)}),[h,p]);return g?Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsx)(r.a,{to:"/login"})," "]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-10"}),Object(u.jsx)("div",{className:"col-sm-2 text-end",children:Object(u.jsx)(i.a,{onClick:function(){t?m():p(!0)},token:t})})]}),Object(u.jsxs)("div",{className:"container border rounded",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12",children:Object(u.jsx)(i.f,{data:a,allowEdit:!!t,onAdd:function(e){var t=e.username,s=e.email,n=e.text;return j({username:t,email:s,text:n})},onEdit:function(e){var t=e.task,s=e.newtext,n=e.newstatus;return d({task:t,newtext:s,newstatus:n})},sortBy:O,onSortBy:function(e){return x(e)}})})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12",children:Object(u.jsx)(i.e,{onSelect:function(e){return function(e){e>0&&e!==o.current&&e<=o.count&&b(e)}(e)},current:o.current,count:o.count})})}),Object(u.jsx)(i.b,{state:l})]}),Object(u.jsx)(i.d,{data:s,onClose:function(e){return f(e)}})]})}));t.default=j}}]);
//# sourceMappingURL=4.52299317.chunk.js.map