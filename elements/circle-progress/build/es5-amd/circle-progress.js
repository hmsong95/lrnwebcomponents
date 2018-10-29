define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js",
  "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js",
  "./node_modules/@polymer/paper-styles/default-theme.js"
], function(_polymerLegacy, _ironFlexLayout, _ironResizableBehavior) {
  "use strict";
  function _templateObject_4b512c80db1411e89818b952a7439684() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n        <style>\n\n            :host {\n                @apply(--layout-vertical);\n                @apply(--layout-center-center);\n\n                position: relative;\n\n                width: var(--circle-progress-width, 64px);\n                height: var(--circle-progress-height, 64px);\n                margin: 24px;\n\n                border-radius: 50%;\n            }\n\n            svg {\n                position: absolute;\n                top: 0;\n                left: 0;\n\n                display: none;\n            }\n\n            .circle-background {\n                stroke: var(--circle-progress-bg-stroke-color, --paper-grey-100);\n            }\n\n            .circle-foreground {\n                transition: stroke-dashoffset var(--circle-progress-transition, 150ms);\n\n                stroke: var(--circle-progress-stroke-color, --accent-color);\n                stroke-linecap: var(--circle-progress-stroke-linecap, round);\n            }\n\n        </style>\n\n        <svg id="circle" width="100%" height="100%">\n            <circle class="circle-background" r$="[[_radius]]" cx$="[[_cx]]" cy$="[[_cy]]" fill="transparent" stroke-width$="[[strokeWidth]]"></circle>\n            <circle class="circle-foreground" r$="[[_radius]]" cx$="[[_cx]]" cy$="[[_cy]]" fill="transparent" stroke-width$="[[strokeWidth]]" stroke-dasharray$="[[_dasharray]]" stroke-dashoffset$="[[_dashoffset]]" transform$="[[_transform]]"></circle>\n        </svg>\n\n        <slot></slot>\n'
      ],
      [
        '\n        <style>\n\n            :host {\n                @apply(--layout-vertical);\n                @apply(--layout-center-center);\n\n                position: relative;\n\n                width: var(--circle-progress-width, 64px);\n                height: var(--circle-progress-height, 64px);\n                margin: 24px;\n\n                border-radius: 50%;\n            }\n\n            svg {\n                position: absolute;\n                top: 0;\n                left: 0;\n\n                display: none;\n            }\n\n            .circle-background {\n                stroke: var(--circle-progress-bg-stroke-color, --paper-grey-100);\n            }\n\n            .circle-foreground {\n                transition: stroke-dashoffset var(--circle-progress-transition, 150ms);\n\n                stroke: var(--circle-progress-stroke-color, --accent-color);\n                stroke-linecap: var(--circle-progress-stroke-linecap, round);\n            }\n\n        </style>\n\n        <svg id="circle" width="100%" height="100%">\n            <circle class="circle-background" r\\$="[[_radius]]" cx\\$="[[_cx]]" cy\\$="[[_cy]]" fill="transparent" stroke-width\\$="[[strokeWidth]]"></circle>\n            <circle class="circle-foreground" r\\$="[[_radius]]" cx\\$="[[_cx]]" cy\\$="[[_cy]]" fill="transparent" stroke-width\\$="[[strokeWidth]]" stroke-dasharray\\$="[[_dasharray]]" stroke-dashoffset\\$="[[_dashoffset]]" transform\\$="[[_transform]]"></circle>\n        </svg>\n\n        <slot></slot>\n'
      ]
    );
    _templateObject_4b512c80db1411e89818b952a7439684 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_4b512c80db1411e89818b952a7439684()
    ),
    is: "circle-progress",
    behaviors: [_ironResizableBehavior.IronResizableBehavior],
    properties: {
      value: { type: Number, value: 0 },
      max: { type: Number, value: 100 },
      strokeWidth: { type: Number, value: 4 },
      angle: { type: Number, value: -90 },
      _cx: { type: Number, value: null },
      _cy: { type: Number, value: null },
      _radius: {
        type: Number,
        computed: "_computeRadius(_cx, _cy, strokeWidth)"
      },
      _transform: {
        type: String,
        computed: "_computeTransform(angle, _cx, _cy)"
      },
      _dasharray: { type: Number, computed: "_computeDashArray(_radius)" },
      _dashoffset: {
        type: Number,
        computed: "_computeDashOffset(value, max, _dasharray)"
      }
    },
    listeners: { "iron-resize": "_onIronResize" },
    _computeDashArray: function _computeDashArray(radius) {
      return 2 * Math.PI * radius;
    },
    _computeDashOffset: function _computeDashOffset(value, max, dasharray) {
      return (1 - value / max) * dasharray;
    },
    _computeRadius: function _computeRadius(cx, cy, strokeWidth) {
      return cx && cy ? Math.max(0, Math.min(cx, cy) - strokeWidth / 2) : 0;
    },
    _computeTransform: function _computeTransform(angle, cx, cy) {
      return cx && cy ? "rotate(" + angle + ", " + cx + ", " + cy + ")" : "";
    },
    _onIronResize: function _onIronResize() {
      if (this.offsetWidth && this.offsetHeight) {
        this._cx = this.offsetWidth / 2;
        this._cy = this.offsetHeight / 2;
        this.$.circle.style.display = "block";
      }
    }
  });
});
