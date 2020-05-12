(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{12:function(e,t,a){e.exports={container:"Cards_container__11v2i",card:"Cards_card___ZUV1",infected:"Cards_infected__3QpCs",recovered:"Cards_recovered__3MiYH",deaths:"Cards_deaths__1hHBC"}},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(71),c=a.n(o),d=a(9),l=a.n(d),i=a(14),u=a(17),s=a(217),m=a(222),v=a(218),f=a(219),p=a(12),h=a.n(p),g=a(33),b=a.n(g),E=function(e){var t,a,n,o,c,d,l,i,u,p=e.state,g=p.country;return console.log(g),r.a.createElement("div",{className:h.a.container},r.a.createElement(s.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(s.a,{item:!0,component:m.a,xs:12,md:3,className:b()(h.a.card,h.a.infected)},r.a.createElement(v.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(f.a,{variant:"h5"},null===(t=p.fetcheddata)||void 0===t||null===(a=t.confirmed)||void 0===a?void 0:a.value),r.a.createElement(f.a,{color:"textSecondary"},new Date(null===(n=p.fetcheddata)||void 0===n?void 0:n.lastUpdate).toDateString()),r.a.createElement(f.a,{varaiant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(s.a,{item:!0,component:m.a,xs:12,md:3,className:b()(h.a.card,h.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(f.a,{variant:"h5"},null===(o=p.fetcheddata)||void 0===o||null===(c=o.recovered)||void 0===c?void 0:c.value),r.a.createElement(f.a,{color:"textSecondary"},new Date(null===(d=p.fetcheddata)||void 0===d?void 0:d.lastUpdate).toDateString()),r.a.createElement(f.a,{varaiant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(s.a,{item:!0,component:m.a,xs:12,md:3,className:b()(h.a.card,h.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(f.a,{variant:"h5"},null===(l=p.fetcheddata)||void 0===l||null===(i=l.deaths)||void 0===i?void 0:i.value),r.a.createElement(f.a,{color:"textSecondary"},new Date(null===(u=p.fetcheddata)||void 0===u?void 0:u.lastUpdate).toDateString()),r.a.createElement(f.a,{varaiant:"body2"},"Number deaths caused by COVID-19")))))},y=a(221),_=a(220),x=a(76),C=a.n(x),O=a(16),j=a.n(O),k=function(e){var t=e.handlecountrychange,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],d=o[1],s=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://covid19.mathdro.id/api/countries");case 2:t=e.sent,a=t.data.countries,console.log(a),n=a.map((function(e){return e.name})),d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[d]),r.a.createElement(y.a,{className:C.a.formControl},r.a.createElement(_.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"global"},"Choose Country..."),c.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},w=a(44),D=a(78),S=a.n(D),N=function(e){var t,a,o,c,d,s,m=e.state,v=Object(n.useState)({}),f=Object(u.a)(v,2),p=f[0],h=f[1],g=m.fetcheddata;console.log(null===g||void 0===g?void 0:g.confirmed);var b=m.country;console.log(b);var E=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://covid19.mathdro.id/api/daily");case 2:t=e.sent,a=t.data,console.log(a),n=a.map((function(e){var t,a;return{confirmed:null===(t=e.confirmed)||void 0===t?void 0:t.total,deaths:null===(a=e.deaths)||void 0===a?void 0:a.total,date:e.reportDate}})),h(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E()}),[]);var y=(null===g||void 0===g?void 0:g.confirmed)?r.a.createElement(w.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","#d50000"],data:[null===(t=m.fetcheddata)||void 0===t||null===(a=t.confirmed)||void 0===a?void 0:a.value,null===(o=m.fetcheddata)||void 0===o||null===(c=o.recovered)||void 0===c?void 0:c.value,null===(d=m.fetcheddata)||void 0===d||null===(s=d.deaths)||void 0===s?void 0:s.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(b)}}}):null,_=p.length?r.a.createElement(w.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:S.a.container},b?y:_)},U=a(45),I=a.n(U),B=a(79),V=a.n(B);var A=function(){var e="https://covid19.mathdro.id/api",t=Object(n.useState)({data:{},country:""}),a=Object(u.a)(t,2),o=a[0],c=a[1],d=function(){var t=Object(i.a)(l.a.mark((function t(a){var n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,a&&(n="".concat(e,"/countries/").concat(a)),t.next=4,j.a.get(n);case 4:return r=t.sent,o=r.data,console.log(o),c({confirmed:o.confirmed,recovered:o.recovered,deaths:o.deaths,lastUpdate:o.lastUpdate}),t.abrupt("return",{confirmed:o.confirmed,recovered:o.recovered,deaths:o.deaths,lastUpdate:o.lastUpdate});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:a=e.sent,console.log(t),console.log(a),c({fetcheddata:a,country:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),r.a.createElement("div",{className:I.a.container},r.a.createElement("img",{className:I.a.image,src:V.a,alt:""}),r.a.createElement(E,{state:o}),r.a.createElement(k,{handlecountrychange:s}),r.a.createElement(N,{state:o}))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))},45:function(e,t,a){e.exports={container:"App_container__k26no",image:"App_image__jKcLg"}},76:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__Llkiv"}},78:function(e,t,a){e.exports={container:"Chart_container__1qamA"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},82:function(e,t,a){e.exports=a(200)}},[[82,1,2]]]);
//# sourceMappingURL=main.7381c911.chunk.js.map