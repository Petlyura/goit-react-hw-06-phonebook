(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"ContactFrom_input__2wQOW",label:"ContactFrom_label__2zmD8",button:"ContactFrom_button__1pwhv"}},11:function(t,e,n){t.exports={title:"App_title__1F7bV",section:"App_section__2WyB2"}},17:function(t,e,n){t.exports={item:"ContactsListItem_item__2VfmB",span:"ContactsListItem_span__1OIi3",button:"ContactsListItem_button__3wfOq"}},21:function(t,e,n){t.exports={label:"Filter_label__2juPt",input:"Filter_input__1xqMU"}},22:function(t,e,n){t.exports={container:"Notification_container__3cBDV",notificationContent:"Notification_notificationContent__1dT6z"}},28:function(t,e,n){t.exports={container:"Layout_container__2vuFe"}},31:function(t,e,n){t.exports={enter:"itemTransition_enter__37JEZ",enterActive:"itemTransition_enterActive__2U7jy",exit:"itemTransition_exit__1BoRk",exitActive:"itemTransition_exitActive__YqGjO"}},32:function(t,e,n){t.exports={appear:"transitionTitle_appear__1KsDb",appearActive:"transitionTitle_appearActive__2E5xE"}},33:function(t,e,n){t.exports={enter:"NotificationTransition_enter__2yGI4",enterActive:"NotificationTransition_enterActive__26EbF",exit:"NotificationTransition_exit__3Wug6",exitActive:"NotificationTransition_exitActive__kbwdu"}},36:function(t,e,n){t.exports=n(49)},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),i=n(13),l=n(14),s=n(16),u=n(15),m=n(4),p=n(28),b=n.n(p);var f=function(t){var e=t.children;return c.a.createElement("section",{className:b.a.container},e)},_=n(21),d=n.n(_),v=n(5),h=n(29),O=Object(v.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(h.v4)(),name:t,number:e}}}})),C=Object(v.b)("contacts/getFromLS"),E={addContact:O,removeContact:Object(v.b)("contacts/remove"),filterContact:Object(v.b)("contacts/filter"),getFromLS:C},g={onChangeFilter:E.filterContact},N=Object(m.b)((function(t){return{value:t.contacts.filter}}),g)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("label",{className:d.a.label},"Search contacts by name",c.a.createElement("input",{className:d.a.input,type:"text",vlaue:e,onChange:function(t){return n(t.target.value)}})))})),j=n(6),y=n(10),S=n.n(y),x=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.contacts.some((function(t){return t.name===a}))?t.props.openModal():(t.props.onAddContact(a,c),t.setState({name:"",number:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("label",{className:S.a.label},"Name",c.a.createElement("input",{className:S.a.input,type:"text",name:"name",value:e,onChange:this.handleInputChange,required:!0})),c.a.createElement("label",{className:S.a.label},"Number",c.a.createElement("input",{className:S.a.input,type:"tel",name:"number",value:n,onChange:this.handleInputChange,required:!0})),c.a.createElement("button",{className:S.a.button,type:"submit"},"Add contact"))}}]),n}(a.Component),A={onAddContact:E.addContact},F=Object(m.b)((function(t){return{contacts:t.contacts.items}}),A)(x),I=n(30),k=n(17),w=n.n(k);var T=Object(m.b)((function(t,e){var n=t.contacts.items.find((function(t){return t.id===e.id}));return Object(I.a)({},n)}),(function(t,e){return{onRemove:function(){return t(E.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",{className:w.a.item},c.a.createElement("span",{className:w.a.span},e,": ",n),c.a.createElement("button",{className:w.a.button,type:"button",onClick:a},"X"))})),L=n(51),M=n(50),J=n(31),q=n.n(J);var B,D=Object(m.b)((function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}}))((function(t){var e=t.contacts;return c.a.createElement(L.a,{component:"ul"},e.map((function(t){var e=t.id;return c.a.createElement(M.a,{key:e,classNames:q.a,timeout:250},c.a.createElement(T,{id:e}))})))})),R=n(22),V=n.n(R),W=function(){return c.a.createElement("div",{className:V.a.container},c.a.createElement("p",{className:V.a.notificationContent},"Contact already exist!"))},z=n(11),G=n.n(z),P=n(32),U=n.n(P),Y=n(33),K=n.n(Y),Q=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isOpenModal:!1},t.handleOpenModal=function(){t.setState({isOpenModal:!0}),setTimeout((function(){t.setState({isOpenModal:!1})}),3e3)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(localStorage.getItem("contacts")){var t=JSON.parse(localStorage.getItem("contacts"));this.props.onCheckContacts(t)}}},{key:"render",value:function(){var t=this.state.isOpenModal,e=this.props.contacts;return c.a.createElement(f,null,c.a.createElement(M.a,{in:!0,appear:!0,timeout:500,classNames:U.a},c.a.createElement("h2",{className:G.a.title},"Phonebook")),c.a.createElement("section",{className:G.a.section},c.a.createElement(F,{openModal:this.handleOpenModal})),c.a.createElement("h2",{className:G.a.title},"Contacts"),e.length>0?c.a.createElement("section",{className:G.a.section},c.a.createElement(N,null),c.a.createElement(D,null)):c.a.createElement("h2",null,"Your phonebook is empty."),c.a.createElement(M.a,{in:t,appear:!0,classNames:K.a,timeout:250,unmountOnExit:!0},c.a.createElement(W,null)))}}]),n}(a.Component),X={onCheckContacts:E.getFromLS},Z=Object(m.b)((function(t){return{contacts:t.contacts.items}}),X)(Q),H=n(23),$=n(3),tt=Object(v.c)([],(B={},Object(j.a)(B,E.addContact,(function(t,e){var n=localStorage.getItem("contacts"),a=e.payload.contact;if(n){var c=JSON.parse(n);localStorage.setItem("contacts",JSON.stringify([a].concat(Object(H.a)(c))))}else localStorage.setItem("contacts",JSON.stringify([a]));return[e.payload.contact].concat(Object(H.a)(t))})),Object(j.a)(B,E.removeContact,(function(t,e){var n=JSON.parse(localStorage.getItem("contacts")).filter((function(t){return t.id!==e.payload}));return localStorage.setItem("contacts",JSON.stringify(n)),t.filter((function(t){return t.id!==e.payload}))})),Object(j.a)(B,E.getFromLS,(function(t,e){return e.payload})),B)),et=Object(v.c)("",Object(j.a)({},E.filterContact,(function(t,e){return e.payload}))),nt=Object($.c)({items:tt,filter:et}),at=Object(v.a)({reducer:{contacts:nt}});n(48);r.a.render(c.a.createElement(m.a,{store:at},c.a.createElement(Z,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.39d0c4e6.chunk.js.map