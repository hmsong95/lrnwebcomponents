define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js"
], function(_exports, _polymerLegacy) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnsysRenderHtml = void 0;
  function _templateObject_9bdc15d0f32d11e8b72af995ea12d6be() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="container"></div>\n'
    ]);
    _templateObject_9bdc15d0f32d11e8b72af995ea12d6be = function _templateObject_9bdc15d0f32d11e8b72af995ea12d6be() {
      return data;
    };
    return data;
  }
  var LrnsysRenderHtml = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_9bdc15d0f32d11e8b72af995ea12d6be()
    ),
    is: "lrnsys-render-html",
    properties: { html: { type: String } },
    observers: ["_render(html)"],
    _render: function _render(html) {
      this.$.container.innerHTML = html;
    }
  });
  _exports.LrnsysRenderHtml = LrnsysRenderHtml;
});
