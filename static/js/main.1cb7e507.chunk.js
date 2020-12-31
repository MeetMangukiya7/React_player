(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(12),s=n.n(i),o=n(4),u=n.n(o),l=n(6),d=n(3),p=n(8),b=(n(19),n(7)),j=n(5),h=function(e){var t=e.audioRef,n=e.currentSong,c=e.isPlaying,r=e.setIsPlaying,i=e.setSongInfo,s=e.setSongs,o=e.songInfo,p=e.songs,h=e.setCurrentSong,f=function(e){var t=p.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));s(t)},g=function(e){return Math.floor(e/60)+"."+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(l.a)(u.a.mark((function e(a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.findIndex((function(e){return e.id===n.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,h(p[(r+1)%p.length]);case 4:f(p[(r+1)%p.length]);case 5:if("skip-back"!==a){e.next=15;break}if((r-1)%p.length!==-1){e.next=12;break}return e.next=9,h(p[p.length-1]);case 9:return f(p[p.length-1]),c&&t.current.play(),e.abrupt("return");case 12:return e.next=14,h(p[(r-1)%p.length]);case 14:f(p[(r-1)%p.length]);case 15:c&&t.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(o.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:g(o.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n.color[0],", ").concat(n.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){t.current.currentTime=e.target.value,i(Object(d.a)(Object(d.a)({},o),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:O,className:"animate-track"})]}),Object(a.jsx)("p",{children:o.duration?g(o.duration):"0.00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(b.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:j.a}),Object(a.jsx)(b.a,{onClick:function(){c?(t.current.pause(),r(!c)):(t.current.play(),r(!c))},className:"play",size:"2x",icon:c?j.d:j.e}),Object(a.jsx)(b.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:j.b})]})]})},f=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,r=e.id,i=e.audioRef,s=e.isPlaying,o=e.setSongs,p=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===r})),e.next=3,c(t[0]);case 3:a=n.map((function(e){return e.id===r?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),o(a),s&&i.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{onClick:p,className:"library-song ".concat(t.active?"selected":""," "),children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(s?"active-library":""," "),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(g,{songs:t,setCurrentSong:n,song:e,id:e.id,audioRef:c,isPlaying:r,setSongs:i},e.id)}))})]})},O=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Waves"}),Object(a.jsxs)("button",{onClick:function(){return t(!n)},children:["Library",Object(a.jsx)(b.a,{icon:j.c})]})]})},v=n(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),n=Object(p.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(r[0]),o=Object(p.a)(s,2),b=o[0],j=o[1],g=Object(c.useState)(!1),v=Object(p.a)(g,2),y=v[0],S=v[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(p.a)(k,2),C=w[0],N=w[1],P=Object(c.useState)(!1),I=Object(p.a)(P,2),T=I[0],A=I[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);N(Object(d.a)(Object(d.a)({},C),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.findIndex((function(e){return e.id===b.id})),t.next=3,j(r[(n+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(a.jsx)(O,{setLibraryStatus:A,libraryStatus:T}),Object(a.jsx)(f,{currentSong:b}),Object(a.jsx)(h,{audioRef:e,setIsPlaying:S,isPlaying:y,currentSong:b,setSongInfo:N,songInfo:C,songs:r,setCurrentSong:j,setSongs:i}),Object(a.jsx)(m,{audioRef:e,songs:r,setCurrentSong:j,isPlaying:y,setSongs:i,libraryStatus:T}),Object(a.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:e,src:b.audio,onEnded:R})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.1cb7e507.chunk.js.map