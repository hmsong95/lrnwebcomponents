!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-checkbox/paper-checkbox.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-toast/paper-toast.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-checkbox/paper-checkbox.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/paper-button/paper-button.js","@polymer/paper-toast/paper-toast.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t(e.MultipleChoice={},e.polymerLegacy_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e,t,n=(e=['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        padding: 16px 16px 54px 16px;\n      }\n      h3 {\n        margin: 8px;\n      }\n      ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n      ul li {\n        padding: 8px;\n      }\n      paper-checkbox {\n        padding: 8px;\n      }\n      iron-icon {\n        display: inline-flex;\n      }\n    </style>\n    <meta property="oer:assessing" content$="[[relatedResource]]">\n    <h3 hidden$="[[hideTitle]]"><span property="oer:name">[[title]]</span></h3>\n    <div>[[question]]</div>\n    <ul>\n      <template is="dom-repeat" items="[[displayedAnswers]]" as="answer">\n        <li><paper-checkbox disabled$="[[disabled]]" property="oer:answer" checked="{{answer.userGuess}}">[[answer.label]]</paper-checkbox></li>\n      </template>\n    </ul>\n    <div hidden$="[[hideButtons]]">\n      <paper-button disabled$="[[disabled]]" raised="" on-tap="_verifyAnswers">[[checkLabel]]</paper-button>\n      <paper-button disabled$="[[disabled]]" raised="" on-tap="_resetAnswers">[[resetLabel]]</paper-button>\n    </div>\n    <paper-toast id="toast" duration="6000" class$="fit-bottom [[__toastColor]]">\n    [[__toastText]]\n    <iron-icon icon="[[__toastIcon]]" style="margin-left:16px;"></iron-icon>\n    </paper-toast>\n'],(t=['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        padding: 16px 16px 54px 16px;\n      }\n      h3 {\n        margin: 8px;\n      }\n      ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n      ul li {\n        padding: 8px;\n      }\n      paper-checkbox {\n        padding: 8px;\n      }\n      iron-icon {\n        display: inline-flex;\n      }\n    </style>\n    <meta property="oer:assessing" content\\$="[[relatedResource]]">\n    <h3 hidden\\$="[[hideTitle]]"><span property="oer:name">[[title]]</span></h3>\n    <div>[[question]]</div>\n    <ul>\n      <template is="dom-repeat" items="[[displayedAnswers]]" as="answer">\n        <li><paper-checkbox disabled\\$="[[disabled]]" property="oer:answer" checked="{{answer.userGuess}}">[[answer.label]]</paper-checkbox></li>\n      </template>\n    </ul>\n    <div hidden\\$="[[hideButtons]]">\n      <paper-button disabled\\$="[[disabled]]" raised="" on-tap="_verifyAnswers">[[checkLabel]]</paper-button>\n      <paper-button disabled\\$="[[disabled]]" raised="" on-tap="_resetAnswers">[[resetLabel]]</paper-button>\n    </div>\n    <paper-toast id="toast" duration="6000" class\\$="fit-bottom [[__toastColor]]">\n    [[__toastText]]\n    <iron-icon icon="[[__toastIcon]]" style="margin-left:16px;"></iron-icon>\n    </paper-toast>\n'])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return n},n}var i=t.Polymer({_template:t.html(s()),is:"multiple-choice",hostAttributes:{typeof:"oer:Assessment"},behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],observers:["_valueChanged(displayedAnswers.*)"],properties:{title:{type:String,value:""},disabled:{type:Boolean,value:!1},checkLabel:{type:String,value:"Check answer"},resetLabel:{type:String,value:"Reset"},relatedResource:{type:String},hideTitle:{type:Boolean,value:!1},question:{type:String,value:""},answers:{type:Array,value:[],notify:!0},displayedAnswers:{type:Array,computed:"_computeDisplayedAnswers(answers, randomize)",notify:!0},correctText:{type:String,value:"Great job!"},incorrectText:{type:String,value:"Better luck next time!"},randomize:{type:Boolean,value:!1,reflectToAttribute:!0},hideButtons:{type:Boolean,value:!1}},_valueChanged:function(e){for(var t in e.base)for(var n in e.base[t])this.notifyPath("displayedAnswers."+t+"."+n)},_resetAnswers:function(e){var t=this;for(var n in this.$.toast.hide(),this.displayedAnswers)this.displayedAnswers[n].userGuess&&(this.displayedAnswers[n].userGuess=!1);setTimeout(function(){var e=t.answers;t.set("answers",[]),t.set("answers",e)},100)},checkAnswers:function(){var e=!0;for(var t in this.displayedAnswers)0!=e&&this.displayedAnswers[t].correct&&this.displayedAnswers[t].userGuess?e=!0:this.displayedAnswers[t].correct&&!this.displayedAnswers[t].userGuess?e=!1:!this.displayedAnswers[t].correct&&this.displayedAnswers[t].userGuess&&(e=!1);return e},_verifyAnswers:function(e){this.checkAnswers()?(this.$.toast.hide(),this.__toastColor="green darken-4",this.__toastIcon="thumb-up",this.__toastText=this.correctText,this.$.toast.show()):(this.$.toast.hide(),this.__toastColor="red darken-4",this.__toastIcon="thumb-down",this.__toastText=this.incorrectText,this.$.toast.show())},_computeDisplayedAnswers:function(e,t){if("undefined"!==n(e)&&null!=e&&e.length>0&&t){for(var s,i,r=e,o=r.length;0!==o;)i=Math.floor(Math.random()*o),s=r[o-=1],r[o]=r[i],r[i]=s;return r}return e},attached:function(){this.$.toast.fitInto=this;this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Multiple choice",description:"Multiple choice self check",icon:"icons:list",color:"purple",groups:["Instructional"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"question",title:"Question",description:"Question for users to respond to.",inputMethod:"textfield",icon:"icons:help"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield"},{property:"hideTitle",title:"Hide title",description:"Whether or not to display the title",inputMethod:"boolean"},{property:"question",title:"Question",description:"Question for users to respond to.",inputMethod:"textfield"},{property:"randomize",title:"Randomize",description:"Randomize the answers dynamically",inputMethod:"boolean"},{property:"answers",title:"Answer set",description:"Answers in a multiple choice",inputMethod:"array",properties:[{property:"correct",title:"Correct",description:"If this is correct or not",inputMethod:"boolean"},{property:"label",title:"Answer",description:"Possible answer to the question",inputMethod:"textfield",required:!0}]},{property:"correctText",title:"Correct feedback",description:"Feedback when they get it right",inputMethod:"textfield"},{property:"incorrectText",title:"Incorrect feedback",description:"Feedback when they get it wrong",inputMethod:"textfield"}],advanced:[{property:"checkLabel",title:"Check answers label",description:"Label for getting solution feedback",inputMethod:"textfield"},{property:"resetLabel",title:"Reset label",description:"label for the reset button",inputMethod:"textfield"}]},saveOptions:{unsetAttributes:["displayed-answers"]}})}});e.MultipleChoice=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=multiple-choice.umd.js.map
