import React from 'react';

var Avatar = function Avatar(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === void 0 ? 1 : _ref$number;
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, number + Math.floor(Math.random() * 100));
};

export { Avatar as default };
