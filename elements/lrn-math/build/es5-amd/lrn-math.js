define([
  "exports",
  "meta",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js",
  "./node_modules/@polymer/polymer/lib/utils/resolve-url.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js"
], function(
  _exports,
  meta,
  _polymerLegacy,
  _polymerDom,
  _flattenedNodesObserver,
  _resolveUrl,
  _HAXWiring,
  _esGlobalBridge
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnMath = void 0;
  meta = babelHelpers.interopRequireWildcard(meta);
  function _templateObject_2fe86f40f32d11e8b906eb4fb00d902e() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n       :host {\n        display: inline;\n      }\n    </style>\n    [[prefix]] [[math]] [[suffix]]\n"
    ]);
    _templateObject_2fe86f40f32d11e8b906eb4fb00d902e = function _templateObject_2fe86f40f32d11e8b906eb4fb00d902e() {
      return data;
    };
    return data;
  }
  var LrnMath = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_2fe86f40f32d11e8b906eb4fb00d902e()
    ),
    is: "lrn-math",
    behaviors: [HAXBehaviors.PropertiesBehaviors],
    properties: {
      prefix: { type: String, value: "$$" },
      suffix: { type: String, value: "$$" },
      inline: { type: Boolean, value: !0, reflectToAttribute: !0 },
      math: { type: String },
      mathText: { type: String, observer: "_mathChanged" }
    },
    observers: ["_inlineChanged(inline)"],
    _inlineChanged: function _inlineChanged(inline) {
      if (inline) {
        this.prefix = "\\(";
        this.suffix = "\\)";
      }
    },
    _mathChanged: function _mathChanged(newValue, oldValue) {
      if (newValue !== oldValue) {
        while (null !== (0, _polymerDom.dom)(this).firstChild) {
          (0, _polymerDom.dom)(this).removeChild(
            (0, _polymerDom.dom)(this).firstChild
          );
        }
        var frag = document.createTextNode(newValue);
        (0, _polymerDom.dom)(this).appendChild(frag);
      }
    },
    attached: function attached() {
      var props = {
        canScale: !0,
        canPosition: !0,
        canEditSource: !0,
        gizmo: {
          title: "Math",
          description: "Present math in a nice looking way.",
          icon: "places:all-inclusive",
          color: "grey",
          groups: ["Content"],
          handles: [
            { type: "math", math: "mathText" },
            { type: "inline", text: "mathText" }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "inline",
              title: "Inline",
              description: "Display this math inline",
              inputMethod: "boolean",
              icon: "remove"
            }
          ],
          configure: [
            {
              property: "mathText",
              title: "Math",
              description: "Math",
              inputMethod: "textfield",
              icon: "editor:format-quote"
            },
            {
              property: "inline",
              title: "Inline",
              description: "Display this math inline",
              inputMethod: "boolean",
              icon: "remove"
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(props);
      var name = "mathjax",
        basePath = (0, _resolveUrl.pathFromUrl)(meta.url),
        location = "".concat(basePath, "lib/mathjax/latest.js");
      window.addEventListener(
        "es-bridge-".concat(name, "-loaded"),
        this._mathjaxLoaded.bind(this)
      );
      window.ESGlobalBridge.requestAvailability();
      window.ESGlobalBridge.instance.load(name, location);
    },
    _mathjaxLoaded: function _mathjaxLoaded() {
      var _this = this;
      this._observer = new _flattenedNodesObserver.FlattenedNodesObserver(
        this,
        function(info) {
          _this.math = info.addedNodes
            .map(function(node) {
              return node.textContent;
            })
            .toString();
          window.MathJax.Hub.Config({
            skipStartupTypeset: !0,
            jax: ["input/TeX", "output/HTML-CSS"],
            messageStyle: "none",
            tex2jax: { preview: "none" }
          });
          window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, "lrn-math"]);
        }
      );
    }
  });
  _exports.LrnMath = LrnMath;
});
