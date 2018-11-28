define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/iron-data-table/iron-data-table.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js"
], function(_exports, _polymerLegacy, _ironDataTable, _ironAjax) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnGradebook = void 0;
  var $_documentContainer = document.createElement("div");
  $_documentContainer.setAttribute("style", "display: none;");
  $_documentContainer.innerHTML =
    '<dom-module id="lrn-gradebook">\n<style>\n  data-table-row {\n    border: 10px solid black;\n  }\n</style>\n  <template>\n    <iron-ajax url="demo/data.json" last-response="{{data}}" auto=""></iron-ajax>\n\t\t  <iron-data-table items="[[data]]">\n\t\t    <data-table-column name="First Name">\n\t\t      <template>[[item.name.first]]</template>\n\t\t    </data-table-column>\n\t\t    <data-table-column name="Last Name">\n\t\t      <template>[[item.name.last]]</template>\n\t\t    </data-table-column>\n\t\t  </iron-data-table>\n  </template>\n\n  \n</dom-module>';
  document.head.appendChild($_documentContainer);
  var LrnGradebook = (0, _polymerLegacy.Polymer)({
    is: "lrn-gradebook",
    properties: { data: { type: Object } }
  });
  _exports.LrnGradebook = LrnGradebook;
});
