(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{53:function(e){e.exports=JSON.parse('[{"todoId":"1","title":"title","description":"description asadsdas","color":"Color","date":"1709157600000","time":""}]')},75:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r,a,o,c,i,l,u,s,d,b,j,f,g,p,O,h,x,D,w,m,v,y,k,C,S,F,M,P,T,Y,E,L=n(4),H=n(49),R=n.n(H),z=n(5),I=n(33),N=n(52),A=n(6),J=n(29),W=n(1),B=function(){return Object(W.jsx)("div",{children:"This page doesn\xa0t exist."})},V=n(0),q="day",U="week",_="month",G="year",K=["January","February","March","April","May","June","July","August","September","October","November","December"],Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],X=n(12),Z=n(10),$=n(7),ee=n.n($),te=n(19),ne={currentDate:0,start:0,end:0,storage:[],formatCalendar:_},re=(Object(te.b)("Interval/fetchInterval",Object(Z.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),Object(te.c)({name:"interval",initialState:ne,reducers:{setCurrentDate:function(e){e.currentDate=(new Date).valueOf()},setSpecialDate:function(e,t){e.currentDate=new Date(t.payload).valueOf()},setFormat:function(e,t){e.formatCalendar=t.payload,console.log("setFormat",e.formatCalendar)},navigateMonth:function(e,t){console.log("navigateMonth",t.payload),e.currentDate=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+Number(t.payload),new Date(e.currentDate).getDate()).valueOf()},navigateYear:function(e,t){console.log("navigateYear",t.payload),e.currentDate=new Date(new Date(e.currentDate).getFullYear()+Number(t.payload),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()).valueOf()},setIntervalCalendar:function(e){if(e.currentDate)switch(e.formatCalendar){case q:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()+1).valueOf();break;case U:var t=new Date(e.currentDate).getDate(),n=new Date(e.currentDate).getDay();e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0===n?t-n+1-7:t-n+1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),7+(0===n?t-n+1-7:t-n+1)).valueOf();break;case _:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),1-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0).getDay()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,(8-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,0).getDay())%7).valueOf();break;case G:e.start=new Date(new Date(e.currentDate).getFullYear(),0,1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear()+1,0,1).valueOf()}else console.warn("no currentDate in IntervalSlice")},addTodo:function(e,t){e.storage.push(t.payload)},resetState:function(e){return Object(X.a)(Object(X.a)({},e),ne)}}})),ae=re.reducer,oe=re.actions,ce=oe.setCurrentDate,ie=oe.setSpecialDate,le=oe.setFormat,ue=oe.navigateMonth,se=oe.navigateYear,de=oe.setIntervalCalendar,be=oe.addTodo,je=(oe.resetState,function(e){return e.interval.currentDate}),fe=function(e){return e.interval.start},ge=function(e){return e.interval.end},pe=function(e){return e.interval.formatCalendar},Oe=I.b,he=I.c,xe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],De=n(14),we=n(53),me={storage:[],statusLoading:"idle",error:null},ve=function(){var e=Object(Z.a)(ee.a.mark((function e(){var t,n=arguments;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:3e3,e.abrupt("return",new Promise((function(e){setTimeout((function(){e(we)}),t)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=Object(te.b)("todos/fetchTodos",Object(Z.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve();case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))),ke=Object(te.c)({name:"interval",initialState:me,reducers:{addTodo:function(e,t){e.storage.push(t.payload)},changeTodo:function(e,t){e.storage=e.storage.map((function(e){return e.todoId===t.payload.todoId?t.payload.todo:e}))},randomizeTodos:function(){},deleteTodo:function(e,t){console.log("deleteTodos"),e.storage=e.storage.filter((function(e){return e.todoId!==t.payload}))},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetStateTodos:function(){return console.log("reset todos"),me}},extraReducers:function(e){e.addCase(ye.pending,(function(e){e.statusLoading="loading"})).addCase(ye.fulfilled,(function(e,t){var n;(n=e.storage).push.apply(n,Object(De.a)(t.payload)),e.statusLoading="idle"})).addCase(ye.rejected,(function(e,t){e.statusLoading="failed",console.log(t)}))}}),Ce=ke.reducer,Se=ke.actions,Fe=(Se.addTodo,Se.changeTodo),Me=Se.deleteTodo,Pe=(Se.setStatus,Se.setError,Se.resetStateTodos),Te=function(e){return e.todos.storage},Ye=n(18),Ee=z.c.button(r||(r=Object(L.a)(["\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  justify-content: center;\n  cursor: pointer;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Raleway', sans-serif;\n\n  &:hover{\n    background-color: #e6e6e6;\n  }\n"]))),Le=n(11),He={popup:{isShowDatePicker:!1,isShowForm:!1},todo:null},Re=Object(te.c)({name:"controls",initialState:He,reducers:{switchPopup:function(e,t){console.log("switchPopup",t.payload),e.popup=Object(X.a)(Object(X.a)({},He.popup),{},Object(Le.a)({},t.payload,!e.popup[t.payload]))},closeAllPopup:function(e){e.popup=Object(X.a)({},He.popup)},sentTodoToForm:function(e,t){e.todo=t.payload},resetTodo:function(e){console.log("reset todo"),e.todo=He.todo},resetState:function(e){return Object(X.a)(Object(X.a)({},e),He)}}}),ze=Re.reducer,Ie=Re.actions,Ne=Ie.switchPopup,Ae=Ie.closeAllPopup,Je=(Ie.resetState,Ie.resetTodo),We=Ie.sentTodoToForm,Be=function(e){return e.control.popup.isShowDatePicker},Ve=function(e){return e.control.popup.isShowForm},qe=function(e){return e.control.todo},Ue="isShowDatePicker",_e="isShowForm",Ge=z.c.div(a||(a=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ke=z.c.div(o||(o=Object(L.a)(["\n  width: 100%;\n  line-height: 14px;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n\n\n  & div {\n    margin-bottom: 4px;\n    /* max-width: 100px; */\n  }\n\n  ","\n"])),(function(e){return e.format===G&&Object(z.b)(c||(c=Object(L.a)(["\n    display: none;\n  "])))})),Qe=z.c.div(i||(i=Object(L.a)(["\n  background-color: ",";\n\n  padding: 7px 10px;\n  border-radius: 8px;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  width: 100%;\n  display: flex;\n  align-items: center;\n\n  & span {\n    ","\n  }\n"])),(function(e){return e.color}),(function(e){var t=e.format;return(t===_||t===U)&&Object(z.b)(l||(l=Object(L.a)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100px;\n      white-space: nowrap;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-direction: normal;\n      -webkit-box-orient: vertical;\n      overflow-wrap: break-word;\n    "])))})),Xe=function(e){var t=e.todos,n=Oe(),r=he(pe),a=Object(V.useRef)(null),o=t.filter((function(e,t){return r!==_||t<4})),c=r===_&&t.length>4;return Object(W.jsxs)(Ge,{ref:a,children:[o.map((function(e){return Object(W.jsxs)(Ke,{format:r,children:[(r===_||r===U)&&Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(Qe,{color:e.color,format:r,onClick:function(t){return function(e,t){console.log("onShowFormHandler"),e.stopPropagation(),n(We(t)),n(Ne(_e))}(t,e)},children:[Object(W.jsx)("span",{children:e.title}),Object(W.jsx)(Ee,{type:"button",onClick:function(t){return function(e,t){e.stopPropagation(),n(Me(t))}(t,e.todoId)},children:Object(W.jsx)(Ye.f,{})})]})}),r===q&&Object(W.jsx)(Qe,{color:e.color,children:e.title})]},e.todoId)})),c&&Object(W.jsx)(Ye.g,{})]})},Ze=z.c.div(u||(u=Object(L.a)(["\n  box-sizing: border-box;\n  padding: 0;\n  font-size: 14px;\n  cursor: pointer;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.format===q&&Object(z.b)(s||(s=Object(L.a)(["\n    height: 100vh;\n  "])))}),(function(e){var t=e.format;return(t===U||t===_)&&Object(z.b)(d||(d=Object(L.a)(["\n    height: 205px;\n\n    &:hover{\n      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    }\n  "])))}),(function(e){var t=e.format,n=e.isWeekend;return t===G&&n&&Object(z.b)(b||(b=Object(L.a)(["\n    color: red;\n  "])))}),(function(e){return e.isNotCurrentMonth&&Object(z.b)(j||(j=Object(L.a)(["\n    opacity: 0.4;\n  "])))}),(function(e){return e.isCurrentDay&&Object(z.b)(f||(f=Object(L.a)(["\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  "])))}),(function(e){var t=e.isTodosToday,n=e.format;return t&&n===G&&Object(z.b)(g||(g=Object(L.a)(["\n      background-color: #f3f6f4;\n    "])))})),$e=z.c.div(p||(p=Object(L.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  ","\n\n  ","\n"])),(function(e){return e.isCurrentDay&&Object(z.b)(O||(O=Object(L.a)(["\n    background-color: #79c6c6;\n  "])))}),(function(e){return!e.isCurrentDay&&Object(z.b)(h||(h=Object(L.a)(["\n    &:hover {\n      background-color: #e6e6e6;\n    }\n  "])))})),et=z.c.button(x||(x=Object(L.a)(["\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0 10px;\n  line-height: 30px;\n  border: none;\n  outline: none;\n  position: relative;\n  cursor: pointer;\n  text-align: left;\n\n  border-right: 10px solid transparent;\n  width: 80px;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n\n  ","\n\n\n  ","\n\n  ","\n"])),(function(e){return e.isWeekend&&Object(z.b)(D||(D=Object(L.a)(["\n    color: #a16e73;\n    font-weight: bold;\n  "])))}),(function(e){var t=e.isCurrentDay,n=e.format;return!t&&n!==U&&Object(z.b)(w||(w=Object(L.a)(["\n    &:hover {\n      transition: all 0.2s;\n      border-bottom: 10px solid #79c6c6;\n    }\n  "])))}),(function(e){return e.format===G&&Object(z.b)(m||(m=Object(L.a)(["\n    display: none;\n  "])))})),tt=z.c.p(v||(v=Object(L.a)(["\n  margin: 0;\n  line-height: 40px;\n  position: relative;\n  overflow: hidden;\n  padding: 0 10px;\n\n  ","\n"])),(function(e){return e.format===G&&Object(z.b)(y||(y=Object(L.a)(["\n    display: block;\n    text-align: right;\n    padding: 0;\n    margin: 0 auto;\n  "])))})),nt=z.c.div(k||(k=Object(L.a)(["\n  box-sizing: border-box;\n  padding: 10px;\n"]))),rt=function(e){var t=e.startDay,n=e.disabled,r=void 0!==n&&n,a=Oe(),o=he(je),c=he(pe),i=0===new Date(t).getDay()||6===new Date(t).getDay(),l=function(e){var t=new Date(e),n=t.getDate(),r=t.toDateString().split(" "),a=xe[t.getDay()];return{dayOfWeek:r[0],month:r[1],day:n,year:r[3],fullNameDayOfWeek:a}}(t),u=l.dayOfWeek,s=l.month,d=l.day,b=l.year,j=l.fullNameDayOfWeek,f=function(e,t){var n=new Date(e).getFullYear()===new Date(t).getFullYear(),r=new Date(e).getMonth()===new Date(t).getMonth()&&new Date(e).getFullYear()===new Date(t).getFullYear();return{isCurrentDay:new Date(e).getDate()===new Date(t).getDate()&&new Date(e).getMonth()===new Date(t).getMonth()&&new Date(e).getFullYear()===new Date(t).getFullYear(),isCurrentMonth:r,isCurrentYear:n}}(o,t),g=f.isCurrentDay,p=f.isCurrentMonth,O=he(Te).filter((function(e){return t<=e.date&&e.date<t+864e5})),h=!!O.length;return r?Object(W.jsx)("div",{}):Object(W.jsxs)(Ze,{format:c,isWeekend:i,isNotCurrentMonth:!p,isCurrentDay:g,isTodosToday:h,children:[Object(W.jsxs)($e,{isCurrentDay:g,onClick:function(){if(!g||c!==q){if(g)return a(le(q)),void a(de());r||a(ie(t)),r||p||a(de())}},children:[Object(W.jsxs)(et,{isWeekend:i,onClick:function(e){return function(e){var t;c!==U&&(e.stopPropagation(),e.target instanceof HTMLButtonElement&&(t=e.target.dataset.dayValue),t&&(a(ie(+t)),a(le(U)),a(de())))}(e)},"data-day-value":String(t),isCurrentDay:g,format:c,children:[c===q&&j,(c===U||c===_)&&u]}),Object(W.jsx)(tt,{format:c,children:c===q?"".concat(d,"/").concat(s,"/").concat(b):d})]}),c!==G&&h&&Object(W.jsx)(nt,{format:c,children:Object(W.jsx)(Xe,{todos:O})})]})},at=z.c.div(C||(C=Object(L.a)(["\n  ","\n"])),(function(e){var t=e.format;return t===q?Object(z.b)(S||(S=Object(L.a)(["\n        display: block;\n      "]))):t===G?Object(z.b)(F||(F=Object(L.a)(["\n        /* max-width: 200px; */\n      "]))):""})),ot=z.c.div(M||(M=Object(L.a)(["\n  cursor: pointer;\n\n  ","\n\n  ","\n\n  & button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n  }\n"])),(function(e){return e.format===q&&Object(z.b)(P||(P=Object(L.a)(["\n    display: none;\n  "])))}),(function(e){return e.format===G&&Object(z.b)(T||(T=Object(L.a)(["\n    padding: 10px;\n  "])))})),ct=z.c.div(Y||(Y=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n\n  ","\n"])),(function(e){return e.format===q&&Object(z.b)(E||(E=Object(L.a)(["\n    display: block;\n  "])))})),it=function(e){for(var t=e.interval,n=Oe(),r=he(pe),a=Object(V.useRef)(new Date(t[0]).getMonth()),o=Object(V.useRef)((new Date(t[0]).getDay()+7-1)%7),c=[],i=0;i<o.current;i+=1)c.push(-i);return Object(W.jsxs)(at,{format:r,children:[Object(W.jsx)(ot,{format:r,children:Object(W.jsx)("button",{type:"button",onClick:function(e){return function(e){var t;r!==_&&(e.target instanceof HTMLButtonElement&&(t=e.target.dataset.monthValue),t&&(n(ie(+t)),n(le(_)),n(de())))}(e)},"data-month-value":String(t[0]),children:r===G&&K[a.current]})}),Object(W.jsxs)(ct,{format:r,children:[c.map((function(e){return Object(W.jsx)(rt,{startDay:e,disabled:!0},e)})),t.map((function(e){return Object(W.jsx)(rt,{startDay:e},e)}))]})]})};function lt(e,t){for(var n=[],r=e;r<t;)n.push(r),r=new Date(new Date(r).getFullYear(),new Date(r).getMonth(),new Date(r).getDate()+1).valueOf();return n}var ut,st,dt,bt,jt,ft,gt,pt,Ot,ht,xt,Dt,wt,mt,vt,yt,kt,Ct,St,Ft,Mt,Pt,Tt,Yt,Et,Lt,Ht=z.c.div(ut||(ut=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  min-width: 1100px;\n"]))),Rt=function(e){var t=function(e){for(var t=[],n=0;n<e.length;){for(var r=new Date(e[n]).getMonth(),a=[];r===new Date(e[n]).getMonth();)a.push(e[n]),n+=1;t.push(a)}return t}(e.interval);return Object(W.jsx)(Ht,{children:t.map((function(e){return Object(W.jsx)(it,{interval:e},e[0])}))})},zt=z.c.div(st||(st=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),It=function(){var e=Oe(),t=he(je),n=lt(he(fe),he(ge)),r=he(pe),a=he(Te);return console.log(a),Object(V.useEffect)((function(){t||(e(ce()),e(le(_))),e(de())}),[]),Object(W.jsxs)(zt,{children:[r===G&&Object(W.jsx)(Rt,{interval:n}),(r===_||r===U)&&Object(W.jsx)(it,{interval:n}),r===q&&Object(W.jsx)(rt,{startDay:n[0]})]})},Nt=n(81),At="https://jsonplaceholder.typicode.com",Jt=Nt.a.create({baseURL:At}),Wt=function(e){return Object(Z.a)(ee.a.mark((function t(){var n;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Jt.get(e);case 2:return n=t.sent,console.log("get",At+e),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},Bt={storage:[],statusLoading:"idle",error:null},Vt=Object(te.b)("posts/fetchPosts",Object(Z.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wt("/posts/");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))),qt=Object(te.c)({name:"interval",initialState:Bt,reducers:{addPosts:function(e,t){var n;(n=e.storage).push.apply(n,Object(De.a)(t.payload))},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetState:function(e){return Object(X.a)(Object(X.a)({},e),Bt)}},extraReducers:function(e){e.addCase(Vt.pending,(function(e){e.statusLoading="loading"})).addCase(Vt.fulfilled,(function(e,t){var n;(n=e.storage).push.apply(n,Object(De.a)(t.payload)),e.statusLoading="idle"})).addCase(Vt.rejected,(function(e,t){e.statusLoading="failed",console.log(t)}))}}),Ut=qt.reducer,_t=qt.actions,Gt=(_t.addPosts,_t.setStatus,_t.setError,_t.resetState),Kt=function(e){return e.posts.storage},Qt=(n(75),function(){var e=Object(A.o)().id,t=he(Kt);Oe()(Gt());var n=t.find((function(t){return String(t.id)===String(e)}));return Object(W.jsxs)("div",{className:"PostPage",children:[Object(W.jsx)(J.a,{to:"/",className:"PostPage__Link",children:"Back"}),n?Object(W.jsxs)("div",{children:[Object(W.jsx)("h1",{children:"PostPage: ".concat(n.title)}),Object(W.jsx)("p",{children:n.body})]}):Object(W.jsx)(W.Fragment,{children:"post doesn\xa0t exist"})]})}),Xt="1",Zt="-1",$t=z.c.div(dt||(dt=Object(L.a)(["\n  display: flex;"]))),en=z.c.button(bt||(bt=Object(L.a)(["\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n"]))),tn=z.c.div(jt||(jt=Object(L.a)(["\n  width: 160px;\n\n  ","\n"])),(function(e){return e.format===G&&Object(z.b)(ft||(ft=Object(L.a)(["\n      width: 60px;\n    "])))})),nn=function(){var e=Oe(),t=he(je),n=he(pe),r=K[new Date(t).getMonth()],a=new Date(t).getFullYear(),o=function(t){n!==G&&(e(ue(t.currentTarget.value)),e(le(_))),n===G&&e(se(t.currentTarget.value)),e(de())};return Object(W.jsxs)($t,{children:[Object(W.jsx)(en,{type:"button",value:Zt,onClick:o,children:Object(W.jsx)(Ye.b,{})}),Object(W.jsxs)(tn,{format:n,children:[n!==G&&Object(W.jsxs)(W.Fragment,{children:["\xa0",r]}),"\xa0",a,"\xa0"]}),Object(W.jsx)(en,{type:"button",value:Xt,onClick:o,children:Object(W.jsx)(Ye.d,{})})]})},rn=n(8),an=function(e,t,n,r){console.log("start handleClickOutside"),t.current&&!t.current.contains(e.target)&&n.current&&!n.current.contains(e.target)&&(console.log("outside refControl and refContainer",t,n),r())},on=z.c.div(gt||(gt=Object(L.a)(["\n  z-index: 50;\n  position: absolute;\n  right: 0;\n  top: 45px;\n  background-color: white;\n  width: 400px;\n  box-sizing: border-box;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),cn=z.c.div(pt||(pt=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  row-gap: 20px;\n  & > :hover{\n    background-color: #e6e6e6;\n  }\n"]))),ln=z.c.div(Ot||(Ot=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  row-gap: 20px;\n  & > :hover{\n    background-color: #e6e6e6;\n  }\n"]))),un=z.c.div(ht||(ht=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  row-gap: 20px;\n  & > :hover{\n    background-color: #e6e6e6;\n  }\n"]))),sn=function(e){var t=e.currentDate,n=e.onChangeDate,r=e.datePickerControlRef,a=e.onShowDatePickerHandler,o=Object(V.useState)([]),c=Object(rn.a)(o,2),i=c[0],l=c[1],u=Object(V.useState)([]),s=Object(rn.a)(u,2),d=s[0],b=s[1],j=Object(V.useState)([]),f=Object(rn.a)(j,2),g=f[0],p=f[1],O=Object(V.useRef)(null);Object(V.useEffect)((function(){return console.log("useEffect mount clicker DP"),document.addEventListener("click",(function(e){return an(e,r,O,a)})),function(){document.removeEventListener("click",(function(e){return an(e,r,O,a)}))}}),[]),Object(V.useEffect)((function(){console.log("useEffect DK"),l(function(e){for(var t=[],n=0;n<12;n+=1)t.push(new Date(new Date(e).getFullYear()-4+n,0,0).valueOf().toString());return t}(t))}),[]);var h=function(e){console.log("DatePicker// onYearHandler"),e.stopPropagation();var t=+e.target.value;b(function(e){for(var t=[],n=0;n<12;n+=1)t.push({label:Q[n],value:new Date(new Date(e).getFullYear(),n,1).valueOf().toString()});return t}(t))},x=function(e){console.log("DatePicker// onMonthHandler"),e.stopPropagation();var t=+e.target.value,n=new Date(new Date(t).getFullYear(),new Date(t).getMonth(),1).valueOf();p(function(e){for(var t=[],n=lt(e,new Date(new Date(e).getFullYear(),new Date(e).getMonth()+1,1).valueOf()),r=(new Date(e).getDay()+7-1)%7,a=0;a<r;a+=1)t.push({id:String(a),value:"",label:""});for(var o=r;o<r+n.length;o+=1)t.push({id:String(o),value:String(n[o-r]),label:String(new Date(n[o-r]).getDate())});return t}(n))};return console.log(t),Object(W.jsxs)(on,{ref:O,children:[i.length>0&&0===d.length&&0===g.length&&Object(W.jsx)(cn,{children:i.map((function(e){return Object(W.jsx)(Ee,{type:"button",value:e,onClick:function(e){return h(e)},children:new Date(+e).getFullYear()},e)}))}),i.length>0&&d.length>0&&0===g.length&&Object(W.jsx)(ln,{children:d.map((function(e){return Object(W.jsx)(Ee,{type:"button",value:e.value,onClick:function(e){return x(e)},children:e.label},e.label)}))}),i.length>0&&d.length>0&&g.length>0&&Object(W.jsx)(un,{children:g.map((function(e){return Object(W.jsx)(Ee,{type:"button",value:e.value,onClick:function(e){return function(e){console.log("DatePicker// onDayHandler"),e.stopPropagation();var t=+e.target.value;n(t),b([]),p([])}(e)},children:e.label},e.id)}))})]})},dn=z.c.div(xt||(xt=Object(L.a)(["\n  position: relative;\n"]))),bn=z.c.div(Dt||(Dt=Object(L.a)(["\n  display: flex;\n"]))),jn=z.c.button(wt||(wt=Object(L.a)(["\n  border: none;\n  background-color: transparent;\n  outline: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 40px;\n"]))),fn=function(e){var t=e.currentDate,n=e.onChangeDate,r=e.isShowDatePickerContainer,a=e.onShowDatePickerHandler,o=Object(V.useRef)(null);return Object(W.jsxs)(dn,{children:[Object(W.jsx)(bn,{ref:o,children:Object(W.jsx)(jn,{type:"button",onClick:a,children:Object(W.jsx)(Ye.a,{size:30})})}),r&&Object(W.jsx)(sn,{currentDate:t,datePickerControlRef:o,onChangeDate:n,onShowDatePickerHandler:a})]})},gn={URGENT:{value:"#ff6666",label:"urgent"},NORMAL:{value:"#ffe5a9",label:"normal"},IMPORTANT:{value:"#cbbeb5",label:"important"}},pn="title",On="description",hn="date",xn="time",Dn="color",wn=z.c.div(mt||(mt=Object(L.a)(["\n  right: 0;\n  top: 45px;\n  background-color: white;\n  width: 220px;\n  box-sizing: border-box;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n"]))),mn=z.c.div(vt||(vt=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),vn=z.c.div(yt||(yt=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),yn=Object(V.memo)((function(e){var t=e.time,n=void 0===t?0:t,r=e.onChangeTime;console.log("render Time Picker //",n,new Date(n).toTimeString(),new Date(n).toDateString());var a=function(e,t,a){e.stopPropagation();var o=(new Date(n).getHours()+(t||0))%24,c=(new Date(n).getMinutes()+(a||0))%60;console.log("newHours = ",o),console.log("newMinutes = ",c),console.log("new time",new Date(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),o,c).valueOf()).toDateString(),new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),(new Date(n).getHours()+(t||0))%24,(new Date(n).getMinutes()+(a||0))%60).valueOf()),r(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),(new Date(n).getHours()+(t||0))%24,(new Date(n).getMinutes()+(a||0))%60).valueOf())};Object(V.useEffect)((function(){console.log("useEffect Time Picker"),r((new Date).valueOf())}),[]);var o="0".concat(new Date(n).getHours().toString()).slice(-2),c="0".concat(new Date(n).getMinutes()).slice(-2);return Object(W.jsxs)(wn,{children:[Object(W.jsxs)(mn,{children:[Object(W.jsx)(Ee,{type:"button",onClick:function(e){return a(e,1,0)},children:Object(W.jsx)(Ye.e,{})}),o,Object(W.jsx)(Ee,{type:"button",onClick:function(e){return a(e,-1,0)},children:Object(W.jsx)(Ye.c,{})})]}),Object(W.jsxs)(vn,{children:[Object(W.jsx)(Ee,{type:"button",onClick:function(e){return a(e,0,1)},children:Object(W.jsx)(Ye.e,{})}),c,Object(W.jsx)(Ee,{type:"button",onClick:function(e){return a(e,0,-1)},children:Object(W.jsx)(Ye.c,{})})]})]})})),kn=z.c.div(kt||(kt=Object(L.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  z-index: 100;\n  background-color: white;\n  opacity: 1;\n  width: 460px;\n  height: 400px;\n  box-sizing: border-box;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n\n  & h3 {\n    margin-bottom: 20px;\n  }\n"]))),Cn=z.c.form(Ct||(Ct=Object(L.a)(["\n  "]))),Sn=z.c.div(St||(St=Object(L.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n\n  & label {\n    /* border: 1px solid red; */\n    width: 120px;\n    text-align: right;\n    padding-right: 10px;\n    box-sizing: border-box;\n  }\n\n  & input {\n    width: 300px;\n    text-align: left;\n    padding-right: 10px;\n    box-sizing: border-box;\n    border: none;\n    border-bottom: 1px solid black 0.4;\n\n    ::-webkit-input-placeholder {font-style: italic}\n    :-moz-placeholder {font-style: italic}\n    :-ms-input-placeholder {font-style: italic}\n\n    &:focus, &:active {\n      border: 1px solid red;\n    }\n  }\n"]))),Fn={title:"",description:"",date:"",time:"",color:""},Mn=function(e){var t=e.buttonRef,n=e.onShowFormHandler,r=Oe(),a=Object(V.useState)(Fn),o=Object(rn.a)(a,2),c=o[0],i=o[1],l=Object(V.useState)(!1),u=Object(rn.a)(l,2),s=u[0],d=u[1],b=Object(V.useRef)(null),j=he(je),f=Object(V.useState)(!1),g=Object(rn.a)(f,2),p=g[0],O=g[1],h=he(qe);console.log("Form todo",h),Object(V.useEffect)((function(){return document.addEventListener("click",(function(e){return an(e,t,b,n)})),function(){document.removeEventListener("click",(function(e){return an(e,t,b,n)}))}}),[]),Object(V.useEffect)((function(){return i(h?{title:h.title,description:h.description,date:h.date.toString(),time:h.date.toString(),color:h.color}:Object(X.a)(Object(X.a)({},c),{},{date:j.toString()})),function(){i(Fn),r(Je())}}),[]);var x=Object(V.useCallback)((function(e){i((function(t){return Object(X.a)(Object(X.a)({},t),{},Object(Le.a)({},e.target.name,e.target.value))}))}),[]),D=Object(V.useCallback)((function(e){i((function(t){return Object(X.a)(Object(X.a)({},t),{},Object(Le.a)({},hn,String(e)))})),d(!1)}),[]),w=Object(V.useCallback)((function(e){console.log("onChangeTime",new Date(e).toDateString(),new Date(e).toTimeString()),i((function(t){return Object(X.a)(Object(X.a)({},t),{},Object(Le.a)({},xn,String(e)))}))}),[]),m=new Date(+c[hn]||j).toDateString();return console.log("render Form"),Object(W.jsxs)(kn,{ref:b,children:[Object(W.jsx)("h3",{children:h?"Edit ".concat(h.title):"Create new"}),Object(W.jsxs)(Cn,{onSubmit:function(e){e.preventDefault(),console.log("Form onSubmit",c);var t=new Date(new Date(+c[hn]).getFullYear(),new Date(+c[hn]).getMonth(),new Date(+c[hn]).getDate(),new Date(+c[xn]).getHours(),new Date(+c[xn]).getMinutes()).valueOf(),n={title:c[pn],description:c[On],date:t,color:c[Dn],todoId:"".concat((new Date).valueOf())};r(h?Fe({todoId:h.todoId,todo:n}):be(n)),r(Ne(_e))},children:[Object(W.jsxs)(Sn,{children:[Object(W.jsxs)("label",{htmlFor:pn,children:[pn,":\xa0"]}),Object(W.jsx)("input",{id:pn,type:"text",name:pn,value:c[pn],onChange:x,placeholder:"input ".concat(pn),required:!0})]},pn),Object(W.jsxs)(Sn,{children:[Object(W.jsxs)("label",{htmlFor:On,children:[On,":\xa0"]}),Object(W.jsx)("input",{id:On,type:"text",name:On,value:c[On],onChange:x,placeholder:"input ".concat(On),required:!0})]},On),Object(W.jsxs)(Sn,{children:[Object(W.jsxs)("label",{htmlFor:hn,children:[hn,":\xa0"]}),m,Object(W.jsx)(fn,{currentDate:j,onChangeDate:D,isShowDatePickerContainer:s,onShowDatePickerHandler:function(){d((function(e){return!e}))}})]},hn),Object(W.jsxs)(Sn,{children:[Object(W.jsxs)("label",{htmlFor:xn,children:[xn,":\xa0"]}),p?Object(W.jsx)(yn,{time:+c[xn],onChangeTime:w}):Object(W.jsx)(Ee,{type:"button",onClick:function(e){return function(e){e.stopPropagation(),O((function(e){return!e})),w((new Date).valueOf())}(e)},children:Object(W.jsx)(Ye.h,{size:30})})]},xn),Object(W.jsxs)(Sn,{children:[Object(W.jsxs)("label",{htmlFor:Dn,children:[Dn,":\xa0"]}),Object(W.jsxs)("select",{name:Dn,id:Dn,value:c[Dn],onChange:x,children:[Object(W.jsx)("option",{value:"default",defaultValue:"default",disabled:!0,children:"Chose color"}),Object.keys(gn).map((function(e){return Object(W.jsx)("option",{value:gn[e].value,children:gn[e].label},gn[e].value)}))]})]},Dn),Object(W.jsx)(Ee,{type:"submit",children:"".concat(h?"Change":"Add"," Todo")})]})]})},Pn=z.c.div(Ft||(Ft=Object(L.a)(["\n  background-color: white;\n  z-index: 150;\n"]))),Tn=function(){var e=Oe(),t=he(Ve),n=Object(V.useRef)(null),r=Object(V.useCallback)((function(){return e(Ne(_e))}),[]);return Object(W.jsxs)(Pn,{children:[Object(W.jsx)(Ee,{ref:n,onClick:r,children:"Add new item"}),t&&Object(W.jsx)(Mn,{buttonRef:n,onShowFormHandler:r})]})},Yn=z.c.div(Mt||(Mt=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n"]))),En=z.c.div(Pt||(Pt=Object(L.a)(["\n  cursor: pointer;\n"]))),Ln=z.c.div(Tt||(Tt=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Hn=function(){var e=Oe(),t=he(je),n=he(pe),r=K[new Date(t).getMonth()],a=new Date(t).getFullYear(),o=he(Be);return Object(W.jsxs)(Yn,{children:[Object(W.jsxs)(En,{format:n,onClick:function(){if(n!==G){switch(n){case q:case U:e(le(_));break;case _:e(le(G))}e(de())}},children:[(n===q||n===U)&&r,(n===_||n===G)&&a]}),Object(W.jsx)(Ee,{type:"button",onClick:function(){return e(Pe())},children:"reset todos"}),Object(W.jsx)(Tn,{}),Object(W.jsxs)(Ln,{children:[Object(W.jsx)(nn,{}),Object(W.jsx)(fn,{currentDate:t,onChangeDate:function(t){e(Ae()),e(ie(new Date(t).valueOf())),e(le(_)),e(de())},isShowDatePickerContainer:o,onShowDatePickerHandler:function(){e(Ne(Ue))}})]})]})},Rn=z.c.div(Yt||(Yt=Object(L.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  "]))),zn=z.c.header(Et||(Et=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 1rem;\n"]))),In=z.c.main(Lt||(Lt=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"])));function Nn(){return Object(W.jsxs)(Rn,{children:[Object(W.jsxs)(zn,{children:[Object(W.jsx)("h1",{children:"Calendar"}),Object(W.jsx)(Hn,{})]}),Object(W.jsx)(In,{children:Object(W.jsx)(A.a,{})})]})}var An=Object(J.b)([{path:"/",element:Object(W.jsx)(Nn,{}),errorElement:Object(W.jsx)(B,{}),id:"root",children:[{path:"/",element:Object(W.jsx)(It,{}),id:"homepage",errorElement:Object(W.jsx)(W.Fragment,{children:"Error on Homepage"})},{path:"/post/:id",element:Object(W.jsx)(Qt,{}),errorElement:Object(W.jsx)(W.Fragment,{children:"Error on PostPage"})}]}]),Jn=n(15),Wn=n(22),Bn=n(58),Vn=n(57),qn=n.n(Vn),Un=ee.a.mark(_n);function _n(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("saga"),e.next=3,!0;case 3:case"end":return e.stop()}}),Un)}var Gn=Object(Bn.a)(),Kn={key:"root",storage:qn.a,whitelist:["interval","todos"]},Qn=Object(Jn.b)({posts:Ut,interval:ae,control:ze,todos:Ce}),Xn=Object(Wn.g)(Kn,Qn),Zn=Object(te.a)({reducer:Xn,middleware:function(e){return e({thunk:!1,serializableCheck:{ignoredActions:[Wn.a,Wn.f,Wn.b,Wn.c,Wn.d,Wn.e,"posts"]}}).concat(Gn)}}),$n=Object(Wn.h)(Zn);Gn.run(_n);n(78);var er,tr=Object(z.a)(er||(er=Object(L.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])));R.a.createRoot(document.getElementById("root")).render(Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(tr,{}),Object(W.jsx)(I.a,{store:Zn,children:Object(W.jsx)(N.a,{loading:null,persistor:$n,children:Object(W.jsx)(A.c,{router:An})})})]}))}},[[79,1,2]]]);
//# sourceMappingURL=main.80e23ca0.chunk.js.map