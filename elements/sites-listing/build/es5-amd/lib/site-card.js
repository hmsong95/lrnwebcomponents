define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/paper-card/paper-card.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_97319b10e11a11e8b71c334c2ce241bb() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: inline-flex;\n        min-width: 250px;\n      }\n      :host(:focus) {\n        outline: none;\n      }\n    \n      :host([size="micro"]) {\n        transform: scale(.5);\n      }\n    \n      :host([size="small"]) {\n        transform: scale(.8);\n      }\n    \n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n    \n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 .5em;\n      }\n    \n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n    \n      .card-control-height {\n        height: 15rem;\n      }\n    \n      [elevation="0"] {\n        border: solid 1px #EEEEEE;\n      }\n    \n      .text-right {\n        text-align: right;\n      }\n    \n      .text-left {\n        text-align: left;\n      }\n    \n      .name,\n      .title {\n        color: #222;\n        font-size: .8em;\n        font-weight: 600;\n        line-height: 1.25em;\n        padding: 0 .75em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: .5em;\n      }\n    \n      .title {\n        font-size: .7em;\n        font-weight: 400;\n      }\n    \n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n    \n      .site-icon {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(.8);\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n        margin: -1em .5em 0 0;\n        position: absolute;\n        right: 0;\n      }\n    \n      .site-icon:hover,\n      .site-icon:focus {\n        color: black;\n      }\n    \n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 1em;\n      }\n    \n      .link {\n        font-size: 1em;\n        line-height: 1em;\n      }\n    \n      .site-info {\n        width: 100%;\n      }\n    \n      .site-preview {\n        height: 10em;\n      }\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n    \n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="site-preview">\n          <iron-image style="width:100%; height:100%; background-color: lightgray;" sizing="cover" preload="" fade="" src="[[image]]" hidden$="[[!image]]"></iron-image>\n        </div>\n        <iron-icon class="site-icon" icon="[[icon]]" hidden$="[[!icon]]"></iron-icon>\n        <div class="site-info">\n          <div class="divider"></div>\n          <div class="name">[[name]]</div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions" hidden="">\n        <div class="card-action-details">\n        </div>\n      </div>\n    </paper-card>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: inline-flex;\n        min-width: 250px;\n      }\n      :host(:focus) {\n        outline: none;\n      }\n    \n      :host([size="micro"]) {\n        transform: scale(.5);\n      }\n    \n      :host([size="small"]) {\n        transform: scale(.8);\n      }\n    \n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n    \n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 .5em;\n      }\n    \n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n    \n      .card-control-height {\n        height: 15rem;\n      }\n    \n      [elevation="0"] {\n        border: solid 1px #EEEEEE;\n      }\n    \n      .text-right {\n        text-align: right;\n      }\n    \n      .text-left {\n        text-align: left;\n      }\n    \n      .name,\n      .title {\n        color: #222;\n        font-size: .8em;\n        font-weight: 600;\n        line-height: 1.25em;\n        padding: 0 .75em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: .5em;\n      }\n    \n      .title {\n        font-size: .7em;\n        font-weight: 400;\n      }\n    \n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n    \n      .site-icon {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(.8);\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n        margin: -1em .5em 0 0;\n        position: absolute;\n        right: 0;\n      }\n    \n      .site-icon:hover,\n      .site-icon:focus {\n        color: black;\n      }\n    \n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 1em;\n      }\n    \n      .link {\n        font-size: 1em;\n        line-height: 1em;\n      }\n    \n      .site-info {\n        width: 100%;\n      }\n    \n      .site-preview {\n        height: 10em;\n      }\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n    \n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="site-preview">\n          <iron-image style="width:100%; height:100%; background-color: lightgray;" sizing="cover" preload="" fade="" src="[[image]]" hidden\\$="[[!image]]"></iron-image>\n        </div>\n        <iron-icon class="site-icon" icon="[[icon]]" hidden\\$="[[!icon]]"></iron-icon>\n        <div class="site-info">\n          <div class="divider"></div>\n          <div class="name">[[name]]</div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions" hidden="">\n        <div class="card-action-details">\n        </div>\n      </div>\n    </paper-card>\n'
      ]
    );
    _templateObject_97319b10e11a11e8b71c334c2ce241bb = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_97319b10e11a11e8b71c334c2ce241bb()
    ),
    is: "site-card",
    listeners: {
      mouseover: "_mouseEnter",
      focusin: "_mouseEnter",
      mousedown: "_mouseEnter",
      mouseleave: "_mouseLeave",
      mouseout: "_mouseLeave",
      focusout: "_mouseLeave"
    },
    hostAttributes: { tabindex: "0" },
    properties: {
      size: { type: String, reflectToAttribute: !0 },
      image: { type: String },
      icon: { type: String, value: !1 },
      name: { type: String, value: "" },
      title: { type: String, value: "" },
      elevation: { type: Number, value: 1, reflectToAttribute: !0 }
    },
    _mouseEnter: function _mouseEnter() {
      this.__oldElevation = this.elevation;
      if (5 < this.elevation + 2) {
        this.elevation = 5;
      } else {
        this.elevation += 2;
      }
    },
    _mouseLeave: function _mouseLeave() {
      this.elevation = this.__oldElevation;
    }
  });
});