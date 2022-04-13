'use strict';

import "./index.css"

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Text = _ref => {
  let {
    number
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text"
  }, "Lorem ipsum ", number + Math.floor(Math.random() * 100));
};

module.exports = Text;
