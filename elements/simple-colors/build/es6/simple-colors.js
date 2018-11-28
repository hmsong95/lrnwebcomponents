import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import "./lib/simple-colors-utility.js";
window.simpleColorsBehaviors = window.simpleColorsBehaviors || {};
window.simpleColorsBehaviors = {
  properties: {
    accentColor: { type: String, value: null, reflectToAttribute: !0 },
    dark: { type: Boolean, value: !1, reflectToAttribute: !0 },
    __hexCodes: { type: Object, value: null },
    __lightTheme: { type: Object, computed: "_getLightTheme(__hexCodes)" },
    __darkTheme: { type: Object, computed: "_getDarkTheme(__hexCodes)" }
  },
  observers: ["setTheme(accentColor,dark,__hexCodes)"],
  created: function() {
    window.SimpleColorsUtility.requestAvailability();
    this.__wcagaa = {
      greys: { small: [5, 5, 4, 4, 1], large: [5, 5, 5, 4, 2] },
      colors: { small: [4, 3, 3, 1, 0], large: [5, 4, 3, 2, 1] }
    };
  },
  ready: function() {
    this.__hexCodes = window.SimpleColorsUtility.hexCodes;
  },
  setTheme: function(accentColor, dark, hexCodes) {
    if (null !== hexCodes && "" !== hexCodes) {
      if (null !== accentColor && "" !== accentColor) {
        let prop = accentColor.replace(/-([a-z])/g, function(g) {
          return g[1].toUpperCase();
        });
        if (this.__lightTheme.hasOwnProperty(prop)) {
          this.__lightTheme.accent = this.__lightTheme[prop].slice();
          this.__darkTheme.accent = this.__darkTheme[prop].slice();
        } else {
          this.__lightTheme.accent = this.__hexCodes.accent.slice();
          this.__darkTheme.accent = this.__hexCodes.accent.slice().reverse();
        }
      }
      this._setThemeProps("--simple-colors-light-theme-", this.__lightTheme);
      this._setThemeProps("--simple-colors-dark-theme-", this.__darkTheme);
      if (dark) {
        this._setThemeProps("--simple-colors-", this.__darkTheme);
      } else {
        this._setThemeProps("--simple-colors-", this.__lightTheme);
      }
    }
  },
  _setProps: function(prefix, colors) {
    prefix = prefix
      .replace("-grey", "")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase();
    var customStyle = {};
    for (let i = 0; i < colors.length; i++) {
      let half = colors.length / 2,
        suffix =
          i < half
            ? "-foreground" + (i + 1)
            : "-background" + (colors.length - i);
      if (null !== customStyle[prefix + suffix]) {
        customStyle[prefix + suffix] = colors[i];
      }
    }
    this.updateStyles(customStyle);
  },
  _setThemeProps: function(themePrefix, theme) {
    for (var property in theme) {
      if (theme.hasOwnProperty(property)) {
        this._setProps(themePrefix + property, theme[property]);
      }
    }
  },
  _getLightTheme: function(hexCodes) {
    let setThemeProps = function(themePrefix, theme) {
      for (var property in theme) {
        if (theme.hasOwnProperty(property)) {
          this._setProps(themePrefix + property, theme[property]);
        }
      }
    };
    this._setThemeProps("--simple-colors-", hexCodes);
    this._setThemeProps("--simple-colors-light-theme-", hexCodes);
    return hexCodes;
  },
  _getDarkTheme: function(hexCodes) {
    let dark = {};
    for (var property in hexCodes) {
      if (hexCodes.hasOwnProperty(property)) {
        dark[property] = hexCodes[property].slice().reverse();
      }
    }
    this._setThemeProps("--simple-colors-dark-theme-", dark);
    return dark;
  },
  getContrasts: function(theme, isColor, isForeground, level, isSmallText) {
    isSmallText = isSmallText !== void 0 ? isSmallText : !0;
    let results = [],
      data = isColor ? this.__wcagaa.colors : this.__wcagaa.greys,
      levels = data.small[level - 1];
    if (!isSmallText) levels = data.large[level - 1];
    for (let i = 0; i < levels; i++) {
      let suffix = isForeground ? "-background" : "-foreground",
        index =
          (isForeground && "light" === theme) ||
          (!isForeground && "dark" === theme)
            ? i + 1
            : levels - (i - 1);
      if (!isColor) {
        for (var property in this.__hexCodes) {
          if ("colorLevels" !== property) {
            let color =
              "grey" === property
                ? ""
                : "-" +
                  property.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            results.push({
              variable:
                "--simple-colors-" +
                theme +
                "-theme" +
                color +
                suffix +
                (i + 1),
              hexCode: this.__hexCodes[property][index]
            });
          }
        }
      } else {
        results.push({
          variable:
            "--simple-colors-" + theme + "-theme" + color + suffix + (i + 1),
          hexCode: this.__hexCodes[property][index]
        });
      }
    }
    return results;
  }
};
