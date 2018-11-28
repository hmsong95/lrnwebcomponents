!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/iron-pages/iron-pages.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/iron-selector/iron-selector.js"),require("@polymer/paper-toast/paper-toast.js"),require("@polymer/paper-styles/paper-styles.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-listbox/paper-listbox.js"),require("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),require("@polymer/paper-item/paper-item.js"),require("@polymer/app-route/app-route.js"),require("@polymer/app-route/app-location.js"),require("@lrnwebcomponents/lrnsys-button/lrnsys-button.js"),require("@lrnwebcomponents/elmsln-loading/elmsln-loading.js"),require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/iron-image/iron-image.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-icon/iron-icon.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/iron-ajax/iron-ajax.js","@polymer/iron-pages/iron-pages.js","@polymer/iron-list/iron-list.js","@polymer/iron-selector/iron-selector.js","@polymer/paper-toast/paper-toast.js","@polymer/paper-styles/paper-styles.js","@polymer/paper-button/paper-button.js","@polymer/paper-listbox/paper-listbox.js","@polymer/paper-dropdown-menu/paper-dropdown-menu.js","@polymer/paper-item/paper-item.js","@polymer/app-route/app-route.js","@polymer/app-route/app-location.js","@lrnwebcomponents/lrnsys-button/lrnsys-button.js","@lrnwebcomponents/elmsln-loading/elmsln-loading.js","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@polymer/paper-card/paper-card.js","@polymer/iron-image/iron-image.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-icon/iron-icon.js"],n):n(e.LrnappCis={},e.polymer_dom_js,null,null,null,null,null,null,null,null,null,null,null,null,null,null,e.polymerLegacy_js)}(this,function(e,n,r,a,t,i,o,s,l,p,d,c,m,u,g,y,h){"use strict";function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(){var e=b(['\n    <style include="materializecss-styles"></style>\n    <style>\n       :host {\n        display: inline-flex;\n      }\n      :host([size="micro"]) {\n        transform: scale(.5);\n      }\n      :host([size="small"]) {\n        transform: scale(.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n      .card-actions .card-action-details{\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(.8);\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #EEEEEE;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .name, .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .title {\n        font-size: 11.2px;\n        font-weight: 400;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .course-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .course-icon:hover,\n      .course-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .link {\n        font-size: 16px;\n        line-height: 16px;\n      }\n\n      .course-info {\n        width: 100%;\n      }\n      .course-preview {\n        height: 160px;\n      }\n      lrndesign-avatar {\n        margin: -16px 8px 0 0;\n        position: absolute;\n        right: 0;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="course-preview">\n          <iron-icon class="course-icon" icon="[[icon]]" hidden$="[[!icon]]"></iron-icon>\n          <iron-image style="width:100%; height:100%; background-color: lightgray;" sizing="cover" preload="" fade="" src="[[image]]" hidden$="[[!image]]"></iron-image>\n        </div>\n        <lrndesign-avatar label="[[name]]" jdenticon="" color="[[color]] darken-4">\n        </lrndesign-avatar>\n        <div class="course-info">\n          <div class="divider"></div>\n          <div class="name">[[name]]</div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions" hidden="">\n        <div class="card-action-details">\n        </div>\n      </div>\n    </paper-card>\n'],['\n    <style include="materializecss-styles"></style>\n    <style>\n       :host {\n        display: inline-flex;\n      }\n      :host([size="micro"]) {\n        transform: scale(.5);\n      }\n      :host([size="small"]) {\n        transform: scale(.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n      .card-actions .card-action-details{\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(.8);\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #EEEEEE;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .name, .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .title {\n        font-size: 11.2px;\n        font-weight: 400;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .course-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .course-icon:hover,\n      .course-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .link {\n        font-size: 16px;\n        line-height: 16px;\n      }\n\n      .course-info {\n        width: 100%;\n      }\n      .course-preview {\n        height: 160px;\n      }\n      lrndesign-avatar {\n        margin: -16px 8px 0 0;\n        position: absolute;\n        right: 0;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="course-preview">\n          <iron-icon class="course-icon" icon="[[icon]]" hidden\\$="[[!icon]]"></iron-icon>\n          <iron-image style="width:100%; height:100%; background-color: lightgray;" sizing="cover" preload="" fade="" src="[[image]]" hidden\\$="[[!image]]"></iron-image>\n        </div>\n        <lrndesign-avatar label="[[name]]" jdenticon="" color="[[color]] darken-4">\n        </lrndesign-avatar>\n        <div class="course-info">\n          <div class="divider"></div>\n          <div class="name">[[name]]</div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions" hidden="">\n        <div class="card-action-details">\n        </div>\n      </div>\n    </paper-card>\n']);return x=function(){return e},e}var w;function j(){var e=b(['\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: block;\n        align-content: center;\n      }\n      #loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: .8;\n        text-align: center;\n        align-content: center;\n        justify-content: center;\n        height: 100vh;\n        position: absolute;\n        background-color: white;\n      }\n      iron-selector {\n        line-height: 16px;\n      }\n      iron-selector lrnsys-button {\n        display: inline-flex;\n      }\n      paper-button.coursecard-wrapper {\n        margin: 0;\n        padding: 0;\n      }\n      lrnapp-cis-course-card {\n        padding: 0;\n        margin: 16px;\n        height: 240px;\n        width: 224px;\n      }\n      .courses-grid {\n        margin: 0 auto;\n        width: 95%;\n      }\n      .iron-selected .display-mode {\n        background-color: #ff6f00;\n        color: white;\n      }\n      .iron-list-container {\n        display: flex;\n        flex-direction: column;\n        min-height:50vh;\n      }\n      iron-list {\n        flex: 1 1 auto;\n      }\n    </style>\n    <iron-ajax auto="" url="[[sourcePath]]" params="" handle-as="json" last-response="{{cisResponse}}" on-response="_handleResponse"></iron-ajax>\n\n    <app-location route="{{route}}" query-params="{{queryParams}}"></app-location>\n    <app-route route="{{route}}" pattern="[[endPoint]]/:page" data="{{data}}" tail="{{tail}}" query-params="{{queryParams}}">\n    </app-route>\n\n    <div id="loading">\n      <h3>Loading..</h3>\n      <elmsln-loading color="grey-text" size="large"></elmsln-loading>\n    </div>\n    <app-toolbar class="">\n      <span main-title=""></span>\n      <span top-item="" style="text-align:right;font-size:8px;padding-right:16px;">Displaying [[courses.length]] of [[originalCourses.length]]</span>\n      <paper-dropdown-menu label="Course" hidden$="[[!courses]]">\n        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="{{queryParams.course}}" attr-for-selected="item-id">\n          <paper-item></paper-item>\n          <template is="dom-repeat" items="[[_toArray(courses)]]" as="course">\n          <paper-item item-id="[[course.id]]">[[course.data.name]]</paper-item>\n          </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n      <paper-dropdown-menu label="Program" hidden$="[[!programs]]">\n        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="{{queryParams.program}}" attr-for-selected="item-id">\n          <paper-item></paper-item>\n        <template is="dom-repeat" items="[[_toArray(programs)]]" as="program">\n          <paper-item item-id="[[program.id]]">[[program.data.name]]</paper-item>\n        </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n      <paper-dropdown-menu label="Academic home" hidden$="[[!academics]]">\n        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="{{queryParams.academic}}" attr-for-selected="item-id">\n          <paper-item></paper-item>\n        <template is="dom-repeat" items="[[_toArray(academics)]]" as="academic">\n          <paper-item item-id="[[academic.id]]">[[academic.data.name]]</paper-item>\n        </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    </app-toolbar>\n    <div class="courses-grid">\n    <iron-pages selected="{{data.page}}" attr-for-selected="name" fallback-selection="courses" role="main">\n      <div class="iron-list-container" name="courses">\n        <iron-list id="list" items="[[courses]]" as="course" grid="">\n          <template>\n          <paper-button data-course-id$="[[course.id]]" class="coursecard-wrapper" on-tap="_loadCourseUrl">\n            <lrnapp-cis-course-card elevation="2" data-course-id$="[[course.id]]" name="[[course.data.name]]" image="[[course.data.image]]" title="[[course.data.title]]" color="[[course.data.color]]">\n            </lrnapp-cis-course-card>\n          </paper-button>\n          </template>\n        </iron-list>\n      </div>\n    </iron-pages>\n    </div>\n    <paper-toast id="toast"></paper-toast>\n'],['\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: block;\n        align-content: center;\n      }\n      #loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: .8;\n        text-align: center;\n        align-content: center;\n        justify-content: center;\n        height: 100vh;\n        position: absolute;\n        background-color: white;\n      }\n      iron-selector {\n        line-height: 16px;\n      }\n      iron-selector lrnsys-button {\n        display: inline-flex;\n      }\n      paper-button.coursecard-wrapper {\n        margin: 0;\n        padding: 0;\n      }\n      lrnapp-cis-course-card {\n        padding: 0;\n        margin: 16px;\n        height: 240px;\n        width: 224px;\n      }\n      .courses-grid {\n        margin: 0 auto;\n        width: 95%;\n      }\n      .iron-selected .display-mode {\n        background-color: #ff6f00;\n        color: white;\n      }\n      .iron-list-container {\n        display: flex;\n        flex-direction: column;\n        min-height:50vh;\n      }\n      iron-list {\n        flex: 1 1 auto;\n      }\n    </style>\n    <iron-ajax auto="" url="[[sourcePath]]" params="" handle-as="json" last-response="{{cisResponse}}" on-response="_handleResponse"></iron-ajax>\n\n    <app-location route="{{route}}" query-params="{{queryParams}}"></app-location>\n    <app-route route="{{route}}" pattern="[[endPoint]]/:page" data="{{data}}" tail="{{tail}}" query-params="{{queryParams}}">\n    </app-route>\n\n    <div id="loading">\n      <h3>Loading..</h3>\n      <elmsln-loading color="grey-text" size="large"></elmsln-loading>\n    </div>\n    <app-toolbar class="">\n      <span main-title=""></span>\n      <span top-item="" style="text-align:right;font-size:8px;padding-right:16px;">Displaying [[courses.length]] of [[originalCourses.length]]</span>\n      <paper-dropdown-menu label="Course" hidden\\$="[[!courses]]">\n        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="{{queryParams.course}}" attr-for-selected="item-id">\n          <paper-item></paper-item>\n          <template is="dom-repeat" items="[[_toArray(courses)]]" as="course">\n          <paper-item item-id="[[course.id]]">[[course.data.name]]</paper-item>\n          </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n      <paper-dropdown-menu label="Program" hidden\\$="[[!programs]]">\n        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="{{queryParams.program}}" attr-for-selected="item-id">\n          <paper-item></paper-item>\n        <template is="dom-repeat" items="[[_toArray(programs)]]" as="program">\n          <paper-item item-id="[[program.id]]">[[program.data.name]]</paper-item>\n        </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n      <paper-dropdown-menu label="Academic home" hidden\\$="[[!academics]]">\n        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="{{queryParams.academic}}" attr-for-selected="item-id">\n          <paper-item></paper-item>\n        <template is="dom-repeat" items="[[_toArray(academics)]]" as="academic">\n          <paper-item item-id="[[academic.id]]">[[academic.data.name]]</paper-item>\n        </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    </app-toolbar>\n    <div class="courses-grid">\n    <iron-pages selected="{{data.page}}" attr-for-selected="name" fallback-selection="courses" role="main">\n      <div class="iron-list-container" name="courses">\n        <iron-list id="list" items="[[courses]]" as="course" grid="">\n          <template>\n          <paper-button data-course-id$="[[course.id]]" class="coursecard-wrapper" on-tap="_loadCourseUrl">\n            <lrnapp-cis-course-card elevation="2" data-course-id$="[[course.id]]" name="[[course.data.name]]" image="[[course.data.image]]" title="[[course.data.title]]" color="[[course.data.color]]">\n            </lrnapp-cis-course-card>\n          </paper-button>\n          </template>\n        </iron-list>\n      </div>\n    </iron-pages>\n    </div>\n    <paper-toast id="toast"></paper-toast>\n']);return j=function(){return e},e}h.Polymer({_template:h.html(x()),is:"lrnapp-cis-course-card",listeners:{mouseenter:"_mouseEnter",mouseleave:"_mouseLeave"},properties:{size:{type:String,reflectToAttribute:!0},image:{type:String},icon:{type:String,value:!1},name:{type:String,value:""},title:{type:String,value:""},color:{type:String,value:"grey"},elevation:{type:Number,value:1,reflectToAttribute:!0}},_mouseEnter:function(e){this.__oldElevation=this.elevation,this.elevation+2>5?this.elevation=5:this.elevation+=2},_mouseLeave:function(e){this.elevation=this.__oldElevation}});var q=h.Polymer({_template:h.html(j()),is:"lrnapp-cis",properties:(w={cisResponse:{type:Object},route:{type:Object,notify:!0},courses:{type:Array},originalCourses:{type:Array,notify:!0}},v(w,"courses",{type:Array,value:[]}),v(w,"programs",{type:Array,value:[]}),v(w,"academics",{type:Array,value:[]}),v(w,"sourcePath",{type:String}),v(w,"endPoint",{type:String,value:"/"}),v(w,"basePath",{type:String,value:"/"}),v(w,"activeCourse",{type:String,value:null}),v(w,"queryParams",{type:Object,notify:!0,observer:"_queryParamsChanged"}),v(w,"_blockcycle",{type:Boolean,value:!1}),w),observers:["_routeChanged(route, endPoint)"],_routeChanged:function(e,n){if("string"==typeof e.path){if("string"==typeof n&&e.path.startsWith(n))return;window.location.reload()}},_toArray:function(e){return Object.keys(e).map(function(n){return e[n]})},_handleResponse:function(e){var n={},r={},a={},t={courses:[],programs:[],academics:[]},i=[],o=[],s=this._toArray(this.cisResponse.data.courses);this.set("originalCourses",s);for(var l=0;l<s.length;l++)n=s[l],r=s[l].relationships.program,a=s[l].relationships.academic,t.programs[r.id]=r,t.academics[a.id]=a,t.courses[n.id]=n;t.programs.forEach(function(e){i.push(e)}),t.academics.forEach(function(e){o.push(e)}),this.$.loading.hidden=!0,this.set("academics",o),this.set("programs",i),this.set("courses",s)},_loadCourseUrl:function(e){var r=n.dom(e).localTarget.getAttribute("data-course-id"),a=this.originalCourses.filter(function(e){return e.id==r});a.length>0&&(a=a.pop()),"undefined"!==f(a.data.uri)&&(window.location.href=a.data.uri)},_queryParamsChanged:function(e,n){this.set("courses",this._coursesCompute(this.originalCourses,e))},_coursesCompute:function(e,n){var r=this;if(void 0===e)return[];var a;return a=e.filter(function(e){return(void 0===r.queryParams.course||e.id==r.queryParams.course)&&((void 0===r.queryParams.program||e.relationships.program.id==r.queryParams.program)&&(void 0===r.queryParams.academic||e.relationships.academic.id==r.queryParams.academic))}),setTimeout(function(){r.$.list.fire("iron-resize")},100),a}});e.LrnappCis=q,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrnapp-cis.umd.js.map
