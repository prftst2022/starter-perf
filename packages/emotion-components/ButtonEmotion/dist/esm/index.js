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

const button = theme$1 => /*#__PURE__*/css("background-color:", (isObjectEmpty(theme$1) ? theme : theme$1).colors.primary, ";padding:", (isObjectEmpty(theme$1) ? theme : theme$1).spacing.s, ";font-size:16px;border-radius:8px;border-style:none;box-sizing:border-box;color:#ffffff;cursor:pointer;display:inline-block;font-weight:500;line-height:20px;outline:none;position:relative;text-align:center;text-decoration:none;transition:color 100ms;vertical-align:baseline;&:hover,&:focus{background-color:", (isObjectEmpty(theme$1) ? theme : theme$1).colors.textLight, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:button;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tDIiwiZmlsZSI6IkJ1dHRvbi5zdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgaXNPYmplY3RFbXB0eSwgdGhlbWUgYXMgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCJcblxuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoaXNPYmplY3RFbXB0eSh0aGVtZSkgPyBkZWZhdWx0VGhlbWUgOiB0aGVtZSkuY29sb3JzLnByaW1hcnl9O1xuICBwYWRkaW5nOiAkeyhpc09iamVjdEVtcHR5KHRoZW1lKSA/IGRlZmF1bHRUaGVtZSA6IHRoZW1lKS5zcGFjaW5nLnN9O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcztcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhpc09iamVjdEVtcHR5KHRoZW1lKSA/IGRlZmF1bHRUaGVtZSA6IHRoZW1lKS5jb2xvcnMudGV4dExpZ2h0fTtcbiAgfVxuYFxuIl19 */");

/** @jsx jsx */

const Button = _ref => {
  let {
    number
  } = _ref;
  return jsx("button", {
    type: "button",
    "aria-label": "click on button ".concat(number),
    css: button
  }, "Click me ", number);
};

export { Button as default };
