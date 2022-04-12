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

var css_248z = ".button {\n  background-color: var(--scss-colors-primary);\n  padding: var(--scss-spacing-s);\n  font-size: 16px;\n  border-radius: 8px;\n  border-style: none;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  line-height: 20px;\n  outline: none;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: color 100ms;\n  vertical-align: baseline;\n}\n.button:hover, .button:focus {\n  background-color: var(--scss-colors-textlight);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQTRDO0VBQzVDLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6IkJ1dHRvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjc3MtY29sb3JzLXByaW1hcnkpO1xuICBwYWRkaW5nOiB2YXIoLS1zY3NzLXNwYWNpbmctcyk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nzcy1jb2xvcnMtdGV4dGxpZ2h0KTtcbn0iXX0= */";
styleInject(css_248z);

var Button = function Button(_ref) {
  var number = _ref.number;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    "aria-label": "click on button ".concat(number),
    className: "button"
  }, "Click me ", number);
};

module.exports = Button;
