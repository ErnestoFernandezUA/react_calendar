(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n,r,c,o,s,u,l,i=a(46),d=a.n(i),j=a(30),D=a(49),f=a(3),b=a(26),g=a(5),O=function(){return Object(g.jsx)("div",{children:"This page doesn\xa0t exist."})},p=a(0),w=a(15),h=a(16),v={DAY:"day",WEEK:"week",MONTH:"month",YEAR:"year"},m=a(18),x=a(8),y=a(4),k=a.n(y),S=a(22),C={currentDate:0,start:0,end:0,storage:[],formatCalendar:v.MONTH},E=(Object(S.b)("Interval/fetchInterval",Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),Object(S.c)({name:"post",initialState:C,reducers:{setCurrentDate:function(e){e.currentDate=(new Date).valueOf()},setSpecialDate:function(e,t){e.currentDate=new Date(t.payload).valueOf()},addTodo:function(e,t){e.storage.push(t.payload)},setFormat:function(e,t){e.formatCalendar=t.payload,console.log("setFormat",e.formatCalendar)},setIntervalCalendar:function(e){if(console.log("setIntervalCalendar//","format calendar:",e.formatCalendar,"current date:",new Date(e.currentDate).toDateString()),e.currentDate)switch(e.formatCalendar){case v.DAY:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()+1).valueOf(),console.log("day start",new Date(e.start).toString()),console.log("day end",new Date(e.end).toString());break;case v.WEEK:var t=new Date(e.currentDate).getDate(),a=new Date(e.currentDate).getDay();e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0===a?t-a+1-7:t-a+1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),7+a===0?t-a+1-7:t-a+1).valueOf(),console.log("week start",new Date(e.start).toDateString()),console.log("week end",new Date(e.end).toDateString());break;case v.MONTH:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),1-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0).getDay()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,(8-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,0).getDay())%7).valueOf();break;case v.YEAR:e.start=new Date(new Date(e.currentDate).getFullYear(),0,1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear()+1,0,1).valueOf()}else console.log("break")},resetState:function(e){return Object(m.a)(Object(m.a)({},e),C)}}})),F=E.reducer,Y=E.actions,M=Y.setCurrentDate,P=Y.setSpecialDate,A=Y.setFormat,L=Y.setIntervalCalendar,N=(Y.addTodo,Y.resetState,function(e){return e.interval.currentDate}),W=function(e){return e.interval.start},T=function(e){return e.interval.end},H=function(e){return e.interval.formatCalendar},I=j.b,R=j.c,_=h.b.div(n||(n=Object(w.a)(["\n  ","\n\n  ","\n"])),(function(e){return"week"===e.format?Object(h.a)(r||(r=Object(w.a)(["\n      "]))):""}),(function(e){return e.isWeekend?Object(h.a)(c||(c=Object(w.a)(["\n        background-color: #caead6;\n      "]))):""})),K=function(e){var t=e.startDay,a=R(H),n=new Date(t).toDateString(),r=0===new Date(t).getDay()||6===new Date(t).getDay();return"year"===a?Object(g.jsx)(_,{format:a,isWeekend:r,children:new Date(t).getDate()}):"week"===a||"month"===a?Object(g.jsxs)(_,{format:a,isWeekend:r,children:[n,a]}):Object(g.jsxs)(_,{format:a,isWeekend:r,children:[n,"List of TODOS:"]})},B=h.b.div(o||(o=Object(w.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n\n  ","\n\n  ","\n"])),(function(e){var t=e.format;return t===v.DAY?Object(h.a)(s||(s=Object(w.a)(["\n        display: block;\n      "]))):t===v.YEAR?Object(h.a)(u||(u=Object(w.a)(["\n        grid-template-columns: repeat(3, 1fr);\n      "]))):""}),(function(e){return e.isWeekend?Object(h.a)(l||(l=Object(w.a)(["\n        background-color: #caead6;\n      "]))):""})),J=function(e){var t=e.interval,a=R(H);return Object(g.jsx)(B,{format:a,children:t.map((function(e){return Object(g.jsx)(K,{startDay:e},e)}))})};a(66);var z,U=function(){var e=I(),t=R(N),a=function(e,t){for(var a=[],n=e;n<t;)a.push(n),n=new Date(new Date(n).getFullYear(),new Date(n).getMonth(),new Date(n).getDate()+1).valueOf();return a}(R(W),R(T));return Object(p.useEffect)((function(){t||e(M()),e(P(new Date(2023,2,19).valueOf())),e(A(v.WEEK)),e(L())}),[]),Object(g.jsx)("div",{className:"HomePage",children:Object(g.jsx)(J,{interval:a})})},V=a(11),q=a(78),G="https://jsonplaceholder.typicode.com",Q=q.a.create({baseURL:G}),X=function(e){return Object(x.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.get(e);case 2:return a=t.sent,console.log("get",G+e),t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))()},Z={storage:[],statusLoading:"idle",error:null},$=Object(S.b)("posts/fetchPosts",Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("/posts/");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))),ee=Object(S.c)({name:"post",initialState:Z,reducers:{addPosts:function(e,t){var a;(a=e.storage).push.apply(a,Object(V.a)(t.payload))},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetState:function(e){return Object(m.a)(Object(m.a)({},e),Z)}},extraReducers:function(e){e.addCase($.pending,(function(e){e.statusLoading="loading"})).addCase($.fulfilled,(function(e,t){var a;(a=e.storage).push.apply(a,Object(V.a)(t.payload)),e.statusLoading="idle"})).addCase($.rejected,(function(e,t){e.statusLoading="failed",console.log(t)}))}}),te=ee.reducer,ae=ee.actions,ne=(ae.addPosts,ae.setStatus,ae.setError,ae.resetState),re=function(e){return e.posts.storage},ce=(a(71),function(){var e=Object(f.o)().id;console.log(e);var t=R(re);I()(ne());var a=t.find((function(t){return String(t.id)===String(e)}));return Object(g.jsxs)("div",{className:"PostPage",children:[Object(g.jsx)(b.a,{to:"/",className:"PostPage__Link",children:"Back"}),a?Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"PostPage: ".concat(a.title)}),Object(g.jsx)("p",{children:a.body})]}):Object(g.jsx)(g.Fragment,{children:"post doesn\xa0t exist"})]})}),oe=(a(72),h.b.div(z||(z=Object(w.a)(["\n"])))),se=function(){var e=I(),t=R(N),a=R(H);return Object(g.jsxs)(oe,{children:[Object(g.jsx)("p",{children:new Date(t).toDateString()}),Object(g.jsx)("select",{defaultValue:a,onChange:function(t){var a=t.target.value;e(A(a)),e(L())},children:Object.keys(v).map((function(e){var t=e;return Object(g.jsx)("option",{value:v[t],children:v[t]},e)}))})]})};function ue(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App__Header",children:[Object(g.jsx)("h1",{children:"Calendar"}),Object(g.jsx)(se,{})]}),Object(g.jsx)("main",{className:"App__Container",children:Object(g.jsx)(f.a,{})})]})}var le=Object(b.b)([{path:"/",element:Object(g.jsx)(ue,{}),errorElement:Object(g.jsx)(O,{}),id:"root",children:[{path:"/",element:Object(g.jsx)(U,{}),id:"homepage",errorElement:Object(g.jsx)(g.Fragment,{children:"Error on Homepage"})},{path:"/post/:id",element:Object(g.jsx)(ce,{}),errorElement:Object(g.jsx)(g.Fragment,{children:"Error on PostPage"})}]}]),ie=a(14),de=a(19),je=a(53),De=a.n(je),fe=Object(ie.b)({posts:te,interval:F}),be={key:"root",storage:De.a,whitelist:["interval"]},ge=Object(de.g)(be,fe),Oe=Object(S.a)({reducer:ge,middleware:function(e){return e({serializableCheck:{ignoredActions:[de.a,de.f,de.b,de.c,de.d,de.e,"posts"]}})}}),pe=Oe,we=Object(de.h)(Oe);a(75);d.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(j.a,{store:pe,children:Object(g.jsx)(D.a,{loading:null,persistor:we,children:Object(g.jsx)(f.c,{router:le})})}))}},[[76,1,2]]]);
//# sourceMappingURL=main.eeafec54.chunk.js.map