(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{289:function(t,e,r){var content=r(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("2f376f96",content,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";r.r(e);var n={props:{img:{type:String,required:!0}},data:function(){return{first_name:"",lastname:"",email:"",termsState:!1,validated:!1}},computed:{termsError:function(){return this.validated&&!this.termsState}},methods:{handleTermsState:function(){this.validated=!1},checkForm:function(t){t.preventDefault();var input="w-full shadow-sm my-2 p-2.5 text-sm rounded-lg outline-0 bg-gray-50 border border-gray-300 text-gray-900 focus:border-sc-purple",e="w-full shadow-sm my-2 p-2.5 text-sm rounded-lg outline-0 bg-red-50 border border-red-500 text-red-900 placeholder-red-700";if(this.first_name&&this.email&&this.termsState)return this.$refs.firstname.classList=[input],this.$refs.adressemail.classList=[input],this.first_name="",this.lastname="",this.email="",this.termsState=!1,!0;this.first_name?this.$refs.firstname.classList=[input]:this.$refs.firstname.classList=[e],this.email?this.$refs.adressemail.classList=[input]:this.$refs.adressemail.classList=[e],!this.termsState&&(this.validated=!0)}}},l=(r(292),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-6 bg-[#f8f8f8]",attrs:{id:"sectionContact"}},[r("div",{staticClass:"container mx-auto px-4 py-8"},[r("h2",{staticClass:"sc-title sc-text-black text-center"},[t._v("Contact Us")]),t._v(" "),r("nuxt-picture",{staticClass:"mx-auto mt-2",attrs:{format:"webp",src:"/images/icons/line-titles.svg",alt:"line","img-attrs":{class:"m-auto"}}}),t._v(" "),r("div",{staticClass:"content-contact mt-8"},[r("div",{staticClass:"flex flex-wrap md:justify-center mt-4"},[r("div",{staticClass:"lg:basis-1/2 flex items-center"},[r("div",{staticClass:"p-6 sm:p-12"},[r("p",{staticClass:"title"},[t._v("Interested in our API & Integration Services?")]),t._v(" "),r("p",{staticClass:"mt-4"},[t._v("\n              Want to learn more? Please fill out the form below and gives\n              more details about your migration project.\n            ")]),t._v(" "),r("form",{staticClass:"mt-4",attrs:{action:"",method:"POST"},on:{submit:t.checkForm}},[r("div",{staticClass:"grid grid-cols-2 gap-4"},[r("div",{staticClass:"input-group"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],ref:"firstname",staticClass:"\n                      w-full\n                      shadow-sm\n                      my-2\n                      p-2.5\n                      text-sm\n                      rounded-lg\n                      outline-0\n                      bg-gray-50\n                      border border-gray-300\n                      text-gray-900\n                      focus:border-sc-purple\n                    ",attrs:{id:"firstname",type:"text",name:"firstname"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"input-group"},[r("label",{staticClass:"input-label",attrs:{for:"firstname"}},[t._v("Last Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"\n                      w-full\n                      shadow-sm\n                      my-2\n                      p-2.5\n                      text-sm\n                      rounded-lg\n                      outline-0\n                      bg-gray-50\n                      border border-gray-300\n                      text-gray-900\n                      focus:border-sc-purple\n                    ",attrs:{id:"lastname",type:"text",name:"lastname"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"grid grid-cols-2 gap-4"},[r("div",{staticClass:"input-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"adressemail",staticClass:"\n                      w-full\n                      shadow-sm\n                      my-2\n                      p-2.5\n                      text-sm\n                      rounded-lg\n                      outline-0\n                      bg-gray-50\n                      border border-gray-300\n                      text-gray-900\n                      focus:border-sc-purple\n                    ",attrs:{id:"email",type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"grid grid-cols-1"},[r("label",{staticClass:"content-checkbox mt-4",attrs:{for:"privacy"}},[t._v("\n                  By continuing, you agree to our\n                  "),r("RouterLink",{staticClass:"sc-text-purple font-bold hover:underline",attrs:{to:"/privacy-policy",target:"_blank"}},[t._v("Privacy Policy")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.termsState,expression:"termsState"}],attrs:{id:"privacy",type:"checkbox",name:"privacy"},domProps:{checked:Array.isArray(t.termsState)?t._i(t.termsState,null)>-1:t.termsState},on:{change:[function(e){var r=t.termsState,n=e.target,l=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&(t.termsState=r.concat([null])):o>-1&&(t.termsState=r.slice(0,o).concat(r.slice(o+1)))}else t.termsState=l},t.handleTermsState]}}),t._v(" "),r("span",{staticClass:"checkmark"})],1),t._v(" "),t.termsError?r("p",{staticClass:"for-error terms-error",staticStyle:{color:"red"}},[t._v("\n                  You have to agree the\n                  "),r("RouterLink",{staticClass:"sc-text-red font-bold hover:underline",attrs:{to:"/privacy-policy",target:"_blank"}},[t._v("Privacy Policy")]),t._v("\n                  condition.\n                ")],1):t._e()]),t._v(" "),r("button",{staticClass:"sc-btn-purple btn-center-out",attrs:{type:"submit",href:"#"}},[t._v("\n                Contact Us\n              ")])])])]),t._v(" "),r("div",{staticClass:"lg:basis-1/2 hidden lg:block"},[r("nuxt-picture",{staticClass:"w-full",attrs:{format:"webp",src:t.img,alt:"contact"}})],1)])])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"input-label",attrs:{for:"firstname"}},[t._v("First Name "),r("span",{staticClass:"text-red-600"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"input-label",attrs:{for:"email"}},[t._v("Email "),r("span",{staticClass:"text-red-600"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group"},[r("label",{staticClass:"input-label",attrs:{for:"phone"}},[t._v("Phone No.")]),t._v(" "),r("input",{staticClass:"\n                      w-full\n                      shadow-sm\n                      my-2\n                      p-2.5\n                      text-sm\n                      rounded-lg\n                      outline-0\n                      bg-gray-50\n                      border border-gray-300\n                      text-gray-900\n                      focus:border-sc-purple\n                    ",attrs:{id:"phone",type:"text",name:"phone"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-1"},[r("label",{staticClass:"input-label",attrs:{for:"projectDetails"}},[t._v("Project Details")]),t._v(" "),r("textarea",{staticClass:"\n                    w-full\n                    shadow-sm\n                    my-2\n                    p-2.5\n                    text-sm\n                    rounded-lg\n                    outline-0\n                    bg-gray-50\n                    border border-gray-300\n                    text-gray-900\n                    focus:border-sc-purple\n                  ",attrs:{id:"projectDetails",name:"projectDetails",rows:"3"}})])}],!1,null,"b1ae5522",null);e.default=component.exports},292:function(t,e,r){"use strict";r(289)},293:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,".content-contact[data-v-b1ae5522]{background-color:var(--sc-white);box-shadow:0 0 50px rgba(var(--sc-rgb-purple),.3);width:100%;margin:2rem auto;border-radius:15px}@media (min-width:992px){.content-contact[data-v-b1ae5522]{width:80%}}.title[data-v-b1ae5522]{font-size:1.5rem;font-weight:700;line-height:1}@media (min-width:360px){.title[data-v-b1ae5522]{font-size:2rem}}@media (min-width:575px){.title[data-v-b1ae5522]{font-size:2.5rem}}.input-label[data-v-b1ae5522]{font-weight:700;color:var(--sc-black);padding:.5rem 0}",""]),n.locals={},t.exports=n}}]);