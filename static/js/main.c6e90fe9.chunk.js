(this["webpackJsonpopen-gtd"]=this["webpackJsonpopen-gtd"]||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var a,r,s=n(3),c=n(20),i=n(67),o=n(10),l=n(9),d=n(28),u=n(41),b=n.n(u),f=n(33),j=n(32),m=n(8);!function(e){e.Active="Active",e.Complete="Complete",e.Dropped="Dropped"}(a||(a={})),function(e){e.None="None",e.Low="Low \u2705",e.Medium="Medium \u26a0\ufe0f",e.High="High \ud83d\uded1",e.Immediate="Immediate \u26d4\ufe0f"}(r||(r={})),Object(m.d)();var x=Object(d.b)({name:"tasks",initialState:{taskList:{byId:{},allIds:[]},selectedTask:"-1"},reducers:{addTask:function(e,t){if(""!==t.payload){var n=String(e.taskList.allIds.length);e.taskList.byId[n]={task:t.payload,note:"",status:a.Active,priority:r.None,dueDate:-1,deferDate:-1,created:Date.now(),modified:Date.now(),completed:-1},e.taskList.allIds.push(n)}},selectTask:function(e,t){e.selectedTask=t.payload},updateTaskTaskName:function(e,t){var n=e.taskList.byId[t.payload.taskId];n.task=t.payload.newName,n.modified=Date.now()},updateTaskTaskStatus:function(e,t){var n=e.taskList.byId[t.payload.taskId];n.status=t.payload.newStatus,n.status===a.Complete?n.completed=Date.now():n.completed=-1,n.modified=Date.now()},updateTaskTaskNote:function(e,t){var n=e.taskList.byId[t.payload.taskId];n.note=t.payload.newNote,n.modified=Date.now()},updateTaskTaskPriority:function(e,t){var n=e.taskList.byId[t.payload.taskId];n.priority=t.payload.newPriority,n.modified=Date.now()},updateTaskTaskDeferDate:function(e,t){var n=e.taskList.byId[t.payload.taskId];n.deferDate=t.payload.newDate,n.modified=Date.now()},updateTaskTaskDueDate:function(e,t){var n=e.taskList.byId[t.payload.taskId];n.dueDate=t.payload.newDate,n.modified=Date.now()},deleteTask:function(e,t){delete e.taskList.byId[t.payload.taskId],delete e.taskList.allIds[t.payload.taskId]}}}),h=x.actions,p=h.addTask,g=h.selectTask,v=h.updateTaskTaskName,k=h.updateTaskTaskStatus,y=h.updateTaskTaskNote,O=h.updateTaskTaskPriority,N=h.updateTaskTaskDeferDate,w=h.updateTaskTaskDueDate,T=function(e){return e.tasks.taskList},D=function(e){return e.tasks.selectedTask},I=function(e){return e.tasks.taskList.byId[e.tasks.selectedTask]},C=x.reducer,F=Object(d.b)({name:"filters",initialState:{completion:null,priority:null,hasNote:null},reducers:{setCompletionFilter:function(e,t){e.completion=t.payload},setPriorityFilter:function(e,t){e.priority=t.payload},setHasNoteFilter:function(e,t){e.hasNote=t.payload},clearAllFilters:function(e){e.completion=null,e.priority=null,e.hasNote=null}}}),L=F.actions,S=L.setCompletionFilter,A=L.setPriorityFilter,P=L.setHasNoteFilter,M=L.clearAllFilters,B=function(e){return e.filters},E=F.reducer,H={key:"root",storage:b.a,blacklist:["tasks"]},z={key:"tasks",storage:b.a,blacklist:["selectedTask"]},J={key:"filters",storage:b.a},K=Object(l.c)({tasks:Object(f.a)(z,C),filters:Object(f.a)(J,E)}),R=Object(f.a)(H,K),q=Object(d.a)({reducer:R,middleware:[j.a]}),V=Object(f.b)(q),G=q,Q=n(22),U=n(72),W=n(73),X=n(74),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},Z=(n(88),n(11)),$=n(1);var _=function(){return Object($.jsx)("nav",{className:"bg-gray-800",children:Object($.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 pb-0.5",children:Object($.jsx)("div",{className:"flex items-center justify-between h-12",children:Object($.jsxs)("div",{className:"flex items-center",children:[Object($.jsx)("div",{className:"flex-shrink-0 py-1",children:Object($.jsx)(Z.a,{className:"text-white",icon:["far","check-circle"],size:"2x"})}),Object($.jsx)("div",{className:"md:block",children:Object($.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object($.jsx)("button",{className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold",children:"Inbox"}),Object($.jsx)("button",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-bold",children:"Tasks"})]})})]})})})})};var ee=function(){var e=function(e,t){return Object($.jsx)("div",{className:"grid justify-items-center px-4",children:Object($.jsx)("button",{className:"text-white rounded border-2 border-white hover:bg-white hover:text-gray-800 px-2 py-1 focus:outline-none",onClick:function(){return function(e){window.open(e)}(t)},children:Object($.jsx)(Z.a,{size:"3x",icon:["fab",e]})})})};return Object($.jsxs)("div",{className:"w-full bg-gray-800 divide-x flex flex-row justify-center py-2",children:[e("github-square","https://github.com/ChangedNameTo/open-gtd"),e("linkedin","")]})},te=n(18),ne=function(){return Object(o.b)()};o.c;var ae=function(){var e=Object(s.useRef)(!0),t=Object(s.useState)(!1),n=Object(te.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)("hidden"),i=Object(te.a)(c,2),o=i[0],l=i[1],d=Object(s.useState)(""),u=Object(te.a)(d,2),b=u[0],f=u[1],j=ne();Object(s.useEffect)((function(){e.current?e.current=!1:a?setTimeout((function(){l("")}),250):setTimeout((function(){l("hidden")}),250)}),[a]);var m=function(){j(p(b.trim())),f("")};return Object($.jsxs)("div",{className:"space-y-2",children:[Object($.jsx)("button",{className:"w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600 text-white bold active:ring-green-500 focus:outline-none",id:"addTaskButton",onClick:function(){return r(!a)},children:"Add New Task"}),Object($.jsxs)("div",{className:"".concat(a?"animate-fade-in-down":"animate-fade-out-up"," ").concat(o?"hidden":""," flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded"),children:[Object($.jsx)("input",{type:"text",className:"rounded-md rounded-r-none w-full border-green-100 focus:ring-0 focus:border-transparent",id:"addTaskInput",placeholder:"Enter new task",value:b,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),m())}(e)}}),Object($.jsx)("span",{className:"flex items-center bg-green-600 rounded rounded-l-none border-0 px-3 hover:bg-green-500 cursor-pointer duration-200 transition ease-in-out",onClick:function(){return m()},children:Object($.jsx)("button",{className:"focus:outline-none",id:"submitNewTaskButton",children:Object($.jsx)(Z.a,{className:"text-white py-auto",icon:["fas","check-circle"],size:"2x"})})})]})]})};var re=function(e){var t,n=Object(s.useState)(!0),r=Object(te.a)(n,2),c=r[0],i=r[1],l=ne(),d=Object(o.c)((function(t){return t.tasks.taskList.byId[e.taskId]})),u=function(t){t.target===t.currentTarget&&l(g(e.taskId))},b=function(t){l(k({newStatus:t,taskId:e.taskId}))},f=function(e){var t=e.target,n=e.currentTarget;(t===n||n.contains(t))&&d.note&&i(!c)},j="min-w-full  hover:bg-gray-100 focus:bg-gray-200 px-1 font-mono focus:ring-0 focus:border-transparent focus:outline-none cursor-pointer";return Object($.jsxs)(s.Fragment,{children:[Object($.jsxs)("tr",{id:"taskId".concat(e.taskId),className:"".concat(j," ").concat(c?"border-b":""),onClick:function(e){return u(e)},children:[Object($.jsx)("td",{className:"px-1 whitespace-nowrap",onClick:function(e){return u(e)},children:d.status===a.Active?Object($.jsx)(Z.a,{className:"text-gray-300 fa-lg mt-1",icon:["far","circle"],onClick:function(){return b(a.Complete)}}):d.status===a.Complete?Object($.jsx)(Z.a,{className:"text-gray-300 fa-lg mt-1",icon:["fas","check-circle"],onClick:function(){return b(a.Active)}}):d.status===a.Dropped?Object($.jsx)(Z.a,{className:"text-gray-300 fa-lg mt-1",icon:["fas","minus-circle"],onClick:function(){return b(a.Active)}}):void 0}),Object($.jsx)("td",{className:"".concat(d.task?"":"text-gray-300"," break-words select-none"),onClick:function(e){return u(e)},children:d.task?d.task:"Empty task text"}),Object($.jsx)("td",{className:"px-1 whitespace-nowrap pt-1",onClick:function(e){return u(e)},children:Object($.jsx)("div",{className:"inline rounded-xl border border-gray-500 px-2 py-0.5 text-gray-500 float-center",onClick:function(e){return u(e)},children:d.priority})}),Object($.jsx)("td",{className:"px-1 whitespace-nowrap pt-1 text-gray-400",onClick:function(e){return u(e)},children:(t=d.dueDate,t?new Date(t).toLocaleDateString("en-us"):"-")}),Object($.jsx)("td",{className:"px-1",onClick:function(e){return u(e)},children:function(){var e="text-gray-300 fa-lg mt-1 float-right";return d.note?Object($.jsx)(Z.a,{className:e,icon:["fas","sticky-note"],onClick:function(e){return f(e)}}):Object($.jsx)(Z.a,{className:e,icon:["far","sticky-note"],onClick:function(e){return f(e)}})}()})]}),Object($.jsx)("tr",{className:"".concat(c?"hidden":""," min-w-full text-gray-400 rounded pt-1 border-b"),onClick:function(e){return u(e)},children:Object($.jsx)("td",{className:"".concat(j),colSpan:5,onClick:function(e){return u(e)},children:d.note})})]})};var se=function(e,t,n,a){var r=function(t){return e===t?"font-semibold bg-gray-700 text-gray-100":"bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300"},s=function(e){return null===e?"Select All":!0===e?"True":!1===e?"False":e};return Object($.jsxs)("div",{className:"flex flex-row",children:[function(){var e=n[0];return Object($.jsx)("button",{className:"".concat(r(e)," border border-gray-600 flex-auto rounded-l duration-200 ease-in-out transition focus:outline-none hover:ring-2 hover:ring-gray-700"),id:"".concat(a).concat(e,"Button"),onClick:function(){return t(e)},children:s(e)},e)}(),n.slice(1,n.length-1).map((function(e,n){return Object($.jsx)("button",{className:"".concat(r(e)," border border-gray-600 flex-auto duration-200 ease-in-out transition focus:outline-none hover:ring-2 hover:ring-gray-700"),id:"".concat(a).concat(e,"Button"),onClick:function(){return t(e)},children:s(e)},e)})),function(){var e=n[n.length-1];return Object($.jsx)("button",{className:"".concat(r(e)," border border-gray-600 flex-auto rounded-r duration-200 ease-in-out transition focus:outline-none hover:ring-2 hover:ring-gray-600"),id:"".concat(a).concat(e,"Button"),onClick:function(){return t(e)},children:s(e)},e)}()]})};var ce=function(){var e=Object(s.useRef)(!0),t=Object(s.useState)(!1),n=Object(te.a)(t,2),c=n[0],i=n[1],l=Object(s.useState)("hidden"),d=Object(te.a)(l,2),u=d[0],b=d[1],f=ne(),j=Object(o.c)(B);return Object(s.useEffect)((function(){e.current?e.current=!1:c?setTimeout((function(){b("")}),250):setTimeout((function(){b("hidden")}),250)}),[c]),Object($.jsxs)("div",{className:"py-2",children:[Object($.jsx)("button",{className:"".concat(c?"text-bold bg-gray-700 text-gray-100":"bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300"," w-full items-center px-4 rounded-md shadow-m font-medium border-2 border-gray-600"),id:"taskFilterButton",onClick:function(){return i(!c)},children:"Filter Tasks"}),Object($.jsx)("div",{className:"".concat(c?"animate-fade-in-down":"animate-fade-out-up"," ").concat(u?"hidden":""," flex flex-row"),children:Object($.jsxs)("div",{className:"w-full shadow-lg rounded my-1 border border-gray-600 p-1",children:[Object($.jsx)("div",{className:"font-semibold text-center",children:"Filters Visible"}),Object($.jsxs)("div",{className:"space-y-2",children:[Object($.jsxs)("div",{className:"block",children:[Object($.jsx)("div",{className:"font-semibold",children:"Priority Filter"}),se(j.priority,(function(e){f(A(e))}),[null,r.None,r.Low,r.Medium,r.High,r.Immediate],"completionFilter")]}),Object($.jsxs)("div",{className:"block",children:[Object($.jsx)("div",{className:"font-semibold",children:"Status Filter"}),Object($.jsx)("div",{children:se(j.completion,(function(e){f(S(e))}),[null,a.Active,a.Complete,a.Dropped],"completionFilter")})]}),Object($.jsxs)("div",{className:"block",children:[Object($.jsx)("div",{className:"font-semibold",children:"Tag Filter"}),"Not Implemented"]}),Object($.jsxs)("div",{className:"block",children:[Object($.jsx)("div",{className:"font-semibold",children:"Note Filter"}),Object($.jsx)("div",{children:se(j.hasNote,(function(e){f(P(e))}),[null,!0,!1],"completionFilter")})]}),Object($.jsx)("div",{className:"block",children:Object($.jsx)("button",{className:"font-bold bg-red-600 w-full rounded text-white",onClick:function(){f(M())},children:"Clear All Filters"})})]})]})})]})};var ie=function(){var e=Object(o.c)(T),t=Object(o.c)(B),n=function(t){return e.byId[t]},a=function(e){return t.hasNote?""!==n(e).note:!1!==t.hasNote||""===n(e).note},r=function(e){return!t.priority||t.priority===n(e).priority},s=function(e){return!t.completion||t.completion===n(e).status};return Object($.jsxs)("div",{className:"flex flex-col px-2 flex-1",children:[Object($.jsx)("div",{className:"header bg-white shadow",children:Object($.jsx)("div",{className:"max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8",children:Object($.jsx)("h1",{className:"text-3xl font-bold text-gray-900 text-center",children:"Tasks"})})}),Object($.jsx)("table",{className:"table-auto divide-y divide-gray-300 flex-initial",id:"taskList",children:Object($.jsx)("tbody",{children:function(){if(e.allIds)return e.allIds.filter(s).filter(r).filter(a).map((function(e,t){return Object($.jsx)(re,{taskId:e},t)}))}()})}),Object($.jsx)("br",{}),ae(),ce()]})},oe=n(69),le=n.n(oe),de=(n(90),n(57)),ue=[{value:r.None,label:r.None},{value:r.Low,label:r.Low},{value:r.Medium,label:r.Medium},{value:r.High,label:r.High},{value:r.Immediate,label:r.Immediate}];var be=function(e,t,n){return Object($.jsx)("select",{className:"mt-1 w-full border border-gray-600 rounded-md focus:outline-none hover:ring-2 hover:ring-gray-600",onChange:function(n){return function(n){e(O({newPriority:n.target.value,taskId:t}))}(n)},id:"selectedTaskPrioritySelect",value:n,children:ue.map((function(e){return Object($.jsx)("option",{className:"w-full rounded",value:e.value,children:e.label},e.value)}))})};var fe=function(){var e=Object(o.c)(D),t=ne(),n=Object(o.c)(I);if("-1"!==e){var r=function(e){return e>0?new Date(e).toLocaleString("en-us"):"N/A"},s=function(e){return Object($.jsx)("div",{className:"pt-1 font-bold text-lg",children:e})},c=function(e,t,n){var a=e?new Date(e):null;return Object($.jsx)(le.a,{selected:a,onChange:function(e){return t(e)},isClearable:!0,placeholderText:n,dateFormat:"MM/dd/yyyy",className:"border rounded w-full",todayButton:"Today",openToDate:new Date(Date.now())})};return Object($.jsx)("div",{className:"flex flex-shrink-0 flex-col px-2 bg-gray-200 rounded-l-xl shadow-xl py-1 min-h-full transition ease-in border-gray-300 w-1/4 z-10",children:Object($.jsxs)("div",{id:"selectedTaskPane",className:"divide-y divide-gray-700",children:[Object($.jsxs)("div",{className:"inline",children:[Object($.jsx)("div",{className:"float-left mt-1",children:Object($.jsxs)("span",{className:"fa-layers fa-fw fa-2x group my-1 cursor-pointer",id:"closeSelectedTask",onClick:function(){t(g("-1"))},children:[Object($.jsx)(Z.a,{className:"text-gray-300 group-hover:text-gray-400 group-hover:border-gray-600 group-hover:ring-2 group-hover:ring-gray-500 rounded-full",icon:["fas","circle"]}),Object($.jsx)(Z.a,{className:"text-gray-500 align-center group-hover:text-gray-600 pl-0.5",icon:["fas","angle-right"]})]})}),Object($.jsx)(de.a,{className:"w-full border border-gray-600 rounded-md my-1 px-1 hover:ring-2 hover:ring-gray-700 focus:outline-none h-auto font-medium",id:"selectedTaskName",value:n.task,placeholder:"Empty task text",onChange:function(n){return function(n){t(v({newName:n.target.value,taskId:e}))}(n)}})]}),Object($.jsxs)("div",{className:"w-full pb-2",children:[s("Task Status"),se(n.status,(function(n){t(k({newStatus:n,taskId:e}))}),[a.Active,a.Complete,a.Dropped],"selectedTask")]}),Object($.jsxs)("div",{className:"w-full pb-2",children:[s("Tags"),"Not Implemented"]}),Object($.jsxs)("div",{className:"w-full pb-2",children:[s("Priority"),be(t,e,n.priority)]}),Object($.jsxs)("div",{className:"w-full",children:[s("Defer / Due Dates"),Object($.jsx)("div",{className:"w-full",children:c(n.deferDate,(function(n){var a=n?n.getTime():null;t(N({newDate:a,taskId:e}))}),"Defer Date")}),Object($.jsx)("div",{className:"w-full",children:c(n.dueDate,(function(n){var a=n?n.getTime():null;t(w({newDate:a,taskId:e}))}),"Due Date")})]}),Object($.jsxs)("div",{className:"w-full",children:[s("Task Note"),Object($.jsx)(de.a,{className:"w-full border border-gray-600 rounded-md my-1 resize-y px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none",placeholder:"Note",id:"selectedTaskNote",value:n.note,onChange:function(n){return function(n){t(y({newNote:n.target.value,taskId:e}))}(n)}})]}),Object($.jsxs)("div",{className:"w-full py-2",children:[s("Task Dates"),Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"inline font-bold",children:"Created: "}),Object($.jsx)("div",{id:"selectedTaskCreated",className:"inline",children:r(n.created)})]}),Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"inline font-bold",children:"Modified: "}),Object($.jsx)("div",{id:"selectedTaskModified",className:"inline",children:r(n.modified)})]}),Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"inline font-bold",children:"Completed: "}),Object($.jsx)("div",{id:"selectedTaskCompleted",className:"inline",children:r(n.completed)})]})]})]})})}};var je=function(){return Object($.jsxs)("div",{className:"flex flex-col flex-shrink-0 px-2 w-1/5",children:[Object($.jsx)("div",{className:"header bg-white shadow",children:Object($.jsx)("div",{className:"mx-auto py-2 px-1 sm:px-6 lg:px-8",children:Object($.jsx)("h1",{className:"text-3xl font-bold text-gray-900 text-center",children:"Folders"})})}),Object($.jsx)("div",{children:"Not Implemented"})]})};var me=function(){return Object($.jsxs)("div",{className:"inline-flex flex-grow space-x-2 py-2 h-full w-full",children:[je(),ie(),fe()]})};var xe=function(){return Object($.jsxs)("div",{className:"flex flex-col h-screen",children:[Object($.jsx)("header",{children:_()}),Object($.jsx)("main",{className:"flex-1 overflow-y-auto mb-20",children:me()}),Object($.jsx)("footer",{className:"fixed bottom-0 w-full isolation-auto",children:ee()})]})};Q.b.add(U.a,W.a,X.a),c.render(Object($.jsx)(o.a,{store:G,children:Object($.jsx)(i.a,{loading:null,persistor:V,children:Object($.jsx)(s.StrictMode,{children:Object($.jsx)(xe,{})})})}),document.getElementById("root")),Y()},88:function(e,t,n){}},[[148,1,2]]]);
//# sourceMappingURL=main.c6e90fe9.chunk.js.map