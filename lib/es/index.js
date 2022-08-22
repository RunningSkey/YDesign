import React from 'react';

var classnames$1 = { exports: {} };

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);

var classnames = classnames$1.exports;

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '.y-btn{background-image:none;background:#fff;border:1px solid #d9d9d9;border-radius:2px;box-shadow:0 2px #00000004;color:#000000d9;cursor:pointer;display:inline-block;font-size:14px;font-weight:400;height:32px;padding:4px 15px;position:relative;text-align:center;touch-action:manipulation;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.y-btn-primary{background:#1890ff;border-color:#1890ff;box-shadow:0 2px #0000000b;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.12)}';
styleInject(css_248z);

var PREFIX = 'y';

var Button = function Button(props) {
  var cName = ''.concat(PREFIX, '-btn');
  return React.createElement(
    'button',
    {
      className: classnames(cName, cName + '-' + (props.type || 'default')),
    },
    props.children,
  );
};

var count = function count(x, y) {
  return x + y;
};

export { Button, count };
