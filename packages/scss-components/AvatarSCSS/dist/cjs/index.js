'use strict';

var React = require('react');

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

var css_248z$1 = ":root {\n  --scss-colors-primary: #005b99;\n  --scss-colors-text: #2e353f;\n  --scss-colors-textlight: #4f5969;\n  --scss-colors-heading: #1a202c;\n  --scss-colors-headingblack: black;\n  --scss-colors-accent: #d1dce5;\n  --scss-colors-bgcolor: #e0e0e0;\n  --scss-colors-avatar: #293c2c;\n\n  --scss-spacing-s: 8px;\n  --scss-spacing-m: 16px;\n  --scss-spacing-l: 24px;\n  --scss-spacing-xl: 32px;\n\n  --scss-border-radius-xs: 4px;\n  --scss-border-radius-s: 8px;\n  --scss-border-radius-m: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNkJBQTZCOztFQUU3QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0VBRXZCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tc2Nzcy1jb2xvcnMtcHJpbWFyeTogIzAwNWI5OTtcbiAgLS1zY3NzLWNvbG9ycy10ZXh0OiAjMmUzNTNmO1xuICAtLXNjc3MtY29sb3JzLXRleHRsaWdodDogIzRmNTk2OTtcbiAgLS1zY3NzLWNvbG9ycy1oZWFkaW5nOiAjMWEyMDJjO1xuICAtLXNjc3MtY29sb3JzLWhlYWRpbmdibGFjazogYmxhY2s7XG4gIC0tc2Nzcy1jb2xvcnMtYWNjZW50OiAjZDFkY2U1O1xuICAtLXNjc3MtY29sb3JzLWJnY29sb3I6ICNlMGUwZTA7XG4gIC0tc2Nzcy1jb2xvcnMtYXZhdGFyOiAjMjkzYzJjO1xuXG4gIC0tc2Nzcy1zcGFjaW5nLXM6IDhweDtcbiAgLS1zY3NzLXNwYWNpbmctbTogMTZweDtcbiAgLS1zY3NzLXNwYWNpbmctbDogMjRweDtcbiAgLS1zY3NzLXNwYWNpbmcteGw6IDMycHg7XG5cbiAgLS1zY3NzLWJvcmRlci1yYWRpdXMteHM6IDRweDtcbiAgLS1zY3NzLWJvcmRlci1yYWRpdXMtczogOHB4O1xuICAtLXNjc3MtYm9yZGVyLXJhZGl1cy1tOiAxMnB4O1xufVxuIl19 */";
styleInject(css_248z$1);

var css_248z = ".avatar {\n  background-color: var(--scss-colors-avatar);\n  border-radius: 100%;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.unused-class {\n  background-color: var(--scss-colors-avatar);\n  border-radius: 100%;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: var(--scss-spacing-l);\n  border: 1px solid var(--scss-colors-heading);\n  padding: var(--scss-spacing-s);\n  margin-bottom: var(--scss-spacing-m);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw0Q0FBNEM7RUFDNUMsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0QyIsImZpbGUiOiJBdmF0YXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3NzLWNvbG9ycy1hdmF0YXIpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVudXNlZC1jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjc3MtY29sb3JzLWF2YXRhcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2Nzcy1zcGFjaW5nLWwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zY3NzLWNvbG9ycy1oZWFkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tc2Nzcy1zcGFjaW5nLXMpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zY3NzLXNwYWNpbmctbSk7XG59Il19 */";
styleInject(css_248z);

var Avatar = function Avatar(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === void 0 ? 1 : _ref$number;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "avatar"
  }, number + Math.floor(Math.random() * 100));
};

module.exports = Avatar;
