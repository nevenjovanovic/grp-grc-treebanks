(window["webpackJsonpgrp-grc-treebanks"]=window["webpackJsonpgrp-grc-treebanks"]||[]).push([[0],{139:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),c=a.n(o),l=(a(54),a(55),a(56),a(13)),i=a(43),s=a(14),u=a(18),m=a(1),p=Object(m.shape)({start:m.number,end:m.number,numbers:Object(m.arrayOf)(Object(m.oneOfType)([m.string]))}),h=Object(m.shape)({locus:m.string.isRequired,path:m.string.isRequired,xml:m.string.isRequired,link:m.string,notes:m.string,chunks:p.isRequired}),d=Object(m.shape)({path:m.string.isRequired,author:m.string.isRequired,work:m.string.isRequired,editors:Object(m.oneOfType)([m.string,Object(m.arrayOf)(m.string)]).isRequired,sections:Object(m.arrayOf)(h).isRequired}),g=Object(m.shape)({title:Object(m.oneOfType)([m.string,m.element]).isRequired,publications:Object(m.arrayOf)(d),text:m.string}),b=(Object(m.shape)({logo:m.string,link:m.string,title:Object(m.oneOfType)([m.string,m.element]).isRequired,subtitle:m.string.isRequired,copyright:m.string,report:m.string,github:m.string,twitter:m.string,collections:Object(m.arrayOf)(g).isRequired}),Object(m.shape)({params:Object(m.shape)({chunk:m.string.isRequired}).isRequired}),Object(m.shape)({params:Object(m.shape)({publication:m.string.isRequired}).isRequired}),function(e){var t=e.logo,a=e.link,n=e.children;return void 0!==a?r.a.createElement(u.PerseidsHeader,{logo:t,props:{href:a}},n):r.a.createElement(u.PerseidsHeader,{logo:t},n)});b.defaultProps={logo:void 0,link:void 0};var k=b,E=a(44),f=a.n(E),v=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(f.a.jumbotronSmall)},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},t),a&&function(e){return r.a.createElement("p",null,r.a.createElement("span",null,e))}(a)))},w=a(30),x=a.n(w),O=function(e){return Object(w.uriTransformer)("/"===e[0]?"".concat("/grp-grc-treebanks").concat(e):e)},j=function(e){return r.a.createElement(x.a,Object.assign({},e,{transformLinkUri:O}))},N=function(e){var t=e.path,a=e.author,o=e.work,c=e.editors,l=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},o),r.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},r.a.createElement("strong",null,a),","," ",r.a.createElement("em",null,o)),r.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},function(e){return Array.isArray(e)?r.a.createElement("ul",{className:"pl-1"},e.map((function(e){return r.a.createElement("li",{key:e},e)}))):e}(c)),r.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},l.map((function(e){return function(e){var t=e.locus,a=e.path,o=function(e){var t=e.start,a=e.numbers;return t||a[0]}(e.chunks);return r.a.createElement(n.Fragment,{key:a},r.a.createElement("a",{href:"".concat(a,"/").concat(o)},t),r.a.createElement("br",null))}(e)}))))},y=function(e){var t=e.title,a=e.publications,n=e.text;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("h2",null,t),n&&r.a.createElement(j,{source:n}),r.a.createElement("table",{className:"table"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),r.a.createElement("tbody",null,a.map((function(e){return N(e)}))))))))};y.defaultProps={publications:void 0,text:void 0};var _=y,R=function(e){var t=e.config,a=t.logo,n=t.link,o=t.title,c=t.subtitle,l=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{logo:a,link:n},o),r.a.createElement(v,{title:o,subtitle:c}),l.map((function(e){return function(e){var t=e.title,a=e.text,n=e.publications;return r.a.createElement(_,{key:t,title:t,text:a,publications:n})}(e)})))},q=a(5),P=a(6),L=a(10),C=a(9),T=a(11),F=a(19),S=a.n(F),G={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"https://services.perseids.org/arethusa-configs",retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/grp-grc-treebanks","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"http://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"http://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"http://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"http://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"http://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"http://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{noRetrieval:"online",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html"},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{"\u03b1":"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]","\u03b5":"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]","\u03b7":"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]","\u03b9":"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]","\u03bf":"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]","\u03c5":"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]","\u03c9":"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},M=(a(139),function(){function e(){Object(q.a)(this,e),this.elementId="treebank_container",this.remoteUrl="".concat("/grp-grc-treebanks","/arethusa/"),this.appConf=G,this.render=this.render.bind(this)}return Object(P.a)(e,[{key:"render",value:function(e,t){var a=window,n=a.arethusaGoto,r=a.Arethusa,o=a.$;this.widget?this.doc===e&&this.chunk!==t&&(n(t),function(e){e("#toast-container").remove()}(o)):(this.widget=new r,this.widget.on(this.elementId).from(this.remoteUrl).with(this.appConf).start({doc:e,chunk:t})),this.doc=e,this.chunk=t}}]),e}()),A=a(45),H=a.n(A),V=a(48),I=a(22),W=a(15),B=a.n(W),z=function(e,t){return e<t?e:t},J=function(e,t){return e>t?e:t},U=function(e){function t(e){var a;return Object(q.a)(this,t),(a=Object(L.a)(this,Object(C.a)(t).call(this,e))).state={isOpen:!1},a.toggleOpen=a.toggleOpen.bind(Object(I.a)(a)),a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"getLines",value:function(){var e=this.props.chunks,t=e.start,a=e.end,n=e.numbers;if(n)return n;for(var r=[],o=t;o<=a;o+=1)r.push(o);return r}},{key:"getFbcnl",value:function(){var e=this.props,t=e.chunks,a=t.start,n=t.end,r=t.numbers,o=e.match.params.chunk,c=Number(o);return r?function(e,t){var a=t.indexOf(e);return[t[0],t[J(0,a-1)],e,t[z(t.length-1,a+1)],t[t.length-1]]}(o,r):[a,J(a,c-1),o,z(n,c+1),n]}},{key:"toggleOpen",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this,t=this.state.isOpen,a=this.getFbcnl(),n=Object(V.a)(a,5),o=n[0],c=n[1],i=n[2],s=n[3],u=n[4],m=this.getLines();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link text-light ".concat(B.a.link),to:"./".concat(o)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link text-light ".concat(B.a.link),to:"./".concat(c)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(B.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":t,onClick:this.toggleOpen},i),r.a.createElement("div",{className:"dropdown-menu ".concat(B.a.dropdownScroll," ").concat(t?"show":"")},m.map((function(t){return r.a.createElement(l.b,{className:"dropdown-item",key:t,to:"./".concat(t),onClick:e.toggleOpen},t)})))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link text-light ".concat(B.a.link),to:"./".concat(s)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement(l.b,{className:"nav-link text-light ".concat(B.a.link),to:"./".concat(u)},"Last \xbb")))))}}]),t}(n.Component),D=function(e){function t(){return Object(q.a)(this,t),Object(L.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a)}},{key:"render",value:function(){var e=this.props,t=e.chunks,a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{match:a,chunks:t}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:H.a.treebankContainer})))}}]),t}(n.Component),K=function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:S.a.publicationRow},function(e){return Array.isArray(e)?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("span",{key:e},e,r.a.createElement("br",null))}))):e}(t)))},Q=function(e){function t(e){var a;return Object(q.a)(this,t),(a=Object(L.a)(this,Object(C.a)(t).call(this,e))).arethusa=new M,a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e,t,a=this.props,n=a.logo,o=a.link,c=a.publicationPath,l=a.author,i=a.work,s=a.editors,u=a.locus,m=a.publicationLink,p=a.notes,h=a.xml,d=a.chunks,g=a.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{logo:n,link:o},r.a.createElement("span",null,r.a.createElement("i",null,i)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/grp-grc-treebanks","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,l,",",r.a.createElement("i",null," ",i," "),u)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,l&&K("Author",l),i&&K("Work",i),u&&function(e,t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:S.a.publicationRow},t," ",r.a.createElement("a",{href:"../".concat(a)},"(See all)")))}("Locus",u,c),s&&K("Editors",s),m&&function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t)))}("Link",m),p&&(e="Notes",t=p,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:S.a.publicationRow},r.a.createElement(j,{source:t})))))),r.a.createElement("div",{className:S.a.treebankWrapper},r.a.createElement(D,{xml:h,chunks:d,match:g,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/grp-grc-treebanks","/xml/").concat(h),target:"_blank",rel:"noopener noreferrer"},"View XML"))))}}]),t}(n.Component);Q.defaultProps={logo:void 0,link:void 0,publicationLink:void 0,notes:void 0};var $=Q,X=function(e){var t=e.config,a=t.logo,n=t.link;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{logo:a,link:n},r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/grp-grc-treebanks","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/grp-grc-treebanks","/")},"Return to homepage"))))))},Y=function(e){function t(e){var a;Object(q.a)(this,t),a=Object(L.a)(this,Object(C.a)(t).call(this,e));var n=e.config,r={},o=n.logo,c=n.link;return n.collections.forEach((function(e){(e.publications||[]).forEach((function(e){var t=e.author,a=e.work,n=e.editors,l=e.path;e.sections.forEach((function(e){var i=e.path,s=e.locus,u=e.link,m=e.notes,p=e.xml,h=e.chunks;r[i]={logo:o,link:c,publicationPath:l,author:t,work:a,editors:n,locus:s,publicationLink:u,notes:m,xml:p,chunks:h}}))}))})),a.argsLookup=r,a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.config,a=e.match,n=a.params.publication,o=this.argsLookup[n];return void 0===o?r.a.createElement(X,{config:t}):r.a.createElement($,Object.assign({},o,{match:a}))}}]),t}(n.Component),Z=function(e){var t=e.config,a=t.logo,n=t.link,o=t.title,c=t.subtitle,l=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{logo:a,link:n},o,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/grp-grc-treebanks","/")},"Home")))),r.a.createElement(v,{title:o,subtitle:c}),l.map((function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(_,{key:t,title:t,publications:a})}(e)})))},ee=function(e){function t(e){var a;Object(q.a)(this,t),a=Object(L.a)(this,Object(C.a)(t).call(this,e));var n=e.config,o={},c=n.logo,l=n.link,i=n.title,s=n.subtitle,u=n.report,m=n.github,p=n.twitter;return n.collections.forEach((function(e){(e.publications||[]).forEach((function(e){var t=e.path,a=e.author,n=e.work;o[t]={logo:c,link:l,title:i,subtitle:s,report:u,github:m,twitter:p,collections:[{title:r.a.createElement(r.a.Fragment,null,a,","," ",r.a.createElement("i",null,n)),publications:[e]}]}}))})),a.argsLookup=o,a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.config,a=e.match.params.publication,n=this.argsLookup[a];return void 0===n?r.a.createElement(X,{config:t}):r.a.createElement(Z,{config:n})}}]),t}(n.Component),te=function(e){var t=e.config,a=e.config,n=a.copyright,o=a.report,c=a.github,l=a.twitter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:function(){return r.a.createElement(R,{config:t})}}),r.a.createElement(s.a,{exact:!0,path:"/:publication/",render:function(e){return r.a.createElement(ee,Object.assign({},e,{config:t}))}}),r.a.createElement(s.a,{exact:!0,path:"/:publication/:chunk",render:function(e){return r.a.createElement(Y,Object.assign({},e,{config:t}))}})),r.a.createElement(u.PerseidsFooter,{copyright:n,report:o,github:c,twitter:l}))},ae=function(){return r.a.createElement(l.a,{basename:"/grp-grc-treebanks"},r.a.createElement(te,{config:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},15:function(e,t,a){e.exports={dropdownButton:"ControlPanel_dropdownButton__1o6TV",dropdownScroll:"ControlPanel_dropdownScroll__17rgQ",link:"ControlPanel_link__OEqVs"}},19:function(e,t,a){e.exports={publicationRow:"Publication_publicationRow__3taiJ",treebankWrapper:"Publication_treebankWrapper__2KYz-"}},43:function(e){e.exports=JSON.parse('{"title":"Treebank Publication Template","subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","copyright":"\xa9 The Perseids Project 2019","report":"https://github.com/perseids-publications/treebank-template/issues","github":"https://github.com/perseids-publications/treebank-template/","twitter":"https://twitter.com/PerseidsProject","collections":[{"title":"Information","text":"To learn more visit [our homepage](https://www.perseids.org) or view a [treebank](/on-the-murder-of-eratosthenes-1-50/1)."},{"title":"Gr\u010dki re\u010deni\u010dni period","publications":[{"path":"jednostavna-recenica","author":"Razni autori","work":"Razna djela","editors":"Vanessa Gorman, Neven Jovanovi\u0107","sections":[{"locus":"1-14","path":"jednostavna-recenica-1-14","xml":"croala-grp-3.xml","link":"https://www.example.com","notes":"Primjeri jednostavne re\u010denice s dva \u010dlana, predikatom i objektom.","chunks":{"start":1,"end":14}}]}]},{"title":"Collection 1","publications":[{"path":"on-the-murder-of-eratosthenes","author":"Lysias","work":"On the Murder of Eratosthenes","editors":"Vanessa Gorman","sections":[{"locus":"1-50","path":"on-the-murder-of-eratosthenes-1-50","xml":"lysias-1-1-50.xml","link":"https://www.example.com","notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":483}}]},{"path":"on-the-crown","author":"Demosthenes","work":"On the Crown","editors":"Vanessa Gorman","sections":[{"locus":"1-50","path":"on-the-crown-1-50","xml":"demosthenes-18-1-50.xml","notes":"Lorem ipsum dolor sit amet, *consectetur* adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":160}},{"locus":"51-100","path":"on-the-crown-51-100","xml":"demosthenes-18-51-100.xml","chunks":{"start":1,"end":149}}]}]},{"title":"Collection 2","publications":[{"path":"histories","author":"Herodotus","work":"The Histories","editors":"Vanessa Gorman","sections":[{"locus":"40-59","path":"histories-40-59","xml":"herodotus-1-40-59.xml","chunks":{"start":1,"end":100}},{"locus":"60-79","path":"histories-60-79","xml":"herodotus-1-60-79.xml","chunks":{"start":1,"end":166}},{"locus":"80-99","path":"histories-80-99","xml":"herodotus-1-80-99.xml","notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":185}}]},{"path":"philippic","author":"Demosthenes","work":"Philippic 1","editors":["Robert Gorman","Vanessa Gorman"],"sections":[{"locus":"1-51","path":"philippic-1-51","xml":"demosthenes-4-phil1-bu1.xml","chunks":{"numbers":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159"]}}]}]}]}')},44:function(e,t,a){e.exports={jumbotronSmall:"Hero_jumbotronSmall__IN8kP"}},45:function(e,t,a){e.exports={treebankContainer:"Treebank_treebankContainer__sQn_K"}},49:function(e,t,a){e.exports=a(142)},56:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.b52c9a93.chunk.js.map