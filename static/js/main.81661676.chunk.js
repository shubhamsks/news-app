(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{31:function(e,t,n){e.exports=n(75)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(27),r=n.n(l),o=(n(36),n(37),n(5)),i=n(6),s=n(8),u=n(7),m=n(9),h=(n(38),n(79)),p=n(28),d=n.n(p),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={fullView:!1},n.handleOnViewClick=function(){n.setState({fullView:!0})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null,t=null,n=null,a=null,l=null,r=null,o=null;this.props.loaded&&(e=this.props.title,t=this.props.desc,n=this.props.content,a=this.props.source,l=this.props.imageUrl,r=this.props.publishedAt,o=this.props.url),n&&(n=(n=n.toString()).substring(0,n.length-13)),r=r.toString(),r=new Date(r),h.a.addLocale(d.a),r=new h.a("en-US").format(r);var i=c.a.createElement("img",{src:l,alt:e,className:this.state.fullView?"newsItemImageFullView":"newsItemImage"}),s=c.a.createElement("div",{className:"newsItem"},i,c.a.createElement("div",{className:"newsContainer"},c.a.createElement("a",{target:"_blank",href:o},c.a.createElement("h5",null,e)),c.a.createElement("p",{className:"desc"},t),c.a.createElement("button",{onClick:this.handleOnViewClick},"View "),c.a.createElement("br",null),c.a.createElement("small",{className:"sourceText"},a," | ",r)));return this.state.fullView&&(s=c.a.createElement("div",{className:"newsItem"},i,c.a.createElement("div",{className:"newsContainer"},c.a.createElement("a",{target:"_blank",href:o},c.a.createElement("h5",null,e)),c.a.createElement("p",{className:"desc"},t),c.a.createElement("p",null,n),c.a.createElement("small",{className:"sourceText"},a," | ",r)))),c.a.createElement(c.a.Fragment,null,s)}}]),t}(c.a.Component),f=(n(49),n(50),function(e){return c.a.createElement("div",{className:"category"},e.category)}),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=c.a.createElement("p",{style:{marginTop:"50vh",marginLeft:"50vh",marginRight:"50vh",marginBottom:"50vh",alignSelf:"center"}},"Loading...");return this.props.loaded&&(t=this.props.newsList.map((function(t){return c.a.createElement(g,{loaded:e.props.loaded,imageUrl:t.urlToImage,source:t.source.name,key:t.title,title:t.title,desc:t.description,content:t.content,publishedAt:t.publishedAt,url:t.url})}))),c.a.createElement("div",null,c.a.createElement("section",{className:"newsListContainer"},c.a.createElement(c.a.Fragment,null,t)))}}]),t}(c.a.Component),v=(n(51),n(4)),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleOnOptionsClick=function(e){n.props.onOptionsClick(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"SideBar"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("home")}},c.a.createElement(v.b,{to:{pathname:"/",state:"home"},exact:!0}," Home")),c.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("in")}},c.a.createElement(v.b,{to:{pathname:"/in"}},"India")),c.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("tech")}},c.a.createElement(v.b,{to:{pathname:"/technology"}},"Tech")),c.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("sports")}},c.a.createElement(v.b,{to:{pathname:"/sports"}},"Sports")),c.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("bbc")}},c.a.createElement(v.b,{to:{pathname:"/bbc"}},"BBC")))))}}]),t}(c.a.Component),b=(n(57),n(12)),O=n.n(b),y="https://newsapi.org/v2/top-headlines?",C="apiKey=eb6408d7171b409980b3d243ec54c9aa",k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={newsList:null,loaded:!1,category:"Headlines"},n.getInitialNews=function(){n.setState({category:"Headlines"});var e=y+"sources=google-news&"+C;O.a.get(e).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:"Headlines"})})).catch((function(e){console.log(e)}))},n.getIndiaTopHeadlines=function(){n.setState({category:"India"});var e=y+"country=in&"+C;O.a.get(e).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:"India"})})).catch((function(e){console.log(e)}))},n.getCategoricalNews=function(e){var t=y+"country=in&category="+e+"&"+C,a=null;"technology"===e?a="Technology":"sports"===e&&(a="Sports"),n.setState({category:a}),O.a.get(t).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:a})})).catch((function(e){console.log(e)}))},n.getNewsFromSource=function(e){n.setState({category:"BBC"});var t=y+"sources="+e+"&"+C;O.a.get(t).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:"BBC"})})).catch((function(e){console.log(e)}))},n.handleOnOptionClick=function(e){n.setState({loaded:!1}),"home"===e&&n.getInitialNews(),"in"===e&&n.getIndiaTopHeadlines(),"tech"===e&&n.getCategoricalNews("technology"),"sports"===e&&n.getCategoricalNews("sports"),"bbc"===e&&n.getNewsFromSource("bbc-news")},n.searchBarChanged=function(e){e.preventDefault()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getInitialNews()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement(E,{onOptionsClick:function(t){return e.handleOnOptionClick(t)}}),c.a.createElement(f,{category:this.state.category}),c.a.createElement(w,{newsList:this.state.newsList,category:this.state.category,loaded:this.state.loaded}))}}]),t}(c.a.Component),N=n(10);var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=c.a.createElement(v.a,null,c.a.createElement(j,null));r.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.81661676.chunk.js.map