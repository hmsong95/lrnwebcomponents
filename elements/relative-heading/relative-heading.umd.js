!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js"],t):t(e.RelativeHeading={},e.polymerLegacy_js)}(this,function(e,t){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(){var e=n(["\n    <style>\n      :host {\n        display: none;\n      }\n    </style>\n"]);return a=function(){return e},e}function i(){var e=n(['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="html"></div>\n']);return i=function(){return e},e}window.RelativeHeadingManager={},window.RelativeHeadingManager.instance=null,t.Polymer({_template:t.html(a()),is:"relative-heading-manager",properties:{},created:function(){window.RelativeHeadingManager.instance||(window.RelativeHeadingManager.instance=this),document.body.addEventListener("heading-created",function(e){var t=e.detail,n=t.getAttribute("subtopic-of"),a=document.getElementById(n);a!==t.parentHeading&&t._setParent(a)})}}),window.RelativeHeadingManager.requestAvailability=function(){window.RelativeHeadingManager.instance||(window.RelativeHeadingManager.instance=document.createElement("relative-heading-manager")),document.body.appendChild(window.RelativeHeadingManager.instance)};var r=t.Polymer({_template:t.html(i()),is:"relative-heading",properties:{subtopicOf:{type:String,value:null,reflectToAttribute:!0},text:{type:String,value:null,reflectToAttribute:!0},parentHeading:{type:Object,value:{}},tag:{type:String,value:null,reflectToAttribute:!0}},created:function(){window.RelativeHeadingManager.requestAvailability()},attached:function(){this.fire("heading-created",this)},attributeChanged:function(e,t){"subtopic-of"===e?this.fire("heading-created",this):"tag"===e&&(this.fire("heading-changed",this),this.$.html.innerHTML="<"+this.tag+">"+this.text+"</"+this.tag+">")},_setParent:function(e){var t=this;void 0!==t.__parentListener&&t.parentHeading.removeEventListener("heading-changed"),t.parentHeading=e,null!==e&&(t.__parentListener=t.parentHeading.addEventListener("heading-changed",function(e){t._setTag()})),this._setTag()},_setTag:function(){var e,t=1;null!==this.parentHeading?void 0!==this.parentHeading.tag&&null!==this.parentHeading.tag?t=parseInt(this.parentHeading.tag.toLowerCase().replace("h",""))+1:void 0!==this.parentHeading.tagName&&this.parentHeading.tagName.match(/^H[0-6]$/)&&(t=parseInt(this.parentHeading.tagName.toLowerCase().replace("h",""))+1):void 0!==this.tag&&null!==this.tag&&(t=parseInt(this.tag.toLowerCase().replace("h",""))),e=function(e){return"h"+Math.max(Math.min(e,6),1)}(t),this.tag=e}});e.RelativeHeading=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=relative-heading.umd.js.map
