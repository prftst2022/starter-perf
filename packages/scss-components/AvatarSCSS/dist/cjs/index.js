'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Avatar = function Avatar(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === void 0 ? 1 : _ref$number;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "avatar"
  }, number + Math.floor(Math.random() * 100));
};

module.exports = Avatar;
