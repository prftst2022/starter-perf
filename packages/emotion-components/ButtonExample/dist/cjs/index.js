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
const button = theme$1 => /*#__PURE__*/react.css("background-color:", (isObjectEmpty(theme$1) ? theme : theme$1).colors.primary, ";padding:", (isObjectEmpty(theme$1) ? theme : theme$1).spacing.s, ";font-size:16px;border-radius:8px;border-style:none;box-sizing:border-box;color:#ffffff;cursor:pointer;display:inline-block;font-weight:500;line-height:20px;outline:none;position:relative;text-align:center;text-decoration:none;transition:color 100ms;vertical-align:baseline;margin:15px;&:hover,&:focus{background-color:", (isObjectEmpty(theme$1) ? theme : theme$1).colors.textLight, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:button;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0MiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBpc09iamVjdEVtcHR5LCB0aGVtZSBhcyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIlxuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhpc09iamVjdEVtcHR5KHRoZW1lKSA/IGRlZmF1bHRUaGVtZSA6IHRoZW1lKS5jb2xvcnNcbiAgICAucHJpbWFyeX07XG4gIHBhZGRpbmc6ICR7KGlzT2JqZWN0RW1wdHkodGhlbWUpID8gZGVmYXVsdFRoZW1lIDogdGhlbWUpLnNwYWNpbmcuc307XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIG1hcmdpbjogMTVweDtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoaXNPYmplY3RFbXB0eSh0aGVtZSkgPyBkZWZhdWx0VGhlbWUgOiB0aGVtZSkuY29sb3JzXG4gICAgICAudGV4dExpZ2h0fTtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKFwicHJvcHNcIiwgcHJvcHMpXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17YGNsaWNrIG9uIGJ1dHRvbiBgfSBjc3M9e2J1dHRvbn0+XG4gICAgICBDbGljayBtZVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEJ1dHRvblxuIl19 */");

const StyledButton = props => {
  console.log("props", props);
  return react.jsx("button", {
    type: "button",
    "aria-label": "click on button ",
    css: button
  }, "Click me");
};

module.exports = StyledButton;
