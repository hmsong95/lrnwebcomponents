import {
  html,
  Polymer
} from "../node_modules/@polymer/polymer/polymer-legacy.js";
import "../node_modules/@polymer/paper-button/paper-button.js";
import "../node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      paper-button {
        background: #b0e6f9;
      }
      paper-button[complete] {
        background: #e7ffe7;
      }
      iron-icon {
        margin-left: 8px;
        opacity: .8;
      }
    </style>
    <a href$="[[url]]">
      <template is="dom-if" if="[[open]]">
        <paper-button raised open>[[title]] <iron-icon icon="lrn-icons:input"></iron-icon></paper-button>
      </template>
      <template is="dom-if" if="[[complete]]">
        <paper-button raised complete>[[title]] <iron-icon icon="lrn-icons:done"></iron-icon></paper-button>
      </template>
    </a>`,
  is: "lrn-assignment-button",
  properties: {
    title: String,
    url: String,
    open: { type: Boolean, value: !1 },
    complete: { type: Boolean, value: !1 }
  }
});