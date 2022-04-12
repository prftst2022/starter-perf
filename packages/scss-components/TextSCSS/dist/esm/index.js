import React from 'react';
import '@starter-perf/tokens-scss';

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

var css_248z = ".text {\n  color: var(--scss-colors-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJUZXh0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1zY3NzLWNvbG9ycy10ZXh0KTtcbn0iXX0= */";
styleInject(css_248z);

var Text = function Text(_ref) {
  var number = _ref.number;
  return /*#__PURE__*/React.createElement("p", {
    className: "text"
  }, "Lorem ipsum ", number + Math.floor(Math.random() * 100));
};

export { Text as default };
