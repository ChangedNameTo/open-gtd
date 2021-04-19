(this["webpackJsonpopen-gtd"]=this["webpackJsonpopen-gtd"]||[]).push([[0],{40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n,s,r=a(1),i=a(12),c=a(21),o=a(6),l=a(4),d=a(13),u=a(20),b=a.n(u),f=a(14),x=a(10),j=a(3);!function(e){e.Active="Active",e.Complete="Complete",e.Dropped="Dropped"}(n||(n={})),function(e){e.None="None",e.Low="Low",e.Medium="Medium",e.High="High",e.Immediate="Immediate"}(s||(s={})),Object(j.d)();var m=Object(d.b)({name:"tasks",initialState:{taskList:{byId:{},allIds:[]},selectedTask:"-1"},reducers:{addTask:function(e,t){if(""!==t.payload){var a=String(e.taskList.allIds.length);e.taskList.byId[a]={task:t.payload,note:"",status:n.Active,priority:s.None,created:Date.now(),modified:Date.now(),completed:-1},e.taskList.allIds.push(a)}},selectTask:function(e,t){e.selectedTask=t.payload},updateTaskTaskName:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.task=t.payload.newName,a.modified=Date.now()},updateTaskTaskStatus:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.status=t.payload.newStatus,a.status===n.Complete?a.completed=Date.now():a.completed=-1,a.modified=Date.now()},updateTaskTaskNote:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.note=t.payload.newNote,a.modified=Date.now()},updateTaskTaskPriority:function(e,t){var a=e.taskList.byId[t.payload.taskId];a.priority=t.payload.newPriority,a.modified=Date.now()}}}),h=m.actions,g=h.addTask,p=h.selectTask,v=h.updateTaskTaskName,k=h.updateTaskTaskStatus,y=h.updateTaskTaskNote,O=h.updateTaskTaskPriority,N=function(e){return e.tasks.taskList.allIds},w=function(e){return e.tasks.selectedTask},T=function(e){return e.tasks.taskList.byId[e.tasks.selectedTask]},I=m.reducer,C={key:"root",storage:b.a,blacklist:["tasks"]},D={key:"tasks",storage:b.a,blacklist:["selectedTask"]},L=Object(l.c)({tasks:Object(f.a)(D,I)}),S=Object(f.a)(C,L),A=Object(d.a)({reducer:S,middleware:[x.a]}),P=Object(f.b)(A),B=A,M=a(9),E=a(23),z=a(24),F=a(25),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))},J=(a(40),a(5)),K=a(0);var q=function(){return Object(K.jsx)("nav",{className:"bg-gray-800",children:Object(K.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 pb-0.5",children:Object(K.jsx)("div",{className:"flex items-center justify-between h-12",children:Object(K.jsxs)("div",{className:"flex items-center",children:[Object(K.jsx)("div",{className:"flex-shrink-0 py-1",children:Object(K.jsx)(J.a,{className:"text-white",icon:["far","check-circle"],size:"2x"})}),Object(K.jsx)("div",{className:"md:block",children:Object(K.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(K.jsx)("button",{className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold",children:"Inbox"}),Object(K.jsx)("button",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-bold",children:"Tasks"})]})})]})})})})};var R=function(){var e=function(e,t){return Object(K.jsx)("div",{className:"grid justify-items-center px-4",children:Object(K.jsx)("button",{className:"text-white rounded border-2 border-white hover:bg-white hover:text-gray-800 px-2 py-1 focus:outline-none",onClick:function(){return function(e){window.open(e)}(t)},children:Object(K.jsx)(J.a,{size:"3x",icon:["fab",e]})})})};return Object(K.jsxs)("div",{className:"w-full bg-gray-800 divide-x flex flex-row justify-center py-2",children:[e("github-square","https://github.com/ChangedNameTo/open-gtd"),e("linkedin","")]})},G=a(15),Q=function(){return Object(o.b)()};o.c;var U=function(){var e=Object(r.useRef)(!0),t=Object(r.useState)(!1),a=Object(G.a)(t,2),n=a[0],s=a[1],i=Object(r.useState)("hidden"),c=Object(G.a)(i,2),o=c[0],l=c[1],d=Object(r.useState)(""),u=Object(G.a)(d,2),b=u[0],f=u[1],x=Q();Object(r.useEffect)((function(){e.current?e.current=!1:n?setTimeout((function(){l("")}),500):setTimeout((function(){l("hidden")}),500)}),[n]);var j=function(){x(g(b.trim())),f("")};return Object(K.jsxs)("div",{className:"space-y-2",children:[Object(K.jsx)("button",{className:"w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600 text-white bold active:ring-green-500 focus:outline-none",id:"addTaskButton",onClick:function(){return s(!n)},children:"Add New Task"}),Object(K.jsxs)("div",{className:"".concat(n?"animate-fade-in-down flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded":"animate-fade-out-up flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded"," ").concat(o?"hidden":""),children:[Object(K.jsx)("input",{type:"text",className:"rounded-md rounded-r-none w-full border-green-100 focus:ring-0 focus:border-transparent",id:"addTaskInput",placeholder:"Enter new task",value:b,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),j())}(e)}}),Object(K.jsx)("span",{className:"flex items-center bg-green-600 rounded rounded-l-none border-0 px-3 hover:bg-green-500 cursor-pointer duration-200 transition ease-in-out",onClick:function(){return j()},children:Object(K.jsx)("button",{className:"focus:outline-none",id:"submitNewTaskButton",children:Object(K.jsx)(J.a,{className:"text-white py-auto",icon:["fas","check-circle"],size:"2x"})})})]})]})};var V=function(e){var t=Q(),a=Object(o.c)((function(t){return t.tasks.taskList.byId[e.taskId]})),s=function(a){a.target===a.currentTarget&&t(p(e.taskId))},r=function(a){t(k({newStatus:a,taskId:e.taskId}))};return Object(K.jsxs)("div",{id:"taskId".concat(e.taskId),className:"min-w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded my-0.5 px-1 subpixel-antialiased font-mono focus:ring-0 focus:border-transparent focus:outline-none cursor-pointer",onClick:function(e){return s(e)},children:[Object(K.jsx)("div",{className:"inline px-1",children:a.status===n.Active?Object(K.jsx)(J.a,{className:"text-gray-300 fa-lg mt-1",icon:["far","circle"],onClick:function(){return r(n.Complete)}}):a.status===n.Complete?Object(K.jsx)(J.a,{className:"text-gray-300 fa-lg mt-1",icon:["fas","check-circle"],onClick:function(){return r(n.Active)}}):a.status===n.Dropped?Object(K.jsx)(J.a,{className:"text-gray-300 fa-lg mt-1",icon:["fas","minus-circle"],onClick:function(){return r(n.Active)}}):void 0}),Object(K.jsx)("div",{className:"".concat(a.task?"":"text-gray-300"," inline break-words"),onClick:function(e){return s(e)},children:a.task?a.task:"Empty task text"})]})};var W=function(){var e=Object(o.c)(N);return Object(K.jsxs)("div",{className:"flex flex-col px-2 flex-1",children:[Object(K.jsx)("div",{className:"header bg-white shadow",children:Object(K.jsx)("div",{className:"max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8",children:Object(K.jsx)("h1",{className:"text-3xl font-bold text-gray-900 text-center",children:"Tasks"})})}),Object(K.jsx)("div",{className:"divide-y divide-gray-300 flex-initial",id:"taskList",children:function(){if(e)return e.map((function(e,t){return Object(K.jsx)(V,{taskId:e},t)}))}()}),Object(K.jsx)("br",{}),U()]})},X=a(26),Y=[{value:s.None,label:s.None},{value:s.Low,label:s.Low},{value:s.Medium,label:s.Medium},{value:s.High,label:s.High},{value:s.Immediate,label:s.Immediate}];var Z=function(e,t,a){return Object(K.jsx)("select",{className:"mt-1 w-full border border-gray-600 rounded-md focus:outline-none hover:ring-2 hover:ring-gray-600",onChange:function(a){return function(a){e(O({newPriority:a.target.value,taskId:t}))}(a)},id:"selectedTaskPrioritySelect",value:a,children:Y.map((function(e){return Object(K.jsx)("option",{className:"w-full",value:e.value,children:e.label},e.value)}))})};var $=function(){var e=Object(o.c)(w),t=Q(),a=function(a){t(k({newStatus:a,taskId:e}))},s=Object(o.c)(T);if("-1"!==e){var r=function(e){return e>0?new Date(e).toLocaleString("en-us"):"N/A"},i=function(e){return s.status===e?"text-bold bg-gray-700 text-gray-100 hover:text-gray-700 hover:bg-gray-300":"bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300"},c=function(e){return Object(K.jsx)("div",{className:"pt-1 font-bold text-lg",children:e})};return Object(K.jsx)("div",{className:"flex flex-shrink-0 flex-col px-2 bg-gray-200 rounded-l-xl shadow-xl py-1 min-h-full transition ease-in border-gray-300 w-1/4 z-10",children:Object(K.jsxs)("div",{id:"selectedTaskPane",className:"divide-y divide-gray-700",children:[Object(K.jsxs)("div",{className:"inline",children:[Object(K.jsx)("div",{className:"float-left mt-1",children:Object(K.jsxs)("span",{className:"fa-layers fa-fw fa-2x group my-1 cursor-pointer",id:"closeSelectedTask",onClick:function(){t(p("-1"))},children:[Object(K.jsx)(J.a,{className:"text-gray-300 group-hover:text-gray-400 group-hover:border-gray-600 group-hover:ring-2 group-hover:ring-gray-500 rounded-full",icon:["fas","circle"]}),Object(K.jsx)(J.a,{className:"text-gray-500 align-center group-hover:text-gray-600 pl-0.5",icon:["fas","angle-right"]})]})}),Object(K.jsx)(X.a,{className:"w-full border border-gray-600 rounded-md my-1 px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none h-auto font-medium",id:"selectedTaskName",value:s.task,placeholder:"Empty task text",onChange:function(a){return function(a){t(v({newName:a.target.value,taskId:e}))}(a)}})]}),Object(K.jsxs)("div",{className:"w-full pb-2",children:[c("Task Status"),Object(K.jsxs)("div",{className:"flex flex-row",children:[Object(K.jsx)("button",{className:"".concat(i(n.Active)," border border-gray-600 flex-auto rounded-l duration-200 ease-in-out transition focus:outline-none"),id:"selectedTaskActiveButton",onClick:function(){return a(n.Active)},children:"Active"}),Object(K.jsx)("button",{className:"".concat(i(n.Complete)," border border-gray-600 flex-auto duration-200 ease-in-out transition focus:outline-none"),id:"selectedTaskCompletedButton",onClick:function(){return a(n.Complete)},children:"Complete"}),Object(K.jsx)("button",{className:"".concat(i(n.Dropped)," border border-gray-600 flex-auto rounded-r duration-200 ease-in-out transition focus:outline-none"),id:"selectedTaskDroppedButton",onClick:function(){return a(n.Dropped)},children:"Dropped"})]})]}),Object(K.jsxs)("div",{className:"w-full pb-2",children:[c("Tags"),"Not Implemented"]}),Object(K.jsxs)("div",{className:"w-full pb-2",children:[c("Priority"),Z(t,e,s.priority)]}),Object(K.jsxs)("div",{className:"w-full",children:[c("Task Note"),Object(K.jsx)("textarea",{className:"w-full border border-gray-600 rounded-md my-1 resize-y px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none",placeholder:"Note",id:"selectedTaskNote",value:s.note,onChange:function(a){return function(a){t(y({newNote:a.target.value,taskId:e}))}(a)}})]}),Object(K.jsxs)("div",{className:"w-full py-2",children:[c("Task Dates"),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:"inline font-bold",children:"Created: "}),Object(K.jsx)("div",{id:"selectedTaskCreated",className:"inline",children:r(s.created)})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:"inline font-bold",children:"Modified: "}),Object(K.jsx)("div",{id:"selectedTaskModified",className:"inline",children:r(s.modified)})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:"inline font-bold",children:"Completed: "}),Object(K.jsx)("div",{id:"selectedTaskCompleted",className:"inline",children:r(s.completed)})]})]})]})})}};var _=function(){return Object(K.jsx)("div",{className:"flex flex-col flex-shrink-0 px-2 w-1/5",children:Object(K.jsx)("div",{className:"header bg-white shadow",children:Object(K.jsx)("div",{className:"mx-auto py-2 px-1 sm:px-6 lg:px-8",children:Object(K.jsx)("h1",{className:"text-3xl font-bold text-gray-900 text-center",children:"Folders"})})})})};var ee=function(){return Object(K.jsxs)("div",{className:"inline-flex flex-grow space-x-2 py-2 h-full w-full",children:[_(),W(),$()]})};var te=function(){return Object(K.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(K.jsx)("header",{children:q()}),Object(K.jsx)("main",{className:"flex-1 overflow-y-auto mb-20",children:ee()}),Object(K.jsx)("footer",{className:"fixed bottom-0 w-full isolation-auto",children:R()})]})};M.b.add(E.a,z.a,F.a),i.render(Object(K.jsx)(o.a,{store:B,children:Object(K.jsx)(c.a,{loading:null,persistor:P,children:Object(K.jsx)(r.StrictMode,{children:Object(K.jsx)(te,{})})})}),document.getElementById("root")),H()}},[[42,1,2]]]);
//# sourceMappingURL=main.1eb56a60.chunk.js.map