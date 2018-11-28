define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/aframe/dist/aframe-master.js"
], function(
  _exports,
  _polymerLegacy,
  _HAXWiring,
  _schemaBehaviors,
  _aframeMaster
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.AframePlayer = void 0;
  function _templateObject_b77c7e20f32c11e8a9f2477161fb243e() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        position: relative;\n      }\n    </style>\n    <a-scene id="scene" class="embedded" embedded arjs$="[[ar]]" style$="height:[[height]];width:[[width]];">\n      <a-sky color$="[[skyColor]]"></a-sky>\n      <a-marker-camera preset="hiro"></a-marker-camera>\n      <a-entity id="entity" gltf-model$="[[source]]" position="0 0 0"></a-entity>\n    </a-scene>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        position: relative;\n      }\n    </style>\n    <a-scene id="scene" class="embedded" embedded arjs$="[[ar]]" style$="height:[[height]];width:[[width]];">\n      <a-sky color\\$="[[skyColor]]"></a-sky>\n      <a-marker-camera preset="hiro"></a-marker-camera>\n      <a-entity id="entity" gltf-model\\$="[[source]]" position="0 0 0"></a-entity>\n    </a-scene>\n'
      ]
    );
    _templateObject_b77c7e20f32c11e8a9f2477161fb243e = function _templateObject_b77c7e20f32c11e8a9f2477161fb243e() {
      return data;
    };
    return data;
  }
  var AframePlayer = (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_b77c7e20f32c11e8a9f2477161fb243e()
    ),
    is: "aframe-player",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      source: { type: String, value: "" },
      height: { type: String, value: "480px" },
      width: { type: String, value: "640px" },
      skyColor: { type: String, value: "#DCDCDC" },
      ar: { type: Boolean, value: !1 },
      x: { type: String, value: "0" },
      y: { type: String, value: "0" },
      z: { type: String, value: "0" },
      position: {
        type: Object,
        computed: "_computePosition(x, y, z, width, height)",
        observer: "_positionChanged"
      }
    },
    attached: function attached() {
      this.$.scene.removeFullScreenStyles();
      var props = {
        canScale: !1,
        canPosition: !1,
        canEditSource: !1,
        gizmo: {
          title: "3D player",
          description: "A 3D file / augmented reality player.",
          icon: "av:play-circle-filled",
          color: "amber",
          groups: ["3D", "Augmented reality"],
          handles: [{ type: "3d", source: "source" }],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "height",
              title: "height",
              description: "height of the object",
              inputMethod: "textfield",
              type: "bar",
              icon: "image:photo-size-select-small",
              required: !0
            },
            {
              property: "width",
              title: "Width",
              description: "Width of the object",
              inputMethod: "textfield",
              type: "bar",
              icon: "image:straighten",
              required: !0
            }
          ],
          configure: [
            {
              property: "source",
              title: "Source",
              description: "The URL for this AR file.",
              inputMethod: "textfield",
              type: "bar",
              icon: "link",
              required: !0
            },
            {
              property: "x",
              title: "X",
              description: "X position of the element in AR.",
              inputMethod: "textfield",
              type: "bar",
              icon: "communication:location-on",
              required: !0
            },
            {
              property: "y",
              title: "Y",
              description: "Y position of the element in AR.",
              inputMethod: "textfield",
              type: "bar",
              icon: "communication:location-on",
              required: !0
            },
            {
              property: "z",
              title: "Z",
              description: "Z position of the element in AR.",
              inputMethod: "textfield",
              type: "bar",
              icon: "communication:location-on",
              required: !0
            },
            {
              property: "skyColor",
              title: "Sky color",
              description: "Select the color of the sky in the scene.",
              inputMethod: "colorpicker",
              type: "bar",
              icon: "editor:format-color-fill"
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(props);
    },
    _computePosition: function _computePosition(x, y, z, width, height) {
      return { x: x, y: y, z: z };
    },
    _positionChanged: function _positionChanged(position) {
      this.$.entity.setAttribute("position", position);
    }
  });
  _exports.AframePlayer = AframePlayer;
});
