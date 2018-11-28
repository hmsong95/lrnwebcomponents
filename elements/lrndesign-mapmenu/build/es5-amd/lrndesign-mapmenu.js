define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/lrndesign-mapmenu-item.js",
  "./lib/lrndesign-mapmenu-submenu.js"
], function(
  _exports,
  _polymerLegacy,
  _lrndesignMapmenuItem,
  _lrndesignMapmenuSubmenu
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignMapmenu = void 0;
  function _templateObject_cb580a70f32e11e8980987e1e9d0e51a() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 16px 32px;\n      }\n      :host > ::slotted(lrndesign-mapmenu-submenu + lrndesign-mapmenu-submenu) {\n        margin-top: 16px;\n      }\n    </style>\n    <slot></slot>\n"
    ]);
    _templateObject_cb580a70f32e11e8980987e1e9d0e51a = function _templateObject_cb580a70f32e11e8980987e1e9d0e51a() {
      return data;
    };
    return data;
  }
  var LrndesignMapmenu = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_cb580a70f32e11e8980987e1e9d0e51a()
    ),
    is: "lrndesign-mapmenu",
    properties: {}
  });
  _exports.LrndesignMapmenu = LrndesignMapmenu;
});
