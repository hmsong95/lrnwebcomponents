define(["./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"], function(
  _polymerDom
) {
  "use strict";
  window.mtz = window.mtz || {};
  mtz.FileDownloadBehaviors = {
    properties: {
      fileTypes: {
        type: Object,
        value: function value() {
          return {
            CSV: "text/csv",
            JSON: "text/json",
            PDF: "application/pdf",
            TXT: "text/plain"
          };
        }
      }
    },
    downloadFromData: function downloadFromData(data, type) {
      var name =
          2 < arguments.length && arguments[2] !== void 0
            ? arguments[2]
            : "download",
        newTab =
          3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : !0,
        mimeType = this.fileTypes[type.toUpperCase()],
        blob = new Blob([decodeURIComponent(encodeURI(data))], {
          type: mimeType
        }),
        filename = name + "." + type.toLowerCase();
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        var link = document.createElement("a");
        link.href = (window.URL || window.webkitURL).createObjectURL(blob);
        link.download = filename;
        link.target = newTab ? "_blank" : "_self";
        (0, _polymerDom.dom)(this.root).appendChild(link);
        link.click();
        (0, _polymerDom.dom)(this.root).removeChild(link);
      }
    },
    downloadFromURI: function downloadFromURI(uri) {
      var newTab =
        1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !0;
      window.open(uri, newTab ? "_blank" : "_self");
      return !0;
    }
  };
});
