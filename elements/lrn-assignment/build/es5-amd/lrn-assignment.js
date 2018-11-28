define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/paper-button/paper-button.js"
], function(_exports, _polymerLegacy, _paperCard, _paperButton) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnAssignments = _exports.LrnAssignment = void 0;
  function _templateObject2_135beeb0f32d11e89c8e075c39b88d01() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: flex;\n        flex-wrap: wrap;\n      }\n      :host lrn-assignment {\n        margin: 16px;\n      }\n      :host([layout="wide"]) lrn-assignment {\n        width: calc(100% - 32px);\n      }\n      :host([layout="medium"]) lrn-assignment {\n        width: calc(50% - 32px);\n      }\n      :host([layout="tight"]) lrn-assignment {\n        width: calc(25% - 32px);\n      }\n    </style>\n    <template is="dom-repeat" items="[[assignments]]">\n      <lrn-assignment title="[[item.title]]" actions="[[item.actions]]"></lrn-assignment>\n    </template>\n\n    <template is="dom-if" if="[[url]]">\n      <iron-ajax auto="" url="[[url]]" handle-as="json" on-response="handleResponse"></iron-ajax>\n    </template>\n'
    ]);
    _templateObject2_135beeb0f32d11e89c8e075c39b88d01 = function _templateObject2_135beeb0f32d11e89c8e075c39b88d01() {
      return data;
    };
    return data;
  }
  function _templateObject_135beeb0f32d11e89c8e075c39b88d01() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: flex;\n        width: 100%;\n      }\n      paper-card {\n        width: 100%;\n      }\n    </style>\n    <paper-card heading="[[title]]" image="[[image]]" elevation="1" animated-shadow="false">\n      <div class="card-content">\n        [[details]]\n        <slot></slot>\n      </div>  \n      <div class="card-actions">\n        <template is="dom-repeat" items="[[actions]]">\n          <a href$="[[item.url]]"><paper-button raised>[[item.label]]</paper-button></a>\n        </template>\n      </div>\n    </paper-card>\n'
    ]);
    _templateObject_135beeb0f32d11e89c8e075c39b88d01 = function _templateObject_135beeb0f32d11e89c8e075c39b88d01() {
      return data;
    };
    return data;
  }
  var LrnAssignment = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_135beeb0f32d11e89c8e075c39b88d01()
    ),
    is: "lrn-assignment",
    properties: {
      title: { type: String },
      image: { type: String },
      details: { type: String },
      url: { type: String },
      open: { type: Boolean, value: !1 },
      complete: { type: Boolean, value: !1 },
      actions: { type: Object }
    }
  });
  _exports.LrnAssignment = LrnAssignment;
  var LrnAssignments = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject2_135beeb0f32d11e89c8e075c39b88d01()
    ),
    is: "lrn-assignments",
    properties: {
      assignments: {
        type: Object,
        reflectToAttribute: !0,
        observer: "assignmentsChanged"
      },
      layout: { type: String, reflectToAttribute: !0 },
      url: { type: String }
    },
    assignmentsChanged: function assignmentsChanged(assignments) {
      if (1 >= assignments.length) {
        this.layout = "wide";
      } else if (4 >= assignments.length) {
        this.layout = "medium";
      } else if (6 >= assignments.length) {
        this.layout = "tight";
      }
    },
    rowItemsChanged: function rowItemsChanged(items) {},
    handleResponse: function handleResponse(data) {
      this.assignments = data.response;
    }
  });
  _exports.LrnAssignments = LrnAssignments;
});
