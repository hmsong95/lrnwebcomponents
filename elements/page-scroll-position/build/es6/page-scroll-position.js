class PageScrollPosition extends HTMLElement {
  attachedCallback() {
    this.value = 0;
    let element = document,
      valueChangedEvent = new CustomEvent("value-changed", {
        detail: { value: 0 }
      });
    this.dispatchEvent(valueChangedEvent);
    element.addEventListener("scroll", () => {
      let a = document.documentElement.scrollTop,
        b =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight,
        c = 100 * (a / b);
      this.value = c;
      valueChangedEvent = new CustomEvent("value-changed", {
        detail: { value: this.value }
      });
      this.dispatchEvent(valueChangedEvent);
    });
  }
}
window.customElements.define("page-scroll-position", PageScrollPosition);
