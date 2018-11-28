define([
  "exports",
  "meta",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/utils/resolve-url.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js",
  "./node_modules/@polymer/paper-styles/shadow.js"
], function(
  _exports,
  meta,
  _polymerLegacy,
  _resolveUrl,
  _materializecssStyles,
  _HAXWiring,
  _schemaBehaviors,
  _a11yBehaviors,
  _shadow
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignBlockquote = void 0;
  meta = babelHelpers.interopRequireWildcard(meta);
  function _templateObject_58227ae0f32e11e8a080c5c7308bf534() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        --lrndesign-blockquote-color: #585858;\n        --lrndesign-blockquote-cite: #3a3a3a;\n        @apply --lrndesign-blockquote;\n      }\n      blockquote {\n        font-size: 19.2px;\n        font-style: italic;\n        margin: 4px 0;\n        padding: 24px 24px 24px 40px;\n        line-height: 1.5;\n        position: relative;\n        color: var(--lrndesign-blockquote-color);\n      }\n      blockquote.decorate:before {\n        display: block;\n        font-family: Georgia, serif;\n        content: "\\201C";\n        font-size: 80px;\n        position: absolute;\n        left: -20px;\n        top: -20px;\n      }\n      blockquote.outset {\n        margin: 4px -128px 4px -128px;\n      }\n      cite {\n        color: var(--lrndesign-blockquote-cite);\n        font-size: 12.8px;\n        display: block;\n        margin-top: 4px;\n        text-align: right;\n      }\n      :host([depth="1"]) blockquote { @apply --shadow-elevation-2dp; }\n      :host([depth="2"]) blockquote { @apply --shadow-elevation-3dp; }\n      :host([depth="3"]) blockquote { @apply --shadow-elevation-4dp; }\n      :host([depth="4"]) blockquote { @apply --shadow-elevation-6dp; }\n      :host([depth="5"]) blockquote { @apply --shadow-elevation-8dp; }\n\n\n      /* BEGIN HYPERCARDIFY, thanks @realdlnorman */\n      :host([hypercard]) ::slotted(*) {\n        -webkit-filter: grayscale(1) contrast(300%);\n        filter: grayscale(1) contrast(300%);\n        font-family: Chikarego, Helvetica, sans-serif;\n        transition: all .6s ease;\n      }\n      /* Disable grayscale on hover */\n      :host([hypercard]:hover) ::slotted(*) {\n        -webkit-filter: grayscale(0);\n        filter: none;\n      }\n    </style>\n    <blockquote class$="[[generateClass(decorate, outset, color, textColor)]]">\n      <slot></slot>\n      <cite class$="[[textColor]]">\n        [[citation]]\n      </cite>\n    </blockquote>\n'
      ],
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        --lrndesign-blockquote-color: #585858;\n        --lrndesign-blockquote-cite: #3a3a3a;\n        @apply --lrndesign-blockquote;\n      }\n      blockquote {\n        font-size: 19.2px;\n        font-style: italic;\n        margin: 4px 0;\n        padding: 24px 24px 24px 40px;\n        line-height: 1.5;\n        position: relative;\n        color: var(--lrndesign-blockquote-color);\n      }\n      blockquote.decorate:before {\n        display: block;\n        font-family: Georgia, serif;\n        content: "\\\\201C";\n        font-size: 80px;\n        position: absolute;\n        left: -20px;\n        top: -20px;\n      }\n      blockquote.outset {\n        margin: 4px -128px 4px -128px;\n      }\n      cite {\n        color: var(--lrndesign-blockquote-cite);\n        font-size: 12.8px;\n        display: block;\n        margin-top: 4px;\n        text-align: right;\n      }\n      :host([depth="1"]) blockquote { @apply --shadow-elevation-2dp; }\n      :host([depth="2"]) blockquote { @apply --shadow-elevation-3dp; }\n      :host([depth="3"]) blockquote { @apply --shadow-elevation-4dp; }\n      :host([depth="4"]) blockquote { @apply --shadow-elevation-6dp; }\n      :host([depth="5"]) blockquote { @apply --shadow-elevation-8dp; }\n\n\n      /* BEGIN HYPERCARDIFY, thanks @realdlnorman */\n      :host([hypercard]) ::slotted(*) {\n        -webkit-filter: grayscale(1) contrast(300%);\n        filter: grayscale(1) contrast(300%);\n        font-family: Chikarego, Helvetica, sans-serif;\n        transition: all .6s ease;\n      }\n      /* Disable grayscale on hover */\n      :host([hypercard]:hover) ::slotted(*) {\n        -webkit-filter: grayscale(0);\n        filter: none;\n      }\n    </style>\n    <blockquote class\\$="[[generateClass(decorate, outset, color, textColor)]]">\n      <slot></slot>\n      <cite class\\$="[[textColor]]">\n        [[citation]]\n      </cite>\n    </blockquote>\n'
      ]
    );
    _templateObject_58227ae0f32e11e8a080c5c7308bf534 = function _templateObject_58227ae0f32e11e8a080c5c7308bf534() {
      return data;
    };
    return data;
  }
  var LrndesignBlockquote = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_58227ae0f32e11e8a080c5c7308bf534()
    ),
    is: "lrndesign-blockquote",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      SchemaBehaviors.Schema,
      A11yBehaviors.A11y
    ],
    properties: {
      citation: { type: String },
      depth: { type: String, value: "0", reflectToAttribute: !0 },
      decorate: { type: Boolean, value: !1, reflectToAttribute: !0 },
      outset: { type: Boolean, value: !1, reflectToAttribute: !0 },
      colorCode: {
        type: String,
        value: "#fff9c4",
        observer: "_bgColorChanged"
      },
      color: { type: String, computed: "_computeColorClass(colorCode)" },
      textColorCode: { type: String, value: "#000000" },
      textColor: {
        type: String,
        computed: "_computeColorClass(textColorCode)"
      },
      hypercard: {
        type: Boolean,
        reflectToAttribute: !0,
        value: !1,
        observer: "_applyChikarego"
      }
    },
    _applyChikarego: function _applyChikarego(newValue, oldValue) {
      if (!0 === newValue) {
        var style = document.createElement("style"),
          basePath = (0, _resolveUrl.pathFromUrl)(meta.url);
        style.innerHTML = "@font-face {\n        font-family: 'Chikarego';\n        src: url('"
          .concat(
            basePath,
            "lib/chikarego2-webfont.woff2') format('woff2'),\n             url('"
          )
          .concat(
            basePath,
            "lib/chikarego2-webfont.woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n      }"
          );
        document.head.appendChild(style);
      }
    },
    attached: function attached() {
      var props = {
        canScale: !0,
        canPosition: !0,
        canEditSource: !0,
        gizmo: {
          title: "Fancy quote",
          description:
            "Presents a famous quote with additional design options.",
          icon: "editor:format-quote",
          color: "grey",
          groups: ["Content", "Presentation"],
          handles: [
            {
              type: "content",
              caption: "quote",
              title: "citation",
              description: "quote",
              citation: "citation",
              color: "colorCode"
            }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "colorCode",
              title: "Background color",
              description: "Select the background color for the quote.",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            },
            {
              property: "outset",
              title: "Outset",
              description:
                "Should this expand beyond it's container by design?",
              inputMethod: "boolean",
              icon: "editor:border-outer"
            },
            {
              property: "decorate",
              title: "Glyph decoration",
              description: 'Add a fancy " quotation mark off the left side.',
              inputMethod: "boolean",
              icon: "editor:format-quote"
            }
          ],
          configure: [
            {
              slot: "",
              title: "Quote",
              description: "Quoted text",
              inputMethod: "textfield",
              icon: "editor:format-quote",
              required: !0,
              validationType: "text"
            },
            {
              property: "citation",
              title: "Citation",
              description: "",
              inputMethod: "textfield",
              icon: "editor:short-text",
              required: !1,
              validationType: "text"
            },
            {
              property: "outset",
              title: "Outset",
              description:
                "Should this expand beyond it's container by design?",
              inputMethod: "boolean",
              icon: "editor:border-outer"
            },
            {
              property: "decorate",
              title: "Glyph decoration",
              description: 'Add a fancy " quotation mark off the left side.',
              inputMethod: "boolean",
              icon: "editor:format-quote"
            },
            {
              property: "colorCode",
              title: "Background color",
              description: "Select the background color for the quote.",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            },
            {
              property: "depth",
              title: "Shadow depth",
              description: "Select the background color for the quote.",
              inputMethod: "select",
              icon: "maps:layers",
              options: {
                0: "none",
                1: "Level 1",
                2: "Level 2",
                3: "Level 3",
                4: "Level 4",
                5: "Level 5"
              }
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(props);
    },
    _bgColorChanged: function _bgColorChanged(newValue, oldValue) {
      if (
        babelHelpers.typeof(newValue) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0)) &&
        null != newValue
      ) {
        this.computeTextPropContrast("textColorCode", "colorCode");
      }
    },
    _computeColorClass: function _computeColorClass(color) {
      if (null != color && "#ffffff" == color.toLowerCase()) {
        return "white-text";
      } else if (null != color && "#000000" == color) {
        return "black-text";
      } else if (null != color && "#" == color.substring(0, 1)) {
        return this._colorTransform(color.toLowerCase(), "", "");
      }
    },
    generateClass: function generateClass(decorate, outset, color, textColor) {
      var returnClass = "";
      if (decorate) {
        returnClass += " decorate";
      }
      if (outset) {
        returnClass += " outset";
      }
      returnClass += " " + textColor + " " + color;
      return returnClass;
    }
  });
  _exports.LrndesignBlockquote = LrndesignBlockquote;
});
