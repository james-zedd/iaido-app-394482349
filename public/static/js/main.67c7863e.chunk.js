(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(22),i=n.n(s),a=(n(27),n(8)),u=n.n(a),o=n(11),l=n(2),h=n(3),j=n(7),d=n(5),b=n(4),p=n(0),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Login"}),Object(p.jsxs)("form",{method:"POST",action:"",className:"form",children:[Object(p.jsxs)("div",{className:"form__input-container",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email"})]}),Object(p.jsxs)("div",{className:"form__input-container",children:[Object(p.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(p.jsx)("input",{type:"text",id:"pwd",name:"password"})]}),Object(p.jsx)("div",{className:"form__input-container",children:Object(p.jsx)("input",{type:"submit",value:"Login"})})]})]})}}]),n}(c.Component),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Register"}),Object(p.jsxs)("form",{method:"POST",action:"",className:"form",children:[Object(p.jsxs)("div",{className:"form__input-container",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email"})]}),Object(p.jsxs)("div",{className:"form__input-container",children:[Object(p.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(p.jsx)("input",{type:"text",id:"pwd",name:"password"})]}),Object(p.jsxs)("div",{className:"form__input-container",children:[Object(p.jsx)("label",{htmlFor:"pwd2",children:"Confirm Password"}),Object(p.jsx)("input",{type:"text",id:"pwd2",name:"password2"})]}),Object(p.jsx)("div",{className:"form__input-container",children:Object(p.jsx)("input",{type:"submit",value:"Register"})})]})]})}}]),n}(c.Component),f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleClick=function(){var e="LOGIN"===c.state.active?"REGISTER":"LOGIN";c.setState({active:e})},c.RenderForm=function(){var e=c.state.active;return"LOGIN"===e?Object(p.jsx)(O,{}):"REGISTER"===e?Object(p.jsx)(m,{}):void 0},c.state={active:"LOGIN"},c.handleClick=c.handleClick.bind(Object(j.a)(c)),c}return Object(h.a)(n,[{key:"render",value:function(){var e=this.RenderForm;return Object(p.jsxs)("div",{children:[Object(p.jsx)(e,{}),Object(p.jsx)("button",{type:"button",className:"button__toggle",onClick:this.handleClick,children:"Toggle"})]})}}]),n}(c.Component),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,c=t.name;return Object(p.jsxs)("div",{className:"tile",children:[Object(p.jsxs)("p",{children:["ID: ",n]}),Object(p.jsx)("p",{children:c}),Object(p.jsx)("button",{type:"button",onClick:function(){return e.props.setTechnique(n)},children:"View"})]})}}]),n}(c.Component),v=n(12),q=n.n(v),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).filterPosts=function(e,t){if(c.setState((function(){return{noResults:!1}})),!t)return c.setState({postsSearch:e});var n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return 0===n.length?c.setState((function(){return{noResults:!0}})):c.setState({postsSearch:n})},c.dbQuery=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("search fired!"),c.setState((function(){return{noResults:!1}})),e.prev=2,e.next=5,q.a.get("/api/techniques?q=".concat(t));case 5:if(0!==(n=e.sent).data.data.length){e.next=10;break}return e.abrupt("return",c.setState((function(){return{noResults:!0}})));case 10:return e.abrupt("return",c.setState({postsSearch:n.data.data}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),c.passTechId=function(e){c.props.techId(e)},c.handleSubmit=function(e){e.preventDefault(),c.dbQuery(e.target[0].value)},c.state={posts:[],techniqueId:c.props.techniqueId,postsSearch:[],noResults:!1},c}return Object(h.a)(n,[{key:"render",value:function(){var e,t=this;return e=this.state.noResults?"There are no results for your search.":this.state.postsSearch.map((function(e){return Object(p.jsx)(x,{id:e._id,name:e.name.romanji,techniqueId:t.props.techniqueId,setTechnique:t.passTechId},e._id)})),Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:"search",children:"Search"}),Object(p.jsx)("input",{type:"text",id:"search",placeholder:"Enter a iaido technique",name:"search"}),Object(p.jsx)("button",{type:"submit",children:"Search"})]}),Object(p.jsx)("p",{children:"Type the name of a technique above to begin. Hit search to list all techniques."}),Object(p.jsx)("div",{className:"search__results",children:e})]})}}]),n}(c.Component),k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).ProcessMovements=function(e){return e.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}))},c.state={movements:c.props.technique.movements,isOmoteUra:c.props.isOmoteUra},c}return Object(h.a)(n,[{key:"render",value:function(){var e;return e=this.state.isOmoteUra?Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Omote:"}),Object(p.jsx)("ul",{children:this.ProcessMovements(this.state.movements[0].omote)}),Object(p.jsx)("h4",{children:"Ura:"}),Object(p.jsx)("ul",{children:this.ProcessMovements(this.state.movements[1].ura)})]}):Object(p.jsx)("ul",{children:this.ProcessMovements(this.state.movements)}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",onClick:this.props.handleClick,children:"Back"}),Object(p.jsx)("p",{children:"Name:"}),Object(p.jsx)("h2",{children:this.props.technique.name.romanji}),Object(p.jsx)("p",{children:"Movements:"}),e]})}}]),n}(c.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleClick=function(){c.setState((function(){return{authenticated:!c.state.authenticated,techniqueId:null}}))},c.findTechnique=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("/api/techniques/".concat(t));case 3:return n=e.sent,e.abrupt("return",c.setState((function(){return{techniqueId:n.data.data[0]._id,technique:n.data.data[0],isOmoteUra:-1!==n.data.data[0].omote_to_ura.indexOf(!0)}})));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),c.setTechniqueId=function(e){c.setState((function(){return{techniqueId:e}}))},c.clearTechnique=function(){c.setState((function(){return{techniqueId:null,technique:[]}}))},c.RenderPage=function(){var e=c.state.authenticated,t=c.state.techniqueId;return e&&t?Object(p.jsx)(k,{technique:c.state.technique,isOmoteUra:c.state.isOmoteUra,handleClick:c.clearTechnique}):e?Object(p.jsx)(y,{techniqueId:c.state.techniqueId,techId:c.findTechnique}):Object(p.jsx)(f,{})},c.state={authenticated:!1,posts:[],techniqueId:null,technique:[],isOmoteUra:!1},c.handleClick=c.handleClick.bind(Object(j.a)(c)),c}return Object(h.a)(n,[{key:"render",value:function(){var e=this.RenderPage;return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",onClick:this.handleClick,children:"Authenticate"}),Object(p.jsx)(e,{})]})}}]),n}(c.Component),I=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{}),Object(p.jsxs)("main",{children:[Object(p.jsx)("h2",{children:"Iaido App"}),Object(p.jsx)(S,{})]}),Object(p.jsx)("footer",{children:Object(p.jsx)("p",{children:"An application by Zedd Enterprises."})})]})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.67c7863e.chunk.js.map