import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
let SimpleTimer = Polymer({
  _template: html`
  <style>
    :host {
      display: block;
    }
  </style>
  {{_formattedTime}}
`,
  is: "simple-timer",
  properties: {
    startTime: { type: Number, value: 60 },
    currentTime: { type: Number, notify: !0 },
    isRunning: { type: Boolean, reflectToAttribute: !0, notify: !0, value: !1 },
    countUp: { type: Boolean, value: !1 },
    _elapsedTime: { type: Number, value: 0 },
    _formattedTime: { type: String, value: "0" }
  },
  ready: function() {
    if (this.countUp) {
      this.set("currentTime", 0);
      this.set("_formattedTime", "0");
    } else {
      this.set("currentTime", this.startTime);
      this.set("_formattedTime", this.startTime.toString());
    }
  },
  start: function() {
    if (
      (0 >= this.currentTime && !this.countUp) ||
      (this.currentTime >= this.startTime && this.countUp)
    ) {
      this.currentTime = this.countUp ? this.startTime : 0;
    }
    if (!this.startTime || this.isRunning) {
      this.pause();
      return;
    }
    this._elapsed = performance.now() / 1e3;
    this.isRunning = !0;
    window.requestAnimationFrame(this._decreaseTimer.bind(this));
  },
  pause: function() {
    this.isRunning = !1;
  },
  _decreaseTimer: function(timestamp) {
    if (!this.isRunning) {
      return;
    }
    if (
      (0 >= this.currentTime && !this.countUp) ||
      (this.currentTime >= this.startTime && this.countUp)
    ) {
      this.currentTime = this.countUp ? this.startTime : 0;
      this.pause();
      this.fire("simple-timer-end");
      return;
    }
    var now = timestamp / 1e3,
      progress = now - this._elapsed;
    this.currentTime = this.countUp
      ? this.currentTime + progress
      : this.currentTime - progress;
    this._formattedTime = this._formatTime(this.currentTime);
    this._elapsed = now;
    window.requestAnimationFrame(this._decreaseTimer.bind(this));
  },
  _formatTime: function(time) {
    var timeString = time.toString().split(".");
    return 0 === timeString[0].indexOf("-")
      ? 0
      : timeString[0] + "." + timeString[1].substring(0, 2);
  }
});
export { SimpleTimer };
