(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),l=n.n(a),i=n(2),o=n.n(i),s=(n(16),n(3)),r=n(4),d=n(6),j=n(5),u=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).domEl=document.createElement("div"),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.body.appendChild(this.domEl)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.domEl)}},{key:"render",value:function(){var e=this.props.children;return o.a.createPortal(e,this.domEl)}}]),n}(a.Component),h=n(8),m=n(10),b=n(9),O=n.n(b),p=(n(17),function(e){var t=e.children,n=e.onClick,a=e.className,l=e.active,i=Object(m.a)(e,["children","onClick","className","active"]),o=O()("btn",a,{active:l});return Object(c.jsx)("button",Object(h.a)(Object(h.a)({},i),{},{className:o,onClick:n,children:t}))});p.defaultProps={children:"Default button",onClick:function(){},className:"",active:!1};var v=p,f=(n(18),function(e){var t=e.title,n=e.isOpen,a=e.onCancel;return Object(c.jsx)(c.Fragment,{children:n&&Object(c.jsx)(u,{children:Object(c.jsx)("div",{className:"modal-overlay",children:Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("span",{className:"modal-header__title",children:t}),Object(c.jsx)("span",{className:"modal-header__close",children:Object(c.jsx)(v,{className:"btn-modal-cancel",type:"button",onClick:a,children:"\xd7"})})]}),Object(c.jsx)("div",{className:"modal-main",children:"text"}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("span",{className:"modal-footer__title",children:"text link"})})]})})})})});f.defaultProps={title:"Modal title",isOpen:!1,onCancel:function(){}};var x=f,C=(n(19),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:!1},e.openModal=function(){e.setState({isOpen:!0})},e.handleCancel=function(){e.setState({isOpen:!1})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(v,{className:"btn-modal-open",onClick:this.openModal,children:"Show modal"}),Object(c.jsx)(x,{isOpen:this.state.isOpen,onCancel:this.handleCancel})]})})})}}]),n}(a.Component));var N=function(){return Object(c.jsx)(C,{})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),l(e),i(e)}))};o.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.1f2198ba.chunk.js.map