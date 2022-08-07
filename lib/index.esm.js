import lodash from 'lodash';
import React from 'react';

var components = (function (x, y) {
  return {
    x: x,
    y: y
  };
});

var Button = (function (props) {
  return React.createElement("button", null, props.text);
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
  return lodash.cloneDeep(n);
};

var list = function list(_list) {
  return _list.map(function (i) {
    return i.name;
  });
};

export { Button, add, clone, list };
