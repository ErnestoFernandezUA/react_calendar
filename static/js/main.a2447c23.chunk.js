(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{71:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a,r,o,c,i,u,s,l,d,b,j,p,g,f,O,h,D,x,w,m,v,y,k,C,S,F=n(47),M=n.n(F),Y=n(30),P=n(50),E=n(4),L=n(6),N=n(26),z=n(7),A=n(2),T=function(){return Object(A.jsx)("div",{children:"This page doesn\xa0t exist."})},I=n(0),R="day",W="week",J="month",_="year",B=["January","February","March","April","May","June","July","August","September","October","November","December"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=n(13),U=n(10),q=n(5),G=n.n(q),K=n(19),Q={currentDate:0,start:0,end:0,storage:[],formatCalendar:J},X=(Object(K.b)("Interval/fetchInterval",Object(U.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),Object(K.c)({name:"interval",initialState:Q,reducers:{setCurrentDate:function(e){e.currentDate=(new Date).valueOf()},setSpecialDate:function(e,t){e.currentDate=new Date(t.payload).valueOf()},setFormat:function(e,t){e.formatCalendar=t.payload,console.log("setFormat",e.formatCalendar)},navigateMonth:function(e,t){console.log("navigateMonth",t.payload),e.currentDate=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+Number(t.payload),new Date(e.currentDate).getDate()).valueOf()},navigateYear:function(e,t){console.log("navigateYear",t.payload),e.currentDate=new Date(new Date(e.currentDate).getFullYear()+Number(t.payload),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()).valueOf()},setIntervalCalendar:function(e){if(console.log("setIntervalCalendar//","format calendar:",e.formatCalendar,"current date:",new Date(e.currentDate).toDateString()),e.currentDate)switch(e.formatCalendar){case R:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()+1).valueOf(),console.log("day start",new Date(e.start).toString()),console.log("day end",new Date(e.end).toString());break;case W:var t=new Date(e.currentDate).getDate(),n=new Date(e.currentDate).getDay();e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0===n?t-n+1-7:t-n+1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),7+(0===n?t-n+1-7:t-n+1)).valueOf(),console.log("week start",new Date(e.start).toDateString()),console.log("week end",new Date(e.end).toDateString());break;case J:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),1-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0).getDay()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,(8-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,0).getDay())%7).valueOf(),console.log("start month",new Date(e.start).toString()),console.log("end month",new Date(e.end).toString());break;case _:e.start=new Date(new Date(e.currentDate).getFullYear(),0,1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear()+1,0,1).valueOf(),console.log("start year",new Date(e.start).toString()),console.log("end year",new Date(e.end).toString())}else console.log("break")},addTodo:function(e,t){e.storage.push(t.payload)},resetState:function(e){return Object(V.a)(Object(V.a)({},e),Q)}}})),Z=X.reducer,$=X.actions,ee=$.setCurrentDate,te=$.setSpecialDate,ne=$.setFormat,ae=$.navigateMonth,re=$.navigateYear,oe=$.setIntervalCalendar,ce=($.addTodo,$.resetState,function(e){return e.interval.currentDate}),ie=function(e){return e.interval.start},ue=function(e){return e.interval.end},se=function(e){return e.interval.formatCalendar},le=Y.b,de=Y.c,be=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],je=z.b.div(a||(a=Object(L.a)(["\n  box-sizing: border-box;\n  padding: 0;\n  font-size: 14px;\n  cursor: pointer;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.format===R&&Object(z.a)(r||(r=Object(L.a)(["\n    height: 100vh;\n  "])))}),(function(e){var t=e.format;return(t===W||t===J)&&Object(z.a)(o||(o=Object(L.a)(["\n    height: 200px;\n\n    &:hover{\n      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    }\n  "])))}),(function(e){var t=e.format,n=e.isWeekend;return t===_&&n&&Object(z.a)(c||(c=Object(L.a)(["\n    color: red;\n  "])))}),(function(e){return e.isNotCurrentMonth&&Object(z.a)(i||(i=Object(L.a)(["\n    opacity: 0.4;\n  "])))}),(function(e){return e.isCurrentDay&&Object(z.a)(u||(u=Object(L.a)(["\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  "])))})),pe=z.b.div(s||(s=Object(L.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  ","\n\n  ","\n"])),(function(e){return e.isCurrentDay&&Object(z.a)(l||(l=Object(L.a)(["\n    background-color: #79c6c6;\n  "])))}),(function(e){return!e.isCurrentDay&&Object(z.a)(d||(d=Object(L.a)(["\n    &:hover {\n      background-color: #e6e6e6;\n    }\n  "])))})),ge=z.b.button(b||(b=Object(L.a)(["\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0 10px;\n  line-height: 30px;\n  border: none;\n  outline: none;\n  position: relative;\n  cursor: pointer;\n  text-align: left;\n\n  border-right: 10px solid transparent;\n  width: 80px;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n\n  ","\n\n\n  ","\n\n  ","\n"])),(function(e){return e.isWeekend&&Object(z.a)(j||(j=Object(L.a)(["\n    color: #a16e73;\n    font-weight: bold;\n  "])))}),(function(e){var t=e.isCurrentDay,n=e.format;return!t&&n!==W&&Object(z.a)(p||(p=Object(L.a)(["\n    &:hover {\n      transition: all 0.2s;\n      border-bottom: 10px solid #79c6c6;\n    }\n  "])))}),(function(e){return e.format===_&&Object(z.a)(g||(g=Object(L.a)(["\n    display: none;\n  "])))})),fe=z.b.p(f||(f=Object(L.a)(["\n  margin: 0;\n  line-height: 40px;\n  position: relative;\n  overflow: hidden;\n  padding: 0 10px;\n\n  ","\n"])),(function(e){return e.format===_&&Object(z.a)(O||(O=Object(L.a)(["\n    display: block;\n    text-align: right;\n  "])))})),Oe=z.b.div(h||(h=Object(L.a)(["\n  box-sizing: border-box;\n  padding: 10px;\n\n  ","\n"])),(function(e){return e.format===_?Object(z.a)(D||(D=Object(L.a)(["\n        display: none;\n      "]))):""})),he=function(e){var t=e.startDay,n=e.disabled,a=void 0!==n&&n,r=le(),o=de(ce),c=de(se),i=0===new Date(t).getDay()||6===new Date(t).getDay(),u=function(e){var t=new Date(e),n=t.getDate(),a=t.toDateString().split(" "),r=be[t.getDay()];return{dayOfWeek:a[0],month:a[1],day:n,year:a[3],fullNameDayOfWeek:r}}(t),s=u.dayOfWeek,l=u.month,d=u.day,b=u.year,j=u.fullNameDayOfWeek,p=function(e,t){var n=new Date(e).getFullYear()===new Date(t).getFullYear(),a=new Date(e).getMonth()===new Date(t).getMonth()&&new Date(e).getFullYear()===new Date(t).getFullYear();return{isCurrentDay:new Date(e).getDate()===new Date(t).getDate()&&new Date(e).getMonth()===new Date(t).getMonth()&&new Date(e).getFullYear()===new Date(t).getFullYear(),isCurrentMonth:a,isCurrentYear:n}}(o,t),g=p.isCurrentDay,f=p.isCurrentMonth;return a?Object(A.jsx)("div",{}):Object(A.jsxs)(je,{format:c,isWeekend:i,isNotCurrentMonth:!f,isCurrentDay:g,children:[Object(A.jsxs)(pe,{isCurrentDay:g,onClick:function(){if(console.log("Day onClick"),!g||c!==R){if(g)return r(ne(R)),void r(oe());a||r(te(t)),a||f||r(oe())}},children:[Object(A.jsxs)(ge,{isWeekend:i,onClick:function(e){return function(e){var t;c!==W&&(e.stopPropagation(),e.target instanceof HTMLButtonElement&&(t=e.target.dataset.dayValue),t&&(r(te(+t)),r(ne(W)),r(oe())))}(e)},"data-day-value":String(t),isCurrentDay:g,format:c,children:[c===R&&j,(c===W||c===J)&&s]}),Object(A.jsx)(fe,{format:c,children:c===R?"".concat(d,"/").concat(l,"/").concat(b):d})]}),c!==_&&Object(A.jsx)(Oe,{format:c,children:!1})]})},De=z.b.div(x||(x=Object(L.a)(["\n\n\n  ","\n"])),(function(e){var t=e.format;return t===R?Object(z.a)(w||(w=Object(L.a)(["\n        display: block;\n      "]))):t===_?Object(z.a)(m||(m=Object(L.a)(["\n        /* max-width: 200px; */\n      "]))):""})),xe=z.b.div(v||(v=Object(L.a)(["\n\n  cursor: pointer;\n\n  ","\n\n  ","\n\n  & button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n  }\n"])),(function(e){return e.format===R&&Object(z.a)(y||(y=Object(L.a)(["\n    display: none;\n  "])))}),(function(e){return e.format===_&&Object(z.a)(k||(k=Object(L.a)(["\n    padding: 10px;\n  "])))})),we=z.b.div(C||(C=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n\n  ","\n"])),(function(e){return e.format===R&&Object(z.a)(S||(S=Object(L.a)(["\n    display: block;\n  "])))})),me=function(e){for(var t=e.interval,n=le(),a=de(se),r=Object(I.useRef)(new Date(t[0]).getMonth()),o=Object(I.useRef)((new Date(t[0]).getDay()+7-1)%7),c=[],i=0;i<o.current;i+=1)c.push(-i);return Object(A.jsxs)(De,{format:a,children:[Object(A.jsx)(xe,{format:a,children:Object(A.jsx)("button",{type:"button",onClick:function(e){return function(e){var t;a!==J&&(e.target instanceof HTMLButtonElement&&(t=e.target.dataset.monthValue),t&&(n(te(+t)),n(ne(J)),n(oe())))}(e)},"data-month-value":String(t[0]),children:a===_&&B[r.current]})}),Object(A.jsxs)(we,{format:a,children:[c.map((function(e){return Object(A.jsx)(he,{startDay:e,disabled:!0},e)})),t.map((function(e){return Object(A.jsx)(he,{startDay:e},e)}))]})]})};var ve,ye,ke,Ce,Se,Fe,Me,Ye,Pe,Ee,Le,Ne,ze,Ae,Te,Ie,Re=z.b.div(ve||(ve=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  min-width: 1100px;\n"]))),We=function(e){var t=function(e){for(var t=[],n=0;n<e.length;){for(var a=new Date(e[n]).getMonth(),r=[];a===new Date(e[n]).getMonth();)r.push(e[n]),n+=1;t.push(r)}return t}(e.interval);return Object(A.jsx)(Re,{children:t.map((function(e){return Object(A.jsx)(me,{interval:e},e[0])}))})},Je=z.b.div(ye||(ye=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),_e=function(){var e=le(),t=de(ce),n=function(e,t){for(var n=[],a=e;a<t;)n.push(a),a=new Date(new Date(a).getFullYear(),new Date(a).getMonth(),new Date(a).getDate()+1).valueOf();return n}(de(ie),de(ue)),a=de(se);return Object(I.useEffect)((function(){t||(e(ee()),e(ne(J))),e(oe())}),[]),Object(A.jsxs)(Je,{children:[a===_&&Object(A.jsx)(We,{interval:n}),(a===J||a===W)&&Object(A.jsx)(me,{interval:n}),a===R&&Object(A.jsx)(he,{startDay:n[0]})]})},Be=n(14),He=n(77),Ve="https://jsonplaceholder.typicode.com",Ue=He.a.create({baseURL:Ve}),qe=function(e){return Object(U.a)(G.a.mark((function t(){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ue.get(e);case 2:return n=t.sent,console.log("get",Ve+e),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},Ge={storage:[],statusLoading:"idle",error:null},Ke=Object(K.b)("posts/fetchPosts",Object(U.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe("/posts/");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))),Qe=Object(K.c)({name:"interval",initialState:Ge,reducers:{addPosts:function(e,t){var n;(n=e.storage).push.apply(n,Object(Be.a)(t.payload))},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetState:function(e){return Object(V.a)(Object(V.a)({},e),Ge)}},extraReducers:function(e){e.addCase(Ke.pending,(function(e){e.statusLoading="loading"})).addCase(Ke.fulfilled,(function(e,t){var n;(n=e.storage).push.apply(n,Object(Be.a)(t.payload)),e.statusLoading="idle"})).addCase(Ke.rejected,(function(e,t){e.statusLoading="failed",console.log(t)}))}}),Xe=Qe.reducer,Ze=Qe.actions,$e=(Ze.addPosts,Ze.setStatus,Ze.setError,Ze.resetState),et=function(e){return e.posts.storage},tt=(n(71),function(){var e=Object(E.o)().id;console.log(e);var t=de(et);le()($e());var n=t.find((function(t){return String(t.id)===String(e)}));return Object(A.jsxs)("div",{className:"PostPage",children:[Object(A.jsx)(N.a,{to:"/",className:"PostPage__Link",children:"Back"}),n?Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"PostPage: ".concat(n.title)}),Object(A.jsx)("p",{children:n.body})]}):Object(A.jsx)(A.Fragment,{children:"post doesn\xa0t exist"})]})}),nt=n(9),at=n(41),rt=n(11),ot={popup:{isShowDatePicker:!1,isShowAddItem:!1}},ct=Object(K.c)({name:"controls",initialState:ot,reducers:{switchPopup:function(e,t){console.log("switchPopup"),e.popup=Object(V.a)(Object(V.a)({},ot.popup),{},Object(rt.a)({},t.payload,!e.popup[t.payload]))},closeAllPopup:function(e){e.popup=Object(V.a)({},ot.popup)},resetState:function(e){return Object(V.a)(Object(V.a)({},e),ot)}}}),it=ct.reducer,ut=ct.actions,st=ut.switchPopup,lt=ut.closeAllPopup,dt=(ut.resetState,function(e){return e.control.popup.isShowDatePicker}),bt=function(e){return e.control.popup.isShowAddItem},jt="isShowDatePicker",pt="isShowAddItem",gt="1",ft="-1",Ot=z.b.button(ke||(ke=Object(L.a)(["\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  justify-content: center;\n  cursor: pointer;\n"]))),ht=z.b.div(Ce||(Ce=Object(L.a)(["\n  position: relative;\n"]))),Dt=z.b.div(Se||(Se=Object(L.a)(["\n  display: flex;\n"]))),xt=z.b.button(Fe||(Fe=Object(L.a)(["\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n"]))),wt=z.b.button(Me||(Me=Object(L.a)(["\n  border: none;\n  background-color: transparent;\n  outline: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 100px;\n"]))),mt=z.b.div(Ye||(Ye=Object(L.a)(["\n  z-index: 50;\n  position: absolute;\n  right: 0;\n  top: 45px;\n  background-color: white;\n  opacity: 1;\n  width: 400px;\n  box-sizing: border-box;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  row-gap: 20px;\n\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),vt=function(){for(var e=le(),t=de(ce),n=de(se),a=B[new Date(t).getMonth()],r=new Date(t).getFullYear(),o=de(dt),c=Object(I.useState)(""),i=Object(nt.a)(c,2),u=i[0],s=i[1],l=Object(I.useRef)(null),d=Object(I.useRef)(null),b=[],j=0;j<12;j+=1)b.push(new Date(new Date(t).getFullYear()-4+j,0,0).valueOf());var p=function(t){d.current&&!d.current.contains(t.target)&&l.current&&!l.current.contains(t.target)&&e(st(jt))};Object(I.useEffect)((function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}}),[]);var g=function(t){n!==_&&(e(ae(t.currentTarget.value)),e(ne(J))),n===_&&e(re(t.currentTarget.value)),e(oe())};return Object(A.jsxs)(ht,{children:[Object(A.jsxs)(Dt,{ref:l,children:[Object(A.jsx)(xt,{type:"button",value:ft,onClick:g,children:Object(A.jsx)(at.b,{})}),n!==_&&Object(A.jsxs)(A.Fragment,{children:["\xa0",a]}),"\xa0",r,"\xa0",Object(A.jsx)(xt,{type:"button",value:gt,onClick:g,children:Object(A.jsx)(at.c,{})}),Object(A.jsx)(wt,{onClick:function(){s(""),e(st(jt))},children:Object(A.jsx)(at.a,{size:30})})]}),o&&Object(A.jsxs)(mt,{ref:d,children:[!u&&b.map((function(e){return Object(A.jsx)(Ot,{type:"button",value:String(e),onClick:function(e){return function(e){s(e.currentTarget.value)}(e)},children:new Date(e).getFullYear()},e)})),u&&H.map((function(t,n){return Object(A.jsx)(Ot,{type:"button",value:String(n),onClick:function(t){return function(t){var n=t.currentTarget.value;e(lt()),e(te(new Date(new Date(+u).getFullYear(),+n,1).valueOf())),e(ne(J)),e(oe()),s("")}(t)},children:t},t)}))]})]})},yt=z.b.div(Pe||(Pe=Object(L.a)(["\n  background-color: white;\n  z-index: 150;\n"]))),kt=z.b.form(Ee||(Ee=Object(L.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  z-index: 100;\n  background-color: white;\n  opacity: 1;\n  width: 400px;\n  box-sizing: border-box;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),Ct=function(){var e=le(),t=de(bt),n=Object(I.useState)({title:"",description:"",date:"",time:""}),a=Object(nt.a)(n,2),r=a[0],o=a[1],c=Object(I.useRef)(null),i=Object(I.useRef)(null),u=function(t){c.current&&!c.current.contains(t.target)&&i.current&&!i.current.contains(t.target)&&e(st(pt))};Object(I.useEffect)((function(){return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}}),[]);var s=function(e){o(Object(V.a)(Object(V.a)({},r),{},Object(rt.a)({},e.target.name,e.target.value)))},l=function(){var e=Object(U.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(yt,{children:[Object(A.jsx)(Ot,{ref:i,onClick:function(){e(st(pt))},children:"Add new item"}),t&&Object(A.jsx)(kt,{ref:c,onSubmit:l,onClick:function(e){return e.stopPropagation()},children:Object(A.jsxs)("div",{children:[Object.keys(r).map((function(e){return Object(A.jsx)("div",{className:"PageForm1__input-container",children:Object(A.jsxs)("label",{htmlFor:e,children:[e,":\xa0",Object(A.jsx)("input",{id:e,type:"text",name:e,onChange:s,placeholder:"input ".concat(e)})]})},e)})),Object(A.jsx)("button",{type:"submit",onClick:l,className:"PageForm1__input-submit",children:"Submit"})]})})]})},St=z.b.div(Le||(Le=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n"]))),Ft=z.b.div(Ne||(Ne=Object(L.a)(["\n  cursor: pointer;\n"]))),Mt=z.b.div(ze||(ze=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Yt=function(){var e=le(),t=de(ce),n=de(se),a=B[new Date(t).getMonth()],r=new Date(t).getFullYear();return Object(A.jsxs)(St,{children:[Object(A.jsxs)(Ft,{format:n,onClick:function(){if(n!==_){switch(n){case R:case W:e(ne(J));break;case J:e(ne(_))}e(oe())}},children:[(n===R||n===W)&&a,(n===J||n===_)&&r]}),Object(A.jsx)(Ct,{}),Object(A.jsx)(Mt,{children:Object(A.jsx)(vt,{})})]})},Pt=z.b.div(Ae||(Ae=Object(L.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  "]))),Et=z.b.header(Te||(Te=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 1rem;\n"]))),Lt=z.b.main(Ie||(Ie=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"])));function Nt(){return Object(A.jsxs)(Pt,{children:[Object(A.jsxs)(Et,{children:[Object(A.jsx)("h1",{children:"Calendar"}),Object(A.jsx)(Yt,{})]}),Object(A.jsx)(Lt,{children:Object(A.jsx)(E.a,{})})]})}var zt=Object(N.b)([{path:"/",element:Object(A.jsx)(Nt,{}),errorElement:Object(A.jsx)(T,{}),id:"root",children:[{path:"/",element:Object(A.jsx)(_e,{}),id:"homepage",errorElement:Object(A.jsx)(A.Fragment,{children:"Error on Homepage"})},{path:"/post/:id",element:Object(A.jsx)(tt,{}),errorElement:Object(A.jsx)(A.Fragment,{children:"Error on PostPage"})}]}]),At=n(17),Tt=n(20),It=n(54),Rt=n.n(It),Wt=Object(At.b)({posts:Xe,interval:Z,control:it}),Jt={key:"root",storage:Rt.a,whitelist:["interval"]},_t=Object(Tt.g)(Jt,Wt),Bt=Object(K.a)({reducer:_t,middleware:function(e){return e({serializableCheck:{ignoredActions:[Tt.a,Tt.f,Tt.b,Tt.c,Tt.d,Tt.e,"posts"]}})}}),Ht=Bt,Vt=Object(Tt.h)(Bt);n(74);M.a.createRoot(document.getElementById("root")).render(Object(A.jsx)(Y.a,{store:Ht,children:Object(A.jsx)(P.a,{loading:null,persistor:Vt,children:Object(A.jsx)(E.c,{router:zt})})}))}},[[75,1,2]]]);
//# sourceMappingURL=main.a2447c23.chunk.js.map