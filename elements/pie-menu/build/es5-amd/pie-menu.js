define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js"
], function(_exports, _polymerLegacy, _polymerDom, _ironIcons) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.PieMenu = void 0;
  function _templateObject_e7d453d0f32d11e8a375757e0525631e() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host, \n      :host > div {\n        width: 200px;\n        height: 200px;\n      }\n      :host > div {\n        position: relative;\n      }\n      :host > div > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n      :host > div svg [role="button"] {\n        fill: transparent;\n      }\n      :host > div svg [role="button"]:focus,\n      :host > div svg [role="button"]:hover {\n        stroke: #017ec2;\n        cursor: pointer;\n        outline: none;\n      }\n      :host > div svg .outer-shapes,\n      :host > div svg .inner-shape {\n        fill: #fff;\n        stroke: #ddd;\n      }\n      :host > div svg .outer-shapes.focus,\n      :host > div svg .outer-shapes.hover,\n      :host > div svg .inner-shape.focus,\n      :host > div svg .inner-shape.hover {\n        fill: #cef4ff;\n      }\n      :host > div .icon-container {\n        color: black;\n      }\n      :host > div .icon-container.focus,\n      :host > div .icon-container.hover {\n        color: #017ec2;\n      }\n      :host > div .icon-container {\n        text-align: center;\n        height: 24px;\n        width: 50px;\n        top: 85px;\n        left: 75px;\n      }\n      :host > div[data-hide-label-text="true"] .icon-container {\n        width: 24px;\n        top: 88px;\n        left: 88px;\n      }\n      :host > div .icon-label {\n        font-size: 10px;\n        text-transform: lowercase;\n      }\n      :host > div[data-hide-label-text="true"] .icon-label {\n        display: none;\n      }\n      :host > div > #top-icon {\n        top: 16px;\n      }\n      :host > div[data-hide-label-text="true"] > #top-icon {\n        top: 22px;\n      }\n      :host > div > #right-icon {\n        left: 140px;\n      }\n      :host > div[data-hide-label-text="true"] > #right-icon {\n        left: 153px;\n      }\n      :host > div > #bottom-icon {\n        top: 147px;\n      }\n      :host > div[data-hide-label-text="true"] > #bottom-icon {\n        top: 153px;\n      }\n      :host > div > #left-icon {\n        left: 9px;\n      }\n      :host > div[data-hide-label-text="true"] > #left-icon {\n        left: 22px;\n      }\n    </style>\n    <div data-hide-label-text$="[[hideLabelText]]">\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.95 193.94">\n        <path id="right-shape" data-button="right" class="outer-shapes" d="M165.54 28.4a97 97 0 0 1 0 137.14l-46-46a31.86 31.86 0 0 0 0-45z"></path>\n        <path id="bottom-shape" data-button="bottom" class="outer-shapes" d="M165.54 165.54a97 97 0 0 1-137.14 0l46.05-46a31.84 31.84 0 0 0 45 0z"></path>\n        <path id="left-shape" data-button="left" class="outer-shapes" d="M28.4 165.54a97 97 0 0 1 0-137.14l46.05 46.05a31.84 31.84 0 0 0 0 45z"></path>\n        <path id="top-shape" data-button="top" class="outer-shapes" d="M28.4 28.4a97 97 0 0 1 137.14 0l-46 46.05a31.84 31.84 0 0 0-45 0z"></path>\n        <circle id="center-shape" data-button="center" class="inner-shape" cx="96.97" cy="96.97" r="31.67"></circle>\n      </svg>\n      <div id="center-icon" data-button="center" class="icon-container">\n        <iron-icon icon$="[[centerIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[centerLabel]]</div>\n      </div>\n      <div id="top-icon" data-button="top" class="icon-container">\n        <iron-icon icon$="[[topIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[topLabel]]</div>\n      </div>\n      <div id="right-icon" data-button="right" class="icon-container">\n        <iron-icon icon$="[[rightIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[rightLabel]]</div>\n      </div>\n      <div id="bottom-icon" data-button="bottom" class="icon-container">\n        <iron-icon icon$="[[bottomIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[bottomLabel]]</div>\n      </div>\n      <div id="left-icon" data-button="left" class="icon-container">\n        <iron-icon icon$="[[leftIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[leftLabel]]</div>\n      </div>\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.95 193.94">\n        <circle id="center-button" xlink:title$="[[centerLabel]]" data-button="center" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" role="button" cx="96.97" cy="96.97" r="31.67"></circle>\n        <path id="top-button" xlink:title$="[[topLabel]]" data-button="top" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M28.4 28.4a97 97 0 0 1 137.14 0l-46 46.05a31.84 31.84 0 0 0-45 0z"></path>\n        <path id="right-button" xlink:title$="[[rightLabel]]" data-button="right" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M165.54 28.4a97 97 0 0 1 0 137.14l-46-46a31.86 31.86 0 0 0 0-45z"></path>\n        <path id="bottom-button" xlink:title$="[[bottomLabel]]" data-button="bottom" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M165.54 165.54a97 97 0 0 1-137.14 0l46.05-46a31.84 31.84 0 0 0 45 0z"></path>\n        <path id="left-button" xlink:title$="[[leftLabel]]" data-button="left" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M28.4 165.54a97 97 0 0 1 0-137.14l46.05 46.05a31.84 31.84 0 0 0 0 45z"></path>\n      </svg>\n    </div>\n'
      ],
      [
        '\n    <style>\n      :host, \n      :host > div {\n        width: 200px;\n        height: 200px;\n      }\n      :host > div {\n        position: relative;\n      }\n      :host > div > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n      :host > div svg [role="button"] {\n        fill: transparent;\n      }\n      :host > div svg [role="button"]:focus,\n      :host > div svg [role="button"]:hover {\n        stroke: #017ec2;\n        cursor: pointer;\n        outline: none;\n      }\n      :host > div svg .outer-shapes,\n      :host > div svg .inner-shape {\n        fill: #fff;\n        stroke: #ddd;\n      }\n      :host > div svg .outer-shapes.focus,\n      :host > div svg .outer-shapes.hover,\n      :host > div svg .inner-shape.focus,\n      :host > div svg .inner-shape.hover {\n        fill: #cef4ff;\n      }\n      :host > div .icon-container {\n        color: black;\n      }\n      :host > div .icon-container.focus,\n      :host > div .icon-container.hover {\n        color: #017ec2;\n      }\n      :host > div .icon-container {\n        text-align: center;\n        height: 24px;\n        width: 50px;\n        top: 85px;\n        left: 75px;\n      }\n      :host > div[data-hide-label-text="true"] .icon-container {\n        width: 24px;\n        top: 88px;\n        left: 88px;\n      }\n      :host > div .icon-label {\n        font-size: 10px;\n        text-transform: lowercase;\n      }\n      :host > div[data-hide-label-text="true"] .icon-label {\n        display: none;\n      }\n      :host > div > #top-icon {\n        top: 16px;\n      }\n      :host > div[data-hide-label-text="true"] > #top-icon {\n        top: 22px;\n      }\n      :host > div > #right-icon {\n        left: 140px;\n      }\n      :host > div[data-hide-label-text="true"] > #right-icon {\n        left: 153px;\n      }\n      :host > div > #bottom-icon {\n        top: 147px;\n      }\n      :host > div[data-hide-label-text="true"] > #bottom-icon {\n        top: 153px;\n      }\n      :host > div > #left-icon {\n        left: 9px;\n      }\n      :host > div[data-hide-label-text="true"] > #left-icon {\n        left: 22px;\n      }\n    </style>\n    <div data-hide-label-text\\$="[[hideLabelText]]">\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.95 193.94">\n        <path id="right-shape" data-button="right" class="outer-shapes" d="M165.54 28.4a97 97 0 0 1 0 137.14l-46-46a31.86 31.86 0 0 0 0-45z"></path>\n        <path id="bottom-shape" data-button="bottom" class="outer-shapes" d="M165.54 165.54a97 97 0 0 1-137.14 0l46.05-46a31.84 31.84 0 0 0 45 0z"></path>\n        <path id="left-shape" data-button="left" class="outer-shapes" d="M28.4 165.54a97 97 0 0 1 0-137.14l46.05 46.05a31.84 31.84 0 0 0 0 45z"></path>\n        <path id="top-shape" data-button="top" class="outer-shapes" d="M28.4 28.4a97 97 0 0 1 137.14 0l-46 46.05a31.84 31.84 0 0 0-45 0z"></path>\n        <circle id="center-shape" data-button="center" class="inner-shape" cx="96.97" cy="96.97" r="31.67"></circle>\n      </svg>\n      <div id="center-icon" data-button="center" class="icon-container">\n        <iron-icon icon\\$="[[centerIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[centerLabel]]</div>\n      </div>\n      <div id="top-icon" data-button="top" class="icon-container">\n        <iron-icon icon\\$="[[topIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[topLabel]]</div>\n      </div>\n      <div id="right-icon" data-button="right" class="icon-container">\n        <iron-icon icon\\$="[[rightIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[rightLabel]]</div>\n      </div>\n      <div id="bottom-icon" data-button="bottom" class="icon-container">\n        <iron-icon icon\\$="[[bottomIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[bottomLabel]]</div>\n      </div>\n      <div id="left-icon" data-button="left" class="icon-container">\n        <iron-icon icon\\$="[[leftIcon]]"></iron-icon>\n        <div class="icon-label" aria-hidden="true">[[leftLabel]]</div>\n      </div>\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.95 193.94">\n        <circle id="center-button" xlink:title\\$="[[centerLabel]]" data-button="center" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" role="button" cx="96.97" cy="96.97" r="31.67"></circle>\n        <path id="top-button" xlink:title\\$="[[topLabel]]" data-button="top" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M28.4 28.4a97 97 0 0 1 137.14 0l-46 46.05a31.84 31.84 0 0 0-45 0z"></path>\n        <path id="right-button" xlink:title\\$="[[rightLabel]]" data-button="right" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M165.54 28.4a97 97 0 0 1 0 137.14l-46-46a31.86 31.86 0 0 0 0-45z"></path>\n        <path id="bottom-button" xlink:title\\$="[[bottomLabel]]" data-button="bottom" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M165.54 165.54a97 97 0 0 1-137.14 0l46.05-46a31.84 31.84 0 0 0 45 0z"></path>\n        <path id="left-button" xlink:title\\$="[[leftLabel]]" data-button="left" role="button" tabindex="0" on-tap="_itemTapped" on-keydown="_itemTapped" d="M28.4 165.54a97 97 0 0 1 0-137.14l46.05 46.05a31.84 31.84 0 0 0 0 45z"></path>\n      </svg>\n    </div>\n'
      ]
    );
    _templateObject_e7d453d0f32d11e8a375757e0525631e = function _templateObject_e7d453d0f32d11e8a375757e0525631e() {
      return data;
    };
    return data;
  }
  var PieMenu = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e7d453d0f32d11e8a375757e0525631e()
    ),
    is: "pie-menu",
    properties: {
      hideLabelText: { type: String, value: "false" },
      centerLabel: { type: String, value: "Home" },
      topLabel: { type: String, value: "Option 1" },
      leftLabel: { type: String, value: "Option 2" },
      bottomLabel: { type: String, value: "Option 3" },
      rightLabel: { type: String, value: "Option 4" },
      centerIcon: { type: String, value: "icons:check-box-outline-blank" },
      topIcon: { type: String, value: "icons:check-box-outline-blank" },
      leftIcon: { type: String, value: "icons:check-box-outline-blank" },
      bottomIcon: { type: String, value: "icons:check-box-outline-blank" },
      rightIcon: { type: String, value: "icons:check-box-outline-blank" }
    },
    ready: function ready() {
      for (
        var buttons = this.querySelectorAll('[role="button"][data-button]'),
          i = 0;
        i < buttons.length;
        i++
      ) {
        this._addListenerAddState(this, buttons[i], "mouseover", "hover");
        this._addListenerAddState(this, buttons[i], "focus", "focus");
        this._addListenerRemoveState(this, buttons[i], "mouseout", "hover");
        this._addListenerRemoveState(this, buttons[i], "blur", "focus");
      }
    },
    _addListenerAddState: function _addListenerAddState(
      menu,
      button,
      action,
      state
    ) {
      button.addEventListener(action, function(e) {
        for (
          var elements = menu._getButtonElements(menu, button), i = 0;
          i < elements.length;
          i++
        ) {
          elements[i].classList.add(state);
        }
      });
    },
    _addListenerRemoveState: function _addListenerRemoveState(
      menu,
      button,
      action,
      state
    ) {
      button.addEventListener(action, function(e) {
        for (
          var elements = menu._getButtonElements(menu, button), i = 0;
          i < elements.length;
          i++
        ) {
          elements[i].classList.remove(state);
        }
      });
    },
    _getButtonElements: function _getButtonElements(menu, button) {
      return menu.querySelectorAll(
        '[data-button="' + button.getAttribute("data-button") + '"]'
      );
    },
    _itemTapped: function _itemTapped(e) {
      var normalizedEvent = (0, _polymerDom.dom)(e),
        localLink = normalizedEvent.localTarget;
      if (
        !(
          localLink.hasAttribute("role") &&
          "button" !== localLink.getAttribute("role")
        )
      ) {
        localLink = localLink.parentNode;
      }
      this.fire("pie-menu-selection", { option: localLink });
    }
  });
  _exports.PieMenu = PieMenu;
});
