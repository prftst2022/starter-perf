'use strict';

import "./index.css"

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TrackCard = () => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-image-container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-image"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React__default["default"].createElement("h3", {
    className: "card-title"
  }, "Lorem"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "author-image"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "author-and-track"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "author-name"
  }, "Lorem"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "track-length"
  }, "Lorem"))))));
};

module.exports = TrackCard;
