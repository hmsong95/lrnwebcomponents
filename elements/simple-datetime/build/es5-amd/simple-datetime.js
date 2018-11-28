define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/date.format.js"
], function(_exports, _polymerLegacy, _dateFormat) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SimpleDatetime = void 0;
  function _templateObject_7c948960f32c11e8914e6bc86a6756bc() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        font-size: 14px;\n        color: #b3b3b1;\n        line-height: 30px;\n      }\n    </style>\n    <time datetime$="[[date]]">[[date]]</time>\n'
    ]);
    _templateObject_7c948960f32c11e8914e6bc86a6756bc = function _templateObject_7c948960f32c11e8914e6bc86a6756bc() {
      return data;
    };
    return data;
  }
  var SimpleDatetime = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_7c948960f32c11e8914e6bc86a6756bc()
    ),
    is: "simple-datetime",
    properties: {
      timestamp: { type: Number },
      format: { type: String, value: "M jS, Y" },
      date: { type: String, computed: "formatDate(timestamp, format, unix)" },
      unix: { type: Boolean, value: !1 }
    },
    formatDate: function formatDate(timestamp, format, unix) {
      if (unix) {
        timestamp = 1e3 * timestamp;
      }
      return new Date(timestamp).format(format);
    }
  });
  _exports.SimpleDatetime = SimpleDatetime;
});
