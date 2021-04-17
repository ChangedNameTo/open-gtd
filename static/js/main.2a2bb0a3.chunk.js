(this["webpackJsonpopen-gtd"]=this["webpackJsonpopen-gtd"]||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n,s=a(1),c=a(10),r=a(19),i=a(6),o=a(4),d=a(11),l=a(18),u=a.n(l),x=a(12),b=a(8),f=a(3);!function(e){e[e.Active=0]="Active",e[e.Complete=1]="Complete",e[e.Dropped=2]="Dropped"}(n||(n={})),Object(f.d)();var j=Object(d.b)({name:"tasks",initialState:{taskList:{byId:{},allIds:[]},selectedTask:"-1"},reducers:{addTask:function(e,t){if(""!==t.payload){var a=String(e.taskList.allIds.length);e.taskList.byId[a]={task:t.payload,note:"",status:n.Active,created:Date.now(),modified:Date.now(),completed:-1},e.taskList.allIds.push(a)}},selectTask:function(e,t){e.selectedTask=t.payload},updateTaskTaskName:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.task=t.payload.newName,a.modified=Date.now()},updateTaskTaskStatus:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.status=t.payload.newStatus,a.status===n.Complete?a.completed=Date.now():a.completed=-1,a.modified=Date.now()},updateTaskTaskNote:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.note=t.payload.newNote,a.modified=Date.now()}}}),m=j.actions,h=m.addTask,g=m.selectTask,p=m.updateTaskTaskName,k=m.updateTaskTaskStatus,v=m.updateTaskTaskNote,O=function(e){return e.tasks.taskList.allIds},y=function(e){return e.tasks.selectedTask},N=function(e){return e.tasks.taskList.byId[e.tasks.selectedTask]},w=j.reducer,T={key:"root",storage:u.a,blacklist:["tasks"]},C={key:"tasks",storage:u.a,blacklist:["selectedTask"]},I=Object(o.c)({tasks:Object(x.a)(C,w)}),D=Object(x.a)(T,I),L=Object(d.a)({reducer:D,middleware:[b.a]}),S=Object(x.b)(L),A=L,B=a(7),E=a(21),F=a(22),z=a(23),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},P=(a(37),a(5)),J=a(0);var K=function(){return Object(J.jsx)("nav",{className:"bg-gray-800",children:Object(J.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 pb-0.5",children:Object(J.jsx)("div",{className:"flex items-center justify-between h-12",children:Object(J.jsxs)("div",{className:"flex items-center",children:[Object(J.jsx)("div",{className:"flex-shrink-0 py-1",children:Object(J.jsx)(P.a,{className:"text-white",icon:["far","check-circle"],size:"2x"})}),Object(J.jsx)("div",{className:"hidden md:block",children:Object(J.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(J.jsx)("button",{className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold",children:"Inbox"}),Object(J.jsx)("button",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-bold",children:"Tasks"})]})})]})})})})};var q=function(){var e=function(e,t){return Object(J.jsx)("div",{className:"grid justify-items-center px-4",children:Object(J.jsx)("button",{className:"text-white rounded border-2 border-white hover:bg-white hover:text-gray-800 px-2 py-1 focus:outline-none",onClick:function(){return function(e){window.open(e)}(t)},children:Object(J.jsx)(P.a,{size:"3x",icon:["fab",e]})})})};return Object(J.jsxs)("div",{className:"w-full bg-gray-800 divide-x flex flex-row justify-center py-2",children:[e("github-square","https://github.com/ChangedNameTo/open-gtd"),e("linkedin","")]})},R=a(13),G=function(){return Object(i.b)()};i.c;var H=function(){var e=Object(s.useRef)(!0),t=Object(s.useState)(!1),a=Object(R.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)("hidden"),i=Object(R.a)(r,2),o=i[0],d=i[1],l=Object(s.useState)(""),u=Object(R.a)(l,2),x=u[0],b=u[1],f=G();Object(s.useEffect)((function(){e.current?e.current=!1:n?setTimeout((function(){d("")}),500):setTimeout((function(){d("hidden")}),500)}),[n]);var j=function(){f(h(x.trim())),b("")};return Object(J.jsxs)("div",{className:"space-y-2",children:[Object(J.jsx)("button",{className:"w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600 text-white bold active:ring-green-500 focus:outline-none",id:"addTaskButton",onClick:function(){return c(!n)},children:"Add New Task"}),Object(J.jsxs)("div",{className:"".concat(n?"animate-fade-in-down flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded":"animate-fade-out-up flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded"," ").concat(o?"hidden":""),children:[Object(J.jsx)("input",{type:"text",className:"rounded-md rounded-r-none w-full border-green-100 focus:ring-0 focus:border-transparent",id:"addTaskInput",placeholder:"Enter new task",value:x,onChange:function(e){return b(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),j())}(e)}}),Object(J.jsx)("span",{className:"flex items-center bg-green-600 rounded rounded-l-none border-0 px-3 hover:bg-green-500 cursor-pointer duration-200 transition ease-in-out",onClick:function(){return j()},children:Object(J.jsx)("button",{className:"focus:outline-none",id:"submitNewTaskButton",children:Object(J.jsx)(P.a,{className:"text-white py-auto",icon:["fas","check-circle"],size:"2x"})})})]})]})};var Q=function(e){var t=G(),a=Object(i.c)((function(t){return t.tasks.taskList.byId[e.taskId]})),s=function(a){a.target===a.currentTarget&&t(g(e.taskId))},c=function(a){t(k({newStatus:a,taskId:e.taskId}))};return Object(J.jsxs)("div",{id:"taskId".concat(e.taskId),className:"min-w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded my-0.5 px-1 subpixel-antialiased font-mono focus:ring-0 focus:border-transparent focus:outline-none truncate cursor-pointer",onClick:function(e){return s(e)},children:[Object(J.jsx)("div",{className:"inline px-1 isolate",children:a.status===n.Active?Object(J.jsx)(P.a,{className:"text-gray-300 fa-lg mt-1",icon:["far","circle"],onClick:function(){return c(n.Complete)}}):a.status===n.Complete?Object(J.jsx)(P.a,{className:"text-gray-300 fa-lg mt-1",icon:["fas","check-circle"],onClick:function(){return c(n.Active)}}):a.status===n.Dropped?Object(J.jsx)(P.a,{className:"text-gray-300 fa-lg mt-1",icon:["fas","minus-circle"],onClick:function(){return c(n.Active)}}):void 0}),Object(J.jsx)("div",{className:"".concat(a.task?"":"text-gray-300"," inline-flex flex-1"),onClick:function(e){return s(e)},children:a.task?a.task:"Empty task text"})]})};var U=function(){var e=Object(i.c)(O);return Object(J.jsxs)("div",{className:"flex flex-col px-2 flex-grow",children:[Object(J.jsx)("div",{className:"header bg-white shadow",children:Object(J.jsx)("div",{className:"max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8",children:Object(J.jsx)("h1",{className:"text-3xl font-bold text-gray-900 text-center",children:"Tasks"})})}),Object(J.jsx)("div",{className:"divide-y divide-gray-300",id:"taskList",children:function(){if(e)return e.map((function(e,t){return Object(J.jsx)(Q,{taskId:e},t)}))}()}),Object(J.jsx)("br",{}),H()]})};var V=function(){var e=Object(i.c)(y),t=G(),a=function(a){t(k({newStatus:a,taskId:e}))},s=Object(i.c)(N);if("-1"!==e){var c=function(e){return e>0?new Date(e).toLocaleString("en-us"):"N/A"},r=function(e){return s.status===e?"text-bold bg-gray-700 text-gray-100 hover:text-gray-700 hover:bg-gray-300":"bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300"};return Object(J.jsx)("div",{className:"flex flex-col px-2 bg-gray-200 rounded-l-xl shadow-xl py-1 min-h-full transition ease-in border-gray-300 w-1/4",children:Object(J.jsxs)("div",{id:"selectedTaskPane",className:"divide-y divide-gray-700",children:[Object(J.jsxs)("div",{className:"inline",children:[Object(J.jsx)("div",{className:"float-left mt-1",children:Object(J.jsxs)("span",{className:"fa-layers fa-fw fa-2x group my-1 cursor-pointer",id:"closeSelectedTask",onClick:function(){t(g("-1"))},children:[Object(J.jsx)(P.a,{className:"text-gray-300 group-hover:text-gray-400 group-hover:border-gray-600 group-hover:ring-2 group-hover:ring-gray-500 rounded-full",icon:["fas","circle"]}),Object(J.jsx)(P.a,{className:"text-gray-500 align-center group-hover:text-gray-600 pl-0.5",icon:["fas","angle-right"]})]})}),Object(J.jsx)("input",{className:"w-full mb-2 rounded-md shadow-sm px-1 border border-gray-600 hover:ring-2 hover:ring-gray-600",id:"selectedTaskName",value:s.task,onChange:function(a){return function(a){t(p({newName:a.target.value,taskId:e}))}(a)}})]}),Object(J.jsxs)("div",{className:"flex flex-row w-full py-2",children:[Object(J.jsx)("button",{className:"".concat(r(n.Active)," border border-gray-600 flex-auto rounded-l duration-200 ease-in-out transition focus:outline-none"),id:"selectedTaskActiveButton",onClick:function(){return a(n.Active)},children:"Active"}),Object(J.jsx)("button",{className:"".concat(r(n.Complete)," border border-gray-600 flex-auto duration-200 ease-in-out transition focus:outline-none"),id:"selectedTaskCompletedButton",onClick:function(){return a(n.Complete)},children:"Complete"}),Object(J.jsx)("button",{className:"".concat(r(n.Dropped)," border border-gray-600 flex-auto rounded-r duration-200 ease-in-out transition focus:outline-none"),id:"selectedTaskDroppedButton",onClick:function(){return a(n.Dropped)},children:"Dropped"})]}),Object(J.jsxs)("div",{className:"flex flex-row w-full",children:[Object(J.jsx)("div",{}),Object(J.jsx)("textarea",{className:"w-full border border-gray-600 rounded-md my-2 resize-y px-1",placeholder:"Note",id:"selectedTaskNote",value:s.note,onChange:function(a){return function(a){t(v({newNote:a.target.value,taskId:e}))}(a)}})]}),Object(J.jsxs)("div",{className:"py-2",children:[Object(J.jsxs)("div",{id:"selectedTaskCreated",children:[Object(J.jsx)("b",{children:"Created:"})," ",c(s.created)]}),Object(J.jsxs)("div",{id:"selectedTaskModified",children:[Object(J.jsx)("b",{children:"Modified:"})," ",c(s.modified)]}),Object(J.jsxs)("div",{id:"selectedTaskCompleted",children:[Object(J.jsx)("b",{children:"Completed:"})," ",c(s.completed)]})]})]})})}};var W=function(){return Object(J.jsx)("div",{className:"flex flex-col px-2 w-1/5",children:Object(J.jsx)("div",{className:"header bg-white shadow",children:Object(J.jsx)("div",{className:"mx-auto py-2 px-1 sm:px-6 lg:px-8",children:Object(J.jsx)("h1",{className:"text-3xl font-bold text-gray-900 text-center",children:"Folders"})})})})};var X=function(){return Object(J.jsxs)("div",{className:"inline-flex flex-grow space-x-2 py-2 h-full w-full",children:[W(),U(),V()]})};var Y=function(){return Object(J.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(J.jsx)("header",{children:K()}),Object(J.jsx)("main",{className:"flex-1 overflow-y-auto mb-20",children:X()}),Object(J.jsx)("footer",{className:"fixed bottom-0 w-full isolation-auto",children:q()})]})};B.b.add(E.a,F.a,z.a),c.render(Object(J.jsx)(i.a,{store:A,children:Object(J.jsx)(r.a,{loading:null,persistor:S,children:Object(J.jsx)(s.StrictMode,{children:Object(J.jsx)(Y,{})})})}),document.getElementById("root")),M()}},[[39,1,2]]]);
//# sourceMappingURL=main.2a2bb0a3.chunk.js.map