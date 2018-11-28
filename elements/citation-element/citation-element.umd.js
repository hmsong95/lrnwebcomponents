!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t(e.CitationElement={},e.polymerLegacy_js,e.polymer_dom_js)}(this,function(e,t,i){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e,t,i=(e=['\n    <style>\n      :host {\n        display: block;\n        color: var(\'--license-text-color\');\n      }\n      :host([display-method="footnote"]) {\n        visibility: hidden;\n        opacity: 0;\n      }\n      :host([display-method="popup"]) {\n        display: block;\n      }\n      .license-link {\n        font-size: 16px;\n        line-height: 16px;\n        font-style: italic;\n      }\n      .citation-date {\n        font-size: 16px;\n        line-height: 16px;\n        font-style: italic;\n      }\n      .license-link img {\n        height: 16px;\n        min-width: 16px;\n        margin-right: 8px;\n      }\n    </style>\n    <meta about$="[[relatedResource]]" property="cc:attributionUrl" content$="[[source]]">\n    <meta about$="[[relatedResource]]" property="cc:attributionName" typeof="oer:Text" content$="[[title]]">\n    <meta rel="cc:license" href$="[[licenseLink]]" content$="License: [[licenseName]]">\n    <cite><a target="_blank" href="[[source]]">[[title]]</a> by [[creator]], licensed under <a class="license-link" target="_blank" href="[[licenseLink]]"><img alt="[[licenseName]] graphic" src="[[licenseImage]]" hidden&="[[!licenseImage]]">[[licenseName]]</a>. Accessed <span class="citation-date">[[date]]</span>.</cite>\n'],(t=['\n    <style>\n      :host {\n        display: block;\n        color: var(\'--license-text-color\');\n      }\n      :host([display-method="footnote"]) {\n        visibility: hidden;\n        opacity: 0;\n      }\n      :host([display-method="popup"]) {\n        display: block;\n      }\n      .license-link {\n        font-size: 16px;\n        line-height: 16px;\n        font-style: italic;\n      }\n      .citation-date {\n        font-size: 16px;\n        line-height: 16px;\n        font-style: italic;\n      }\n      .license-link img {\n        height: 16px;\n        min-width: 16px;\n        margin-right: 8px;\n      }\n    </style>\n    <meta about\\$="[[relatedResource]]" property="cc:attributionUrl" content\\$="[[source]]">\n    <meta about\\$="[[relatedResource]]" property="cc:attributionName" typeof="oer:Text" content\\$="[[title]]">\n    <meta rel="cc:license" href\\$="[[licenseLink]]" content\\$="License: [[licenseName]]">\n    <cite><a target="_blank" href="[[source]]">[[title]]</a> by [[creator]], licensed under <a class="license-link" target="_blank" href="[[licenseLink]]"><img alt="[[licenseName]] graphic" src="[[licenseImage]]" hidden&="[[!licenseImage]]">[[licenseName]]</a>. Accessed <span class="citation-date">[[date]]</span>.</cite>\n'])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return i},i}var r=t.Polymer({_template:t.html(o()),is:"citation-element",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{title:{type:String},scope:{type:String,value:"sibling",observer:"_scopeChanged"},displayMethod:{type:String,reflectToAttribute:!0},creator:{type:String},source:{type:String},date:{type:String},licenseName:{type:String},licenseLink:{type:String},license:{type:String,observer:"_licenseUpdated"},_aboutLink:{type:Object,computed:"_generateAboutLink(relatedResource, licenseLink)"},_licenseLink:{type:Object,computed:"_generateLicenseLink(source)"}},_generateLicenseLink:function(e){this._licenseLink&&document.head.removeChild(this._licenseLink);var t=document.createElement("link");return t.setAttribute("typeof","resource"),t.setAttribute("rel","license"),t.setAttribute("src",e),document.head.appendChild(t),t},_generateAboutLink:function(e,t){this._aboutLink&&document.head.removeChild(this._aboutLink);var i=document.createElement("link");return i.setAttribute("about",e),i.setAttribute("property","cc:license"),i.setAttribute("content",t),document.head.appendChild(i),i},_scopeChanged:function(e,t){if("sibling"===e&&null!==i.dom(this).previousElementSibling){if(i.dom(this).previousElementSibling.getAttribute("resource"))this.relatedResource=i.dom(this).previousElementSibling.getAttribute("resource");else{var n=this.generateResourceID();this.relatedResource=n,i.dom(this).previousElementSibling.setAttribute("resource",n)}i.dom(this).previousElementSibling.setAttribute("prefix",this.getAttribute("prefix"))}else if("parent"===e){if(i.dom(this).parentNode.getAttribute("resource"))this.relatedResource=i.dom(this).parentNode.getAttribute("resource");else{var o=this.generateResourceID();this.relatedResource=o,i.dom(this).parentNode.setAttribute("resource",o)}i.dom(this).parentNode.setAttribute("prefix",this.getAttribute("prefix"))}},attached:function(){var e={canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Citation",description:"A basic citation element with 3 presentation modes",icon:"editor:title",color:"grey",groups:["Content","Text","Copyright"],handles:[{type:"citation",source:"source",title:"title",author:"creator",license:"license",accessDate:"date"},{type:"inline",text:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the work being cited.",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the work being cited.",inputMethod:"textfield",icon:"editor:title"},{property:"source",title:"Source link",description:"The source url for the element this is citing.",inputMethod:"textfield",icon:"link",validationType:"url"},{property:"date",title:"Date accessed",description:"The date this was accessed.",inputMethod:"textfield",icon:"link"},{property:"scope",title:"Scope",description:"Scope of what to cite.",inputMethod:"select",options:{sibling:"Sibling element",parent:"Parent element"},icon:"code"},{property:"license",title:"License",description:"The source url for the element this is citing.",inputMethod:"select",options:this.licenseList("select"),icon:"link"},{property:"creator",title:"Creator",description:"Who made or owns this.",inputMethod:"textfield",icon:"link"}],advanced:[]}};this.setHaxProperties(e)},licenseList:function(){var e={by:{name:"Attribution",link:"https://creativecommons.org/licenses/by/4.0/",image:"https://i.creativecommons.org/l/by/4.0/88x31.png"},"by-sa":{name:"Attribution Share a like",link:"https://creativecommons.org/licenses/by-sa/4.0/",image:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png"},"by-nd":{name:"Attribution No derivatives",link:"https://creativecommons.org/licenses/by-nd/4.0/",image:"https://i.creativecommons.org/l/by-nd/4.0/88x31.png"},"by-nc":{name:"Attribution non-commercial",link:"https://creativecommons.org/licenses/by-nc/4.0/",image:"https://i.creativecommons.org/l/by-nc/4.0/88x31.png"},"by-nc-sa":{name:"Attribution non-commercial share a like",link:"https://creativecommons.org/licenses/by-nc-sa/4.0/",image:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"},"by-nc-nd":{name:"Attribution Non-commercial No derivatives",link:"https://creativecommons.org/licenses/by-nc-nd/4.0/",image:"https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"}};if("select"==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"full")){var t={};for(var i in e)t[i]=e[i].name;return t}return e},_licenseUpdated:function(e,t){if("undefined"!==n(e)){var i=this.licenseList();"undefined"!==n(i[e])&&(this.licenseName=i[e].name,this.licenseLink=i[e].link,this.licenseImage=i[e].image)}}});e.CitationElement=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=citation-element.umd.js.map
