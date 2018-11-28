!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/iron-icons/iron-icons.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-collapse/iron-collapse.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-behaviors/iron-button-state.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/iron-icons/iron-icons.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@polymer/paper-button/paper-button.js","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-collapse/iron-collapse.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-behaviors/iron-button-state.js"],n):n(e.LrndesignMapmenu={},null,e.polymer_dom_js,e.flattenedNodesObserver_js,null,e.polymerLegacy_js,null,null,null,e.ironButtonState_js)}(this,function(e,n,r,t,i,o,l,a,s,p){"use strict";function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function m(){var e=d(['\n    <style>\n      :host {\n        display: block;\n        --lrndesign-mapmenu-item-height: 16px;\n      }\n      iron-icon {\n        --iron-icon-height: var(--lrndesign-mapmenu-item-height);\n        display: inline-flex;\n      }\n    </style>\n    <template is="dom-if" if="[[icon]]">\n      <iron-icon icon="[[icon]]"></iron-icon>\n    </template>\n    <span id="title">[[title]]</span>\n']);return m=function(){return e},e}var u,c,y;function b(){var e=d(['\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        display: flex;\n        align-items: center;\n      }\n      #icon {\n        margin-right: 10px;\n      }\n      #center {\n        flex: 1 1 auto;\n      }\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0,0,0,0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n      }\n      lrndesign-avatar ::slotted(*) {\n        transform: translateY(2px);\n      }\n      #title {\n        font-size: 19.2px;\n      }\n      #right iron-icon {\n        color: gray;\n        display: inline-flex;\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="icon">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <div id="center">\n        <div id="label">[[label]]</div>\n        <div id="title">[[title]]</div>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon icon="arrow-drop-down"></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon icon="arrow-drop-up"></iron-icon>\n        </template>\n      </div>\n    </div>\n']);return b=function(){return e},e}function v(){var e=d(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host([collapsable]) > lrndesign-mapmenu-header {\n        cursor: pointer;\n        display: block;\n      }\n      #container {\n        padding: 16px;\n      }\n      #container ::slotted(lrndesign-mapmenu-item) {\n        margin-top: 6.4px;\n      }\n    </style>\n    <lrndesign-mapmenu-header on-tap="_headerClickHandler" avatar-label="[[avatarLabel]]" title="[[title]]" label="[[label]]" opened="[[opened]]"></lrndesign-mapmenu-header>\n    <iron-collapse id="container">\n      <slot id="slot"></slot>\n    </iron-collapse>\n']);return v=function(){return e},e}function g(){var e=d(["\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 16px 32px;\n      }\n      :host > ::slotted(lrndesign-mapmenu-submenu + lrndesign-mapmenu-submenu) {\n        margin-top: 16px;\n      }\n    </style>\n    <slot></slot>\n"]);return g=function(){return e},e}o.Polymer({_template:o.html(m()),is:"lrndesign-mapmenu-item",properties:(u={icon:{type:String,value:""},title:{type:String,value:""},url:{type:String,value:""}},c="icon",y={type:String,value:""},c in u?Object.defineProperty(u,c,{value:y,enumerable:!0,configurable:!0,writable:!0}):u[c]=y,u)}),o.Polymer({_template:o.html(b()),is:"lrndesign-mapmenu-header",behaviors:[p.IronButtonState],properties:{title:{type:String},label:{type:String},avatarLabel:{type:String,value:""},opened:{type:Boolean}},hostAttributes:{role:"button",tabindex:0}}),o.Polymer({_template:o.html(v()),is:"lrndesign-mapmenu-submenu",properties:{title:{type:String},avatarLabel:{type:String},label:{type:String},opened:{type:Boolean,value:!1},collapsable:{type:Boolean,value:!0},expandChildren:{type:Boolean,value:!1}},observers:["_openChanged(opened)"],_openChanged:function(e){var n=this.$.container;e&&n.show(),e||n.hide()},_headerClickHandler:function(e){this.collapsable&&(this.opened=!this.opened)},ready:function(){var e=this;this._observer=new t.FlattenedNodesObserver(this.$.slot,function(n){var r=n.addedNodes.filter(function(e){return"LRNDESIGN-MAPMENU-SUBMENU"===e.nodeName});if(e.expandChildren){var t=!0,i=!1,o=void 0;try{for(var l,a=r[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){l.value.setAttribute("opened",!0)}}catch(e){i=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}}})}});var f=o.Polymer({_template:o.html(g()),is:"lrndesign-mapmenu",properties:{}});e.LrndesignMapmenu=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-mapmenu.umd.js.map
