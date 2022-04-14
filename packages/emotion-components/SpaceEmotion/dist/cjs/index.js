'use strict';

var react = require('@emotion/react');

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

const space = theme$1 => /*#__PURE__*/react.css("width:", (isObjectEmpty(theme$1) ? theme : theme$1).spacing.m, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:space;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHaUMiLCJmaWxlIjoiU3BhY2Uuc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGlzT2JqZWN0RW1wdHksIHRoZW1lIGFzIGRlZmF1bHRUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiXG5cbmV4cG9ydCBjb25zdCBzcGFjZSA9IHRoZW1lID0+IGNzc2BcbiAgd2lkdGg6ICR7KGlzT2JqZWN0RW1wdHkodGhlbWUpID8gZGVmYXVsdFRoZW1lIDogdGhlbWUpLnNwYWNpbmcubX07XG5gXG4iXX0= */");

/** @jsx jsx */

const Space = () => {
  return react.jsx("div", {
    css: space
  });
};

module.exports = Space;
