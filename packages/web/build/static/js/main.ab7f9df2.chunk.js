(this["webpackJsonp@playground/web"]=this["webpackJsonp@playground/web"]||[]).push([[0],{242:function(e,i,a){"use strict";a.r(i);var s=a(3),n=a(0),t=a.n(n),r=a(120),c=a.n(r),l=a(258),o=a(58),d=a(12),j=a(37),b=a(26),m=a(71),p=a(33),h=a(259),x=a(253),u=a(254),g=a(31),O=a(256),w=a(261),f=a(262),y=a(260),S=a(257),v=p.a().shape({email:p.b().email("Email is invalid").required("Email is required"),password:p.b().required("Password is required").min(8,"Password should be 8 chars minimum")}),C=function(){var e=Object(d.f)(),i=Object(b.d)({mode:"onChange",reValidateMode:"onChange",resolver:Object(m.a)(v)}),a=i.register,n=i.formState,t=n.errors,r=n.isSubmitting,c=n.isValid;return Object(s.jsxs)(h.a,{as:"form",onSubmit:function(){console.log("submitted!")},direction:"column",spacing:"20px",p:"20px",w:"100%",h:"100%",maxW:"500px",margin:"0 auto",alignItems:"center",justifyContent:"center",children:[Object(s.jsxs)(h.a,{direction:"column",spacing:"10px",children:[Object(s.jsx)(x.a,{as:"h1",fontSize:"36px",textAlign:"center",children:"Playground"}),Object(s.jsx)(u.a,{fontSize:"16px",lineHeight:"30px",textAlign:"center",children:"Sign in to your account"})]}),Object(s.jsxs)(g.a,{isInvalid:t.email&&!0,children:[Object(s.jsx)(O.a,{htmlFor:"email",children:"Email"}),Object(s.jsx)(w.a,Object(j.a)({id:"email",type:"email",placeholder:"Email","aria-label":"email"},a("email"))),Object(s.jsx)(f.a,{children:t.email&&t.email.message})]}),Object(s.jsxs)(g.a,{isInvalid:t.password&&!0,children:[Object(s.jsx)(O.a,{htmlFor:"password",children:"Password"}),Object(s.jsx)(w.a,Object(j.a)({id:"password",type:"password",placeholder:"Password","aria-label":"password"},a("password"))),Object(s.jsx)(f.a,{children:t.password&&t.password.message})]}),Object(s.jsx)(y.a,{type:"submit",width:"100%",isLoading:r,isDisabled:!c,children:"Sign in"}),Object(s.jsxs)(h.a,{direction:"row",spacing:"3px",children:[Object(s.jsx)(u.a,{children:"Don't have an account?"}),Object(s.jsx)(S.a,{onClick:function(){return e.push("/sign-up")},children:"Get started now"})]})]})},P=p.a().shape({email:p.b().email("Email is invalid").required("Email is required"),password:p.b().required("Password is required").min(8,"Password should be 8 chars minimum")}),E=function(){var e=Object(d.f)(),i=Object(b.d)({mode:"onChange",reValidateMode:"onChange",resolver:Object(m.a)(P)}),a=i.register,n=i.formState,t=n.errors,r=n.isSubmitting,c=n.isValid;return Object(s.jsxs)(h.a,{as:"form",onSubmit:function(){console.log("submitted!")},direction:"column",spacing:"20px",p:"20px",w:"100%",h:"100%",maxW:"500px",margin:"0 auto",alignItems:"center",justifyContent:"center",children:[Object(s.jsxs)(h.a,{direction:"column",spacing:"10px",children:[Object(s.jsx)(x.a,{as:"h1",fontSize:"36px",textAlign:"center",children:"Playground"}),Object(s.jsx)(u.a,{fontSize:"16px",lineHeight:"30px",textAlign:"center",children:"Create an account"})]}),Object(s.jsxs)(g.a,{isInvalid:t.email&&!0,children:[Object(s.jsx)(O.a,{htmlFor:"email",children:"Email"}),Object(s.jsx)(w.a,Object(j.a)({id:"email",type:"email",placeholder:"Email","aria-label":"email"},a("email"))),Object(s.jsx)(f.a,{children:t.email&&t.email.message})]}),Object(s.jsxs)(g.a,{isInvalid:t.password&&!0,children:[Object(s.jsx)(O.a,{htmlFor:"password",children:"Password"}),Object(s.jsx)(w.a,Object(j.a)({id:"password",type:"password",placeholder:"Password","aria-label":"password"},a("password"))),Object(s.jsx)(f.a,{children:t.password&&t.password.message})]}),Object(s.jsx)(y.a,{type:"submit",width:"100%",isLoading:r,isDisabled:!c,children:"Sign up"}),Object(s.jsxs)(h.a,{direction:"row",spacing:"3px",children:[Object(s.jsx)(u.a,{children:"Already have an account?"}),Object(s.jsx)(S.a,{onClick:function(){return e.push("/sign-in")},children:"Log in"})]})]})},q=function(){return Object(s.jsx)(o.a,{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/",component:C}),Object(s.jsx)(d.a,{exact:!0,path:"/sign-in",component:C}),Object(s.jsx)(d.a,{exact:!0,path:"/sign-up",component:E})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,263)).then((function(i){var a=i.getCLS,s=i.getFID,n=i.getFCP,t=i.getLCP,r=i.getTTFB;a(e),s(e),n(e),t(e),r(e)}))};c.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(q,{})})}),document.getElementById("root")),F()}},[[242,1,2]]]);
//# sourceMappingURL=main.ab7f9df2.chunk.js.map