(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{72:function(e,a,s){"use strict";s.r(a);var t=s(0),r=s.n(t),n=s(68),c=function(e){var a=e.users,s=e.handleIncreaseUsers,t=e.countUsers,c=e.totalUsers,o=e.fetchUsersError;return r.a.createElement("section",{className:"users-section"},r.a.createElement("div",{className:"users-section__container"},r.a.createElement("div",{className:"users-section__header"},r.a.createElement("h1",null,"Our cheerful users"),r.a.createElement("p",null,"Attention! Sorting users by registration date")),r.a.createElement("ul",{className:"users-section__list"},o&&r.a.createElement("div",{style:{color:"red"}},o),a.map(function(e){return r.a.createElement("li",{className:"users-section__profile-card",key:e.id},r.a.createElement("div",{className:"users-section__user-container"},r.a.createElement("img",{className:"users-section__user-image",src:e.photo,alt:e.name,"data-tip":e.name}),r.a.createElement("h2",{className:"users-section__user-name","data-tip":e.name},e.name),r.a.createElement("p",{className:"users-section__user-position","data-tip":e.position},e.position),r.a.createElement("p",{className:"users-section__user-email","data-tip":e.email},e.email," "),r.a.createElement("p",{className:"users-section__user-phone","data-tip":e.phone},e.phone)),r.a.createElement(n.a,{place:"bottom"}))})),r.a.createElement("button",{type:"button",className:"button",disabled:t>=c,onClick:function(){return s()}},"Show more")))};a.default=c,c.defaultProps={fetchUsersError:""}}}]);
//# sourceMappingURL=Users.7c6b4dd5.chunk.js.map