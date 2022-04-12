import React from 'react';

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

var css_248z = ".text {\n  color: var(--scss-colors-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJUZXh0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1zY3NzLWNvbG9ycy10ZXh0KTtcbn0iXX0= */";
styleInject(css_248z);

var Text = function Text(_ref) {
  var number = _ref.number;
  return /*#__PURE__*/React.createElement("p", {
    className: "text"
  }, "Lorem ipsum ", number + Math.floor(Math.random() * 100));
};

export { Text as default };
