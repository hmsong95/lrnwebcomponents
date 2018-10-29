define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js",
  "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js"
], function(_polymerLegacy, _paperDialogBehavior) {
  "use strict";
  function _templateObject_9fa59d20db1411e8af4b7d5684c15a02() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n'
    ]);
    _templateObject_9fa59d20db1411e8af4b7d5684c15a02 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_9fa59d20db1411e8af4b7d5684c15a02()
    ),
    is: "lrndesign-dialog",
    behaviors: [_paperDialogBehavior.PaperDialogBehavior]
  });
});
