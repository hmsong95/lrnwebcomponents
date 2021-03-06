import { HAXApp } from "./hax-app.js";
/**
 `hax-blox`
Register a blox with HAX store.

* @demo demo/index.html

@microcopy - the mental model for this element
 - blox - A definition for a grid plate element
 - data - this is the blox data model which expresses itself to hax

@example data call
```
[{
  "details": {
    "title": "Example text and meme",
    "image": "example-meme.jpg",
    "author": "ELMS:LN",
    "description": "A well organized example list of objectives.",
    "status": "available",
    "rating": "0",
    "tags": ["instructional design", "list"]
  },
  "blox": [
    {
      "tag": "p",
      "properties": {},
      "content": "It is an ethical imperative that we seek the fundamental transformation of higher education to maximize quality and access to knowledge. This transformation will empower the globe to increase empathy, maximize personal freedom and personal growth through increased educational equality."
    },
    {
      "tag": "meme-maker",
      "properties": {
        "image-url": "https://media1.giphy.com/media/3o7TKMOy5zz1nuD71u/giphy.gif",
        "alt": "sun moon GIF by Amy Ciavolino",
        "top-text": "Sup, suuuuuun?",
        "bottom-text": "Hax, Moon. Hax."
      },
      "content": ""
    }
  ]
}]
```
 * @customElement hax-blox
 */
class HAXBlox extends HAXApp {
  constructor() {
    super();
    this.eventName = "hax-register-blox";
  }
  static get tag() {
    return "hax-blox";
  }
}
window.customElements.define(HAXBlox.tag, HAXBlox);
export { HAXBlox };
