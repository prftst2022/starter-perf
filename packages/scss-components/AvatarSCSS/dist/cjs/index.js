'use strict';

import "./index.css"

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Avatar = _ref => {
  let {
    number = 1
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "avatar"
  }, number + Math.floor(Math.random() * 100));
};

module.exports = Avatar;
