(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(t,e,n){t.exports=n(56)},56:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),u=n(24),s=n(4),i=n.n(s),l=n(18),m=n(19),f=n(25),p=n(20),d=n(26),h=n(21),v=n.n(h).a.create({baseURL:"http://localhost:3000/api"}),b={createContact:function(t){return v.post("/contacts",t)}},C=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(f.a)(this,Object(p.a)(e).call(this,t))).updateName=function(t){var e=t.target.value;n.setState({name:e})},n.handleCreate=function(){var t,e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=n.state.name,e={name:t},a.next=4,i.a.awrap(b.createContact(e).then((function(t){window.alert("Contact inserted successfully"),n.setState({name:""})})));case 4:case"end":return a.stop()}}))},n.state={name:""},n}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{class:"form-control"},r.a.createElement("input",{onChange:function(e){return t.updateName(e)}}),r.a.createElement("button",{onClick:function(){return t.handleCreate()}},"Add Contact"))}}]),e}(a.Component);var E=function(){return r.a.createElement(u.a,null,r.a.createElement(C,null))};o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.262b4501.chunk.js.map