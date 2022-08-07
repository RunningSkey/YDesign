'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var components = (function (x, y) {
  return {
    x: x,
    y: y
  };
});

var Button = (function (props) {
  return React__default["default"].createElement("button", null, props.text);
});

var add = function add(n) {
  return {
    n: n,
    components: components
  };
}; // const save = (str: string) => {
//   return str + str;
// }
// let number = 10;
// number = '1'


var clone = function clone(n) {
  return lodash__default["default"].cloneDeep(n);
};

var list = function list(_list) {
  return _list.map(function (i) {
    return i.name;
  });
};

exports.Button = Button;
exports.add = add;
exports.clone = clone;
exports.list = list;
