define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js"],function(_exports,_polymerLegacy,_lrnIcons,_ironIcon,_colors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ElmslnLoading=void 0;function _templateObject_f2584880149711e99801d11ba8113e06(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style is=\"custom-style\" include=\"materializecss-styles-colors\">\n      @-moz-keyframes spin {\n        100% {\n          -moz-transform: rotate(60deg);\n          filter: saturate(10) invert(0.9);\n        }\n      }\n      @-webkit-keyframes spin {\n        100% {\n          -webkit-transform: rotate(60deg);\n          filter: saturate(10) invert(0.9);\n        }\n      }\n      @keyframes spin {\n        100% {\n          -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n        }\n      }\n      :host {\n        display: block;\n        -webkit-animation: spin 1.25s ease-out infinite;\n        -moz-animation: spin 1.25s ease-out infinite;\n        animation: spin 1.25s ease-out infinite;\n      }\n      :host([size=\"tiny\"]) {\n        width: 16px;\n        height: 16px;\n        -webkit-animation: spin 0.75s ease-out infinite;\n        -moz-animation: spin 0.75s ease-out infinite;\n        animation: spin 0.75s ease-out infinite;\n      }\n      :host([size=\"small\"]) {\n        width: 32px;\n        height: 32px;\n        -webkit-animation: spin 1s ease-out infinite;\n        -moz-animation: spin 1s ease-out infinite;\n        animation: spin 1s ease-out infinite;\n      }\n      :host([size=\"medium\"]) {\n        width: 64px;\n        height: 64px;\n        -webkit-animation: spin 1.25s ease-out infinite;\n        -moz-animation: spin 1.25s ease-out infinite;\n        animation: spin 1.25s ease-out infinite;\n      }\n      :host([size=\"large\"]) {\n        width: 80px;\n        height: 80px;\n        -webkit-animation: spin 1.25s ease-out infinite;\n        -moz-animation: spin 1.25s ease-out infinite;\n        animation: spin 1.25s ease-out infinite;\n      }\n      :host([size=\"epic\"]) {\n        width: 400px;\n        height: 400px;\n        -webkit-animation: spin 2s ease-out infinite;\n        -moz-animation: spin 2s ease-out infinite;\n        animation: spin 2s ease-out infinite;\n      }\n    </style>\n    <iron-icon icon=\"lrn:network\" class$=\"[[color]]\"></iron-icon>\n  "]);_templateObject_f2584880149711e99801d11ba8113e06=function _templateObject_f2584880149711e99801d11ba8113e06(){return data};return data}var ElmslnLoading=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_f2584880149711e99801d11ba8113e06()),is:"elmsln-loading",properties:{color:{type:String,reflectToAttribute:!0},size:{type:String,reflectToAttribute:!0,value:"medium"}}});_exports.ElmslnLoading=ElmslnLoading});