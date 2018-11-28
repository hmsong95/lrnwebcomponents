define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/polymer/lib/utils/async.js",
  "./node_modules/@polymer/paper-dialog/paper-dialog.js",
  "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js",
  "./node_modules/@polymer/neon-animation/animations/scale-up-animation.js",
  "./node_modules/@polymer/neon-animation/animations/fade-out-animation.js"
], function(
  _exports,
  _polymerElement,
  _polymerDom,
  async,
  _paperDialog,
  _paperDialogScrollable,
  _paperButton,
  _ironIcons,
  _ironIcon,
  _scaleUpAnimation,
  _fadeOutAnimation
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SimpleModal = void 0;
  async = babelHelpers.interopRequireWildcard(async);
  function _templateObject_880798f0f32c11e8b0f97fdc181b5e13() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n:host ::slotted(*) {\n  font-size: 14px;\n  @apply --simple-modal-content;\n}\n\npaper-dialog-scrollable {\n  padding: 8px 24px;\n  @apply --simple-modal-content-container;\n}\n#dialog {\n  display: block;\n  margin: auto;\n  width: auto;\n  height: auto;\n  z-index: 1000;\n  min-width: 50vw;\n  min-height: 50vh;\n  @apply --simple-modal-dialog;\n}\n.buttons {\n  padding: 8px 24px;\n  @apply --simple-modal-buttons;\n}\n\n#close {\n  top: 0;\n  font-size: 14px;\n  text-transform: none;\n  right: 0;\n  position: absolute;\n  padding: 4px;\n  margin: 4px;\n  color: var(--simple-modal-text, #ffffff);\n  background-color: transparent;\n  min-width: unset;\n  line-height: 32px;\n  @apply --simple-modal-close;\n}\n\n#close iron-icon {\n  display: inline-block;\n  color: var(--simple-modal-text, #ffffff);\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  @apply --simple-modal-close-icon;\n}\n\n.top {\n  display: flex;\n  margin-top: 0;\n  justify-content: space-between;\n  background-color: var(--simple-modal-background, #20427b);\n  color: var(--simple-modal-text, #ffffff);\n  padding: 8px 16px;\n  @apply --simple-modal-top;\n}\n.top h2 {\n  flex: auto;\n  color: var(--simple-modal-text, #ffffff);\n  font-size: 32px;\n  text-transform: capitalize;\n  padding: 0;\n  line-height: 32px;\n  margin: 8px;\n  @apply --simple-modal-heading;\n}</style>\n<paper-dialog id="dialog" entry-animation="scale-up-animation"\nexit-animation="fade-out-animation" opened="{{opened}}" with-backdrop always-on-top>\n  <div class="top">\n    <slot name="header"></slot>\n    <h2 hidden$="[[!title]]">[[title]]</h2>\n    <paper-button id="close" dialog-dismiss hidden$="[[!opened]]">\n      <iron-icon icon="[[closeIcon]]"></iron-icon> [[closeLabel]]\n    </paper-button>\n  </div>\n  <paper-dialog-scrollable>\n    <slot name="content"></slot>\n  </paper-dialog-scrollable>\n  <div class="buttons">\n    <slot name="buttons"></slot>\n  </div>\n</paper-dialog>'
    ]);
    _templateObject_880798f0f32c11e8b0f97fdc181b5e13 = function _templateObject_880798f0f32c11e8b0f97fdc181b5e13() {
      return data;
    };
    return data;
  }
  window.simpleModal = window.simpleModal || {};
  window.simpleModal.requestAvailability = function() {
    if (!window.simpleModal.instance) {
      window.simpleModal.instance = document.createElement("simple-modal");
      document.body.appendChild(window.simpleModal.instance);
    }
    return window.simpleModal.instance;
  };
  var SimpleModal = (function(_PolymerElement) {
    babelHelpers.inherits(SimpleModal, _PolymerElement);
    function SimpleModal() {
      babelHelpers.classCallCheck(this, SimpleModal);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(SimpleModal).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      SimpleModal,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                babelHelpers.getPrototypeOf(SimpleModal.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            window.addEventListener(
              "simple-modal-show",
              this.showEvent.bind(this)
            );
            this.$.dialog.addEventListener(
              "iron-overlay-opened",
              this._resizeContent.bind(this)
            );
          }
        },
        {
          key: "_resizeContent",
          value: function _resizeContent(e) {
            async.microTask.run(function() {
              window.dispatchEvent(new Event("resize"));
            });
          }
        },
        {
          key: "showEvent",
          value: function showEvent(e) {
            var _this = this;
            if (this.opened) {
              while (null !== (0, _polymerDom.dom)(this).firstChild) {
                (0, _polymerDom.dom)(this).removeChild(
                  (0, _polymerDom.dom)(this).firstChild
                );
              }
              setTimeout(function() {
                _this.show(
                  e.detail.title,
                  e.detail.elements,
                  e.detail.invokedBy,
                  e.detail.clone
                );
              }, 100);
            } else {
              this.show(
                e.detail.title,
                e.detail.elements,
                e.detail.invokedBy,
                e.detail.clone
              );
            }
          }
        },
        {
          key: "show",
          value: function show(title, elements, invokedBy) {
            var _this2 = this,
              clone =
                3 < arguments.length && arguments[3] !== void 0
                  ? arguments[3]
                  : !1;
            this.set("invokedBy", invokedBy);
            this.title = title;
            var element,
              slots = ["header", "content", "buttons"];
            for (var i in slots) {
              if (elements[slots[i]]) {
                if (clone) {
                  element = elements[slots[i]].cloneNode(!0);
                } else {
                  element = elements[slots[i]];
                }
                element.setAttribute("slot", slots[i]);
                (0, _polymerDom.dom)(this).appendChild(element);
              }
            }
            setTimeout(function() {
              _this2.opened = !0;
            }, 100);
          }
        },
        {
          key: "animationEnded",
          value: function animationEnded(e) {
            var _this3 = this;
            if (this.invokedBy) {
              this.title = "";
              while (null !== (0, _polymerDom.dom)(this).firstChild) {
                (0, _polymerDom.dom)(this).removeChild(
                  (0, _polymerDom.dom)(this).firstChild
                );
              }
              async.microTask.run(function() {
                setTimeout(function() {
                  _this3.invokedBy.focus();
                }, 500);
              });
            }
          }
        },
        {
          key: "close",
          value: function close() {
            this.$.dialog.close();
          }
        },
        {
          key: "_openedChanged",
          value: function _openedChanged(newValue, oldValue) {
            if (
              babelHelpers.typeof(newValue) !==
                ("undefined" === typeof void 0
                  ? "undefined"
                  : babelHelpers.typeof(void 0)) &&
              !newValue
            ) {
              this.animationEnded();
              var evt = new CustomEvent("simple-modal-closed", {
                bubbles: !0,
                cancelable: !0,
                detail: { opened: !1, invokedBy: this.invokedBy }
              });
              this.dispatchEvent(evt);
            } else if (newValue) {
              var _evt = new CustomEvent("simple-modal-opened", {
                bubbles: !0,
                cancelable: !0,
                detail: { opened: !0, invokedBy: this.invokedBy }
              });
              this.dispatchEvent(_evt);
            }
          }
        },
        {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            babelHelpers
              .get(
                babelHelpers.getPrototypeOf(SimpleModal.prototype),
                "disconnectedCallback",
                this
              )
              .call(this);
            window.removeEventListener(
              "simple-modal-show",
              this.showEvent.bind(this)
            );
            this.$.dialog.removeEventListener(
              "iron-overlay-opened",
              this._resizeContent.bind(this)
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_880798f0f32c11e8b0f97fdc181b5e13()
            );
          }
        },
        {
          key: "properties",
          get: function get() {
            return {
              title: { name: "title", type: String, value: "" },
              opened: {
                name: "opened",
                type: Boolean,
                value: !1,
                reflectToAttribute: !0,
                observer: "_openedChanged"
              },
              closeLabel: { name: "closeLabel", type: String, value: "Close" },
              closeIcon: { name: "closeIcon", type: String, value: "cancel" },
              invokedBy: { name: "invokedBy", type: Object }
            };
          }
        },
        {
          key: "tag",
          get: function get() {
            return "simple-modal";
          }
        }
      ]
    );
    return SimpleModal;
  })(_polymerElement.PolymerElement);
  _exports.SimpleModal = SimpleModal;
  window.customElements.define(SimpleModal.tag, SimpleModal);
});
