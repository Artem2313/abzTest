(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a(13),o=a(14),c=a(18),l=a(15),r=a(19),s=a(0),d=a.n(s),i=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).backdropRef=Object(s.createRef)(),a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||(0,a.props.onHandleModal)()},a.handleKeyPress=function(e){"Escape"===e.code&&(0,a.props.onHandleModal)()};var o=e.message,r=o.title,d=o.body,i=o.button;return a.state={title:r,body:d,button:i},a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.onHandleModal,t=this.state,a=t.title,n=t.body,o=t.button;return d.a.createElement("div",{className:"backdrop backdrop__modal",ref:this.backdropRef,onClick:this.handleBackdropClick},d.a.createElement("div",{className:"modal"},d.a.createElement("div",{className:"modal__inner"},d.a.createElement("h2",{className:"modal__title"},a),d.a.createElement("div",{className:"spacer"}),d.a.createElement("button",{type:"button",className:"button modal__x",onClick:function(){return e()}},"x")),d.a.createElement("div",{className:"modal__inner"},d.a.createElement("p",{className:"modal__body"},n)),d.a.createElement("div",{className:"modal__inner"},d.a.createElement("button",{type:"button",className:"button modal__button",onClick:function(){return e()}},o))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=Modal.e8160dcb.chunk.js.map