import { LitElement, html, css } from "lit-element/lit-element.js";

class LrnappStudioSubmissionEditbarMessage extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  render() {
    return html`
      <slot></slot>
    `;
  }
  static get tag() {
    return "lrnapp-studio-submission-editbar-message";
  }
}
window.customElements.define(
  LrnappStudioSubmissionEditbarMessage.tag,
  LrnappStudioSubmissionEditbarMessage
);
export { LrnappStudioSubmissionEditbarMessage };
