(this["webpackJsonpsearch-splash"]=this["webpackJsonpsearch-splash"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),s=a.n(i),o=(a(66),a(1)),p=a(2),c=a(4),l=a(3),m=a(25),k=a.n(m),x=a(57),u=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e={loop:!0,autoplay:!0,animationData:x,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return r.a.createElement("div",{className:"sadsearch"},r.a.createElement("h2",null,"Sorry, there are no images with this search \ud83d\ude1e"),r.a.createElement(k.a,{options:e,height:200,width:200}))}}]),a}(r.a.Component);function h(e){return e.foundImages.length<1?r.a.createElement("div",null,r.a.createElement(u,null)):r.a.createElement("div",{className:"masonry"},e.foundImages.map((function(e){return r.a.createElement("div",{key:e.id,className:"masonry-item"},r.a.createElement("img",{src:e.urls.small,alt:""}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,e.likes," ",r.a.createElement("i",{className:"fas fa-heart fa-sm"})),r.a.createElement("a",{href:e.links.html,rel:"noopener noreferrer",target:"_blank"},"Visit page ",r.a.createElement("i",{className:"fas fa-external-link-alt"})))))})))}var d=a(16),y=["mediapark","career","employ","cats"],f=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={current:y[0]},e.changeText=function(){setTimeout((function(){var t=y.indexOf(e.state.current),a=y.length>t+1?t+1:0;e.setState({current:y[a]},(function(){e.changeText()}))}),5e3)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.changeText()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Browse for: #",r.a.createElement("span",{className:"typewriter"},this.state.current)))}}]),a}(r.a.Component),_=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.handleChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.reset(),e.props.search(e.state.searchText)},e.handleSaveQuery=function(t){e.props.addQuery(e.state.searchText)},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-container"},r.a.createElement(f,null),r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"search-bar"},r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"Search for photos...",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Search for photos..."},minLength:"3",required:!0}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search fa-lg"}))),r.a.createElement("button",{onClick:this.handleSaveQuery,className:"search-save"},"Save Search")))}}]),a}(r.a.Component),E=Object(d.b)(null,(function(e){return{addQuery:function(t){e(function(e){return{type:"ADD_QUERY",title:e}}(t))}}}))(_),g=a(59),b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e={loop:!0,autoplay:!0,animationData:g,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return r.a.createElement("div",null,r.a.createElement(k.a,{options:e,height:200,width:200}))}}]),a}(r.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleClickQueries=function(t){var a=t;e.props.reset(),e.props.searchQueries(a)},e.handleClick=function(t){e.props.deleteQuery(t)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.queries;return r.a.createElement("div",{className:"queries"},t.map((function(t){return r.a.createElement("div",{key:t.title,className:"query"},r.a.createElement("button",{onClick:function(){e.handleClickQueries(t.title)}},"#",t.title),r.a.createElement("button",{onClick:function(){return e.handleClick(t.title)},className:"delete"},r.a.createElement("i",{className:"fas fa-times"})))})))}}]),a}(r.a.Component),D=Object(d.b)((function(e){return{queries:e.queries}}),(function(e){return{deleteQuery:function(t){e(function(e){return{type:"DELETE_QUERY",payload:e}}(t))}}}))(v),S=a(60),A=(a(121),"".concat("B2Q6-ZNbLQEYPBbZHU4GuJS1L9PXV3QMIUjDs2oWo4Q")),B=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSearchSubmit=function(e){n.setState({searchText:e}),fetch("https://api.unsplash.com/search/photos?page="+n.state.page+"&per_page=50&query="+e+"&client_id="+A).then((function(e){return e.json()})).then((function(t){n.setState({images:n.state.images.concat(t.results),loading:!1,totalPages:t.total_pages,searchText:e})}),(function(e){n.setState({loading:!1,error:e}),console.log(e)}))},n.increasePageNumber=function(){n.state.page>=n.state.totalPages||n.setState({page:n.state.page+1})},n.reset=function(){n.setState({page:1,totalPages:1,images:[],loading:!0})},n.state={error:null,loading:!0,images:[],page:1,totalPages:1,searchText:"lithuania"},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.onSearchSubmit(this.state.searchText)}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("div",null,"Errors: ",this.error.message):this.state.loading?r.a.createElement("div",null,r.a.createElement(b,null)):r.a.createElement("div",{className:"container-grad"},r.a.createElement(S.a,{dataLength:this.state.images.length,next:function(){e.increasePageNumber(),e.onSearchSubmit(e.state.searchText)},hasMore:this.state.page<this.state.totalPages,loader:r.a.createElement(b,null)},r.a.createElement(E,{search:this.onSearchSubmit,reset:this.reset}),r.a.createElement("div",{className:"container-white"},r.a.createElement(D,{searchQueries:this.onSearchSubmit,reset:this.reset}),r.a.createElement(h,{foundImages:this.state.images}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(26),G=a(42),j={queries:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUERY":return e.queries.filter((function(e){return e.title===t.title})).length>0||!t.title?e:Object(G.a)(Object(G.a)({},e),{},{queries:e.queries.concat({title:t.title})});case"DELETE_QUERY":return{queries:e.queries.filter((function(e){return e.title!==t.payload}))};default:return e}},T=Object(V.b)(O);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:T},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e){e.exports=JSON.parse('{"v":"5.4.4","fr":24,"ip":0,"op":50,"w":128,"h":128,"nm":"patito","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":4,"nm":"Capa de formas 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[199.5,197,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[98.31,98.31,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[355.203,355.203],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Trazado el\xedptico 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.980392156863,0.980392156863,0.980392156863,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.113,4.012],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"agua contornos 4","tt":1,"sr":1,"ks":{"o":{"a":0,"k":10,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[352,310,0],"e":[202,310,0],"to":[-25,0,0],"ti":[25,0,0]},{"t":50}],"ix":2},"a":{"a":0,"k":[202,365,0],"ix":1},"s":{"a":0,"k":[164.141,308.135,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.68,0.344],[4.369,0],[3.569,-0.729],[4.75,0],[3.585,0.734],[4.369,0],[3.569,-0.729],[4.749,0],[3.585,0.734],[4.368,0],[3.569,-0.729],[1.892,-0.277],[0,0],[2.087,0],[0.062,0.001],[0.062,0],[2.162,0.303],[0,0],[1.731,0.355],[4.368,0],[3.569,-0.729],[4.75,0],[3.585,0.734],[4.368,0],[3.57,-0.729],[4.75,0],[3.584,0.734],[4.368,0],[3.568,-0.729],[4.388,-0.077],[0.13,-0.001],[0.126,0],[0,0],[0,0],[0.125,0.002],[0.13,0.001],[3.39,0.693],[4.369,0],[3.57,-0.729],[4.75,0],[3.584,0.734],[4.368,0],[3.569,-0.729],[4.75,0],[3.584,0.734],[4.368,0],[3.175,-0.641],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[-1.828,-0.274],[-3.569,-0.729],[-4.369,0],[-3.584,0.734],[-4.749,0],[-3.569,-0.729],[-4.369,0],[-3.584,0.734],[-4.75,0],[-3.57,-0.729],[-4.369,0],[-1.732,0.355],[0,0],[-2.162,0.303],[-0.064,0],[-0.062,0.001],[-2.088,0],[0,0],[-1.892,-0.277],[-3.57,-0.729],[-4.369,0],[-3.584,0.734],[-4.75,0],[-3.568,-0.729],[-4.369,0],[-3.584,0.734],[-4.75,0],[-3.57,-0.729],[-4.37,0],[-3.391,0.693],[-0.13,0.001],[-0.124,0.002],[0,0],[0,0],[-0.126,0],[-0.129,-0.001],[-4.388,-0.077],[-3.569,-0.729],[-4.369,0],[-3.584,0.734],[-4.75,0],[-3.57,-0.729],[-4.369,0],[-3.585,0.734],[-4.749,0],[-3.57,-0.729],[-3.917,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[200,-32.388],[194.782,-33.352],[183.473,-34.771],[172.164,-33.352],[160.123,-31.861],[148.083,-33.352],[136.774,-34.771],[125.465,-33.352],[113.425,-31.861],[101.384,-33.352],[90.075,-34.771],[78.766,-33.352],[73.38,-32.361],[73.411,-32.311],[67.097,-31.861],[66.911,-31.863],[66.726,-31.861],[60.41,-32.311],[60.441,-32.361],[55.056,-33.352],[43.747,-34.771],[32.438,-33.352],[20.397,-31.861],[8.356,-33.352],[-2.952,-34.771],[-14.262,-33.352],[-26.302,-31.861],[-38.342,-33.352],[-49.651,-34.771],[-60.96,-33.352],[-72.24,-31.867],[-72.629,-31.865],[-73.001,-31.861],[-73.023,-31.861],[-73.044,-31.861],[-73.417,-31.865],[-73.806,-31.867],[-85.085,-33.352],[-96.394,-34.771],[-107.704,-33.352],[-119.744,-31.861],[-131.784,-33.352],[-143.093,-34.771],[-154.402,-33.352],[-166.443,-31.861],[-178.483,-33.352],[-189.792,-34.771],[-200,-33.575],[-200,-3.565],[-200,34.771],[200,34.771],[200,-3.565],[199.49,-3.565]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[200,365.229],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"pato contornos","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0],"e":[2.811]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[2.811],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0],"e":[2.811]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[2.811],"e":[0]},{"t":47}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":0,"s":[189.761,216.418,0],"e":[189.761,232.418,0],"to":[0,2.667,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":25,"s":[189.761,232.418,0],"e":[189.761,216.418,0],"to":[0,0,0],"ti":[0,2.667,0]},{"t":47}],"ix":2},"a":{"a":0,"k":[66.423,68.184,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.729,-0.092],[0.507,-0.104],[0.038,-0.007],[0.022,-0.006],[0.609,-0.199],[0.009,-0.003],[0.031,-0.011],[-0.208,-0.727],[-0.689,0.232],[-0.045,0.012],[0,0],[-0.74,0.142],[-0.215,0.034],[-0.142,0.014],[-0.025,0.002],[-0.003,0],[-1.139,-0.103],[-0.004,0],[-0.015,-0.001],[-0.149,-0.018],[-0.098,-0.015],[-0.001,0],[-0.075,-0.013],[-0.028,-0.006],[0,0],[-0.055,-0.011],[-0.007,-0.002],[-0.228,-0.054],[-0.015,-0.003],[-0.076,-0.019],[-0.191,0.708],[-0.001,0.109],[0.594,0.151],[0.066,0.016],[0.025,0.006],[0.354,0.063],[0.015,0.003],[0.018,0.003],[0.576,0.048],[0.266,0.014],[0.304,-0.001]],"o":[[-0.514,0.062],[-0.038,0.008],[-0.022,0.004],[-0.625,0.135],[-0.009,0.003],[-0.032,0.011],[-0.686,0.228],[0.186,0.669],[0.046,-0.013],[0,0],[0.718,-0.232],[0.215,-0.039],[0.142,-0.017],[0.025,-0.003],[0.003,-0.001],[1.138,-0.108],[0.005,0],[0.015,0.001],[0.149,0.014],[0.099,0.014],[0,0.001],[0.076,0.013],[0.029,0.005],[0,0],[0.055,0.011],[0.007,0.002],[0.228,0.045],[0.014,0.003],[0.076,0.017],[0.704,0.179],[0.03,-0.109],[0.004,-0.591],[-0.063,-0.018],[-0.023,-0.007],[-0.349,-0.083],[-0.015,-0.002],[-0.018,-0.003],[-0.57,-0.099],[-0.265,-0.024],[-0.302,-0.016],[-0.734,0.003]],"v":[[-1.611,-1.737],[-3.145,-1.487],[-3.258,-1.465],[-3.323,-1.45],[-5.176,-0.949],[-5.202,-0.94],[-5.297,-0.909],[-6.215,0.735],[-4.577,1.654],[-4.443,1.612],[-4.404,1.597],[-2.214,1.035],[-1.568,0.926],[-1.143,0.878],[-1.066,0.87],[-1.058,0.869],[2.362,0.861],[2.375,0.862],[2.42,0.866],[2.868,0.914],[3.162,0.959],[3.164,0.96],[3.39,0.999],[3.477,1.015],[3.603,1.038],[3.767,1.07],[3.788,1.075],[4.471,1.224],[4.514,1.234],[4.741,1.289],[6.375,0.353],[6.42,0.025],[5.435,-1.281],[5.24,-1.331],[5.168,-1.35],[4.113,-1.569],[4.068,-1.577],[4.013,-1.587],[2.292,-1.808],[1.496,-1.864],[0.585,-1.885]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.501999978458,0.501999978458,0.501999978458,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[49.556,106.493],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[7.354,-3.732],[0,0],[0,0],[-2.287,-5.751],[1.007,-0.225],[0,0]],"o":[[-18.642,9.464],[0,-24.262],[16.49,0],[0.383,0.96],[0,0],[-8.055,1.788]],"v":[[-2.537,13.118],[-23.425,1.68],[-4.015,-20.503],[23.042,2.631],[21.839,4.872],[20.793,5.104]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.375999989229,0.238999998803,0.823999980852,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[79.445,40.129],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.037,0],[0,0],[0,0],[0,0.937],[-3.655,5.507],[0,0],[0,0],[2.157,-1.395],[2.017,-4.132]],"o":[[0,0],[0,0],[-0.083,-0.915],[0,-6.519],[0,0],[0,0],[-2.568,0],[-7.121,4.597],[-0.46,0.932]],"v":[[-17.446,11.092],[5.307,11.092],[11.782,11.092],[11.643,8.32],[19.174,-11.083],[19.174,-11.092],[2.895,-11.092],[-4.403,-9.092],[-18.714,9.082]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.375999989229,0.238999998803,0.823999980852,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[19.424,97.298],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.871,-19.588],[-6.103,-3.607],[0.477,-0.569],[0,-10.39],[-16.845,0],[0,16.845],[2.398,2.307],[-0.005,0.33],[-14.39,-5.016],[-2.9,-2.9],[0,0],[-1.096,1.48],[1.711,16.59],[31.161,9.225],[3.493,0],[0,0],[6.604,-4.362],[0.233,-0.155]],"o":[[2.77,5.498],[0.641,0.378],[-3.094,3.693],[0,16.845],[16.845,0],[0,-16.637],[-0.238,-0.227],[0.034,-2.815],[3.877,1.35],[0,0],[1.301,1.301],[3.699,-4.999],[0,0],[-3.353,-0.992],[0,0],[-7.914,0],[-0.231,0.153],[-18.2,12.242]],"v":[[-46.027,-5.199],[-33.032,8.994],[-32.691,10.772],[-45.637,37.433],[-15.135,67.934],[15.365,37.433],[-0.919,10.037],[-1.275,9.192],[14.064,-1.858],[24.286,4.761],[40.766,21.239],[45.298,20.893],[54.188,-12.478],[22.012,-66.587],[11.658,-67.934],[-7.357,-67.934],[-29.615,-61.274],[-30.309,-60.814]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8,0.8,0.8,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.698,68.184],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Capa de formas 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[199.5,197,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[98.31,98.31,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[355.203,355.203],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Trazado el\xedptico 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.980392156863,0.980392156863,0.980392156863,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.113,4.012],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"patito 2","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64,64,0],"ix":2},"a":{"a":0,"k":[200,200,0],"ix":1},"s":{"a":0,"k":[36.25,36.25,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0],"e":[2.083]},{"t":50}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"},"w":400,"h":400,"ip":0,"op":50,"st":0,"bm":0}],"markers":[]}')},59:function(e){e.exports=JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 5","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":8,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":24,"s":[30],"e":[100]},{"t":40}]},"r":{"k":0},"p":{"k":[187.875,77.125,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":8,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":24,"s":[200,200,100],"e":[100,100,100]},{"t":40}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.87,0.42,0.56,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 4","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":6,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":22,"s":[30],"e":[100]},{"t":36}]},"r":{"k":0},"p":{"k":[162.125,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":6,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":22,"s":[200,200,100],"e":[100,100,100]},{"t":36}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.81,0.55,0.82,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 3","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":4,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":20,"s":[30],"e":[100]},{"t":32}]},"r":{"k":0},"p":{"k":[135.625,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":4,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":20,"s":[200,200,100],"e":[100,100,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.47,0.31,0.62,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 2","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":2,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":16,"s":[30],"e":[100]},{"t":28}]},"r":{"k":0},"p":{"k":[109.375,76.625,0]},"a":{"k":[-76.625,-3.125,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":2,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":16,"s":[200,200,100],"e":[100,100,100]},{"t":28}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.54,0.81,0.89,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 1","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":0,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":12,"s":[30],"e":[100]},{"t":24}]},"r":{"k":0},"p":{"k":[82.625,76.625,0]},"a":{"k":[-76.625,-3.375,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":0,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":12,"s":[200,200,100],"e":[100,100,100]},{"t":24}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.34,0.45,0.78,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1}],"v":"4.5.4","ddd":0,"ip":0,"op":40,"fr":24,"w":280,"h":160}')},61:function(e,t,a){e.exports=a(122)},66:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.f499ff61.chunk.js.map