import e from"react";var t,r={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/t=r,function(){var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&t.push(a)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var s in o)e.call(o,s)&&o[s]&&t.push(s);else t.push(o.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}();var n=r.exports;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".y-btn{background-image:none;background:#fff;border:1px solid #d9d9d9;border-radius:2px;box-shadow:0 2px #00000004;color:#000000d9;cursor:pointer;display:inline-block;font-size:14px;font-weight:400;height:32px;padding:4px 15px;position:relative;text-align:center;touch-action:manipulation;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.y-btn-primary{background:#1890ff;border-color:#1890ff;box-shadow:0 2px #0000000b;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.12)}");var o=function(t){var r="".concat("y","-btn");return e.createElement("button",{className:n(r,r+"-"+(t.type||"default"))},t.children)},i=function(e,t){return e+t};export{o as Button,i as count};