(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(2),c=t(6),s=t.n(c),n=t(1),i=t(3),r=(t(11),t.p+"static/media/logo-awesome-profile-cards.6f544af3.svg"),o=(t(12),t(0)),d=function(){return Object(o.jsx)("header",{className:"header_cards header",children:Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"http://beta.adalab.es/project-promo-n-module-2-team-2/",children:Object(o.jsx)("img",{className:"cards",src:r,alt:"Logo de awesome profile cards",title:"Web del proyecto"})})})})};t(5);var j=function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"main__cards--section__links--item icon-circle",id:e.id,title:e.title,href:""===e.text?e.placeHolder:"".concat(e.goTo).concat(e.text),rel:"noopener noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"".concat(e.iconClass," icon")})})})};var h=function(e){return Object(o.jsxs)("section",{className:"main__cards",children:[Object(o.jsxs)("button",{className:"main__cards--button",children:[Object(o.jsx)("i",{className:"far fa-trash-alt"})," Reset"]}),Object(o.jsxs)("section",{className:"main__cards--section ".concat(e.data.palette),children:[Object(o.jsxs)("div",{className:"grid-sidebar",children:[Object(o.jsx)("div",{className:"main__cards--section__sidebar"}),Object(o.jsx)("h1",{className:"main__cards--section__title1",children:""===e.data.name?"Nombre Apellido":e.data.name}),Object(o.jsx)("h2",{className:"main__cards--section__title2",children:""===e.data.job?"Front-end developer":e.data.job})]}),Object(o.jsx)("div",{className:"main__cards--section__img profile__image"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"main__cards--section__links",children:[Object(o.jsx)(j,{id:"mobile_link",title:"Llamar",text:e.data.phone,placeHolder:"555-555-555",goTo:"tel:",iconClass:"fas fa-mobile-alt"}),Object(o.jsx)(j,{id:"mail_link",title:"Escribir email",text:e.data.email,placeHolder:"sally-hill@gmail.com",goTo:"mailto:",iconClass:"far fa-envelope"}),Object(o.jsx)(j,{id:"linkedin_link",title:"LinkedIn",text:e.data.linkedin,placeHolder:"sally.hill",goTo:"https://www.linkedin.com/in/",iconClass:"fab fa-linkedin-in"}),Object(o.jsx)(j,{id:"github_link",title:"GitHub",text:e.data.github,placeHolder:"sally.hill",goTo:"https://github.com/",iconClass:"fab fa-github-alt"})]})})]})]})},b=(t(14),t(15),function(e){return Object(o.jsxs)("div",{className:"section__title js_headerCollapsable",onClick:function(){"Comparte"===e.text?e.handlerCollapsableShare():"Rellena"===e.text?e.handlerCollapsableFill():"Dise\xf1a"===e.text&&e.handlerCollapsableDesign()},children:[Object(o.jsx)("i",{className:e.className}),Object(o.jsx)("h2",{className:"title",children:e.text}),Object(o.jsx)("i",{className:"fas ".concat("Dise\xf1a"===e.text?e.arrow:"Rellena"===e.text?e.arrow2:"Comparte"===e.text?e.arrow3:void 0," arrow js_arrow")})]})}),m=function(e){var a=function(a){return e.handleInput(a.currentTarget.name,a.currentTarget.value)};return Object(o.jsxs)("fieldset",{children:[Object(o.jsx)(b,{className:"far fa-object-ungroup",text:"Dise\xf1a",handlerCollapsableDesign:e.handlerCollapsableDesign,arrow:e.arrow,collapsableDesign:e.collapsableDesign}),Object(o.jsxs)("div",{className:"js_content div_content ".concat(e.collapsableDesign),children:[Object(o.jsx)("label",{htmlFor:"color_palette",children:" Colores "}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{className:"first_palette",children:[Object(o.jsx)("input",{defaultChecked:!0,id:"palette",type:"radio",name:"color_palette",className:"input_palette",value:"palette1",onChange:a}),Object(o.jsx)("div",{className:"colorOne palette"}),Object(o.jsx)("div",{className:"colorTwo palette"}),Object(o.jsx)("div",{className:"colorThree palette"})]}),Object(o.jsxs)("li",{className:"second_palette",children:[Object(o.jsx)("input",{id:"palette",type:"radio",name:"color_palette",className:"input_palette",value:"palette2",onChange:a}),Object(o.jsx)("div",{className:"colorOne palette"}),Object(o.jsx)("div",{className:"colorTwo palette"}),Object(o.jsx)("div",{className:"colorThree palette"})]}),Object(o.jsxs)("li",{className:"third_palette",children:[Object(o.jsx)("input",{id:"palette",type:"radio",name:"color_palette",className:"input_palette",value:"palette3",onChange:a}),Object(o.jsx)("div",{className:"colorOne palette"}),Object(o.jsx)("div",{className:"colorTwo palette"}),Object(o.jsx)("div",{className:"colorThree palette"})]}),Object(o.jsxs)("li",{className:"fourth_palette",children:[Object(o.jsx)("input",{id:"palette",type:"radio",name:"color_palette",className:"input_palette",value:"palette4",onChange:a}),Object(o.jsx)("div",{className:"colorOne palette"}),Object(o.jsx)("div",{className:"colorTwo palette"}),Object(o.jsx)("div",{className:"colorThree palette"})]}),Object(o.jsxs)("li",{className:"fifth_palette",children:[Object(o.jsx)("input",{id:"palette",type:"radio",name:"color_palette",className:"input_palette",value:"palette5",onChange:a}),Object(o.jsx)("div",{className:"colorOne palette"}),Object(o.jsx)("div",{className:"colorTwo palette"}),Object(o.jsx)("div",{className:"colorThree palette"})]})]})]})]})},p=(t(16),function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)(b,{className:"fas fa-share-alt",text:"Comparte",handlerCollapsableShare:e.handlerCollapsableShare,arrow3:e.arrow3,collapsableShare:e.collapsableShare}),Object(o.jsx)("div",{className:"js_content div_content  ".concat(e.collapsableShare),children:Object(o.jsxs)("button",{className:"button__card js_button_share",children:[Object(o.jsx)("i",{className:"far fa-address-card"})," Crear tarjeta"]})})]}),Object(o.jsxs)("section",{className:"share__section hidden js_share_twitter",children:[Object(o.jsx)("h2",{className:"share__section--title js_sharetitle"}),Object(o.jsx)("a",{className:"share__section--link js_parrafo_share",target:"blank"}),Object(o.jsx)("h3",{className:"titlecompartir",children:"Compartir"}),Object(o.jsxs)("div",{className:"section_buttons",children:[Object(o.jsx)("button",{className:"share__section--button",children:Object(o.jsxs)("a",{className:"js_linktwitter linktwitter",target:"blank",href:"https://twitter.com/",children:[Object(o.jsx)("i",{className:"fab fa-twitter"})," Twitter"]})}),Object(o.jsx)("button",{className:"share__section--button",children:Object(o.jsxs)("a",{className:"js_linkFacebook linktwitter",target:"blank",href:"https://es-es.facebook.com/",children:[Object(o.jsx)("i",{className:"fab fa-facebook"})," Facebook"]})}),Object(o.jsx)("button",{className:"share__section--button",children:Object(o.jsxs)("a",{className:"js_linkLinkedin linktwitter",target:"blank",href:"https://www.linkedin.com/in/",children:[Object(o.jsx)("i",{className:"fab fa-linkedin-in js-icon"})," ","Linkedin"]})})]})]})]})}),u=(t(17),t(18),function(e){return Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsxs)("label",{htmlFor:e.htmlFor,className:"label",children:[e.text,Object(o.jsx)("span",{className:"span",children:"*"})]}),Object(o.jsx)("input",{type:e.type,placeholder:e.placeholder,name:e.name,id:e.id,className:e.className,value:e.value,required:!0,onChange:function(a){return e.handleInput(a.currentTarget.name,a.currentTarget.value)}})]})}),O=function(e){return Object(o.jsxs)("fieldset",{children:[Object(o.jsx)(b,{className:"far fa-keyboard",text:"Rellena",handlerCollapsableFill:e.handlerCollapsableFill,arrow2:e.arrow2,collapsableFill:e.collapsableFill}),Object(o.jsxs)("div",{className:"js_content div_content ".concat(e.collapsableFill),children:[Object(o.jsx)(u,{htmlFor:"name",text:"Nombre completo",type:"text",placeholder:"Ej. sally jill",name:"name",id:"name",className:"input js_inputtext",value:e.data.name,handleInput:e.handleInput}),Object(o.jsx)(u,{htmlFor:"job",text:"Puesto",type:"text",placeholder:"Ej. Front-end unicorn",name:"job",id:"job",className:"input js_inputtext",value:e.data.job,handleInput:e.handleInput}),Object(o.jsxs)("label",{htmlFor:"image",className:"label",children:["Imagen de perfil",Object(o.jsx)("span",{className:"span",children:"*"})]}),Object(o.jsxs)("div",{className:"action",children:[Object(o.jsx)("label",{className:"action__upload-btn",htmlFor:"photo",children:"A\xf1adir Imagen"}),Object(o.jsx)("input",{type:"file",name:"photo",id:"photo",className:"action__hiddenField js__profile-upload-btn",required:!0})]}),Object(o.jsx)("div",{className:"profile",children:Object(o.jsx)("div",{className:"profile__preview js__profile-preview"})}),Object(o.jsx)(u,{htmlFor:"email",text:"Email",type:"email",placeholder:"Ej. sally-hill@gmail.com",name:"email",id:"email",className:"input js_input_link",value:e.data.email,handleInput:e.handleInput}),Object(o.jsx)(u,{htmlFor:"phone",text:"Tel\xe9fono",type:"tel",placeholder:"Ej: 555-55-55-55",name:"phone",id:"phone",className:"input js_input_link",value:e.data.phone,handleInput:e.handleInput}),Object(o.jsx)(u,{htmlFor:"linkedin",text:"Linkedin",type:"text",placeholder:"Ej. sally.hill",name:"linkedin",id:"linkedin",className:"input js_input_link",value:e.data.linkedin,handleInput:e.handleInput}),Object(o.jsx)(u,{htmlFor:"github",text:"Github",type:"text",placeholder:"Ej: sally-hill",name:"github",id:"github",className:"input js_input_link",value:e.data.github,handleInput:e.handleInput})]})]})},x=function(e){var a=Object(l.useState)(""),t=Object(i.a)(a,2),c=t[0],s=t[1],n=Object(l.useState)("hidden"),r=Object(i.a)(n,2),d=r[0],j=r[1],h=Object(l.useState)("hidden"),b=Object(i.a)(h,2),u=b[0],x=b[1],f=Object(l.useState)("fa-chevron-up"),N=Object(i.a)(f,2),g=N[0],I=N[1],v=Object(l.useState)("fa-chevron-down"),w=Object(i.a)(v,2),C=w[0],k=w[1],_=Object(l.useState)("fa-chevron-down"),A=Object(i.a)(_,2),F=A[0],T=A[1];return Object(o.jsx)("section",{className:"section_form",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},action:"#",className:"form js_form",children:[Object(o.jsx)(m,{handlerCollapsableDesign:function(){"hidden"===c?(s(""),I("fa-chevron-up")):(s("hidden"),I("fa-chevron-down"),j(""),k("fa-chevron-up")),x("hidden"),T("fa-chevron-down")},arrow:g,collapsableDesign:c,handleInput:e.handleInput}),Object(o.jsx)(O,{handlerCollapsableFill:function(){"hidden"===d?(j(""),k("fa-chevron-up")):(j("hidden"),k("fa-chevron-down"),x(""),T("fa-chevron-up")),s("hidden"),I("fa-chevron-down")},arrow2:C,collapsableFill:d,handleInput:e.handleInput,data:e.data}),Object(o.jsx)(p,{handlerCollapsableShare:function(){"hidden"===u?(x(""),T("fa-chevron-up")):(x("hidden"),T("fa-chevron-down")),s("hidden"),j("hidden"),I("fa-chevron-down"),k("fa-chevron-down")},arrow3:F,collapsableShare:u})]})})},f=(t(19),function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("p",{className:"footer__copyright",children:"JavaS the hutt \xa9 2021"}),Object(o.jsx)("a",{href:"https://adalab.es/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"footer__image",src:"data:image/png;base64,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",alt:"Adalab",title:"go to Adalab"})})]})});var N=function(){var e=Object(l.useState)({palette:"palette1",name:"",job:"",image:"",phone:"",email:"",linkedin:"",github:""}),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("main",{className:"main_grid",children:[Object(o.jsx)(h,{data:t}),Object(o.jsx)(x,{data:t,handleInput:function(e,a){"name"===e?c(Object(n.a)(Object(n.a)({},t),{},{name:a})):"job"===e?c(Object(n.a)(Object(n.a)({},t),{},{job:a})):"phone"===e?c(Object(n.a)(Object(n.a)({},t),{},{phone:a})):"email"===e?c(Object(n.a)(Object(n.a)({},t),{},{email:a})):"linkedin"===e?c(Object(n.a)(Object(n.a)({},t),{},{linkedin:a})):"github"===e?c(Object(n.a)(Object(n.a)({},t),{},{github:a})):"color_palette"===e&&c(Object(n.a)(Object(n.a)({},t),{},{palette:a}))}})]}),Object(o.jsx)(f,{})]})};s.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.943d30e1.chunk.js.map