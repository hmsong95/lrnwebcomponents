define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icons/maps-icons.js",
  "./node_modules/@polymer/iron-icons/hardware-icons.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "./node_modules/@lrnwebcomponents/social-media-icons/social-media-icons.js"
], function(
  _exports,
  _polymerLegacy,
  _paperCard,
  _paperButton,
  _lrnIcons,
  _ironIcons,
  _mapsIcons,
  _hardwareIcons,
  _paperTooltip,
  _socialMediaIcons
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignContactcard = void 0;
  function _templateObject_6550a7f0f32e11e8aeb835894d1852b7() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        --contactcard-icons-hover-color: gray;\n        --contactcard-icons-fill-color: #aeaeae;\n      }\n\n      .name {\n        text-align: center;\n        min-height: 16px;\n      }\n      .name div {\n        font-size: 24px;\n        margin-bottom: 12px;\n      }\n\n      #img_wrap {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .profile-image {\n        background-color: #aeaeae;\n        padding: 4px;\n        border-radius: 50%;\n        width: 50%;\n        min-height: 160px;\n        margin-top: 25px;\n      }\n\n      .position {\n        text-align: center;\n        font-style: italic;\n        font-size: 16px;\n        margin: -10px 0 10px;\n      }\n\n      .organization {\n        text-align: center;\n        font-size: 14px;\n        margin: -8px 0 10px;\n      }\n\n      #mail {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #mail:hover,\n      #mail:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #phone {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #phone:hover,\n      #phone:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #twitter {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #twitter:hover,\n      #twitter:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #website {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #website:hover,\n      #website:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #group_icons {\n        width: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 10px;\n        border-top: 2px #aeaeae solid;\n        padding-top: 5px;\n      }\n\n      social-media-icons {\n        --social-media-icons-hover-color: var(--contactcard-icons-hover-color);\n        margin-left: 8px;\n      }\n\n      .icons {\n        display: flex;\n        justify-content: center;\n        align-items: flext-start;\n        padding-top: 5px;\n      }\n\n      paper-button {\n        padding: 0;\n        margin: 0 8px;\n        display: block;\n        min-width: 16px;\n      }\n    </style>\n    <paper-card>\n      <div id="img_wrap"><img class="profile-image" src="[[image]]"></div>\n      <div class="name">\n        <template is="dom-if" if="[[name]]">\n        <div>[[name]]</div>\n        </template>\n      </div>\n      <div class="position">[[position]]</div>\n      <div class="organization">[[organization]]</div>\n      <div id="group_icons">\n        <div class="icons">\n        <template is="dom-if" if="[[email]]">\n          <a tabindex="-1" href$="mailto:[[email]]">\n            <paper-button id="mail" title$="Email address [[email]]">\n              <iron-icon icon="mail" class="mail_icon"></iron-icon>\n            </paper-button>\n          </a>\n          <paper-tooltip for="mail" position="bottom">Email</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[phone]]">\n          <a tabindex="-1" href$="tel:[[phone]]">\n            <paper-button id="phone" title$="Phone number [[phone]]">\n              <iron-icon icon="maps:local-phone" class="phone_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="phone" position="bottom">Call</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[website]]">\n          <a tabindex="-1" href$="[[website]]">\n            <paper-button id="website" title$="Website address [[website]]">\n              <iron-icon icon="hardware:desktop-windows" class="computer_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="website" position="bottom">Visit</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[twitter]]">\n          <a tabindex="-1" href$="[[twitter]]">\n            <paper-button id="twitter" title$="Twitter name [[twitter]]">\n              <social-media-icons icon="twitter" color="#aeaeae" size="35" class="twitter_icon"></social-media-icons>\n              </paper-button>\n          </a>\n          <paper-tooltip for="twitter" position="bottom">Connect</paper-tooltip>\n        </template>\n        </div>\n      </div>\n    </paper-card>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        --contactcard-icons-hover-color: gray;\n        --contactcard-icons-fill-color: #aeaeae;\n      }\n\n      .name {\n        text-align: center;\n        min-height: 16px;\n      }\n      .name div {\n        font-size: 24px;\n        margin-bottom: 12px;\n      }\n\n      #img_wrap {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .profile-image {\n        background-color: #aeaeae;\n        padding: 4px;\n        border-radius: 50%;\n        width: 50%;\n        min-height: 160px;\n        margin-top: 25px;\n      }\n\n      .position {\n        text-align: center;\n        font-style: italic;\n        font-size: 16px;\n        margin: -10px 0 10px;\n      }\n\n      .organization {\n        text-align: center;\n        font-size: 14px;\n        margin: -8px 0 10px;\n      }\n\n      #mail {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #mail:hover,\n      #mail:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #phone {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #phone:hover,\n      #phone:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #twitter {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #twitter:hover,\n      #twitter:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #website {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #website:hover,\n      #website:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #group_icons {\n        width: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 10px;\n        border-top: 2px #aeaeae solid;\n        padding-top: 5px;\n      }\n\n      social-media-icons {\n        --social-media-icons-hover-color: var(--contactcard-icons-hover-color);\n        margin-left: 8px;\n      }\n\n      .icons {\n        display: flex;\n        justify-content: center;\n        align-items: flext-start;\n        padding-top: 5px;\n      }\n\n      paper-button {\n        padding: 0;\n        margin: 0 8px;\n        display: block;\n        min-width: 16px;\n      }\n    </style>\n    <paper-card>\n      <div id="img_wrap"><img class="profile-image" src="[[image]]"></div>\n      <div class="name">\n        <template is="dom-if" if="[[name]]">\n        <div>[[name]]</div>\n        </template>\n      </div>\n      <div class="position">[[position]]</div>\n      <div class="organization">[[organization]]</div>\n      <div id="group_icons">\n        <div class="icons">\n        <template is="dom-if" if="[[email]]">\n          <a tabindex="-1" href\\$="mailto:[[email]]">\n            <paper-button id="mail" title$="Email address [[email]]">\n              <iron-icon icon="mail" class="mail_icon"></iron-icon>\n            </paper-button>\n          </a>\n          <paper-tooltip for="mail" position="bottom">Email</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[phone]]">\n          <a tabindex="-1" href\\$="tel:[[phone]]">\n            <paper-button id="phone" title$="Phone number [[phone]]">\n              <iron-icon icon="maps:local-phone" class="phone_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="phone" position="bottom">Call</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[website]]">\n          <a tabindex="-1" href\\$="[[website]]">\n            <paper-button id="website" title$="Website address [[website]]">\n              <iron-icon icon="hardware:desktop-windows" class="computer_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="website" position="bottom">Visit</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[twitter]]">\n          <a tabindex="-1" href$="[[twitter]]">\n            <paper-button id="twitter" title$="Twitter name [[twitter]]">\n              <social-media-icons icon="twitter" color="#aeaeae" size="35" class="twitter_icon"></social-media-icons>\n              </paper-button>\n          </a>\n          <paper-tooltip for="twitter" position="bottom">Connect</paper-tooltip>\n        </template>\n        </div>\n      </div>\n    </paper-card>\n'
      ]
    );
    _templateObject_6550a7f0f32e11e8aeb835894d1852b7 = function _templateObject_6550a7f0f32e11e8aeb835894d1852b7() {
      return data;
    };
    return data;
  }
  var LrndesignContactcard = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_6550a7f0f32e11e8aeb835894d1852b7()
    ),
    is: "lrndesign-contactcard",
    properties: {
      image: { type: String },
      email: { type: String },
      name: { type: String },
      position: { type: String },
      organization: { type: String },
      phone: { type: String },
      website: { type: String },
      twitter: { type: String }
    }
  });
  _exports.LrndesignContactcard = LrndesignContactcard;
});
