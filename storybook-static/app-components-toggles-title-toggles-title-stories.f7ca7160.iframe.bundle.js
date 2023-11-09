(self.webpackChunkui=self.webpackChunkui||[]).push([[846],{"./src/app/components/toggles-title/toggles-title.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>toggles_title_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var toggles_title_componentngResource=__webpack_require__("./src/app/components/toggles-title/toggles-title.component.scss?ngResource"),toggles_title_componentngResource_default=__webpack_require__.n(toggles_title_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let TogglesTitleComponent=class TogglesTitleComponent{constructor(){this.accionBtn=new core.EventEmitter,this.listado=[],this.focus=0}ngOnInit(){}accion(valor,i){this.focus=i,this.accionBtn.emit(valor)}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={accionBtn:[{type:core.Output}],listado:[{type:core.Input}]}};TogglesTitleComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-toggles-title",template:'<div class="grup-toggle-ti">\n    <div class="barr" [ngClass]="{\'right\': focus}"></div>\n    <div class="titles">\n      <div class="ti" *ngFor="let o of listado; let i = index" [ngClass]="{\'active\': i === focus}" (click)="accion(o.title, i)">{{o.title}}</div>\n    </div>\n  </div>',styles:[toggles_title_componentngResource_default()]})],TogglesTitleComponent);const toggles_title_stories={title:"Componentes/TogglesTitle",component:TogglesTitleComponent,tags:["autodocs"],render:args=>({props:{backgroundColor:null,...args}}),argTypes:{}},Primary={args:{listado:[{title:"Nacional"},{title:"Internacional"}]}}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/components/toggles-title/toggles-title.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.load-1 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 2rem;\n}\n.load-1 > * {\n  visibility: hidden;\n}\n.load-1::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-2 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 4rem;\n}\n.load-2 > * {\n  visibility: hidden;\n}\n.load-2::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-3 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 6rem;\n}\n.load-3 > * {\n  visibility: hidden;\n}\n.load-3::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-4 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 8rem;\n}\n.load-4 > * {\n  visibility: hidden;\n}\n.load-4::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-5 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 10rem;\n}\n.load-5 > * {\n  visibility: hidden;\n}\n.load-5::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-6 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 12rem;\n}\n.load-6 > * {\n  visibility: hidden;\n}\n.load-6::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-7 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 14rem;\n}\n.load-7 > * {\n  visibility: hidden;\n}\n.load-7::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-8 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 16rem;\n}\n.load-8 > * {\n  visibility: hidden;\n}\n.load-8::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-9 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 18rem;\n}\n.load-9 > * {\n  visibility: hidden;\n}\n.load-9::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-10 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 20rem;\n}\n.load-10 > * {\n  visibility: hidden;\n}\n.load-10::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-11 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 22rem;\n}\n.load-11 > * {\n  visibility: hidden;\n}\n.load-11::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-12 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 24rem;\n}\n.load-12 > * {\n  visibility: hidden;\n}\n.load-12::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-13 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 26rem;\n}\n.load-13 > * {\n  visibility: hidden;\n}\n.load-13::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-14 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 28rem;\n}\n.load-14 > * {\n  visibility: hidden;\n}\n.load-14::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-15 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 30rem;\n}\n.load-15 > * {\n  visibility: hidden;\n}\n.load-15::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-16 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 32rem;\n}\n.load-16 > * {\n  visibility: hidden;\n}\n.load-16::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-17 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 34rem;\n}\n.load-17 > * {\n  visibility: hidden;\n}\n.load-17::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-18 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 36rem;\n}\n.load-18 > * {\n  visibility: hidden;\n}\n.load-18::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-19 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 38rem;\n}\n.load-19 > * {\n  visibility: hidden;\n}\n.load-19::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-20 {\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 40rem;\n}\n.load-20 > * {\n  visibility: hidden;\n}\n.load-20::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-1 {\n  max-width: 50px;\n  min-width: 50px;\n  border-radius: 50px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 50px;\n}\n.load-circle-1 > * {\n  visibility: hidden;\n}\n.load-circle-1::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-2 {\n  max-width: 100px;\n  min-width: 100px;\n  border-radius: 100px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100px;\n}\n.load-circle-2 > * {\n  visibility: hidden;\n}\n.load-circle-2::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-3 {\n  max-width: 150px;\n  min-width: 150px;\n  border-radius: 150px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 150px;\n}\n.load-circle-3 > * {\n  visibility: hidden;\n}\n.load-circle-3::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-4 {\n  max-width: 200px;\n  min-width: 200px;\n  border-radius: 200px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 200px;\n}\n.load-circle-4 > * {\n  visibility: hidden;\n}\n.load-circle-4::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-5 {\n  max-width: 250px;\n  min-width: 250px;\n  border-radius: 250px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 250px;\n}\n.load-circle-5 > * {\n  visibility: hidden;\n}\n.load-circle-5::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-6 {\n  max-width: 300px;\n  min-width: 300px;\n  border-radius: 300px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 300px;\n}\n.load-circle-6 > * {\n  visibility: hidden;\n}\n.load-circle-6::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-7 {\n  max-width: 350px;\n  min-width: 350px;\n  border-radius: 350px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 350px;\n}\n.load-circle-7 > * {\n  visibility: hidden;\n}\n.load-circle-7::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-circle-8 {\n  max-width: 400px;\n  min-width: 400px;\n  border-radius: 400px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 400px;\n}\n.load-circle-8 > * {\n  visibility: hidden;\n}\n.load-circle-8::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-1 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 2rem;\n}\n.load-br-1 > * {\n  visibility: hidden;\n}\n.load-br-1::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-2 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 4rem;\n}\n.load-br-2 > * {\n  visibility: hidden;\n}\n.load-br-2::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-3 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 6rem;\n}\n.load-br-3 > * {\n  visibility: hidden;\n}\n.load-br-3::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-4 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 8rem;\n}\n.load-br-4 > * {\n  visibility: hidden;\n}\n.load-br-4::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-5 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 10rem;\n}\n.load-br-5 > * {\n  visibility: hidden;\n}\n.load-br-5::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-6 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 12rem;\n}\n.load-br-6 > * {\n  visibility: hidden;\n}\n.load-br-6::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-7 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 14rem;\n}\n.load-br-7 > * {\n  visibility: hidden;\n}\n.load-br-7::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-8 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 16rem;\n}\n.load-br-8 > * {\n  visibility: hidden;\n}\n.load-br-8::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-9 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 18rem;\n}\n.load-br-9 > * {\n  visibility: hidden;\n}\n.load-br-9::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-10 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 20rem;\n}\n.load-br-10 > * {\n  visibility: hidden;\n}\n.load-br-10::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-11 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 22rem;\n}\n.load-br-11 > * {\n  visibility: hidden;\n}\n.load-br-11::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-12 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 24rem;\n}\n.load-br-12 > * {\n  visibility: hidden;\n}\n.load-br-12::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-13 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 26rem;\n}\n.load-br-13 > * {\n  visibility: hidden;\n}\n.load-br-13::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-14 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 28rem;\n}\n.load-br-14 > * {\n  visibility: hidden;\n}\n.load-br-14::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-15 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 30rem;\n}\n.load-br-15 > * {\n  visibility: hidden;\n}\n.load-br-15::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-16 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 32rem;\n}\n.load-br-16 > * {\n  visibility: hidden;\n}\n.load-br-16::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-17 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 34rem;\n}\n.load-br-17 > * {\n  visibility: hidden;\n}\n.load-br-17::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-18 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 36rem;\n}\n.load-br-18 > * {\n  visibility: hidden;\n}\n.load-br-18::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-19 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 38rem;\n}\n.load-br-19 > * {\n  visibility: hidden;\n}\n.load-br-19::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.load-br-20 {\n  border-radius: 6px;\n  background: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 40rem;\n}\n.load-br-20 > * {\n  visibility: hidden;\n}\n.load-br-20::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateX(-100%);\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));\n  animation: shimmer 2s infinite;\n  content: "";\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.grup-toggle-ti {\n  height: 35px;\n  width: 270px;\n  border-radius: 12px;\n  background-color: #EFEFEF;\n  box-shadow: inset 0 1px 5px 0 rgba(173, 173, 173, 0.5);\n  position: relative;\n  cursor: pointer;\n}\n.grup-toggle-ti .barr {\n  height: 29px;\n  width: 132px;\n  border-radius: 9px;\n  background-color: #FFFFFF;\n  box-shadow: 0 2px 4px 0 rgba(197, 197, 197, 0.5);\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  transition: all 0.3s ease-in-out 0s;\n}\n.grup-toggle-ti .barr.right {\n  left: 135px;\n}\n.grup-toggle-ti .titles {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.grup-toggle-ti .titles .ti {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  font-family: "Barlow", Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgb(112,115,114);\n  line-height: 115%;\n}\n.grup-toggle-ti .titles .ti.active {\n  color: rgb(37,35,35);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);