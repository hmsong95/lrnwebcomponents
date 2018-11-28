define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/iron-image/iron-image.js"
], function(_exports, _polymerLegacy, _ironImage) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.RandomImage = void 0;
  function _templateObject_65dc09f0f32c11e8a5f5dd29377ab04f() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n      .is-circle{\n        border: 1px solid grey;\nborder-radius: 50%;\nbox-shadow: 0px 5px 10px #CCC;\n      }\n    </style>\n    <iron-image style="width:200px; height:200px;" class$="[[mode]]" sizing="contain" src$="[[imgSrc]]" title$="[[imgTitle]]"></iron-image>\n'
    ]);
    _templateObject_65dc09f0f32c11e8a5f5dd29377ab04f = function _templateObject_65dc09f0f32c11e8a5f5dd29377ab04f() {
      return data;
    };
    return data;
  }
  var RandomImage = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_65dc09f0f32c11e8a5f5dd29377ab04f()
    ),
    is: "random-image",
    properties: {
      mode: { type: String, notify: !0, value: "" },
      imgSrc: { type: String },
      imgTitle: { type: String },
      imagesList: {
        type: Object,
        notify: !0,
        value: function value() {
          return [];
        }
      }
    },
    _pickRandomProperty: function _pickRandomProperty(obj) {
      var result,
        count = 0;
      for (var prop in obj) {
        if (Math.random() < 1 / ++count) result = prop;
      }
      return result;
    },
    ready: function ready() {
      var randomPos = this._pickRandomProperty(this.imagesList);
      this.imgSrc = this.imagesList[randomPos].path;
      this.imgTitle = this.imagesList[randomPos].title;
    }
  });
  _exports.RandomImage = RandomImage;
});
