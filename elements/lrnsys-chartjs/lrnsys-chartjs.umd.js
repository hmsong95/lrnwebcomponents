!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@polymer/polymer/polymer-legacy.js"),require("@vowo/chart-elements/chart-elements.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@vowo/chart-elements/chart-elements.js"],r):r(e.LrnsysChartjs={},e.polymerLegacy_js)}(this,function(e,r){"use strict";function o(){var e,r,t=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div>\n    \x3c!-- \n    Use the logic from the logic of the template dom-if\'s to allow for abstraction for all the chart types\n    --\x3e\n        <chart-line labels="{{labels}}" data="[[data]]"></chart-line>\n    </div>\n'],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return o=function(){return t},t}var t=r.Polymer({_template:r.html(o()),is:"lrnsys-chartjs",properties:{labels:{type:Array,value:["January","February","March","April","May","June","July"]},data:{type:Object,value:{}}},ready:function(){this.data={labels:this.labels,datasets:[{label:"My First dataset",backgroundColor:"rgba(220,220,220,0.2)",borderColor:"rgba(220,220,220,1)",borderWidth:1,pointBackgroundColor:"rgba(220,220,220,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",borderWidth:1,pointBackgroundColor:"rgba(151,187,205,1)",pointBorderColor:"#fff",pointHighlightFill:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:[28,48,40,19,86,27,90]}]},console.log(this.data)}});e.LrnsysChartjs=t,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrnsys-chartjs.umd.js.map
