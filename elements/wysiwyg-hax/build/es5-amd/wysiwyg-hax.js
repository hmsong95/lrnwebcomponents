define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/cms-hax/cms-hax.js"
], function(_exports, _polymerLegacy, _cmsHax) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.WysiwygHax = void 0;
  function _templateObject_39a49520f32f11e8a73f5f83990ab78c() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <textarea id$="[[fieldId]]" name="[[fieldName]]" hidden="">[[bodyValue]]</textarea>\n    <cms-hax open-default="[[openDefault]]" hide-message="" body-offset-left="[[bodyOffsetLeft]]" update-page-data="[[updatePageData]]" end-point="[[endPoint]]" app-store-connection="[[appStoreConnection]]" hide-export-button="[[hideExportButton]]" align="[[align]]"></cms-hax>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <textarea id\\$="[[fieldId]]" name="[[fieldName]]" hidden="">[[bodyValue]]</textarea>\n    <cms-hax open-default="[[openDefault]]" hide-message="" body-offset-left="[[bodyOffsetLeft]]" update-page-data="[[updatePageData]]" end-point="[[endPoint]]" app-store-connection="[[appStoreConnection]]" hide-export-button="[[hideExportButton]]" align="[[align]]"></cms-hax>\n'
      ]
    );
    _templateObject_39a49520f32f11e8a73f5f83990ab78c = function _templateObject_39a49520f32f11e8a73f5f83990ab78c() {
      return data;
    };
    return data;
  }
  var WysiwygHax = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_39a49520f32f11e8a73f5f83990ab78c()
    ),
    is: "wysiwyg-hax",
    properties: {
      openDefault: { type: Boolean, value: !1 },
      hideExportButton: { type: Boolean, value: !0 },
      align: { type: String, value: "right" },
      bodyValue: { type: String },
      appStoreConnection: { type: Object },
      fieldId: { type: String, value: "textarea-input-field" },
      fieldName: { type: String, value: "data[content]" },
      bodyOffsetLeft: { type: Number, value: -22 },
      editMode: { type: Boolean, reflectToAttribute: !0 },
      endPoint: { type: String },
      updatePageData: { type: String },
      activeHaxBody: { type: Object, observer: "_activeHaxBodyUpdated" },
      __imported: { type: Boolean, value: !1 }
    },
    _activeHaxBodyUpdated: function _activeHaxBodyUpdated(newValue, oldValue) {
      var _this = this;
      if (null != newValue && !this.__imported) {
        this.__imported = !0;
        var children = this.queryEffectiveChildren("template");
        if (
          babelHelpers.typeof(children) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0))
        ) {
          newValue.importContent(children.innerHTML);
          this.editMode = !1;
          window.HaxStore.write("editMode", this.editMode, this);
          setTimeout(function() {
            _this.editMode = !0;
            window.HaxStore.write("editMode", _this.editMode, _this);
          }, 200);
        }
      }
    },
    created: function created() {
      document.body.addEventListener(
        "hax-store-property-updated",
        this._haxStorePropertyUpdated.bind(this)
      );
    },
    attached: function attached() {
      document.body.addEventListener(
        "hax-save",
        this._bodyContentUpdated.bind(this)
      );
      document.body.addEventListener(
        "hax-store-property-updated",
        this._haxStorePropertyUpdated.bind(this)
      );
    },
    _haxStorePropertyUpdated: function _haxStorePropertyUpdated(e) {
      if (
        e.detail &&
        babelHelpers.typeof(e.detail.value) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0)) &&
        e.detail.property
      ) {
        if ("object" === babelHelpers.typeof(e.detail.value)) {
          this.set(e.detail.property, null);
        }
        this.set(e.detail.property, e.detail.value);
      }
    },
    _bodyContentUpdated: function _bodyContentUpdated(e) {
      this.bodyValue = window.HaxStore.instance.activeHaxBody.haxToContent();
    }
  });
  _exports.WysiwygHax = WysiwygHax;
});
