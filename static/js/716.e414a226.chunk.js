"use strict";(self.webpackChunknetwork=self.webpackChunknetwork||[]).push([[716],{3716:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var s=n(8683),o=n(2791),r="Profile_main__aG46H",i=n(5987),a=n(5861),l=n(885),u=n(7757),c=n.n(u),d="ProfileInfo_profile_img__qKLlS",f="ProfileInfo_description__+5Mxa",h="ProfileInfo_avatarBox__2H6u4",p="ProfileInfo_userAvatar__iaKdq",x="ProfileInfo_changeAvatar__-LInQ",j=n(4755),v=n(5739),g=n(184),b=function(e){var t=(0,o.useState)(!1),n=(0,l.Z)(t,2),s=n[0],r=n[1],i=(0,o.useState)(e.status),a=(0,l.Z)(i,2),u=a[0],c=a[1];return(0,g.jsxs)("div",{children:[!s&&(0,g.jsx)("div",{children:(0,g.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"Hello"})}),s&&(0,g.jsx)("div",{children:(0,g.jsx)("input",{onChange:function(t){e.updateStatus(e.status),c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)},value:u})})]})},m=n(8980),P=n(6871),k=n(5705),_=["profile"],S=function(e){var t=e.profile,n=(0,i.Z)(e,_);return(0,g.jsx)(k.J9,{onSubmit:n.onSubmit,initialValues:{fullName:t.fullName,aboutMe:t.aboutMe,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,contacts:t.contacts},validate:function(e){return{}},children:function(e){var n=e.values,s=(e.errors,e.touched,e.handleChange),o=e.handleBlur,r=e.handleSubmit;e.isSubmitting,e.handleReset;return(0,g.jsxs)(k.l0,{onSubmit:r,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{children:"Full name"}),(0,g.jsx)("input",{name:"fullName",type:"text",onChange:s,onBlur:o,value:n.fullName,placeholder:"enter full name"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{children:"About me"}),(0,g.jsx)("input",{name:"aboutMe",type:"text",onChange:s,onBlur:o,value:n.aboutMe,placeholder:"enter about yourself"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("lable",{children:"Looking for a job"}),(0,g.jsx)(k.gN,{name:"lookingForAJob",type:"checkbox"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{children:"My professional skills"}),(0,g.jsx)("textarea",{name:"lookingForAJobDescription",onChange:s,onBlur:o,value:n.lookingForAJobDescription,placeholder:"enter your professional skills"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{children:"Contacts"}),Object.keys(t.contacts).map((function(e){return(0,g.jsxs)("div",{children:[e,": ",(0,g.jsx)("input",{name:"contacts."+e,type:"text",placeholder:e,value:n.contacts[e],onChange:s,onBlur:o})]})}))]}),(0,g.jsx)("button",{type:"submit",children:"Submit"}),(0,g.jsx)("div",{children:n.general?(0,g.jsx)("span",{children:n.general}):null})]})}})},y=["profile"],A=function(e){var t=e.profile,n=(0,i.Z)(e,y);return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:t.fullName}),!n.userId&&!n.editMode&&(0,g.jsx)("button",{onClick:n.activateEditMode,children:"Edit profile info"}),(0,g.jsx)("h3",{children:"About me"}),(0,g.jsx)("div",{children:t.aboutMe}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Looking for a job: ".concat(t.lookingForAJob?"Yes":"No")}),(0,g.jsx)("h3",{children:"My professional skills:"}),t.lookingForAJobDescription?(0,g.jsx)("div",{children:t.lookingForAJobDescription}):(0,g.jsx)("div",{children:"No description"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Contacts"}),Object.keys(t.contacts).map((function(e){return(0,g.jsx)(C,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})})},C=function(e){var t=e.contactTitle,n=e.contactValue;return(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:t}),": ",n]})},N=function(e){var t=(0,P.UO)().userId,n=(0,o.useState)(!1),s=(0,l.Z)(n,2),r=s[0],i=s[1];if(!e.profile)return(0,g.jsx)(v.Z,{});var u=function(){var t=(0,a.Z)(c().mark((function t(n,s){var o,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.setFieldValue,r=s.setSubmitting,t.next=3,e.saveProfile(n,o,r);case 3:r(!0),i(!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{alt:"ProfileImage",className:d,src:j}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("img",{className:p,alt:"UserAvatar",src:e.profile.photos.large||m}),!t&&(0,g.jsx)("input",{className:x,type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]}),(0,g.jsx)(b,{status:e.status,updateStatus:e.updateStatus}),r?(0,g.jsx)(S,{profile:e.profile,onSubmit:u}):(0,g.jsx)(A,{profile:e.profile,editMode:r,userId:t,activateEditMode:function(){i(!0)}})]})]})},I=n(6138),M=n(364),F="MyPosts_posts__RrBPB",Z="MyPosts_myPostsBlock__j0+zZ",w="Post_avatar__ZztbG";var J=function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{alt:"avatar",className:w,src:m}),e.post,(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{children:"like"})," ",e.likesCount]})]})};var B=function(e){var t=e.posts.map((function(e){return(0,g.jsx)(J,{post:e.postmessage,likesCount:e.likesCount},e)}));return(0,g.jsxs)("div",{className:Z,children:[(0,g.jsx)("h3",{children:"My posts"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("textarea",{value:e.newPostText,onChange:function(t){var n=t.target.value;e.updateNewPostText(n)}}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),(0,g.jsx)("div",{className:F,children:t})]})},O=(0,M.$j)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){return e((0,I.Wl)())},updateNewPostText:function(t){return e((0,I.Vd)(t))}}}))(B);var D=function(e){return(0,g.jsxs)("div",{className:r,children:[(0,g.jsx)(N,{savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),(0,g.jsx)(O,{})]})},T=n(2291);var E=(0,n(7781).qC)((0,M.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:I.Ai,getStatus:I.lR,updateStatus:I.Nf,savePhoto:I.Ju,saveProfile:I.Ii}),T.S)((function(e){var t=(0,P.UO)().userId;return t||(t=e.autorizedUserId),(0,o.useEffect)((function(){e.getProfile(t),e.getStatus(t)})),(0,g.jsx)(D,(0,s.Z)((0,s.Z)({},e),{},{profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}))}))},2291:function(e,t,n){n.d(t,{S:function(){return l}});var s=n(8683),o=n(6871),r=n(364),i=n(184),a=function(e){return{isAuth:e.auth.isAuth}},l=function(e){return(0,r.$j)(a)((function(t){return t.isAuth?(0,i.jsx)(e,(0,s.Z)({},t)):(0,i.jsx)(o.Fg,{to:"/login"})}))}},8980:function(e,t,n){e.exports=n.p+"static/media/Avatar.38683251bbcf91ec551f.png"},4755:function(e,t,n){e.exports=n.p+"static/media/ContentImage.55fc0b3ecee35e1ade28.jpg"},5987:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(3366);function o(e,t){if(null==e)return{};var n,o,r=(0,s.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}}}]);
//# sourceMappingURL=716.e414a226.chunk.js.map