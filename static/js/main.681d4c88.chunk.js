(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{20:function(e,t,n){e.exports=n(59)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(18),r=n.n(c),i=(n(25),n(26),n(2)),o=n(3),s=n(5),u=n(4),m=n(6),p=(n(27),n(63)),h=n(19),d=n.n(h),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={fullView:!1},n.handleOnViewClick=function(){n.setState({fullView:!0})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null,t=null,n=null,a=null,c=null,r=null,i=null;this.props.loaded&&(e=this.props.title,t=this.props.desc,n=this.props.content,a=this.props.source,c=this.props.imageUrl,r=this.props.publishedAt,i=this.props.url),n&&(n=(n=n.toString()).substring(0,n.length-13)),r=r.toString(),r=new Date(r),p.a.addLocale(d.a),r=new p.a("en-US").format(r);var o=l.a.createElement("img",{src:c,alt:e,className:this.state.fullView?"newsItemImageFullView":"newsItemImage"}),s=l.a.createElement("div",{className:"newsItem"},o,l.a.createElement("div",{className:"newsContainer"},l.a.createElement("a",{target:"_blank",href:i},l.a.createElement("h5",null,e)),l.a.createElement("p",{className:"desc"},t),l.a.createElement("button",{onClick:this.handleOnViewClick},"View "),l.a.createElement("br",null),l.a.createElement("small",{className:"sourceText"},a," | ",r)));return this.state.fullView&&(s=l.a.createElement("div",{className:"newsItem"},o,l.a.createElement("div",{className:"newsContainer"},l.a.createElement("a",{target:"_blank",href:i},l.a.createElement("h5",null,e)),l.a.createElement("p",{className:"desc"},t),l.a.createElement("p",null,n),l.a.createElement("small",{className:"sourceText"},a," | ",r)))),l.a.createElement(l.a.Fragment,null,s)}}]),t}(l.a.Component),f=(n(38),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement("p",{style:{marginTop:"50vh",marginLeft:"50vh",marginRight:"50vh",marginBottom:"50vh",alignSelf:"center"}},"Loading...");return this.props.loaded&&(t=this.props.newsList.map((function(t){return l.a.createElement(g,{loaded:e.props.loaded,imageUrl:t.urlToImage,source:t.source.name,key:t.title,title:t.title,desc:t.description,content:t.content,publishedAt:t.publishedAt,url:t.url})}))),l.a.createElement("div",null,l.a.createElement("section",{className:"newsListContainer"},l.a.createElement(l.a.Fragment,null,t)))}}]),t}(l.a.Component)),E=(n(39),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleOnOptionsClick=function(e){n.props.onOptionsClick(e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("home")}},l.a.createElement("p",null," Home")),l.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("in")}},l.a.createElement("p",null,"India")),l.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("tech")}},l.a.createElement("p",null,"Tech")),l.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("sports")}},l.a.createElement("p",null,"Sports")),l.a.createElement("li",{onClick:function(){return e.handleOnOptionsClick("bbc")}},l.a.createElement("p",{className:""},"BBC")));return l.a.createElement("div",{className:"SideBar"},l.a.createElement("nav",null,l.a.createElement("ul",null,t)))}}]),t}(l.a.Component)),w=(n(40),n(7)),v=n.n(w),O=(n(58),function(e){return l.a.createElement("div",{className:"category"},e.category)}),b="https://newsapi.org/v2/top-headlines?",y="apiKey=eb6408d7171b409980b3d243ec54c9aa",C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={newsList:null,loaded:!1,category:"Headlines"},n.getInitialNews=function(){n.setState({category:"Headlines"});var e=b+"sources=google-news&"+y;v.a.get(e).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:"Headlines"})})).catch((function(e){console.log(e)}))},n.getIndiaTopHeadlines=function(){n.setState({category:"India"});var e=b+"country=in&"+y;v.a.get(e).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:"India"})})).catch((function(e){console.log(e)}))},n.getCategoricalNews=function(e){var t=b+"country=in&category="+e+"&"+y,a=null;"technology"===e?a="Technology":"sports"===e&&(a="Sports"),n.setState({category:a}),v.a.get(t).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:a})})).catch((function(e){console.log(e)}))},n.getNewsFromSource=function(e){n.setState({category:"BBC"});var t=b+"sources="+e+"&"+y;v.a.get(t).then((function(e){var t=e.data.articles;n.setState({newsList:t,loaded:!0,category:"BBC"})})).catch((function(e){console.log(e)}))},n.handleOnOptionClick=function(e){n.setState({loaded:!1}),"home"===e&&n.getInitialNews(),"in"===e&&n.getIndiaTopHeadlines(),"tech"===e&&n.getCategoricalNews("technology"),"sports"===e&&n.getCategoricalNews("sports"),"bbc"===e&&n.getNewsFromSource("bbc-news")},n.searchBarChanged=function(e){e.preventDefault()},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getInitialNews()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(E,{onOptionsClick:function(t){return e.handleOnOptionClick(t)}}),l.a.createElement(O,{category:this.state.category}),l.a.createElement(f,{newsList:this.state.newsList,category:this.state.category,loaded:this.state.loaded}))}}]),t}(l.a.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))},N=l.a.createElement(k,null);r.a.render(N,document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.681d4c88.chunk.js.map