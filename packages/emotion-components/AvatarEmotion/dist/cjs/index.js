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

/** @jsx jsx */
const avatar = theme$1 => /*#__PURE__*/react.css("background-color:", (isObjectEmpty(theme$1) ? theme : theme$1).colors.avatar, ";border-radius:100%;width:64px;height:64px;display:flex;align-items:center;justify-content:center;" + (process.env.NODE_ENV === "production" ? "" : ";label:avatar;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0MiLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBpc09iamVjdEVtcHR5LCB0aGVtZSBhcyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIlxuXG5leHBvcnQgY29uc3QgYXZhdGFyID0gdGhlbWUgPT4gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhpc09iamVjdEVtcHR5KHRoZW1lKSA/IGRlZmF1bHRUaGVtZSA6IHRoZW1lKS5jb2xvcnNcbiAgICAuYXZhdGFyfTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCB1bnVzZWRDbGFzcyA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoaXNPYmplY3RFbXB0eSh0aGVtZSkgPyBkZWZhdWx0VGhlbWUgOiB0aGVtZSkuY29sb3JzXG4gICAgLmF2YXRhcn07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogJHsoaXNPYmplY3RFbXB0eSh0aGVtZSkgPyBkZWZhdWx0VGhlbWUgOiB0aGVtZSkuc3BhY2luZy5sfTtcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgICAkeyhpc09iamVjdEVtcHR5KHRoZW1lKSA/IGRlZmF1bHRUaGVtZSA6IHRoZW1lKS5jb2xvcnMuaGVhZGluZ307XG4gIHBhZGRpbmc6ICR7KGlzT2JqZWN0RW1wdHkodGhlbWUpID8gZGVmYXVsdFRoZW1lIDogdGhlbWUpLnNwYWNpbmcuc307XG4gIG1hcmdpbi1ib3R0b206ICR7KGlzT2JqZWN0RW1wdHkodGhlbWUpID8gZGVmYXVsdFRoZW1lIDogdGhlbWUpLnNwYWNpbmcubX07XG5gXG5cbmNvbnN0IEF2YXRhciA9ICh7IG51bWJlciB9KSA9PiB7XG4gIHJldHVybiA8ZGl2IGNzcz17YXZhdGFyfT57bnVtYmVyICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKX08L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iXX0= */");

const Avatar = _ref => {
  let {
    number
  } = _ref;
  return react.jsx("div", {
    css: avatar
  }, number + Math.floor(Math.random() * 100));
};

module.exports = Avatar;
