define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js",
  "./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js",
  "./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js",
  "./node_modules/@lrnwebcomponents/relative-heading/relative-heading.js",
  "./lib/lrndesign-imagemap-hotspot.js"
], function(
  _exports,
  _polymerLegacy,
  _polymerDom,
  _ironAjax,
  _ironA11yKeys,
  _simpleModal,
  _relativeHeading,
  _lrndesignImagemapHotspot
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignImagemap = void 0;
  function _templateObject_69c76300f32e11e8b748d953cfd7e267() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host #buttons {\n        position: absolute;\n        left: -999999px;\n        top: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n      /*::slotted([hotspot]) {\n        display: none;\n      }*/\n      @media print {\n        :host > #svg {\n          display: none;\n        }\n        /*::slotted(#screen-only) {\n          display: none;\n        }\n        ::slotted([hotspot]) {\n          display: block;\n        }*/\n      }\n    </style>\n    <relative-heading hidden$="[[!label]]" id="heading" subtopic-of$="[[subtopicOf]]" tag$="[[tag]]" text$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot name="desc"></slot></div>\n    <div id="svg"></div>\n    <div id="buttons"></div>\n    <slot></slot>\n    <iron-ajax auto="" id="get_svg" url="[[src]]" handle-as="text" on-response="_getSVGHandler"></iron-ajax>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host #buttons {\n        position: absolute;\n        left: -999999px;\n        top: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n      /*::slotted([hotspot]) {\n        display: none;\n      }*/\n      @media print {\n        :host > #svg {\n          display: none;\n        }\n        /*::slotted(#screen-only) {\n          display: none;\n        }\n        ::slotted([hotspot]) {\n          display: block;\n        }*/\n      }\n    </style>\n    <relative-heading hidden\\$="[[!label]]" id="heading" subtopic-of\\$="[[subtopicOf]]" tag\\$="[[tag]]" text\\$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot name="desc"></slot></div>\n    <div id="svg"></div>\n    <div id="buttons"></div>\n    <slot></slot>\n    <iron-ajax auto="" id="get_svg" url="[[src]]" handle-as="text" on-response="_getSVGHandler"></iron-ajax>\n'
      ]
    );
    _templateObject_69c76300f32e11e8b748d953cfd7e267 = function _templateObject_69c76300f32e11e8b748d953cfd7e267() {
      return data;
    };
    return data;
  }
  var LrndesignImagemap = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_69c76300f32e11e8b748d953cfd7e267()
    ),
    is: "lrndesign-imagemap",
    properties: {
      label: { type: String, value: null },
      src: { type: String, value: null },
      hotspotDetails: { type: Array, value: [] },
      subtopicOf: { type: String, value: null, reflectToAttribute: !0 },
      tag: { type: String, value: null, reflectToAttribute: !0 }
    },
    attached: function attached() {
      var _this = this;
      window.simpleModal.requestAvailability();
      window.addEventListener("simple-modal-closed", function(e) {
        if (e.detail.invokedBy === _this) {
          _this.closeHotspot();
        }
      });
    },
    detached: function detached() {
      var _this2 = this;
      window.removeEventListener("simple-modal-closed", function(e) {
        if (e.detail.invokedBy === _this2) {
          _this2.closeHotspot();
        }
      });
    },
    _getSVGHandler: function _getSVGHandler(e) {
      var _this3 = this,
        root = this,
        temp = document.createElement("div"),
        getID = function getID(element, alt) {
          if (null === element.getAttribute("id"))
            element.setAttribute("id", alt);
          return element.getAttribute("id");
        },
        setAriaLabelledBy = function setAriaLabelledBy(source, target, prefix) {
          var svgElem = function svgElem(nodename) {
            source = null !== source ? source : root;
            var attr = "title" === nodename ? "label" : nodename,
              query = source.querySelector("#" + attr),
              label = target.querySelector(nodename);
            if (null === label) {
              label = document.createElement(nodename);
              target.prepend(label);
            }
            if (null !== source.getAttribute(attr)) {
              label.innerHTML = source.getAttribute(attr);
            } else if (null !== query && "" !== query.innerHTML) {
              label.innerHTML = query.innerHTML;
            }
            return getID(label, prefix + "-" + attr);
          };
          target.setAttribute(
            "aria-labelledby",
            svgElem("desc") + " " + svgElem("label")
          );
        };
      temp.innerHTML = e.detail.response;
      var svg = temp.querySelector("svg"),
        svgid = getID(svg, "svg-" + Date.now()),
        hdata = (0, _polymerDom.dom)(root).querySelectorAll(
          "lrndesign-imagemap-hotspot"
        );
      setAriaLabelledBy(root, svg, svgid);
      this.$.svg.appendChild(svg);
      for (
        var _loop = function _loop(i) {
            var hid = hdata[i].getAttribute("hotspot-id"),
              hotspot = svg.querySelector("#" + hid),
              clone = svg.cloneNode(!0);
            setAriaLabelledBy(hdata[i], clone, hid);
            hdata[i].appendChild(clone);
            hdata[i].querySelector("#" + hid).classList.add("selected");
            hdata[i].setParentHeading(root.$.heading);
            for (var j = 0; j < hdata.length; j++) {
              hdata[i]
                .querySelector("#" + hdata[j].getAttribute("hotspot-id"))
                .classList.add("hotspot");
            }
            var hbutton = document.createElement("button");
            hbutton.setAttribute("tabindex", 0);
            hbutton.setAttribute("aria-label", hdata[i].label);
            root.$.buttons.appendChild(hbutton);
            hbutton.addEventListener("focus", function() {
              console.log("focus", i, hotspot);
              hotspot.classList.add("focus");
            });
            hbutton.addEventListener("blur", function() {
              hotspot.classList.remove("focus");
            });
            hotspot.classList.add("hotspot");
            hotspot.addEventListener("click", function(e) {
              _this3.openHotspot(hotspot, hdata[i]);
            });
            hbutton.addEventListener("keyup", function(e) {
              if (13 === e.keyCode || 32 === e.keyCode) {
                if (!hotspot.classList.contains("selected")) {
                  _this3.openHotspot(hotspot, hdata[i]);
                }
              }
            });
          },
          i = 0;
        i < hdata.length;
        i++
      ) {
        _loop(i);
      }
    },
    openHotspot: function openHotspot(hotspot, details) {
      var children = details.$.desc
          .querySelector("slot")
          .assignedNodes({ flatten: !0 }),
        c = document.createElement("div");
      for (var child in children) {
        c.appendChild(children[child].cloneNode(!0));
      }
      var evt = new CustomEvent("simple-modal-show", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          title: details.getAttribute("label"),
          elements: { content: c },
          invokedBy: this,
          clone: !1
        }
      });
      this.dispatchEvent(evt);
      this.__activeHotspot = hotspot;
      this.resetHotspots();
      hotspot.classList.add("selected");
    },
    closeHotspot: function closeHotspot() {
      this.resetHotspots();
      this.__activeHotspot.focus();
    },
    resetHotspots: function resetHotspots() {
      for (
        var hotspots = this.querySelectorAll('.hotspot[role="button"]'), i = 0;
        i < hotspots.length;
        i++
      ) {
        hotspots[i].classList.remove("selected");
      }
    }
  });
  _exports.LrndesignImagemap = LrndesignImagemap;
});
