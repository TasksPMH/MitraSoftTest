import{j as e,C as r,u as y,r as E,s as F,a as j,f as v,F as A,b as H,c as I,B as T,L as C,d as U,E as p}from"./index-c624fe8d.js";import{u as t,a as _,P as L}from"./PostsList-0f45b588.js";const b=({user:i})=>e.jsxs(r,{bg:"info",style:{width:"100%"},children:[e.jsx(r.Header,{children:"Информация"}),e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:i.name}),e.jsxs(r.Text,{children:["Username: ",i.username]}),e.jsxs(r.Text,{children:["Email: ",i.email]}),e.jsxs(r.Text,{children:["Company: ",i.website]}),e.jsx(r.Text,{children:i.phone})]})]}),B="_container_24xje_1",R={container:B},k=()=>{const{userId:i}=y(),h=t(s=>s.posts.posts),o=t(s=>s.users.activeUser),n=t(s=>s.users.activeUserPosts),m=t(s=>s.users.isUserFetching),x=t(s=>s.users.userFetchingError),P=t(s=>s.users.isUserPostsFetching),l=t(s=>s.users.userPostsFetchingError),u=t(s=>s.history.usersPostsHistory),c=_();return E.useLayoutEffect(()=>{const s=Number(i),d=u.find(a=>a.user.id===s);if(d)c(F(d.user)),c(j(d.posts));else if((!o||o.id!==s)&&c(v(s)),h){const a=h.filter(f=>f.userId===s);c(j(a))}else(!n||n[A].userId!==s)&&c(H(s));return function(){if(o&&n){const a={user:o,posts:n};u.find(g=>g.user.id===o.id)||c(I([...u,a]))}}},[]),e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"light",children:e.jsx(C,{to:"/",children:"Back home"})}),e.jsxs("div",{className:R.container,children:[o?e.jsx(b,{user:o}):m?e.jsx(U,{}):x?e.jsx(p,{message:x}):"",n?e.jsx(L,{posts:n,showAvatar:!1}):P?e.jsx(U,{}):l?e.jsx(p,{message:l}):""]})]})};export{k as default};
