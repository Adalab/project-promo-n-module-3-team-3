(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t(15),c=t.n(l),s=t(9),i=t(4),r=t(5),o=(t(22),t.p+"static/media/logo-awesome-profile-cards.a65df2b2.svg"),d=(t(23),t(0)),j=function(e){return Object(d.jsx)("header",{className:e.classHeader,children:Object(d.jsx)("div",{children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("img",{className:"cards",src:o,alt:"Logo de awesome profile cards",title:"Web del proyecto"})})})})};t(33),t(34);var h=function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"main__cards--section__links--item icon-circle",id:e.id,title:e.title,href:""===e.text?e.placeHolder:"".concat(e.goTo).concat(e.text),rel:"noopener noreferrer",target:"_blank",children:Object(d.jsx)("i",{className:"".concat(e.iconClass," icon")})})})},b=(t(35),{get:function(e,a){var t=localStorage.getItem(e);return null===t?a:JSON.parse(t)},set:function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}});var m=function(){return Object(d.jsxs)("button",{className:"main__cards--button",onClick:function(){b.clear("data"),window.location.reload(!0)},children:[Object(d.jsx)("i",{className:"far fa-trash-alt"})," Reset"]})};var u=function(e){return Object(d.jsxs)("section",{className:"main__cards",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("section",{className:"main__cards--section ".concat(e.data.palette),children:[Object(d.jsxs)("div",{className:"grid-sidebar",children:[Object(d.jsx)("div",{className:"main__cards--section__sidebar"}),Object(d.jsx)("h1",{className:"main__cards--section__title1",children:""===e.data.name?"Nombre Apellido":e.data.name}),Object(d.jsx)("h2",{className:"main__cards--section__title2",children:""===e.data.job?"Front-end developer":e.data.job})]}),Object(d.jsx)("div",{className:"main__cards--section__img profile__image",style:""===e.data.photo?{backgroundImage:"url('https://i1.wp.com/www.puntogeek.com/wp-content/uploads/2011/01/jabbascript.jpg?resize=527%2C348')"}:{backgroundImage:"url(".concat(e.data.photo,")")}}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"main__cards--section__links",children:[Object(d.jsx)(h,{id:"mobile_link",title:"Llamar",text:e.data.phone,placeHolder:"555-555-555",goTo:"tel:",iconClass:"fas fa-mobile-alt"}),Object(d.jsx)(h,{id:"mail_link",title:"Escribir email",text:e.data.email,placeHolder:"sally-hill@gmail.com",goTo:"mailto:",iconClass:"far fa-envelope"}),Object(d.jsx)(h,{id:"linkedin_link",title:"LinkedIn",text:e.data.linkedin,placeHolder:"sally.hill",goTo:"https://www.linkedin.com/in/",iconClass:"fab fa-linkedin-in"}),Object(d.jsx)(h,{id:"github_link",title:"GitHub",text:e.data.github,placeHolder:"sally.hill",goTo:"https://github.com/",iconClass:"fab fa-github-alt"})]})})]})]})},p=(t(36),t(37),function(e){return Object(d.jsxs)("div",{className:"section__title js_headerCollapsable",onClick:function(){"Comparte"===e.text?e.handlerCollapsableShare():"Rellena"===e.text?e.handlerCollapsableFill():"Dise\xf1a"===e.text&&e.handlerCollapsableDesign()},children:[Object(d.jsx)("i",{className:e.className}),Object(d.jsx)("h2",{className:"title",children:e.text}),Object(d.jsx)("i",{className:"fas ".concat("Dise\xf1a"===e.text?e.arrow:"Rellena"===e.text?e.arrow2:"Comparte"===e.text?e.arrow3:void 0," arrow js_arrow")})]})}),O=function(e){return Object(d.jsxs)("li",{className:e.classNamePalette,children:[Object(d.jsx)("input",{defaultChecked:e.defaultCheckedInfo,id:"palette",type:"radio",name:"color_palette",className:"input_palette",value:e.valuePalette,onChange:function(a){return e.handleInput(a.currentTarget.name,a.currentTarget.value)}}),Object(d.jsx)("div",{className:"colorOne palette"}),Object(d.jsx)("div",{className:"colorTwo palette"}),Object(d.jsx)("div",{className:"colorThree palette"})]})},f=function(e){return Object(d.jsxs)("fieldset",{children:[Object(d.jsx)(p,{className:"far fa-object-ungroup",text:"Dise\xf1a",handlerCollapsableDesign:e.handlerCollapsableDesign,arrow:e.arrow,collapsableDesign:e.collapsableDesign}),Object(d.jsxs)("div",{className:"js_content div_content ".concat(e.collapsableDesign),children:[Object(d.jsx)("label",{htmlFor:"color_palette",children:" Colores "}),Object(d.jsxs)("ul",{children:[Object(d.jsx)(O,{handleInput:e.handleInput,classNamePalette:"first_palette",valuePalette:"palette1",defaultCheckedInfo:!0}),Object(d.jsx)(O,{handleInput:e.handleInput,classNamePalette:"second_palette",valuePalette:"palette2",defaultCheckedInfo:!1}),Object(d.jsx)(O,{handleInput:e.handleInput,classNamePalette:"third_palette",valuePalette:"palette3",defaultCheckedInfo:!1}),Object(d.jsx)(O,{handleInput:e.handleInput,classNamePalette:"fourth_palette",valuePalette:"palette4",defaultCheckedInfo:!1}),Object(d.jsx)(O,{handleInput:e.handleInput,classNamePalette:"fifth_palette",valuePalette:"palette5",defaultCheckedInfo:!1})]})]})]})},x=(t(38),function(e){return fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))}),g=function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)("hidden"),i=Object(r.a)(s,2),o=i[0],j=i[1],h=Object(n.useState)("hidden"),b=Object(r.a)(h,2),m=b[0],u=b[1],O=Object(n.useState)(""),f=Object(r.a)(O,2),g=f[0],N=f[1],I=Object(n.useState)(""),w=Object(r.a)(I,2),v=w[0],_=w[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("fieldset",{children:[Object(d.jsx)(p,{className:"fas fa-share-alt",text:"Comparte",handlerCollapsableShare:e.handlerCollapsableShare,arrow3:e.arrow3,collapsableShare:e.collapsableShare}),Object(d.jsx)("div",{className:"js_content div_content  ".concat(e.collapsableShare),children:Object(d.jsxs)("button",{className:"button__card js_button_share",title:"Crear Tarjeta",target:"_blank",onClick:function(a){a.preventDefault(),x(e.data).then((function(e){c(e.cardURL),e.success?(j(""),u("hidden"),N(""),_("")):(j("hidden"),u(""),N("hidden"),_("hidden"))}))},children:[Object(d.jsx)("i",{className:"far fa-address-card"})," Crear tarjeta"]})})]}),Object(d.jsxs)("section",{className:"share__section ".concat(o," ").concat(g," js_share_twitter"),children:[Object(d.jsx)("h2",{className:"share__section--title js_sharetitle ",children:"La tarjeta ha sido creada"}),Object(d.jsx)("a",{className:"share__section--link js_parrafo_share",href:l,target:"blank",children:l}),Object(d.jsx)("h3",{className:"titlecompartir ".concat(g),children:"Compartir"}),Object(d.jsxs)("div",{className:"section_buttons",children:[Object(d.jsx)("button",{className:"share__section--button ".concat(v),children:Object(d.jsxs)("a",{className:"js_linktwitter linktwitter",target:"blank",href:"https://twitter.com/intent/tweet?url=".concat(l),children:[Object(d.jsx)("i",{className:"fab fa-twitter"})," Twitter"]})}),Object(d.jsx)("button",{className:"share__section--button ".concat(v),children:Object(d.jsxs)("a",{className:"js_linkFacebook linktwitter",target:"blank",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(l),children:[Object(d.jsx)("i",{className:"fab fa-facebook"})," Facebook"]})}),Object(d.jsx)("button",{className:"share__section--button ".concat(v),children:Object(d.jsxs)("a",{className:"js_linkLinkedin linktwitter",target:"blank",href:"https://www.linkedin.com/shareArticle?url=".concat(l),children:[Object(d.jsx)("i",{className:"fab fa-linkedin-in js-icon"}),"Linkedin"]})})]})]}),Object(d.jsxs)("section",{className:"share__section ".concat(m," js_share_twitter"),children:[Object(d.jsx)("h2",{className:"share__section--title js_sharetitle ",children:"Error al crear tarjeta:"}),Object(d.jsx)("p",{className:"share__section--link js_parrafo_share",children:"Por favor, revise los datos introducidos"})]})]})},N=(t(39),t(40),function(e){return Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsxs)("label",{htmlFor:e.htmlFor,className:"label",children:[e.text,Object(d.jsx)("span",{className:"span",children:"*"})]}),Object(d.jsx)("input",{type:e.type,placeholder:e.placeholder,name:e.name,id:e.id,className:e.className,value:e.value,required:!0,onChange:function(a){return e.handleInput(a.currentTarget.name,a.currentTarget.value)}})]})}),I=function(e){var a=Object(n.useRef)(),t=new FileReader;return t.addEventListener("load",(function(){e.handleImage(t.result)})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("label",{htmlFor:"image",className:"label",children:["Imagen de perfil",Object(d.jsx)("span",{className:"span",children:"*"})]}),Object(d.jsxs)("div",{className:"action",children:[Object(d.jsx)("label",{className:"action__upload-btn",htmlFor:"photo",children:"A\xf1adir Imagen"}),Object(d.jsx)("input",{ref:a,onChange:function(){var e=a.current.files[0];e&&t.readAsDataURL(e)},type:"file",name:"photo",id:"photo",className:"action__hiddenField js__profile-upload-btn",required:!0})]}),Object(d.jsx)("div",{className:"profile",children:Object(d.jsx)("div",{className:"AQUI profile__preview js__profile-preview",style:{backgroundImage:"url(".concat(e.data.photo,")")}})})]})},w=function(e){return Object(d.jsxs)("fieldset",{children:[Object(d.jsx)(p,{className:"far fa-keyboard",text:"Rellena",handlerCollapsableFill:e.handlerCollapsableFill,arrow2:e.arrow2,collapsableFill:e.collapsableFill}),Object(d.jsxs)("div",{className:"js_content div_content ".concat(e.collapsableFill),children:[Object(d.jsx)(N,{htmlFor:"name",text:"Nombre completo",type:"text",placeholder:"Ej. sally jill",name:"name",id:"name",className:"input js_inputtext",value:e.data.name,handleInput:e.handleInput}),Object(d.jsx)(N,{htmlFor:"job",text:"Puesto",type:"text",placeholder:"Ej. Front-end unicorn",name:"job",id:"job",className:"input js_inputtext",value:e.data.job,handleInput:e.handleInput}),Object(d.jsx)(I,{handleImage:e.handleImage,data:e.data}),Object(d.jsx)(N,{htmlFor:"email",text:"Email",type:"email",placeholder:"Ej. sally-hill@gmail.com",name:"email",id:"email",className:"input js_input_link",value:e.data.email,handleInput:e.handleInput}),Object(d.jsx)(N,{htmlFor:"phone",text:"Tel\xe9fono",type:"tel",placeholder:"Ej: 555-55-55-55",name:"phone",id:"phone",className:"input js_input_link",value:e.data.phone,handleInput:e.handleInput,handleImage:e.handleImage}),Object(d.jsx)(N,{htmlFor:"linkedin",text:"Linkedin",type:"text",placeholder:"Ej. sally.hill",name:"linkedin",id:"linkedin",className:"input js_input_link",value:e.data.linkedin,handleInput:e.handleInput}),Object(d.jsx)(N,{htmlFor:"github",text:"Github",type:"text",placeholder:"Ej: sally-hill",name:"github",id:"github",className:"input js_input_link",value:e.data.github,handleInput:e.handleInput})]})]})},v=function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)("hidden"),i=Object(r.a)(s,2),o=i[0],j=i[1],h=Object(n.useState)("hidden"),b=Object(r.a)(h,2),m=b[0],u=b[1],p=Object(n.useState)("fa-chevron-up"),O=Object(r.a)(p,2),x=O[0],N=O[1],I=Object(n.useState)("fa-chevron-down"),v=Object(r.a)(I,2),_=v[0],k=v[1],C=Object(n.useState)("fa-chevron-down"),A=Object(r.a)(C,2),S=A[0],F=A[1];return Object(d.jsx)("section",{className:"section_form",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},action:"#",className:"form js_form",children:[Object(d.jsx)(f,{handlerCollapsableDesign:function(){"hidden"===l?(c(""),N("fa-chevron-up")):(c("hidden"),N("fa-chevron-down"),j(""),k("fa-chevron-up")),u("hidden"),F("fa-chevron-down")},arrow:x,collapsableDesign:l,handleInput:e.handleInput,data:e.data}),Object(d.jsx)(w,{handlerCollapsableFill:function(){"hidden"===o?(j(""),k("fa-chevron-up")):(j("hidden"),k("fa-chevron-down"),u(""),F("fa-chevron-up")),c("hidden"),N("fa-chevron-down")},arrow2:_,collapsableFill:o,handleInput:e.handleInput,handleImage:e.handleImage,data:e.data}),Object(d.jsx)(g,{handlerCollapsableShare:function(){"hidden"===m?(u(""),F("fa-chevron-up")):(u("hidden"),F("fa-chevron-down")),c("hidden"),j("hidden"),N("fa-chevron-down"),k("fa-chevron-down")},arrow3:S,collapsableShare:m,data:e.data})]})})},_=(t(41),function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("p",{className:"footer__copyright",children:"JavaS the hutt \xa9 2021"}),Object(d.jsx)("a",{href:"https://adalab.es/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"footer__image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAABQCAYAAAAEEqmpAAAABGdBTUEAALGPC/xhBQAADQlJREFUeAHtXUtsY1cZPsdx4ggJyWWBhIRUR0iUFXjYUolElVqyYqrOMGkokkeobFjMRBULVok3CITKZCRY0SquhKYzzIwmLNCMZhNXwIYNhg1qhRqzQKJigVF52Intw/9f+0+uj8+5D9+nnf9K0bnn/Z/vnO9+53GvIwRfjEAMCFSPj8r4F0NRF7KIwoVsNTc6fgS6xao4WT6uvv+bvfgLX/wSmYiL38dpthAUUe5W3//tcfWD39XSrHje62IiznsP5tP+ilDqgAkZvHOYiMGx4pThEWBCBsSMiRgQKE4WCQEmpA98TEQfgDg6VgSYkBY4mYgWYDg4UQSYkBq8TEQNEPamigATcgw3EzHVcceVWRC48IRkIlpGBgdngsCFJSQTMZPxxpX6IHDhCMlE9BkRHJ0pAheGkEzETMcZVx4QgYUnJBMx4EjgZLlAYGEJyUTMxfhiI0IisHCEZCKGHAGcPFcILAwhmYi5GldszIwIzD0hmYgz9jxnyyUCc0tIJmIuxxMbFRGBuSMkEzFij3P2MQKr/ZYQqg6+To4wmRtCyhyBxqYsAALOD0idFG/CT2bcgObAT2fk6moLKeutz3+lkSurwBgmYt56ZEHsYUKG60gmYji8OHVIBJiQwQBjIgbDiVNFRIAJ6Q0gE9EbH46NGQEmpBlQJqIZFw5NGAEm5CTATMRJPNiXMgJMyBHgmRNxa2urcvfu3XaU/r+y9dp6kPwP7v6iGSRd2DSXL9fKh4eNSOdniENfFCt63UnZrNcTtR8Qg+Jqv6qXa/IXRb+t9/lFJ2SmRMTOWyqd/GHQW7kUZSBfubatTB1uCWvBoc2vimLY0AeDJb1v8CvXtg8KUrx3/+6dhm9iS4IrW9t7QoldPfrBvTuJ95HzIFOD3Qf33t3Q6w/qH5UxPAqaHtK1lFL1h79899CdxyFkb7kGfYTnkBV3XA7uEzuHzPTNmuLqyU0YZRV0UwS5igO+rwrHV669egsfBlHqRiWBNtSGBhJFKTfVvEBCOFJeDzqziMm2qpTyET7E3OW11jY6rS88v9967vk1OHy/DnFtd3zG94m9qZMZER0CKOepB29GiRtRCTFbB8mbqMhXr24HmlKZ6jhVBUfF8IFydWu7ZkqT57AR+eS6Y6NDyHStxYeYMxswVItvwOSVkKrbPfjcw7ePK2+/WTOYHjooMyKOVZDUCNYXqariGVBIIFUQR7OQkdSQCptLVZwgX+qqOILO50GcJ0KqXk/8+4MPRef3LdH/Z6eilDh49q03IxMyEyJOqCGNYp/OoGQJuWUkY1hVJjUkm+ZNFSfUkBoxQUwKTNwtF0unNb9asiSkm4CnH/1DNzUyITMhoqaG1Kh4VVGKOm504F+/t/KMkIUNmAPvQ2UdqlBzYTD0HmlhVq+uhpRwrlTRSLq4VVHuONgj/vAnpbhOWLldJdSX3H6v+zQJ6UNA3cwzQn7t4Gc1PdLLnzoRjWpIFiakirgji8cAsCu4A6RcA+U6pCon3eCDUFdDKmdeVNGohtQII0EpMqQrZcvBHvGHP9xZVoYNGClUJWTJIklChiSgbnrlz4PuwQuNnx5Xfv7jdT3S5C+aApMMc9RQWT+PIVXcS8qG8THJy7hbB6SpTdUzGoTNqXBXAKphXxnyjtOMVbHhypK/W6edgIDxGj2QYjnDVMNbsDvtmoXIMlRZmapWyvemwgIGICEhacP5L8VK4eZZBf5mupCA//nr34Rh+hm6vL/0exWYBRw9+9ZPmlIN6u3Xv9e0FZKqInqqIVmYkCpS8eTC2eWO6cmM2/hINEpncm1qSGlheOd6B9VTDakR8aliFTE9/xPgn77UULWmQ8OFRFHIiAroY6haVyNCHtkUMlUiWtaGeiNIFfXwWP2ojHAIXzcVejqUxsGCaW1rQ72cXK8VA5Es+DRdb/ss/sFJqTlLPlOeMIRMloC6dXZCpkbEQGpIdqekiqfdlUOq0u3Kgp2IfmpI5eRVFV/5xquXR+pElnq4gQjrkT9EVLF0chQieaCkXoRMl4C6udOETI2IAdWQLE5NFanCIK6HGnZM+XOpilLeMtlqDktVFau2g32zbcFD3YRU/+u26RwwjnVgcCtMKc8JmQoRvdTQtp2Nb9v4rdVMTUsyzKqGUtyGo5GmXnfeVBHf/EGbdDtxrWzvB3z9LdLVGmGD+DgYgd9yJTgTevz4ceWHH3781R/9fVD5zmlJVJaWLUakHgzYq3dSIaJdDRVtZzcMzS9bB74h8SxBzgMiYEYvNex3V/aFXKqbisqTKtpswbWy7VgBp7GjzR1T6wKEycIOvkx+/nfnUlEO1yCniZDl5dWTywFKDZwECfjkyZMDKQvH0JYaZvziJ8ri+595Tnz3U5/NkpAdqUT9mRe+fKn97TcaiRPRSw1p8C7LoXEQSzheSFIVbZ1u2sGzPhRADemcMs+q6KWG9NWIbfNKxLxWxK9egIwvm9gEX2QEPtg35acwEwEpjtyMCOkQUC4V1tqvv7GHL7mjPYkT0UsN6ZwKOwamRw0CyO1aCeBONMM9PiBsCrFcmNxK91VDqj/Hqmhrq5t8iaki4eNyx5+gmVSx6koW+jYIAfVCUyLkBAHb13ccApItiRIxiBqSIWmrInx1cQsUt0L1n7uqqX+naH0YjNWQ8o4eLPlbKwZRQ2qDFBLWu4YrZlUc11DRa4L6JwaoHm/zz0JAvayECOlJQLIhUSLa1BDVj9SQDElLFfHhcPXa9iOc9lLdE66mavhVhiVtx1kbTmQGj5afom2KRPFJura63WpI9fd7yw24N5Ah4lqRKhi740/GylqwUFL8UQ/z8sdBQL38mAgZiIBUd2KvuI3U8OQGVeR2beqH4fDBbs2dFu+RCDA9rOtKpafz8jsbDmrwdSFOavAgmBoAo7zKeR/SXY4qKNjuBwv0S1NDisYHDLzS1YQ86xSGLpTgvG1D6zF3nNd9kC19KLttKxcHPHyqU9HrAAzaDwy/KIDrXajzNuxa7+p5xmvF5lR4iACc5vdFAW2aLh/KMa3PTcUjAeHDYihD1kzxcYQhIfHvT//tiF//6yPRHpwGKRYJeFsUC/v69NMrc2JEdNTQ8E4pDADrT1Qg0eAd0AYMrJpu9Hh6eF0Pt/qho+EnNM47Ww0hKZRsvzpFqSbKH5F3uG7IYlZDSoiqqKbzjZWpQckCuZYB684LXy40wd9wh9E91mlqtUkNKQ8qPRyw40NUe2CNVFGfzVA+o6uGR9APZ1Hwjq71gqi2/tMZeuI0CKjXGZCQMxGQ6kpkauq1NrSpIRlki4fBlOQOakcOxcaU4trWRRY1pDbkZa0YZm1ItqPrvBgPbXSHnd3bMDlLEOFGqR1b7iSmoLa6bOGWKWuoKait7ESI6LU2nBrsmmUYj6qpBTte66aJKXHwMIeE9+/fabmzeLwY7a2GVEgO1oph1oZkNrnj9W+H/OduvGtFKhf73KSGeSAg2UjumJCdb37y03U6hggzDaVy3G7sRIyihmRYWqqInY/fJ+okdOywPfl91JDakLUqzqqGZH+6qqj2H967M7EsyCMBx9h0YH1bL5VW1n5w7Vt7UQlIeMdOxChqSEYlqYq4DoEtgX18uwM73xlwVPHYjayGVF6GqhhFDcn8pFURlhuH+NU+frBNdT59+rSqvwlDcRm7ZwTc3Hxpb2NjdBAfl02xb9bIgThUS4WmbuCgW5yY+unxuh+/F4QfrH1HD4fOm76gM6cDp0NMP2w7nUoITNeXxaky5WDYMRHXVAaGOTuoW69NlwNxOHNwl4W/swp1NjFf2AvtcufBsqXsX3eH0f192NWlez8X7YPjmw3oz7KeFjFyh/Whf6G/ptrqTuO+x/Tu9oMCrku5tDscqnWfTTV3MWncIwFvr66u7MdNPrfx0u3he0YgbQSIgDBLWU+7bp/6UiEg2cBEJCTYTRUBJuAk3EzESTzYlzACOSYgtFw1SqXSTpJTUBu8TEQbMhweKwJAQHgTZukgh1NQaKdq4P/h2NzcbMfa6BCFMRFDgMVJwyMwImCyr6KFt4pyZE9AsoSJSEiwGysCTMBwcDIRw+HFqX0QYAL6AGSJZiJagOHgcAgcHR2Ve70efqlSC5czjdT5mYLaWhv7gb6tIg5fbAS63S78v8NCLV+tzD8BCS8mIiHB7gIhMD8EJNCZiIQEuwuAwPwRkEBnIhIS7M4xAvNLQAKdiUhIsDuHCMw/AQl0JiIhwe4cIbA4BCTQmYiEBLtzgMDiEZBAZyISEuzmGIHFJSCBzkQkJNjNIQKyWSiInRdffCnUR+U5bIivSUxEX4g4QfoIyKaCf3UNX0M00687mxqZiNngzrUaEbh4BCQYmIiEBLsZInBxCUigMxEJCXYzQIAJSKAzEQkJdlNEgAmog81E1BFhf4IIMAFt4DIRbchweIwIMAH9wGQi+iHE8REQYAIGBY+JGBQpThcCASZgCLCcpP8HY6u482HbREEAAAAASUVORK5CYII=",alt:"Adalab",title:"go to Adalab"})})]})}),k=t(2),C=(t(42),function(){return Object(d.jsx)("main",{children:Object(d.jsxs)("section",{className:"main__landing--box",children:[Object(d.jsx)("h1",{className:"main__landing--title",children:"Crea tu tarjeta de visita"}),Object(d.jsx)("h3",{className:"main__landing--subtitle",children:"Crea mejores contactos profesionales de forma f\xe1cil y c\xf3moda"}),Object(d.jsxs)("div",{className:"main__landing--rectangule",children:[Object(d.jsxs)("article",{className:"icon__designs",children:[Object(d.jsx)("i",{className:"far fa-object-ungroup"}),Object(d.jsx)("i",{className:"far fa-keyboard"}),Object(d.jsx)("i",{className:"fas fa-share-alt"})]}),Object(d.jsxs)("article",{className:"text__designs",children:[Object(d.jsx)("h3",{className:"desings",children:"Dise\xf1a"}),Object(d.jsx)("h3",{className:"fill",children:"Rellena"}),Object(d.jsx)("h3",{className:"share",children:"Comparte"})]})]}),Object(d.jsx)(s.b,{to:"/cards",children:Object(d.jsx)("button",{className:"main__landing--button text__button",children:"comenzar"})})]})})});var A=function(){var e=Object(n.useState)(b.get("data",{palette:"palette1",name:"",job:"",photo:"https://i1.wp.com/www.puntogeek.com/wp-content/uploads/2011/01/jabbascript.jpg?resize=527%2C348",phone:"",email:"",linkedin:"",github:""})),a=Object(r.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){b.set("data",t)}),[t]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)(k.c,{children:[Object(d.jsxs)(k.a,{exact:!0,path:"/",children:[Object(d.jsx)(j,{classHeader:"header_index header"}),Object(d.jsx)(C,{})]}),Object(d.jsxs)(k.a,{path:"/cards",children:[Object(d.jsx)(j,{classHeader:"header_cards header"}),Object(d.jsxs)("main",{className:"main_grid",children:[Object(d.jsx)(u,{data:t}),Object(d.jsx)(v,{data:t,handleInput:function(e,a){"name"===e?l(Object(i.a)(Object(i.a)({},t),{},{name:a})):"job"===e?l(Object(i.a)(Object(i.a)({},t),{},{job:a})):"phone"===e?l(Object(i.a)(Object(i.a)({},t),{},{phone:a})):"email"===e?l(Object(i.a)(Object(i.a)({},t),{},{email:a})):"linkedin"===e?l(Object(i.a)(Object(i.a)({},t),{},{linkedin:a})):"github"===e?l(Object(i.a)(Object(i.a)({},t),{},{github:a})):"color_palette"===e&&l(Object(i.a)(Object(i.a)({},t),{},{palette:a}))},handleImage:function(e){l(Object(i.a)(Object(i.a)({},t),{},{photo:e}))}})]})]}),Object(d.jsx)(k.a,{children:Object(d.jsx)("h2",{children:"P\xe1gina no encontrada."})})]}),Object(d.jsx)(_,{})]})};c.a.render(Object(d.jsxs)(s.a,{children:[" ",Object(d.jsx)(A,{})," "]}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d034972d.chunk.js.map