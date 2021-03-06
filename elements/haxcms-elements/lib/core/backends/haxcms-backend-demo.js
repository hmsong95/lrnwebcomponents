/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
/**
 * `haxcms-backend-demo`
 * `a simple element to check for and fetch JWTs`
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 * - jwt - a json web token which is an encrypted security token to talk
 */
class HAXCMSBackendDemo extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "haxcms-backend-demo";
  }
  // render function
  render() {
    return html`
      <jwt-login
        auto
        id="jwt"
        jwt="${this.jwt}"
        @jwt-changed="${this.jwtChanged}"
      ></jwt-login>
    `;
  }
  jwtChanged(e) {
    this.jwt = e.detail.value;
    store.jwt = this.jwt;
    if (store.cmsSiteEditor && store.cmsSiteEditor.instance) {
      store.cmsSiteEditor.instance.jwt = this.jwt;
    }
  }
  static get properties() {
    return {
      /**
       * JSON Web token, it'll come from a global call if it's available
       */
      jwt: {
        type: String
      }
    };
  }
  /**
   * created life cycle
   */
  constructor() {
    super();
    // this makes it easier to debug things and directly modify the store for
    // development purposes
    window.HAXcmsStore = store;
  }
  _jwtChanged(newValue) {
    console.log(newValue);
  }
  /**
   * LitElement life cycle - properties changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "jwt") {
        this._jwtChanged(this[propName], oldValue);
      }
    });
  }
  /**
   * LitElement life cycle - element ready
   */
  firstUpdated(changedProperties) {
    if (window.appSettings) {
      let jwtlogin = this.shadowRoot.querySelector("#jwt");
      jwtlogin.url = window.appSettings.login;
      jwtlogin.refreshUrl = window.appSettings.refreshUrl;
      jwtlogin.logoutUrl = window.appSettings.logout;
      jwtlogin.redirectUrl = window.appSettings.redirectUrl;
    }
    try {
      import("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-editor.js").then(
        e => {
          // validate availability
          store.cmsSiteEditorAvailability();
          store.cmsSiteEditor.instance.jwt = this.jwt;
          store.cmsSiteEditor.instance.method = "GET";
          store.cmsSiteEditor.instance.saveNodePath =
            window.appSettings.saveNodePath;
          store.cmsSiteEditor.instance.saveManifestPath =
            window.appSettings.saveManifestPath;
          store.cmsSiteEditor.instance.saveOutlinePath =
            window.appSettings.saveOutlinePath;
          store.cmsSiteEditor.instance.getNodeFieldsPath =
            window.appSettings.getNodeFieldsPath;
          store.cmsSiteEditor.instance.getSiteFieldsPath =
            window.appSettings.getSiteFieldsPath;
          store.cmsSiteEditor.instance.createNodePath =
            window.appSettings.createNodePath;
          store.cmsSiteEditor.instance.deleteNodePath =
            window.appSettings.deleteNodePath;
          store.cmsSiteEditor.instance.publishSitePath =
            window.appSettings.publishSitePath;
          store.cmsSiteEditor.instance.syncSitePath =
            window.appSettings.syncSitePath;
          store.cmsSiteEditor.instance.revertSitePath =
            window.appSettings.revertSitePath;
          store.cmsSiteEditor.instance.getUserDataPath =
            window.appSettings.getUserDataPath;
          store.cmsSiteEditor.instance.appStore = window.appSettings.appStore;
        },
        e => {
          //import failed
          console.log(e);
        }
      );
    } catch (err) {
      // error in the event this is a double registration
    }
  }
}
window.customElements.define(HAXCMSBackendDemo.tag, HAXCMSBackendDemo);
export { HAXCMSBackendDemo };
