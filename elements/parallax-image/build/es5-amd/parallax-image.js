define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(
  _exports,
  _polymerLegacy,
  _materializecssStyles,
  _HAXWiring,
  _schemaBehaviors
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.ParallaxImage = void 0;
  function _templateObject_d956c360f32d11e89a8de1fb6d804550() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        --parallax-image-background: \'\';\n        --parallax-title-background: rgba(0, 0, 0, 0.3);\n        --parallax-title-font: #fff;\n      }\n\n      .parallax_container {\n        height: 400px;\n        width: 100%;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n      }\n\n      .parallax {\n        background-image: var(--parallax-image-background);\n        background-attachment: fixed;\n        background-position: top center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n      }\n\n      #bgParallax {\n        display: flex;\n        align-items: center;\n      }\n\n      .title {\n        background: var(--parallax-title-background);\n        display: block;\n        padding: 20px 15px;\n        text-align: center;\n        width: 40%;\n        color: var(--parallax-title-font);\n        font-size: 32px;\n        position: absolute;\n        margin-top: 120px;\n      }\n\n      @media screen and (max-width: 900px) {\n        .title {\n          font-size: 16px;\n        }\n      }\n    </style>\n\n    <a href="[[url]]" target$="[[_urlTarget(url)]]">\n      <div class="parallax_container">\n        <div id="bgParallax" class="parallax">\n          <div class="title" id="titleParallax">\n            <slot name="parallax_heading"></slot>\n          </div>\n        </div>\n      </div>\n    </a>\n'
    ]);
    _templateObject_d956c360f32d11e89a8de1fb6d804550 = function _templateObject_d956c360f32d11e89a8de1fb6d804550() {
      return data;
    };
    return data;
  }
  var ParallaxImage = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_d956c360f32d11e89a8de1fb6d804550()
    ),
    is: "parallax-image",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      SchemaBehaviors.Schema
    ],
    properties: {
      imageBg: { type: String, value: "", reflectToAttribute: !0 },
      url: { type: String, value: "", reflectToAttribute: !0 }
    },
    observers: ["__updateStyles(imageBg)"],
    _urlTarget: function _urlTarget(url) {
      if (url) {
        var external = this._outsideLink(url);
        if (external) {
          return "_blank";
        }
      }
      return !1;
    },
    _outsideLink: function _outsideLink(url) {
      if (0 != url.indexOf("http")) return !1;
      var loc = location.href,
        path = location.pathname,
        root = loc.substring(0, loc.indexOf(path));
      return 0 != url.indexOf(root);
    },
    attached: function attached() {
      var props = {
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Sample gizmo",
          description:
            "The user will be able to see this for selection in a UI.",
          icon: "av:play-circle-filled",
          color: "grey",
          groups: ["Video", "Media"],
          handles: [{ type: "video", url: "source" }],
          meta: { author: "Your organization on github" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(props);
    },
    __updateStyles: function __updateStyles(imageBg) {
      this.updateStyles({
        "--parallax-image-background": "url(".concat(imageBg, ")")
      });
    },
    ready: function ready() {
      var bgParallax = this.$.bgParallax,
        titleParallax = this.$.titleParallax;
      window.addEventListener("scroll", function(e) {
        var yParallaxPosition = -0.2 * window.scrollY,
          yParallaxPositionTitle = 1.4 * yParallaxPosition;
        bgParallax.style.backgroundPosition = "center ".concat(
          yParallaxPosition,
          "px"
        );
        titleParallax.style.transform = "translate3D(0, ".concat(
          yParallaxPositionTitle,
          "px, 0)"
        );
      });
    }
  });
  _exports.ParallaxImage = ParallaxImage;
});
