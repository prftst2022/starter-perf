import { css, jsx } from '@emotion/react';

const isObjectEmpty = obj => {
  return Object.keys(obj).length === 0;
};

const theme = {
  colors: {
    primary: "#005b99",
    text: "#2e353f",
    textLight: "#4f5969",
    heading: "#1a202c",
    headingBlack: "black",
    accent: "#d1dce5",
    bgColor: "#e0e0e0",
    avatar: "#88BF91"
  },
  spacing: {
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "32px"
  },
  borderRadius: {
    xs: "4px",
    s: "8px",
    m: "12px"
  }
};

const text = theme$1 => /*#__PURE__*/css("color:", (isObjectEmpty(theme$1) ? theme : theme$1).colors.text, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:text;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHQuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQyIsImZpbGUiOiJUZXh0LnN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBpc09iamVjdEVtcHR5LCB0aGVtZSBhcyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIlxuXG5leHBvcnQgY29uc3QgdGV4dCA9IHRoZW1lID0+IGNzc2BcbiAgY29sb3I6ICR7KGlzT2JqZWN0RW1wdHkodGhlbWUpID8gZGVmYXVsdFRoZW1lIDogdGhlbWUpLmNvbG9ycy50ZXh0fTtcbmBcbiJdfQ== */");

/** @jsx jsx */

const Text = _ref => {
  let {
    number
  } = _ref;
  return jsx("p", {
    css: text
  }, "Lorem ipsum ", number + Math.floor(Math.random() * 100));
};

export { Text as default };
