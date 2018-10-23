define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.IronA11YAnnouncer = void 0;
  function _templateObject_a2bdd660d6f211e8b424a99031c847f0() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_a2bdd660d6f211e8b424a99031c847f0 = function() {
      return data;
    };
    return data;
  }
  var IronA11YAnnouncer = (function(_PolymerElement) {
    babelHelpers.inherits(IronA11YAnnouncer, _PolymerElement);
    function IronA11YAnnouncer() {
      babelHelpers.classCallCheck(this, IronA11YAnnouncer);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          IronA11YAnnouncer.__proto__ ||
          Object.getPrototypeOf(IronA11YAnnouncer)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      IronA11YAnnouncer,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                IronA11YAnnouncer.prototype.__proto__ ||
                  Object.getPrototypeOf(IronA11YAnnouncer.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              IronA11YAnnouncer.haxProperties,
              IronA11YAnnouncer.tag,
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
              _templateObject_a2bdd660d6f211e8b424a99031c847f0()
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
                title: "Iron a-11-y-announcer",
                description: "Automated conversion of iron-a11y-announcer/",
                icon: "icons:android",
                color: "green",
                groups: ["A"],
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
            return "iron-a-11-y-announcer";
          }
        }
      ]
    );
    return IronA11YAnnouncer;
  })(_polymerElement.PolymerElement);
  _exports.IronA11YAnnouncer = IronA11YAnnouncer;
  window.customElements.define(IronA11YAnnouncer.tag, IronA11YAnnouncer);
});