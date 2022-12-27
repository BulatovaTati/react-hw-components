"use strict";(self.webpackChunkreact_hw_components=self.webpackChunkreact_hw_components||[]).push([[395],{1395:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,c,s,a,u,l,d,p,m,f,h,x,b,g,v,Z,j,C,w,y=t(885),P=t(2791),k=t(168),z=t(6444),N=z.ZP.div(r||(r=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px 20px;\n  background-color: ",";\n  border-radius: 10px;\n"])),(function(n){return n.theme.colors.NavBGColor})),F=z.ZP.button(o||(o=(0,k.Z)(["\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  font-size: 30px;\n  border: none;\n  border-radius: 50%;\n  border: 1px solid;\n\n  border-color: ",";\n  background-color: transparent;\n  transition: all 100ms linear;\n  cursor: pointer;\n\n  :not(:last-child) {\n    margin-left: auto;\n    margin-right: 10px;\n  }\n  :hover {\n    color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.isOpen?"orange":"#fff"}),(function(n){return n.isOpen?"orange":"#fff"}),(function(n){return n.theme.colors.activeTextColor}),(function(n){return n.theme.colors.activeTextColor})),O=t(9482),S=z.ZP.h2(i||(i=(0,k.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  font-size: ","px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes[5]}),(function(n){return n.color})),B=t(3329),G=function(n){var e=n.str,t=n.color,r=void 0===t?null:t;return(0,B.jsx)(S,{color:r,children:e})},T=function(n){var e=n.toggle,t=n.isOpenFilter,r=n.isOpenForm;return(0,B.jsxs)(N,{children:[(0,B.jsx)(G,{str:"Phonebook",color:"white"}),(0,B.jsx)(F,{onClick:function(){return e("isOpenForm")},isOpen:r,title:"Add contact",type:"button",children:(0,B.jsx)(O.zOC,{})}),(0,B.jsx)(F,{onClick:function(){return e("isOpenFilter")},isOpen:t,title:"Search",type:"button",children:(0,B.jsx)(O.RPM,{})})]})},A=t(5861),_=t(4687),L=t.n(_),M=t(5705),R=t(7103),W=t(5264),Y=z.ZP.div(c||(c=(0,k.Z)(["\n  padding: 20px 40px;\n  background-color: ",";\n  border-bottom: 2px solid ",";\n  text-align: center;\n  border-radius: 10px;\n"])),(function(n){return n.theme.colors.bcgTable}),(function(n){return n.theme.colors.NavBGColor})),q=z.ZP.div(s||(s=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0 auto ","px;\n  text-align: start;\n  max-width: 300px;\n"])),(function(n){return n.theme.space[4]})),J=z.ZP.label(a||(a=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-weight: ",";\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.space[4]})),D=(0,z.ZP)(M.gN)(u||(u=(0,k.Z)(["\n  font-size: ","px;\n  padding: 5px 10px;\n  border: 2px solid ",";\n  border-radius: 5px;\n  outline: none;\n  transition: border-color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);\n\n  :hover,\n  :focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.NavBGColor})),E=(0,z.ZP)(M.Bc)(l||(l=(0,k.Z)(["\n  margin-top: 5px;\n  font-size: ","px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.colors.errorMessage})),I=z.ZP.button(d||(d=(0,k.Z)(["\n  min-width: 120px;\n  padding: 10px 20px;\n  border: none;\n  border: 2px solid ",";\n  font-size: ","px;\n  color: ",";\n  background-color: ",";\n  text-align: center;\n  transition: all 250ms linear;\n  cursor: pointer;\n  border-radius: 10px;\n  :hover {\n    border: 2px solid ",";\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.whiteTextColor}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.whiteTextColor}),(function(n){return n.theme.colors.NavBGColor}),(function(n){return n.theme.colors.NavBGColor}),(function(n){return n.theme.colors.NavBGColor}),(function(n){return n.theme.colors.whiteTextColor})),U=t(6377),V=R.Ry().shape({name:R.Z_().min(3).matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid").required(),number:R.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid").required()}),$=function(n){var e=n.toggle,t=(0,U.wY)().data,r=(0,U.Tn)(),o=(0,y.Z)(r,1)[0],i=function(){var n=(0,A.Z)(L().mark((function n(r,i){var c;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=i.resetForm,!t.find((function(n){return n.name===r.name}))){n.next=3;break}return n.abrupt("return",W.Notify.failure("".concat(r.name," is already in contacts")));case 3:return n.prev=3,n.next=6,o(r);case 6:W.Notify.success("Contact added"),c(),e("isOpenForm"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),W.Notify.failure("Contact does not added");case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,B.jsx)(M.J9,{initialValues:{name:"",number:""},validationSchema:V,onSubmit:i,children:(0,B.jsx)(Y,{children:(0,B.jsxs)(M.l0,{autoComplete:"off",children:[(0,B.jsxs)(q,{children:[(0,B.jsxs)(J,{htmlFor:"name",children:["Name",(0,B.jsx)(D,{id:"name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,B.jsx)(E,{name:"name",component:"div"})]}),(0,B.jsxs)(J,{htmlFor:"number",children:["Number",(0,B.jsx)(D,{id:"number",type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,B.jsx)(E,{name:"number",component:"div"})]})]}),(0,B.jsx)(I,{type:"submit",children:"Add contact"}),(0,B.jsx)(I,{onClick:function(){return e("isOpenForm")},type:"button",children:"Cancel"})]})})})},H=t(5048),K=t(1634),Q=z.ZP.li(p||(p=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ",";\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.space[4]})),X=z.ZP.p(m||(m=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontWeights.medium})),nn=(0,z.ZP)(O.hwR)(f||(f=(0,k.Z)(["\n  padding: ","px;\n  border: 1px solid ",";\n  border-radius: 50%;\n  margin-right: ","px;\n  color: ",";\n  cursor: pointer;\n  transition: color 250ms linear;\n  font-size: 26px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.NavBGColor}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.NavBGColor})),en=z.ZP.button(h||(h=(0,k.Z)(["\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ","px;\n  border: none;\n\n  background-color: transparent;\n  transition: all 100ms linear;\n  cursor: pointer;\n\n  :hover {\n    color: red;\n  }\n"])),(function(n){return n.theme.fontSizes[4]})),tn=t(5562),rn=function(n){var e=n.id,t=n.name,r=n.number,o=(0,U.Nt)(),i=(0,y.Z)(o,1)[0];return(0,B.jsxs)(Q,{children:[(0,B.jsxs)(X,{children:[(0,B.jsx)(nn,{}),t," : ",r]}),(0,B.jsx)(en,{onClick:function(){i(e),tn.Notify.success("Contact removed")},title:"Delete",type:"button",children:(0,B.jsx)(O.WhN,{})})]})},on=z.ZP.p(x||(x=(0,k.Z)(["\n  font-size: ","px;\n  text-align: center;\n"])),(function(n){return n.theme.fontSizes[3]})),cn=function(n){var e=n.message;return(0,B.jsx)(on,{children:e})},sn=z.ZP.div(b||(b=(0,k.Z)(["\n  padding: ","px;\n  background-color: ",";\n  border-radius: 10px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.bcgTable})),an=(z.ZP.h2(g||(g=(0,k.Z)(["\n  margin-bottom: ","px;\n  text-align: center;\n"])),(function(n){return n.theme.space[4]})),function(){var n=(0,H.v9)(K.Gd),e=(0,U.wY)().data.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,B.jsxs)(sn,{children:[(0,B.jsx)(G,{children:"Contacts"}),e.length>0?(0,B.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,B.jsx)(rn,{id:e,name:t,number:r},e)}))}):(0,B.jsx)(cn,{message:"Contact list is empty"})]})}),un=z.ZP.div(v||(v=(0,k.Z)(["\n  padding: 20px 40px;\n  background-color: ",";\n  border-bottom: 2px solid ",";\n  text-align: center;\n  border-radius: 10px;\n"])),(function(n){return n.theme.colors.bcgTable}),(function(n){return n.theme.colors.NavBGColor})),ln=z.ZP.h2(Z||(Z=(0,k.Z)(["\n  margin-bottom: ","px;\n  text-align: center;\n"])),(function(n){return n.theme.space[4]})),dn=z.ZP.input(j||(j=(0,k.Z)(["\n  font-size: ","px;\n  padding: 5px 10px;\n  border: 2px solid ",";\n  border-radius: 5px;\n  outline: none;\n  width: 80%;\n\n  :hover,\n  :focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.NavBGColor})),pn=function(){var n=(0,H.I0)(),e=(0,H.v9)(K.Gd);return(0,B.jsxs)(un,{children:[(0,B.jsx)(ln,{children:"Filter"}),(0,B.jsx)(dn,{type:"text",name:"filter",value:e,onChange:function(e){return n((0,K.u8)(e.target.value))}})]})},mn=z.ZP.div(C||(C=(0,k.Z)(["\n  max-width: 450px;\n  margin: 0 auto;\n  padding: 30px 0;\n"]))),fn=t(5243),hn=z.ZP.div(w||(w=(0,k.Z)(["\n  height: 75vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),xn=function(){return(0,B.jsx)(hn,{children:(0,B.jsx)(fn.g4,{height:"150",width:"150",radius:"9",color:"black",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},bn=function(){var n=(0,U.wY)(),e=n.isFetching,t=n.error,r=(0,P.useState)(!1),o=(0,y.Z)(r,2),i=o[0],c=o[1],s=(0,P.useState)(!1),a=(0,y.Z)(s,2),u=a[0],l=a[1],d=function(n){switch(n){case"isOpenForm":c((function(n){return!n}));break;case"isOpenFilter":l((function(n){return!n}));break;default:throw new Error("Unknown component".concat(n))}};return(0,B.jsxs)(mn,{children:[(0,B.jsx)(T,{isOpenForm:i,isOpenFilter:u,toggle:d}),i&&(0,B.jsx)($,{toggle:d}),u&&(0,B.jsx)(pn,{}),e&&!t&&(0,B.jsx)(xn,{}),!e&&(0,B.jsx)(an,{})]})}}}]);
//# sourceMappingURL=395.fd4678ac.chunk.js.map