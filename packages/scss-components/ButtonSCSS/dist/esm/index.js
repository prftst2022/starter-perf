import React from 'react';

const Button = _ref => {
  let {
    number
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "click on button ".concat(number),
    className: "button"
  }, "Click me ", number);
};

export { Button as default };
