(this["webpackJsonpweather-news"]=this["webpackJsonpweather-news"]||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),s=n.n(r),i=(n(21),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),p=(n(22),n(23),n(24),[{id:1,title:"test"}]),d=function e(){Object(i.a)(this,e),this.getNewsList=function(){return fetch("https://easywaldo-test-api.azurewebsites.net/weatherForecast/GetWeatherNews",{mode:"cors",method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){return console.log(e),p=e})),p},this.testSample=function(){return"helloworld"}},m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.news,n=e.count;return null!==this.props&&void 0!==this.props?o.a.createElement("div",{key:n},o.a.createElement("span",null,o.a.createElement("a",{href:t.linkUrl},o.a.createElement("img",{src:t.thumbnail})),o.a.createElement("span",null,t.title))):void 0}}]),t}(o.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(void 0!==this.props&&null!==this.props){var e=this.props.weatherList.map((function(e,t){return o.a.createElement(m,{key:t,news:e})}));return o.a.createElement("div",null,e)}}}]),t}(o.a.Component),f=new d,v=f.getNewsList();console.log(v);var b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoaded:!1,items:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://easywaldo-test-api.azurewebsites.net/weatherForecast/GetWeatherNews",{mode:"cors",method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){return console.log(t),f=t,e.setState({isLoaded:!0,items:f}),f}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items;return 1==t?o.a.createElement(w,{weatherList:n}):o.a.createElement("div",{className:"App"},"loading...")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},16:function(e,t,n){e.exports=n(154)},21:function(e,t,n){},22:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.b41a0b55.chunk.js.map