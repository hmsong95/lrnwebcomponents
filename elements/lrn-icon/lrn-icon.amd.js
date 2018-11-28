define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/iron-meta/iron-meta.js","./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js","./node_modules/@lrnwebcomponents/lrn-shared-styles/lrn-shared-styles.js"],function(_exports,_polymerLegacy,_polymerDom,_ironMeta,_ironFlexLayout,_lrnSharedStyles){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnIcon=void 0;function _templateObject_24e4c350f32d11e8aa873f2f2da4fc06(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"lrn-shared-styles\">\n      :host {\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--lrn-icon-fill-color, currentcolor);\n        stroke: var(--lrn-icon-stroke-color, none);\n\n        width: var(--lrn-icon-width, 24px);\n        height: var(--lrn-icon-height, 24px);\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        @apply --lrn-icon;\n      }\n    </style>\n    <iron-icon icon$=\"[[icon]]\"></iron-icon>\n"]);_templateObject_24e4c350f32d11e8aa873f2f2da4fc06=function _templateObject_24e4c350f32d11e8aa873f2f2da4fc06(){return data};return data}var LrnIcon=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_24e4c350f32d11e8aa873f2f2da4fc06()),is:"lrn-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:document.createElement("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"lrn",_iconChanged:function _iconChanged(icon){this._iconName=icon;this._iconsetName=this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function _srcChanged(src){this._updateIcon()},_usesIconset:function _usesIconset(){return this.icon||!this.src},_updateIcon:function _updateIcon(){if(this._usesIconset()){if(this._img&&this._img.parentNode){(0,_polymerDom.dom)(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"lrn-iconset-added","_updateIcon")}else{this.listen(window,"lrn-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;(0,_polymerDom.dom)(this.root).appendChild(this._img)}}});_exports.LrnIcon=LrnIcon});