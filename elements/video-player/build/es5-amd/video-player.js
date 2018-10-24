define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.VideoPlayer = void 0;
  function _templateObject_74afd560d70c11e8bad3b976c255db6c() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_74afd560d70c11e8bad3b976c255db6c = function() {
      return data;
    };
    return data;
  }
  var VideoPlayer = (function(_PolymerElement) {
    babelHelpers.inherits(VideoPlayer, _PolymerElement);
    function VideoPlayer() {
      babelHelpers.classCallCheck(this, VideoPlayer);
      return babelHelpers.possibleConstructorReturn(
        this,
        (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      VideoPlayer,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                VideoPlayer.prototype.__proto__ ||
                  Object.getPrototypeOf(VideoPlayer.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              VideoPlayer.haxProperties,
              VideoPlayer.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_74afd560d70c11e8bad3b976c255db6c()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Video player",
                description: "Automated conversion of video-player/",
                icon: "icons:android",
                color: "green",
                groups: ["Player"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "video-player";
          }
        }
      ]
    );
    return VideoPlayer;
  })(_polymerElement.PolymerElement);
  _exports.VideoPlayer = VideoPlayer;
  window.customElements.define(VideoPlayer.tag, VideoPlayer);
});