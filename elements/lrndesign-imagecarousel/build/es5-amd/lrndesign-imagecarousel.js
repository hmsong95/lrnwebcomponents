define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/fancy-carousel/fancy-carousel.js"
], function(_exports, _polymerLegacy, _fancyCarousel) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignImagecarousel = void 0;
  function _templateObject_65e8f050f32e11e8ad6f656a30ea167c() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <fancy-carousel>\n  <img src="https://app-layout-assets.appspot.com/assets/bg1.jpg">\n  <img src="https://app-layout-assets.appspot.com/assets/bg2.jpg">\n  <img src="https://app-layout-assets.appspot.com/assets/bg3.jpg">\n  <img src="https://app-layout-assets.appspot.com/assets/bg4.jpg">\n</fancy-carousel>\n'
    ]);
    _templateObject_65e8f050f32e11e8ad6f656a30ea167c = function _templateObject_65e8f050f32e11e8ad6f656a30ea167c() {
      return data;
    };
    return data;
  }
  var LrndesignImagecarousel = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_65e8f050f32e11e8ad6f656a30ea167c()
    ),
    is: "lrndesign-imagecarousel",
    properties: { title: { type: String, value: "lrndesign-imagecarousel" } }
  });
  _exports.LrndesignImagecarousel = LrndesignImagecarousel;
});
