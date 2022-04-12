'use strict';

var React = require('react');
require('@starter-perf/tokens-scss');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z = ".space {\n  width: var(--scss-spacing-m);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiU3BhY2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZSB7XG4gIHdpZHRoOiB2YXIoLS1zY3NzLXNwYWNpbmctbSk7XG59Il19 */";
styleInject(css_248z);

var Space = function Space() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "space"
  });
};

module.exports = Space;
