"use strict";(self.webpackChunknetwork=self.webpackChunknetwork||[]).push([[870],{6870:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var n=s(8683),r=s(2791),i="Profile_main__aG46H",o="ProfileInfo_description__+5Mxa",a=(s(4755),s(5739)),u=s(885),c=s(184),l=function(t){var e=(0,r.useState)(!1),s=(0,u.Z)(e,2),n=s[0],i=s[1],o=(0,r.useState)(t.status),a=(0,u.Z)(o,2),l=a[0],d=a[1];return(0,c.jsxs)("div",{children:[!n&&(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"Hello"})}),n&&(0,c.jsx)("div",{children:(0,c.jsx)("input",{onChange:function(e){t.updateStatus(t.status),d(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(l)},value:l})})]})},d=function(t){return t.profile?(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:o,children:[(0,c.jsx)("img",{src:t.profile.photos.large}),(0,c.jsx)(l,{status:t.status,updateStatus:t.updateStatus}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:t.profile.fullName}),(0,c.jsx)("div",{children:t.profile.aboutMe}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Looking for a job: ".concat(t.profile.lookingForAJob?"Yes":"No")}),(0,c.jsx)("div",{children:t.profile.lookingForAJobDescription})]}),(0,c.jsx)("div",{children:t.profile.userId}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Contacts"}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.facebook}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.website}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.vk}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.twitter}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.instagram}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.youtube}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.github}),(0,c.jsx)("a",{href:"##",children:t.profile.contacts.mainLink})]})]})]})}):(0,c.jsx)(a.Z,{})},f=s(6138),p=s(364),h="MyPosts_posts__RrBPB",x="MyPosts_myPostsBlock__j0+zZ",j="Post_avatar__ZztbG",v=s(8980);var g=function(t){return(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{alt:"avatar",className:j,src:v}),t.post,(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"like"})," ",t.likesCount]})]})};var P=function(t){var e=t.posts.map((function(t){return(0,c.jsx)(g,{post:t.postmessage,likesCount:t.likesCount})}));return(0,c.jsxs)("div",{className:x,children:[(0,c.jsx)("h3",{children:"My posts"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("textarea",{value:t.newPostText,onChange:function(e){var s=e.target.value;t.updateNewPostText(s)}}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{onClick:function(){t.addPost()},children:"Add post"})})]}),(0,c.jsx)("div",{className:h,children:e})]})},k=(0,p.$j)((function(t){return{posts:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(){return t((0,f.Wl)())},updateNewPostText:function(e){return t((0,f.Vd)(e))}}}))(P);var m=function(t){return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)(d,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,c.jsx)(k,{})]})},b=s(6871),S=s(2291);var _=(0,s(7781).qC)((0,p.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,autorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:f.Ai,getStatus:f.lR,updateStatus:f.Nf}),S.S)((function(t){var e=(0,b.UO)().userId;return e||(e=t.autorizedUserId),(0,r.useEffect)((function(){t.getProfile(e),t.getStatus(e)})),(0,c.jsx)(m,(0,n.Z)((0,n.Z)({},t),{},{profile:t.profile,status:t.status,updateStatus:t.updateStatus}))}))},2291:function(t,e,s){s.d(e,{S:function(){return u}});var n=s(8683),r=s(6871),i=s(364),o=s(184),a=function(t){return{isAuth:t.auth.isAuth}},u=function(t){return(0,i.$j)(a)((function(e){return e.isAuth?(0,o.jsx)(t,(0,n.Z)({},e)):(0,o.jsx)(r.Fg,{to:"/login"})}))}},8980:function(t,e,s){t.exports=s.p+"static/media/Avatar.38683251bbcf91ec551f.png"},4755:function(t,e,s){t.exports=s.p+"static/media/ContentImage.55fc0b3ecee35e1ade28.jpg"}}]);
//# sourceMappingURL=870.ebc1b62c.chunk.js.map