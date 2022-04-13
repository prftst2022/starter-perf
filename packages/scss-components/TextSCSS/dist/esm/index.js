import "./index.css"

import React from 'react';

const Text = _ref => {
  let {
    number
  } = _ref;
  return /*#__PURE__*/React.createElement("p", {
    className: "text"
  }, "Lorem ipsum ", number + Math.floor(Math.random() * 100));
};

export { Text as default };
