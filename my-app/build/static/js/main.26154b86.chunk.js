(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/pinpoint.5a8cc097.svg"},21:function(e,t,a){e.exports=a.p+"static/media/wereldMuseum.77c1a552.png"},24:function(e,t,a){e.exports=a.p+"static/media/search-icon.e57e1c79.svg"},25:function(e,t,a){e.exports=a.p+"static/media/heart.6a618a65.svg"},26:function(e,t,a){e.exports=a.p+"static/media/whiteHeart.5e5f535d.svg"},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=a(3),s=a(4),o=a(6),p=a(5),u=a(7),m=a(11),d=a(10),h=a(20),g=a.n(h),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.object.cho.value;return r.a.createElement("div",null,r.a.createElement("span",null,this.props.object.year.value),r.a.createElement("img",{src:g.a,alt:"pinpoint",onClick:this.props.renderData.bind(this,e)}))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.objects.map((function(t){return r.a.createElement(f,{key:t.cho.value,object:t,renderData:e.props.changeData})}))}}]),t}(r.a.Component),b=(a(32),a(21)),E=a.n(b);function y(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement(m.b,{to:"/",className:"logo"},r.a.createElement("img",{src:E.a,alt:"logo"})),r.a.createElement(m.b,{to:"/"},"Home"),"  ",r.a.createElement(m.b,{to:"/overview"},"Detail")))}var k=a(24),j=a.n(k),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.toggleFilter.bind(this,this.props.filter)})," ",this.props.string(this.props.filter))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={place:"",filters:['"foto"','"Kaart"','"Boek"','"Geweer"','"Lichtbeeld"','"Munt"','"Godenbeeld"','"Geld"','"Document"']},a.change=function(e){return a.setState({place:e.target.value})},a.submit=function(e){e.preventDefault(),localStorage.setItem("place",a.state.place),a.props.place(a.state.place),a.props.history.push("/overview")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("place");this.setState({place:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.submit.bind(this)},r.a.createElement("input",{type:"text",name:"place",placeholder:"Wat is jouw favoriete bestemming?",value:this.state.place,onChange:this.change}),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:j.a,alt:"button"})),r.a.createElement("div",{className:"filters"},this.state.filters.map((function(t){return r.a.createElement(O,{key:t,filter:t,toggleFilter:e.props.toggleFilter,string:e.props.string})})))))}}]),t}(n.Component),S=Object(d.e)(w),N=a(25),R=a.n(N),I=a(26),C=a.n(I),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={comment:""},a.change=function(e){return a.setState({comment:e.target.value})},a.comment=function(e,t){e.preventDefault(),a.props.comment(a.state.comment)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.render.uri,t=this.props.render.title,a=this.props.render.img,n="like";return n=this.props.render.liked?"like liked":"like",r.a.createElement("div",{className:"render"},r.a.createElement("h1",null,this.props.place),t?r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a,alt:t})),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,this.props.render.year),r.a.createElement("p",null,this.props.render.description)),r.a.createElement("div",{className:n,onClick:this.props.toggleLiked.bind(this,e)},r.a.createElement("img",{className:"red",src:R.a,alt:"heart"}),r.a.createElement("img",{className:"white",src:C.a,alt:"heart"})),r.a.createElement("form",{onSubmit:this.comment.bind(this)},r.a.createElement("input",{type:"textarea",name:"comment",placeholder:"Wat vindt u van dit object?",onChange:this.change}),r.a.createElement("button",{type:"submit"},"Plaats comment")),this.props.renderComments.map((function(e){return r.a.createElement("p",{className:"comment"},e)}))):r.a.createElement("p",null,"Zoek een plaats en klik op een bullet om een object weer te geven."))}}]),t}(n.Component),F=a(38),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],place:"",filter:"",queryfilter:"",liked:[],comment:[],render:{uri:"",year:"",img:"",title:"",description:"",liked:!1}},a.getRender=function(e){!function(e,t){F(e+"?query="+encodeURIComponent(t)+"&format=json").then((function(e){return e.json()})).then((function(e){var t=e.results.bindings[0];if(t.desc.value.includes("<BR>")||t.desc.value.includes("<Br>")||t.desc.value.includes("<br>")||t.desc.value.includes("<bR>")){var n=t.desc.value;n=(n=(n=(n=n.replace("<BR>"," ")).replace("<bR>"," ")).replace("<Br>"," ")).replace("<br>"," "),t.desc.value=n}var r=!1;a.state.liked.includes(t.cho.value)&&(r=!0),a.setState({render:{uri:t.cho.value,year:t.year.value,img:t.pic.value,title:t.title.value,description:t.desc.value,liked:r}})}))}("https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-02/sparql","\n    PREFIX dc: <http://purl.org/dc/elements/1.1/>\n    PREFIX dct: <http://purl.org/dc/terms/>\n    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n    PREFIX edm: <http://www.europeana.eu/schemas/edm/>\n\n    SELECT ?cho ?title ?placeName ?type ?year ?pic ?desc ?description WHERE {\n      ?place skos:prefLabel ?placeName .\n    VALUES ?cho { <".concat(e,'> }\n      ?cho dct:spatial ?place ;\n        dc:type ?type ;\n        dct:created ?year ;\n        dc:description ?desc;\n        edm:isShownBy ?pic ;\n        dc:title ?title .\n      FILTER (xsd:integer(?year))\n      FILTER langMatches(lang(?title), "ned")\n    } LIMIT 1\n    '))},a.getData=function(e){console.log("Getting data...");!function(e,t){F(e+"?query="+encodeURIComponent(t)+"&format=json").then((function(e){return e.json()})).then((function(e){for(var t=e.results.bindings,n=[],r=0;r<t.length;r++)e.results.bindings[r].year.value=parseInt(e.results.bindings[r].year.value),n.includes(e.results.bindings[r].cho.value)?delete e.results.bindings[r]:n.push(e.results.bindings[r].cho.value);a.setState({data:e.results.bindings})}))}("https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-02/sparql",'\n    PREFIX dct: <http://purl.org/dc/terms/>\n    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n    PREFIX dc: <http://purl.org/dc/elements/1.1/>\n\n    SELECT ?cho ?placeName ?year ?desc WHERE {\n      ?place skos:prefLabel ?placeName .\n    VALUES ?placeName { "'.concat(e,'"}\n        ?cho dct:spatial ?place ;\n        dc:description ?desc;\n        dct:created ?year .\n      FILTER (xsd:integer(?year))\n      ').concat(a.state.queryfilter,"\n    }\n    ORDER BY ASC(?year)\n    LIMIT 500\n    "))},a.toggleLiked=function(e){var t=a.state.render;if(a.state.liked.includes(e)){var n=a.state.liked.indexOf(e);a.state.liked.splice(n,1)}else a.state.liked.push(e);t.liked=!t.liked,a.setState({render:t},console.log(a.state.render),console.log(a.state.liked))},a.searchPlace=function(e){a.setState({place:e}),a.getData(e)},a.changeData=function(e){a.setState({render:{uri:e}}),a.getRender(e)},a.redirect=function(){a.props.history.push("/overview")},a.toggleFilter=function(e){var t=document.querySelectorAll('input[type="checkbox"]'),n=!1;if(t.forEach((function(e){e.checked&&(n=!0)})),a.state.filter.includes(e)){var r=a.state.filter;r=r.replace(e,""),a.setState({filter:r},(function(){console.log(a.state.filter)}))}else if(n){var c=a.state.filter;c=c+=e,a.setState({filter:c,queryfilter:"VALUES ?type { "+c+" }"},(function(){console.log(a.state.queryfilter)}))}else a.setState({filter:"",queryfilter:""})},a.string=function(e){var t=e;return t=(t=t.replace('"',"")).replace('"',"")},a.comment=function(e){var t=a.state.comment;t.push(e),a.setState({comment:t},console.log(a.state.comment))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement("div",{className:"home"},r.a.createElement(S,{place:e.searchPlace,history:e.redirect,toggleFilter:e.toggleFilter,string:e.string}))}}),r.a.createElement(d.a,{path:"/overview",render:function(t){return r.a.createElement("div",{className:"overview"},r.a.createElement(L,{render:e.state.render,toggleLiked:e.toggleLiked,place:e.state.place,comment:e.comment,renderComments:e.state.comment}),r.a.createElement("div",{className:"timeline"},r.a.createElement(v,{objects:e.state.data,changeData:e.changeData})))}})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.26154b86.chunk.js.map