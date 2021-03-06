/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit-element/lit-element.js";
import { HAXCMSLitElementTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
/**
 * @deprecatedApply - required for @apply / invoking @apply css var convention
 */
import "@polymer/polymer/lib/elements/custom-style.js";
/**
 * `learn-two-theme`
 * @customElement learn-two-theme
 * `Learn2 theme for HAXcms`
 *

 * @demo demo/index.html
 */
class LearnTwoTheme extends HAXCMSLitElementTheme {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          --__learn-two-theme-default-font-family: var(
            --learn-two-theme-default-font-family,
            "Muli, Helvetica, Tahoma, Geneva, Arial, sans-serif"
          );
          --__learn-two-theme-default-background: var(
            --learn-two-theme-default-background,
            #ffffff
          );
          display: block;
          font-family: var(
            --learn-two-theme-font-family,
            var(--__learn-two-theme-default-font-family)
          );
          letter-spacing: var(--learn-two-theme-letter-spacing, -0.03rem);
          font-weight: var(--learn-two-theme-font-weight, 400);
          background: var(
            --learn-two-theme-background,
            var(--__learn-two-theme-default-background)
          );
        }
        html,
        body {
          background: var(
            --learn-two-theme-html-body-background,
            var(--__learn-two-theme-default-background)
          );
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(
            --learn-two-theme-headers-font-family,
            var(--__learn-two-theme-default-font-family)
          );
          font-weight: var(--learn-two-theme-headers-font-weight, 400);
          text-rendering: var(
            --learn-two-theme-headers-text-rendering,
            optimizeLegibility
          );
          line-height: var(--learn-two-theme-headers-line-height, 150%);
          letter-spacing: var(--learn-two-theme-headers-letter-spacing, 150%);
        }

        :host([hidden]) {
          display: none;
        }

        :host([edit-mode]) #slot {
          display: none;
        }

        #contentcontainer {
          padding: var(--learn-two-theme-contentcontainer-padding, 48px 96px);
          max-width: var(--learn-two-theme-contentcontainer-max-width, 900px);
          margin: var(--learn-two-theme-contentcontainer-margin, auto);
        }

        .header {
          background: #747474;
          color: #fafafa;
          text-align: center;
          padding: 0rem 1rem 2rem 1rem;
        }

        site-git-corner {
          top: 0;
          right: 0;
          position: absolute;
          z-index: 1000;
        }

        site-menu::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 4px rgba(56, 63, 69, 0.9);
          border-radius: 0;
          background-color: #383f45;
        }
        site-menu::-webkit-scrollbar {
          width: 2px;
          background-color: #383f45;
        }
        site-menu::-webkit-scrollbar-thumb {
          border-radius: 1px;
          -webkit-box-shadow: inset 0 0 4px #747474;
          background-color: #383f45;
        }
        .rss-buttons {
          justify-content: space-evenly;
          display: flex;
        }
        site-print-button {
          --site-print-button-button: {
            color: white;
          }
        }

        h-a-x {
          padding: 0 !important;
        }

        :host([edit-mode]) app-drawer {
          opacity: 0.2;
          pointer-events: none;
        }

        :host([is-logged-in]) app-drawer {
          left: 48px;
        }
        :host([is-logged-in]) app-drawer-layout[narrow] {
          margin: 0 0 0 48px;
        }

        git-corner {
          float: right;
        }

        app-drawer {
          opacity: 1;
          transition: 0.2s linear all;
          box-shadow: 0 0 6px -3px var(--haxcms-color, black);
          overflow: hidden;
          width: 300px;
        }
        app-drawer-layout[narrow] #contentcontainer {
          padding: 0 16px;
        }
        #menubutton,
        #menubutton2 {
          display: none;
        }
        app-drawer-layout[narrow] #menubutton {
          display: block;
        }
        app-drawer-layout[narrow] #menubutton2 {
          display: block;
          position: absolute;
          z-index: 1;
        }
        app-drawer-layout[narrow] .header {
          padding: 0;
        }
        :host([is-logged-in]) site-menu-button[type="prev"] {
          left: 348px;
        }
        site-menu-button:not([disabled]):hover,
        site-menu-button:not([disabled]):active,
        site-menu-button:not([disabled]):focus {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.1);
        }
        app-drawer-layout[narrow] site-menu {
          max-height: calc(100vh - 160px);
        }
        site-menu-button[type="next"] {
          right: 0;
          left: unset;
        }

        :host([is-logged-in])
          app-drawer-layout[narrow]
          site-menu-button[type="prev"],
        app-drawer-layout[narrow] site-menu-button[type="prev"] {
          left: unset;
        }
        :host([opened]) app-drawer-layout[narrow] site-menu-button[type="prev"],
        :host([opened])
          app-drawer-layout[narrow]
          site-menu-button[type="next"] {
          display: none;
        }

        site-title {
          position: relative;
          overflow: hidden;
        }
        site-menu {
          background-color: #383f45;
          color: #ffffff;
          padding: 0;
          overflow: scroll;
          max-height: calc(100vh - 200px);
          --site-menu-active-color: #ffffff;
          --site-menu-item-active-item-color: #2d3237;
        }
        app-drawer-layout {
          min-height: 100vh;
          min-height: -moz-available;
          min-height: -webkit-fill-available;
          min-height: fill-available;
          --app-drawer-width: 300px;
          --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);
        }
        site-menu-button {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 300px;
          z-index: 1;
          --site-menu-button-icon-width: 64px;
          --site-menu-button-icon-height: 64px;
          --site-menu-button-icon-fill-color: #2d3237;
        }
        app-drawer-layout[narrow] site-menu-button {
          bottom: 0;
          top: unset;
        }
        site-menu,
        map-menu,
        map-menu * {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          --map-menu-items-list-display: flex;
          --map-menu-items-list-flex-direction: column;
          --map-menu-items-list-flex: 1 1 auto;
          --map-menu-container-display: flex;
          --map-menu-container-flex-direction: column;
          --map-menu-container-flex: 1 1 auto;
        }
      `
    ];
  }
  // render function
  render() {
    return html`
      <custom-style>
        <style>
          site-active-title {
            --site-active-title-heading: {
              font-family: var(--__learn-two-theme-default-font-family);
              font-size: 52px;
              line-height: 78px;
              margin-bottom: 27.2px;
              margin-top: 13.6px;
              text-align: center;
              text-rendering: optimizelegibility;
              font-weight: 100;
            }
          }
          site-title {
            --site-title-link: {
              display: inline-block;
              color: #fafafa;
              text-decoration: none;
            }
            --site-title-heading: {
              font-family: var(--__learn-two-theme-default-font-family);
              font-size: 28px;
              margin: 0;
              padding: 0;
              text-align: center;
              text-rendering: optimizelegibility;
              font-weight: 100;
            }
          }
          site-menu {
            --site-menu: {
              background-color: #383f45;
            }
            --site-menu-container: {
              padding: 0;
              background-color: #2d3237;
            }
          }
          app-drawer-layout {
            --app-drawer-content-container: {
              overflow: hidden;
              background-color: #383f45;
              position: relative;
            }
          }
          site-print-button {
            --site-print-button-button: {
              color: white;
            }
          }
          site-menu-button {
            --site-menu-button-button: {
              background-color: rgba(0, 0, 0, 0);
              width: 64px;
              height: 100vh;
              border-radius: 0;
              transition: 0.4s all ease-in-out;
              transition-delay: 0.2s;
              margin: 0;
              padding: 0;
              opacity: 0.8;
              -webkit-transition: 0.4s all ease-in-out;
              -moz-transition: 0.4s all ease-in-out;
              -ms-transition: 0.4s all ease-in-out;
              -o-transition: 0.4s all ease-in-out;
            }
          }
          app-drawer-layout[narrow] site-menu-button {
            --site-menu-button-button: {
              background-color: transparent !important;
              width: 64px;
              height: 64px;
            }
          }
        </style>
      </custom-style>
      <app-drawer-layout responsive-width="900px">
        <paper-icon-button
          id="menubutton"
          icon="menu"
          @click="${this.toggleDrawer}"
          title="Toggle site menu"
        ></paper-icon-button>
        <app-drawer
          swipe-open
          slot="drawer"
          .opened="${this.opened}"
          @opened="${this.__openedChanged}"
        >
          <paper-icon-button
            id="menubutton2"
            icon="menu"
            @click="${this.toggleDrawer}"
            title="Toggle site menu"
          ></paper-icon-button>
          <div class="header-wrapper">
            <div class="header">
              <site-title ?disabled="${this.editMode}"></site-title>
              <site-modal
                @site-modal-click="${this.siteModalClick}"
                ?disabled="${this.editMode}"
                icon="icons:search"
                title="Search site"
                button-label="Search"
              >
                <site-search></site-search>
              </site-modal>
            </div>
          </div>
          <site-menu></site-menu>
          <div class="rss-buttons">
            <site-rss-button
              ?disabled="${this.editMode}"
              type="atom"
            ></site-rss-button>
            <site-rss-button
              ?disabled="${this.editMode}"
              type="rss"
            ></site-rss-button>
            <site-print-button
              ?disabled="${this.editMode}"
              position="top"
            ></site-print-button>
          </div>
        </app-drawer>
        <div>
          <site-menu-button type="prev"></site-menu-button>
          <div id="contentcontainer">
            <site-git-corner></site-git-corner>
            <site-breadcrumb></site-breadcrumb>
            <site-active-title></site-active-title>
            <div id="slot">
              <slot></slot>
            </div>
          </div>
          <site-menu-button type="next"></site-menu-button>
        </div>
      </app-drawer-layout>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return { ...super.properties };
  }
  constructor() {
    super();
    this.HAXCMSThemeSettings.autoScroll = true;
    setInterval(() => {
      import("@polymer/app-layout/app-drawer/app-drawer.js");
      import("@polymer/app-layout/app-drawer-layout/app-drawer-layout.js");
      import("@polymer/paper-icon-button/paper-icon-button.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js");
    }, 0);
  }
  /**
   * Delay importing site-search until we click to open it directly
   */
  siteModalClick(e) {
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js");
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "learn-two-theme";
  }
  /**
   * Mix in an opened status
   */
  static get properties() {
    return {
      ...super.properties,
      opened: {
        type: Boolean,
        reflect: true
      }
    };
  }
  __openedChanged(e) {
    this.opened = e.detail.value;
  }
  toggleDrawer(e) {
    this.shadowRoot.querySelector("app-drawer").toggle();
  }
}
window.customElements.define(LearnTwoTheme.tag, LearnTwoTheme);
export { LearnTwoTheme };
