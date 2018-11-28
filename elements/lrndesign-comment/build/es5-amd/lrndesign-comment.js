define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js",
  "./node_modules/time-elements/dist/time-elements.js"
], function(_exports, _polymerLegacy, _lrndesignAvatar, _timeElements) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignComment = void 0;
  function _templateObject_bcfbe4b0f32e11e88db43f7b69c63048() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      .comment-left {\n        float: left;\n        display: inline-block;\n      }\n      .comment-right {\n        display: inline-block;\n      }\n    </style>\n    <div class="comment-container">\n      <div class="comment-left">\n        <lrndesign-avatar></lrndesign-avatar>\n      </div>\n      <div class="comment-right">\n        <div class="row-1">\n          <span>{{name}}</span>\n          <relative-time datetime$="{{date}}">\n          </relative-time>\n        </div>\n        <div class="row-2">\n          <slot></slot>\n        </div>\n        <div class="row-3">\n          {{links}}\n        </div>\n      </div>\n    </div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      .comment-left {\n        float: left;\n        display: inline-block;\n      }\n      .comment-right {\n        display: inline-block;\n      }\n    </style>\n    <div class="comment-container">\n      <div class="comment-left">\n        <lrndesign-avatar></lrndesign-avatar>\n      </div>\n      <div class="comment-right">\n        <div class="row-1">\n          <span>{{name}}</span>\n          <relative-time datetime\\$="{{date}}">\n          </relative-time>\n        </div>\n        <div class="row-2">\n          <slot></slot>\n        </div>\n        <div class="row-3">\n          {{links}}\n        </div>\n      </div>\n    </div>\n'
      ]
    );
    _templateObject_bcfbe4b0f32e11e88db43f7b69c63048 = function _templateObject_bcfbe4b0f32e11e88db43f7b69c63048() {
      return data;
    };
    return data;
  }
  var LrndesignComment = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_bcfbe4b0f32e11e88db43f7b69c63048()
    ),
    is: "lrndesign-comment",
    properties: {
      avatar: { type: Object, reflectToAttribute: !0, notify: !0 },
      name: { type: String, reflectToAttribute: !0, notify: !0 },
      date: {
        type: String,
        value: "2014-04-01T00:00:00.000Z",
        reflectToAttribute: !0,
        notify: !0
      },
      links: { type: Object, notify: !0 }
    }
  });
  _exports.LrndesignComment = LrndesignComment;
});
