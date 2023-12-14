(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(7),a=s.n(c),n=s(2),i=s(1),l=(s(13),s(14),s(15),s(3)),o=s.n(l),r=s(0),d=function(e){var t=e.posts,s=e.setActiveTab,c=e.selectedPost,a=e.setSelectedPost;return Object(r.jsxs)("div",{"data-cy":"PostsList",children:[Object(r.jsx)("p",{className:"title",children:"Posts:"}),Object(r.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"has-background-link-light",children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var n=e.id,i=e.title;return Object(r.jsxs)("tr",{"data-cy":"Post",children:[Object(r.jsx)("td",{"data-cy":"PostId",children:n}),Object(r.jsx)("td",{"data-cy":"PostTitle",children:i}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{type:"button","data-cy":"PostButton",className:o()("button is-link ",{"is-light":(null===c||void 0===c?void 0:c.id)!==n}),onClick:function(){return e=n,void((null===c||void 0===c?void 0:c.id)===e?(s(!1),a(null)):(s(!0),a(t.find((function(t){return t.id===e}))||null)));var e},children:(null===c||void 0===c?void 0:c.id)===n?"Close":"Open"})})]},n)}))})]})]})},j=(s(17),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),m=s(8),b="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(b+e,c)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")};var v=function(e){var t=e.comments,s=e.selectedPost,c=e.setComments,a=Object(i.useState)(""),l=Object(n.a)(a,2),d=l[0],j=l[1],b=Object(i.useState)(""),u=Object(n.a)(b,2),h=u[0],O=u[1],f=Object(i.useState)(""),v=Object(n.a)(f,2),N=v[0],p=v[1],y=Object(i.useState)(!1),g=Object(n.a)(y,2),S=g[0],C=g[1],P=Object(i.useState)(!1),k=Object(n.a)(P,2),w=k[0],E=k[1];return Object(r.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),s)if(d.trim()&&h.trim()&&N.trim()){C(!1);var a={postId:s.id,name:d,email:h,body:N};E(!0),function(e){var t=e.postId,s=e.name,c=e.email,a=e.body;return x("/comments",{postId:t,name:s,email:c,body:a})}(a).then((function(){var e=[].concat(Object(m.a)(t),[a]);c(e),j(""),O(""),p("")})).catch((function(){E(!0)})).finally((function(){E(!1)}))}else C(!0)},children:[Object(r.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":w||!d.trim()}),value:d,onChange:function(e){j(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-user"})}),Object(r.jsx)("span",{className:o()("icon is-small is-right",{"has-text-danger":S}),"data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":w||!h.trim()}),value:h,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-envelope"})}),Object(r.jsx)("span",{className:o()("icon is-small is-right",{"has-text-danger":S}),"data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("textarea",{"is-danger":w||!N.trim()}),value:N,onChange:function(e){p(e.target.value)}})}),S&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":w}),children:"Add"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){j(""),O(""),p("")},children:"Clear"})})]})]})},N=function(e){var t=e.comments,s=e.selectedPost,c=e.setComments,a=e.showList,l=Object(i.useState)(!1),o=Object(n.a)(l,2),d=o[0],m=o[1],b=function(e){var s;(s=e,f("/comments/".concat(s))).then((function(){var s=t.filter((function(t){return t.id!==e}));c(s)}))};return Object(i.useEffect)((function(){m(!1)}),[s]),Object(r.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(r.jsxs)("div",{className:"block",children:[Object(r.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===s||void 0===s?void 0:s.id,": ").concat(null===s||void 0===s?void 0:s.title)}),Object(r.jsx)("p",{"data-cy":"PostBody",children:null===s||void 0===s?void 0:s.body})]}),Object(r.jsxs)("div",{className:"block",children:[a&&Object(r.jsx)(j,{}),!!t.length&&!a&&Object(r.jsx)("p",{className:"title is-4",children:"Comments:"}),!a&&t.length?t.map((function(e){var t=e.id,s=e.email,c=e.name,a=e.body;return Object(r.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(r.jsxs)("div",{className:"message-header",children:[Object(r.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:c}),Object(r.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){t&&b(t)},children:"Delete"})]}),Object(r.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:a})]},t)})):!a&&Object(r.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!a&&!d&&Object(r.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return m(!d)},children:"Write a comment"})]}),d&&Object(r.jsx)(v,{comments:t,selectedPost:s,setComments:c})]})},p=function(e){var t=e.users,s=e.selectedUser,c=e.setSelectedUser,a=Object(i.useState)(!1),l=Object(n.a)(a,2),d=l[0],j=l[1];return Object(r.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(r.jsx)("div",{className:"dropdown-trigger",children:Object(r.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){j(!d)},children:[Object(r.jsx)("span",{children:s?s.name:"Choose a user"}),Object(r.jsx)("span",{className:"icon is-small",children:Object(r.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(r.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(r.jsx)("div",{className:"dropdown-content",children:d&&t.map((function(e){return Object(r.jsx)("a",{href:"#user-".concat(e.id),className:o()("dropdown-item",{"is-active":e.id===(null===s||void 0===s?void 0:s.id)}),onClick:function(){return function(e){c(e),j(!d)}(e)},children:e.name},e.id)}))})})]})},y=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),l=Object(n.a)(a,2),m=l[0],b=l[1],u=Object(i.useState)(!1),h=Object(n.a)(u,2),x=h[0],f=h[1],v=Object(i.useState)(null),y=Object(n.a)(v,2),g=y[0],S=y[1],C=Object(i.useState)(!1),P=Object(n.a)(C,2),k=P[0],w=P[1],E=Object(i.useState)([]),T=Object(n.a)(E,2),I=T[0],F=T[1],L=Object(i.useState)(null),U=Object(n.a)(L,2),A=U[0],B=U[1],M=Object(i.useState)(!1),D=Object(n.a)(M,2),_=D[0],J=D[1],q=Object(i.useState)(!1),W=Object(n.a)(q,2),G=W[0],Y=W[1];return Object(i.useEffect)((function(){O("/users").then((function(e){return c(e)})).catch((function(){return Y(!0)}))}),[]),Object(i.useEffect)((function(){var e;g&&(f(!0),(e=g.id,O("/posts?userId=".concat(e))).then((function(e){b(e)})).finally((function(){f(!1)})))}),[g]),Object(i.useEffect)((function(){var e;A&&(J(!0),(e=A.id,O("/comments?postId=".concat(e))).then((function(e){F(e)})).finally((function(){return J(!1)})))}),[A]),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tile is-ancestor",children:[Object(r.jsx)("div",{className:"tile is-parent",children:Object(r.jsxs)("div",{className:"tile is-child box is-success",children:[Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(p,{users:s,selectedUser:g,setSelectedUser:S})}),Object(r.jsxs)("div",{className:"block","data-cy":"MainContent",children:[x&&Object(r.jsx)(j,{}),G&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),Object(r.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!x&&g&&m.length>0&&Object(r.jsx)(d,{posts:m,setActiveTab:w,selectedPost:A,setSelectedPost:B}),!x&&!m.length&&g&&Object(r.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!x&&!g&&Object(r.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"})]})]})]})}),Object(r.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:k&&Object(r.jsx)("div",{className:"tile is-child box is-success ",children:Object(r.jsx)(N,{comments:I,selectedPost:A,setComments:F,showList:_})})})]})})})};a.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3fead0dd.chunk.js.map