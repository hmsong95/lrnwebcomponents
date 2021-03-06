/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-movie-iconset-svg`
 * @customElement mdi-movie-iconset-svg is a iconset for the Material Design Icons collection with the "movie" tag
 *
 * Example:
 *   <iron-icon icon="mdi-movie:filmstrip"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-movie" size="24">
    <svg>
      <g id="film">
        <path
          d="M3.5,3H5V1.8C5,1.36 5.36,1 5.8,1H10.2C10.64,1 11,1.36 11,1.8V3H12.5A1.5,1.5 0 0,1 14,4.5V5H22V20H14V20.5A1.5,1.5 0 0,1 12.5,22H3.5A1.5,1.5 0 0,1 2,20.5V4.5A1.5,1.5 0 0,1 3.5,3M18,7V9H20V7H18M14,7V9H16V7H14M10,7V9H12V7H10M14,16V18H16V16H14M18,16V18H20V16H18M10,16V18H12V16H10Z"
        ></path>
      </g>

      <g id="filmstrip">
        <path
          d="M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
