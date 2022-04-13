import React from 'react';

const Avatar = _ref => {
  let {
    number = 1
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, number + Math.floor(Math.random() * 100));
};

export { Avatar as default };
