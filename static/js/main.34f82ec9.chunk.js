(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(46),s=a.n(o),l=a(30),u=a(49),i=a(3),d=a(24),D=a(5),g=function(){return Object(D.jsx)("div",{children:"This page doesn\xa0t exist."})},j=a(0),f=a(26),b=a(27),w=b.a.div(n||(n=Object(f.a)(["\n\n"]))),O=b.a.div(r||(r=Object(f.a)(["\n\n"]))),p=function(e){var t=e.day;console.log(t);var a=new Date(t),n=a.getFullYear(),r=a.getMonth(),c=a.getDate(),o=a.getDate();return Object(D.jsx)(w,{children:Object(D.jsxs)(O,{children:["".concat(c,"/").concat(r,"/").concat(n),o]})})},h=b.a.div(c||(c=Object(f.a)(["\n\n"]))),v=function(e){var t=e.interval;return Object(D.jsx)(h,{children:t.map((function(e){return Object(D.jsx)(p,{day:e},e)}))})};var m=a(16),x=a(8),y=a(4),S=a.n(y),k=a(20),F="day",C="week",P="month",Y="year",E={currentDate:0,start:0,end:0,storage:[],formatCalendar:"month"},M=(Object(k.b)("Interval/fetchInterval",Object(x.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),Object(k.c)({name:"post",initialState:E,reducers:{setCurrentDate:function(e){e.currentDate=(new Date).valueOf()},setSpecialDate:function(e,t){e.currentDate=new Date(t.payload).valueOf()},addTodo:function(e,t){e.storage.push(t.payload)},setFormat:function(e,t){e.formatCalendar=t.payload},setIntervalCalendar:function(e){if(console.log("setIntervalCalendar//","format calendar:",e.formatCalendar,"current date:",new Date(e.currentDate).toDateString()),e.currentDate)switch(e.formatCalendar){case F:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),new Date(e.currentDate).getDate()+1).valueOf(),console.log("day start",new Date(e.start).toString()),console.log("day end",new Date(e.end).toString());break;case C:var t=new Date(e.currentDate),a=t.getDay(),n=1===a?7:a-1||7;e.start=new Date(t.getTime()-24*(n-1)*60*60*1e3).valueOf(),console.log("value",new Date(t.getTime()-24*n*60*60*1e3)),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),(new Date(e.currentDate).getDate()-new Date(e.currentDate).getDay()+1-7)%7+7).valueOf(),console.log("week start",new Date(e.start).toString()),console.log("week end",new Date(e.end).toString());break;case P:e.start=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),1-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth(),0).getDay()).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,(8-new Date(new Date(e.currentDate).getFullYear(),new Date(e.currentDate).getMonth()+1,0).getDay())%7).valueOf();break;case Y:e.start=new Date(new Date(e.currentDate).getFullYear(),0,1).valueOf(),e.end=new Date(new Date(e.currentDate).getFullYear()+1,0,1).valueOf()}else console.log("break")},resetState:function(e){return Object(m.a)(Object(m.a)({},e),E)}}})),L=M.reducer,I=M.actions,N=I.setCurrentDate,_=I.setSpecialDate,T=I.setFormat,A=I.setIntervalCalendar,H=(I.addTodo,I.resetState,function(e){return e.interval.currentDate}),R=function(e){return e.interval.start},B=function(e){return e.interval.end},J=l.b,z=l.c,U=(a(66),function(){var e=J(),t=z(H),a=z(R),n=z(B);console.log("start = ",new Date(a)),console.log("end = ",new Date(n));var r=function(e,t){var a=[],n=e;for(console.log("buildInterval//",new Date(e).toDateString(),"-----------",new Date(t).toDateString());n<t;)a.push(n),n=new Date(new Date(n).getFullYear(),new Date(n).getMonth(),new Date(n).getDate()+1).valueOf();return a}(a,n);return Object(j.useEffect)((function(){t||e(N()),e(_(new Date(2023,2,15).valueOf())),e(T(P)),e(A())}),[]),Object(D.jsxs)("div",{className:"HomePage",children:[Object(D.jsx)("h2",{children:"HomePage"}),Object(D.jsx)("p",{children:new Date(t).toString()}),Object(D.jsx)(v,{interval:r})]})}),q=a(11),G=a(78),K="https://jsonplaceholder.typicode.com",Q=G.a.create({baseURL:K}),V=function(e){return Object(x.a)(S.a.mark((function t(){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.get(e);case 2:return a=t.sent,console.log("get",K+e),t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))()},W={storage:[],statusLoading:"idle",error:null},X=Object(k.b)("posts/fetchPosts",Object(x.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/posts/");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))),Z=Object(k.c)({name:"post",initialState:W,reducers:{addPosts:function(e,t){var a;(a=e.storage).push.apply(a,Object(q.a)(t.payload))},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetState:function(e){return Object(m.a)(Object(m.a)({},e),W)}},extraReducers:function(e){e.addCase(X.pending,(function(e){e.statusLoading="loading"})).addCase(X.fulfilled,(function(e,t){var a;(a=e.storage).push.apply(a,Object(q.a)(t.payload)),e.statusLoading="idle"})).addCase(X.rejected,(function(e,t){e.statusLoading="failed",console.log(t)}))}}),$=Z.reducer,ee=Z.actions,te=(ee.addPosts,ee.setStatus,ee.setError,ee.resetState),ae=function(e){return e.posts.storage},ne=(a(71),function(){var e=Object(i.o)().id;console.log(e);var t=z(ae);J()(te());var a=t.find((function(t){return String(t.id)===String(e)}));return Object(D.jsxs)("div",{className:"PostPage",children:[Object(D.jsx)(d.a,{to:"/",className:"PostPage__Link",children:"Back"}),a?Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"PostPage: ".concat(a.title)}),Object(D.jsx)("p",{children:a.body})]}):Object(D.jsx)(D.Fragment,{children:"post doesn\xa0t exist"})]})});a(72);function re(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("header",{className:"App__Header",children:Object(D.jsx)("h1",{children:"Calendar"})}),Object(D.jsx)("main",{className:"App__Container",children:Object(D.jsx)(i.a,{})})]})}var ce=Object(d.b)([{path:"/",element:Object(D.jsx)(re,{}),errorElement:Object(D.jsx)(g,{}),id:"root",children:[{path:"/",element:Object(D.jsx)(U,{}),id:"homepage",errorElement:Object(D.jsx)(D.Fragment,{children:"Error on Homepage"})},{path:"/post/:id",element:Object(D.jsx)(ne,{}),errorElement:Object(D.jsx)(D.Fragment,{children:"Error on PostPage"})}]}]),oe=a(14),se=a(17),le=a(53),ue=a.n(le),ie=Object(oe.b)({posts:$,interval:L}),de={key:"root",storage:ue.a,whitelist:["interval"]},De=Object(se.g)(de,ie),ge=Object(k.a)({reducer:De,middleware:function(e){return e({serializableCheck:{ignoredActions:[se.a,se.f,se.b,se.c,se.d,se.e,"posts"]}})}}),je=ge,fe=Object(se.h)(ge);a(75);s.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(l.a,{store:je,children:Object(D.jsx)(u.a,{loading:null,persistor:fe,children:Object(D.jsx)(i.c,{router:ce})})}))}},[[76,1,2]]]);
//# sourceMappingURL=main.34f82ec9.chunk.js.map