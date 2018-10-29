define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
], function(_polymerLegacy, _polymerDom) {
  "use strict";
  function _templateObject_19a41520db1511e88df01b77da6ecb93() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n        --word-count-color: #888888;\n        --word-count-color-hover: #000000;\n      }\n      :host::after{\n        content: attr(words-text);\n        font-size: 10px;\n        position: relative;\n        transition: .3s font-size,color ease;\n        display: flex;\n        line-height: 16px;\n        flex-direction: row-reverse;\n        margin: 12px;\n        color: var(--word-count-color);\n        @apply(--word-count-text);\n      }\n      :host:hover::after {\n        font-size: 12px;\n        font-weight: bold;\n        color: var(--word-count-color-hover);\n        @apply(--word-count-text-hover);\n      }\n      :host:focus::after {\n        font-size: 12px;\n        font-weight: bold;\n        color: var(--word-count-color-hover);\n        @apply(--word-count-text-hover);\n      }\n      :host:active::after {\n        font-size: 12px;\n        font-weight: bold;\n        color: var(--word-count-color-hover);\n        @apply(--word-count-text-hover);\n      }\n    </style>\n    <slot></slot>\n"
    ]);
    _templateObject_19a41520db1511e88df01b77da6ecb93 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_19a41520db1511e88df01b77da6ecb93()
    ),
    is: "word-count",
    hostAttributes: { tabindex: "0" },
    properties: {
      words: { type: Number },
      wordsPrefix: { type: String, value: "Words:" },
      wordsText: {
        type: String,
        computed: "_computeWordsText(words, wordsPrefix)",
        reflectToAttribute: !0
      }
    },
    ready: function ready() {
      this._observer = (0, _polymerDom.dom)(this).observeNodes(function(info) {
        if (0 < info.addedNodes.length || 0 < info.removedNodes.length) {
          this._updateWords();
        }
      });
    },
    _updateWords: function _updateWords() {
      if ("" !== (0, _polymerDom.dom)(this).textContent) {
        this.words = parseInt(
          (0, _polymerDom.dom)(this).textContent.split(/\s+/g).length - 1
        );
      } else {
        this.words = 0;
      }
    },
    _computeWordsText: function _computeWordsText(words, prefix) {
      return prefix + " " + words;
    }
  });
});
