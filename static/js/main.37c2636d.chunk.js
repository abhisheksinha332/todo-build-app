(this.webpackJsonptodobox=this.webpackJsonptodobox||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(14),c(3)),d=(c(15),c(8)),r=function(t){var e=t.setInputText,c=t.todos,n=t.setTodos,s=t.inputText,a=t.setStatus;return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:s,onChange:function(t){console.log(t.target.value),e(t.target.value)},type:"text",className:"todo-input"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(d.a)(c),[{text:s,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Completed"}),Object(o.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.text,c=t.todos,n=t.todo,s=t.setTodos;return Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("li",{className:"todo-item ".concat(n.completed?"completed":""),children:e}),Object(o.jsx)("button",{onClick:function(){s(c.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){s(c.filter((function(t){return t.id!==n.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.setTodos,n=t.filteredTodos;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(o.jsx)(j,{setTodos:c,todos:e,text:t.text,todo:t},t.id)}))})})};var f=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(n.useState)("all"),f=Object(l.a)(j,2),m=f[0],p=f[1],O=Object(n.useState)([]),x=Object(l.a)(O,2),h=x[0],v=x[1];return Object(n.useEffect)((function(){!function(){switch(m){case"completed":v(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}}()}),[d,m]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h2",{children:"Let's Complete Pending work !"})}),Object(o.jsx)(r,{inputText:c,todos:d,setTodos:u,setInputText:s,setStatus:p}),Object(o.jsx)(b,{setTodos:u,todos:d,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.37c2636d.chunk.js.map