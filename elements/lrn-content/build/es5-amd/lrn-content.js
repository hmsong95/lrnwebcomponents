define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_81506a80db1411e8a2d39f9f8da066e4() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div typeof="oer:SupportingMaterial">\n      <h2 property="oer:name">[[title]]</h2>\n      <div property="oer:description">\n        <slot></slot>\n      </div>\n    </div>\n'
    ]);
    _templateObject_81506a80db1411e8a2d39f9f8da066e4 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_81506a80db1411e8a2d39f9f8da066e4()
    ),
    is: "lrn-content",
    properties: { title: { type: String, value: "" } }
  });
});
