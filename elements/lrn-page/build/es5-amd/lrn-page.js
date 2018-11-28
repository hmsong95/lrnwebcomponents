define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/oer-schema/oer-schema.js"
], function(_exports, _polymerLegacy, _oerSchema) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnPage = void 0;
  function _templateObject_4a0f1df0f32e11e8b52611b793380b01() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <oer-schema>\n      <slot></slot>\n    </oer-schema>\n"
    ]);
    _templateObject_4a0f1df0f32e11e8b52611b793380b01 = function _templateObject_4a0f1df0f32e11e8b52611b793380b01() {
      return data;
    };
    return data;
  }
  var LrnPage = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_4a0f1df0f32e11e8b52611b793380b01()
    ),
    is: "lrn-page"
  });
  _exports.LrnPage = LrnPage;
});
