define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.WysiwygHax = void 0;
  function _templateObject_65deff60d70d11e8ab112535494a0e69() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_65deff60d70d11e8ab112535494a0e69 = function() {
      return data;
    };
    return data;
  }
  var WysiwygHax = (function(_PolymerElement) {
    babelHelpers.inherits(WysiwygHax, _PolymerElement);
    function WysiwygHax() {
      babelHelpers.classCallCheck(this, WysiwygHax);
      return babelHelpers.possibleConstructorReturn(
        this,
        (WysiwygHax.__proto__ || Object.getPrototypeOf(WysiwygHax)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      WysiwygHax,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                WysiwygHax.prototype.__proto__ ||
                  Object.getPrototypeOf(WysiwygHax.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              WysiwygHax.haxProperties,
              WysiwygHax.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_65deff60d70d11e8ab112535494a0e69()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Wysiwyg hax",
                description: "Automated conversion of wysiwyg-hax/",
                icon: "icons:android",
                color: "green",
                groups: ["Hax"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "wysiwyg-hax";
          }
        }
      ]
    );
    return WysiwygHax;
  })(_polymerElement.PolymerElement);
  _exports.WysiwygHax = WysiwygHax;
  window.customElements.define(WysiwygHax.tag, WysiwygHax);
});