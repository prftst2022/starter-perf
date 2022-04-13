'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Button = _ref => {
  let {
    number
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    "aria-label": "click on button ".concat(number),
    className: "button"
  }, "Click me ", number);
};

module.exports = Button;
