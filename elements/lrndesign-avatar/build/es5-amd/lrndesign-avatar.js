define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/paper-avatar/paper-avatar.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js"
], function(_exports, _polymerLegacy, _paperAvatar, _materializecssStyles) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignAvatar = void 0;
  function _templateObject_571095b0f32e11e88a4565618e005389() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n      }\n    </style>\n    <paper-avatar label="[[label]]" src="[[src]]" two-chars="[[twoChars]]" class$="[[color]]" jdenticon="[[jdenticon]]"></paper-avatar>\n'
    ]);
    _templateObject_571095b0f32e11e88a4565618e005389 = function _templateObject_571095b0f32e11e88a4565618e005389() {
      return data;
    };
    return data;
  }
  var LrndesignAvatar = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_571095b0f32e11e88a4565618e005389()
    ),
    is: "lrndesign-avatar",
    properties: {
      label: { type: String, value: "lrndesign-avatar" },
      src: { type: String },
      twoChars: { type: Boolean, value: !1 },
      color: { type: String, reflectToAttribute: !0 },
      jdenticon: { type: Boolean, value: !1 }
    }
  });
  _exports.LrndesignAvatar = LrndesignAvatar;
});
