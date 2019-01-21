define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./lib/lrndesign-gallery-behaviors.js","./lib/lrndesign-gallery-details.js","./lib/lrndesign-gallery-zoom.js"],function(_exports,_polymerElement,_lrndesignGalleryBehaviors,_lrndesignGalleryDetails,_lrndesignGalleryZoom){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignGallery=void 0;function _templateObject_37c37c601d9d11e9805c35ffb852cbf8(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"lrndesign-gallery-shared-styles\">\n        :host {\n          margin: 15px 0 0;\n          padding: 0;\n        }\n        :host #carouselitem {\n          width: 100%;\n          color: var(--lrndesign-gallery-color);\n          background-color: var(--lrndesign-gallery-background-color);\n          border: 1px solid var(--lrndesign-gallery-border-color);\n        }\n        :host(:not([responsive-size=\"xs\"]):not([extra-wide])) #carouselitem {\n          display: flex;\n          justify-content: space-between;\n          align-items: stretch;\n          border-top: 4px solid var(--lrndesign-gallery-focus-color);\n        }\n        :host([responsive-size=\"sm\"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size=\"sm\"]:not([extra-wide])) #prevnextnav,\n        :host([responsive-size=\"md\"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size=\"md\"]:not([extra-wide])) #prevnextnav {\n          height: 200px;\n          max-height: 200px;\n        }\n        :host([responsive-size=\"lg\"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size=\"lg\"]:not([extra-wide])) #prevnextnav {\n          height: 300px;\n          max-height: 300px;\n        }\n        :host([responsive-size=\"xl\"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size=\"xl\"]:not([extra-wide])) #prevnextnav {\n          height: 400px;\n          max-height: 400px;\n        }\n        :host #carouselimage {\n          position: relative;\n        }\n        :host #carouselimage iron-image {\n          width: 100%;\n          height: 100%;\n        }\n        :host #prevnextnav {\n          left: 0;\n          top: 0;\n          height: 100%;\n          width: 100%;\n          position: absolute;\n        }\n        :host #prevnextnav paper-button {\n          position: absolute;\n          display: flex;\n          align-items: center;\n          justify-content: flex-end;\n          left: 50%;\n          top: 0;\n          width: 50%;\n          height: 100%;\n          opacity: 0;\n          margin: 0;\n          border-radius: 0;\n          color: var(--lrndesign-gallery-color);\n          background-color: var(--lrndesign-gallery-background-color);\n          --paper-button-ink-color: var(--lrndesign-gallery-background-color);\n          background: var(--lrndesign-gallery-next-bg);\n          transition: opacity 0.5s;\n        }\n        :host #prevnextnav paper-button#carouselprev {\n          left: 0;\n          justify-content: flex-start;\n          background: var(--lrndesign-gallery-prev-bg);\n        }\n        :host #prevnextnav paper-button[item=\"-1\"] {\n          display: none;\n        }\n        :host #prevnextnav paper-button:focus,\n        :host #prevnextnav paper-button:hover {\n          opacity: 0.8;\n        }\n        :host #prevnextnav iron-icon {\n          margin: 10%;\n        }\n        :host lrndesign-gallery-zoom {\n          left: 3px;\n          bottom: 0;\n          z-index: 2;\n          position: absolute;\n        }\n        :host #details {\n          flex-grow: 1;\n          flex-shrink: 1;\n          overflow-y: scroll;\n        }\n        :host([responsive-size=\"xs\"]) #details,\n        :host([extra-wide]) #details {\n          margin-top: -4px;\n          border-top: 4px solid var(--lrndesign-gallery-focus-color);\n        }\n        :host #details-inner {\n          height: 100%;\n          display: flex;\n          position: relative;\n          justify-content: space-between;\n          flex-wrap: wrap;\n          align-items: stretch;\n          align-content: stretch;\n        }\n        :host #itemdetails,\n        :host #thumbnails {\n          padding: 20px;\n          flex-basis: 100%;\n        }\n        :host #itemdetails {\n          align-self: flex-start;\n          flex-grow: 1;\n          flex-shrink: 1;\n          overflow: scroll;\n        }\n        :host #thumbnails {\n          align-self: flex-end;\n        }\n        :host .gallerythumb[disabled] {\n          @apply --lrndesign-gallery-thumbnail-image-selected;\n        }\n        :host([responsive-size=\"xs\"]) .gallerythumb iron-image {\n          display: none;\n        }\n        :host([responsive-size=\"md\"]) .gallerythumb iron-image {\n          width: 45px;\n          height: 45px;\n        }\n        :host([responsive-size=\"lg\"]) .gallerythumb iron-image,\n        :host([responsive-size=\"xl\"]) .gallerythumb iron-image {\n          width: 50px;\n          height: 50px;\n        }\n        :host #itemtitle {\n          margin-top: 0;\n        }\n        :host .x-of-y {\n          font-size: 85%;\n          font-style: italic;\n          text-align: right;\n          padding: 0;\n          margin: 0;\n        }\n        :host #xystart,\n        :host #xyend {\n          position: absolute;\n          right: 20px;\n          top: 20px;\n        }\n      </style>\n      <article id=\"gallery\">\n        <template is=\"dom-if\" if=\"[[_isAttrSet(title)]]\">\n          <h1 id=\"gallerytitle\">[[title]]</h1>\n        </template>\n        <div id=\"gallerydescription\"><slot name=\"description\"></slot></div>\n        <p class=\"sr-only\">A carousel of items:</p>\n        <div id=\"galleryscreen\">\n          <div\n            id=\"carouselitem\"\n            aspect-ratio$=\"[[aspectRatio]]\"\n            dark$=\"[[dark]]\"\n            extra-wide$=\"[[extraWide]]\"\n            image-style$=\"[[__imageStyle]]\"\n            item=\"[[selected]]\"\n            responsive-size$=\"[[responsiveSize]]\"\n          >\n            <p id=\"xystart\" class=\"sr-only\" hidden$=\"[[_hideNav(items)]]\">\n              Slide [[__xOfY]] selected.\n            </p>\n            <div id=\"carouselimage\">\n              <iron-image\n                alt$=\"[[selected.alt]]\"\n                fade=\"\"\n                id$=\"[[selected.id]]\"\n                placeholder$=\"[[selected.thumbnail]]\"\n                sizing$=\"[[selected.sizing]]\"\n                src$=\"[[selected.src]]\"\n                style$=\"[[__imageStyle]]\"\n              >\n              </iron-image>\n              <lrndesign-gallery-zoom\n                details$=\"[[selected.details]]\"\n                heading$=\"[[selected.heading]]\"\n                id=\"galleryzoom\"\n                item-id=\"[[selected.id]]\"\n                src$=\"[[selected.large]]\"\n                tooltip$=\"[[selected.tooltip]]\"\n                zoom-alt$=\"[[selected.alt]]\"\n                zoomed$=\"[[selected.zoom]]\"\n              >\n                <iron-icon\n                  icon=\"zoom-in\"\n                  hidden$=\"[[!_isAttrSet(icon)]]\"\n                ></iron-icon>\n              </lrndesign-gallery-zoom>\n              <div id=\"prevnextnav\">\n                <paper-button\n                  id=\"carouselprev\"\n                  aria-controls$=\"[[__gallery.id]]\"\n                  aria-label=\"prev\"\n                  hidden$=\"[[_hideNav(items)]]\"\n                  index$=\"[[selected.prev]]\"\n                  on-tap=\"_onPrev\"\n                  target$=\"[[__gallery]]\"\n                  tabindex=\"-1\"\n                  title=\"\"\n                >\n                  <iron-icon icon=\"chevron-left\"></iron-icon>\n                </paper-button>\n                <paper-tooltip for=\"carouselprev\" position=\"top\"\n                  >previous</paper-tooltip\n                >\n                <paper-button\n                  id=\"carouselnext\"\n                  aria-controls$=\"[[__gallery.id]]\"\n                  aria-label=\"next\"\n                  hidden$=\"[[_hideNav(items)]]\"\n                  index$=\"[[selected.next]]\"\n                  on-tap=\"_onNext\"\n                  target=\"[[__gallery]]\"\n                  tabindex=\"-1\"\n                  title=\"\"\n                >\n                  <iron-icon icon=\"chevron-right\"></iron-icon>\n                </paper-button>\n                <paper-tooltip for=\"carouselnext\" position=\"top\"\n                  >next</paper-tooltip\n                >\n              </div>\n            </div>\n            <div id=\"details\" class=\"item-info\">\n              <div id=\"details-inner\">\n                <div id=\"itemdetails\">\n                  <h2 id=\"itemtitle\" hidden=\"[[!_isAttrSet(selected.title)]]\">\n                    [[selected.title]]\n                  </h2>\n                  <div id=\"itembody\">\n                    <lrndesign-gallery-details\n                      details$=\"[[selected.details]]\"\n                    ></lrndesign-gallery-details>\n                  </div>\n                </div>\n                <div id=\"xyend\">\n                  <p class=\"x-of-y\" hidden$=\"[[_hideNav(items)]\">\n                    (<span class=\"sr-only\"> End of slide </span> [[__xOfY]]<span\n                      class=\"sr-only\"\n                      >.</span\n                    >)\n                  </p>\n                </div>\n                <div id=\"thumbnails\" class=\"item-info\">\n                  <div id=\"thumbnails-inner\">\n                    <div>\n                      <p class=\"sr-only\" hidden$=\"[[_hideNav(items)]\">\n                        Slides list:\n                      </p>\n                      <template is=\"dom-repeat\" items=\"[[items]]\" as=\"item\">\n                        <paper-button\n                          id$=\"[[item.id]]\"\n                          aria-controls$=\"[[__gallery.id]]\"\n                          class=\"gallerythumb\"\n                          hidden$=\"[[_hideNav(items)]]\"\n                          index$=\"[[item.index]]\"\n                          on-tap=\"_onNavTapped\"\n                          disabled$=\"[[_isSelected(selected,item)]]\"\n                          target$=\"[[item.target]]\"\n                          title=\"\"\n                        >\n                          <iron-image\n                            alt$=\"[[item.alt]]\"\n                            fade\n                            sizing=\"cover\"\n                            src$=\"[[item.thumbnail]]\"\n                          >\n                          </iron-image>\n                        </paper-button>\n                        <paper-tooltip\n                          for$=\"[[item.id]]\"\n                          hidden$=\"[[_isSelected(selected,item)]]\"\n                          position=\"top\"\n                        >\n                          [[item.alt]]\n                        </paper-tooltip>\n                      </template>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"galleryprint\">\n          <template id=\"printlist\" is=\"dom-repeat\" items=\"[[items]]\" as=\"item\">\n            <section>\n              <template is=\"dom-if\" if=\"[[_isAttrSet(item.title)]]\">\n                <h2>[[item.title]]</h2>\n              </template>\n              <lrndesign-gallery-details\n                details$=\"[[item.details]]\"\n              ></lrndesign-gallery-details>\n              <img\n                class=\"print-image\"\n                alt$=\"[[item.alt]]\"\n                src$=\"[[item.src]]\"\n              />\n            </section>\n          </template>\n        </div>\n      </article>\n    "]);_templateObject_37c37c601d9d11e9805c35ffb852cbf8=function _templateObject_37c37c601d9d11e9805c35ffb852cbf8(){return data};return data}var LrndesignGallery=function(_LrnDesignGalleryBeha){babelHelpers.inherits(LrndesignGallery,_LrnDesignGalleryBeha);function LrndesignGallery(){babelHelpers.classCallCheck(this,LrndesignGallery);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrndesignGallery).apply(this,arguments))}babelHelpers.createClass(LrndesignGallery,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(LrndesignGallery.prototype),"ready",this).call(this);if(this.selected.scroll){var target=this.$.carouselitem;this._scrollIntoView([this._getParentOffset(target)]);if(!this.selected.zoomed)target.focus()}}},{key:"goToItem",value:function goToItem(index){var root=this;if("number"===typeof index&&0<=index&&index<root.items.length){root.selected=root.items[index];root.__xOfY=parseInt(root.selected.index+1)+" of "+root.items.length}}},{key:"_getImageStyle",value:function _getImageStyle(extraWide,responsiveSize){if(extraWide||"xs"===responsiveSize){return"padding-bottom: "+100/this.aspectRatio+"%;"}else{if("xl"===responsiveSize){return"width: "+400*this.aspectRatio+"px; height: 400px;"}else if("lg"===responsiveSize){return"width: "+300*this.aspectRatio+"px; height: 300px;"}else if("md"===responsiveSize){return"width: "+200*this.aspectRatio+"px; height: 200px;"}else{return"width: "+200*this.aspectRatio+"px; height: 200px;"}}}},{key:"_getIndex",value:function _getIndex(index,step){return index+step}},{key:"_hideNav",value:function _hideNav(items){return items!==void 0?2>items.length:!0}},{key:"_onPrev",value:function _onPrev(e){this.goToItem(parseInt(this.$.carouselprev.getAttribute("index")))}},{key:"_onNext",value:function _onNext(e){this.goToItem(parseInt(this.$.carouselnext.getAttribute("index")))}},{key:"_onNavTapped",value:function _onNavTapped(e){this.goToItem(e.model.item.index)}},{key:"_updateDetails",value:function _updateDetails(){this.$.itembody.innerHTML=this.item.details}}],[{key:"tag",get:function get(){return"lrndesign-gallery"}},{key:"behaviors",get:function get(){return[_lrndesignGalleryBehaviors.LrnDesignGalleryBehaviors]}},{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_37c37c601d9d11e9805c35ffb852cbf8())}},{key:"properties",get:function get(){return{__imageStyle:{type:String,computed:"_getImageStyle(extraWide,responsiveSize)"}}}}]);return LrndesignGallery}(_lrndesignGalleryBehaviors.LrnDesignGalleryBehaviors);_exports.LrndesignGallery=LrndesignGallery;window.customElements.define(LrndesignGallery.tag,LrndesignGallery)});