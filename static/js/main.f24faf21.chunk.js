(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,function(t,e,a){t.exports={list:"Statistics_list__HxPB-",listItem:"Statistics_listItem__20GFe"}},,,,,,,function(t,e,a){t.exports={p:"Notification_p__1lZWM"}},function(t,e,a){t.exports={title:"Section_title__le80j"}},function(t,e,a){t.exports={btn:"FeedbackOptions_btn__1ZC-E"}},function(t,e,a){t.exports={wrapper:"App_wrapper__25BWV"}},function(t){t.exports=JSON.parse('["good","neutral","bad"]')},,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,,,,function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(5),s=a.n(r),i=(a(20),a(21),a(22),a(23),a(6)),o=a(7),l=a(8),d=a(15),u=a(14),b=a(9),j=a.n(b),f=a(0),p=function(t){var e=t.notificat;return Object(f.jsx)("p",{className:j.a.p,children:e})},h=a(2),x=a.n(h),O=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,r=t.goodFeegbackPercentage;return Object(f.jsx)(f.Fragment,{children:c?Object(f.jsxs)("ul",{className:x.a.list,children:[Object(f.jsxs)("li",{className:x.a.listItem,children:["good:",e]}),Object(f.jsxs)("li",{className:x.a.listItem,children:["neutral:",a]}),Object(f.jsxs)("li",{className:x.a.listItem,children:["bad:",n]}),Object(f.jsxs)("li",{className:x.a.listItem,children:["total:",c]}),Object(f.jsxs)("li",{className:x.a.listItem,children:["Positive feedback:",r,"%"]})]}):Object(f.jsx)(p,{notificat:"No feedback given"})})},g=a(4),k=a.n(g),m=a(10),v=a.n(m),_=function(t){var e=t.title,a=t.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{className:v.a.title,children:e}),a]})};_.propTipes={title:k.a.string.isRequired,children:k.a.element.isRequired};var F=_,N=a(11),S=a.n(N),C=function(t){var e=t.feedback,a=t.onFeedbackLeave,n=t.id;return Object(f.jsx)("button",{className:S.a.btn,type:"button","data-feedback":e,onClick:a,children:e},n)},I=function(t){var e=t.stats,a=t.onFeedbackLeave;return e.map((function(t){return Object(f.jsx)(C,{feedback:t,onFeedbackLeave:a,id:e.indexOf(t)})}))},P=a(12),w=a.n(P),y=a(13),L=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handlerFeedback=function(e){var a=e.target.dataset.feedback;t.setState((function(t){return Object(i.a)({},a,t[a]+1)}))},t.totalStatsCounter=function(){var e=t.state;return e.good+e.neutral+e.bad},t.goodFeegbackPercentageCounter=function(){var e=t.state.good,a=t.totalStatsCounter();return a?Math.round(e/a*100):0},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.totalStatsCounter(),r=this.goodFeegbackPercentageCounter();return Object(f.jsxs)("div",{className:w.a.wrapper,children:[Object(f.jsx)(F,{title:"Please leave your feedback",children:Object(f.jsx)(I,{stats:y,onFeedbackLeave:this.handlerFeedback})}),Object(f.jsx)(F,{title:"Statistics",children:Object(f.jsx)(O,{good:e,neutral:a,bad:n,total:c,goodFeegbackPercentage:r})})]})}}]),a}(n.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.f24faf21.chunk.js.map