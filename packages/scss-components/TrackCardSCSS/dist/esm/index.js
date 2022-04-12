import React from 'react';

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

var css_248z$1 = ":root {\n  --scss-colors-primary: #005b99;\n  --scss-colors-text: #2e353f;\n  --scss-colors-textlight: #4f5969;\n  --scss-colors-heading: #1a202c;\n  --scss-colors-headingblack: black;\n  --scss-colors-accent: #d1dce5;\n  --scss-colors-bgcolor: #e0e0e0;\n  --scss-colors-avatar: #293c2c;\n\n  --scss-spacing-s: 8px;\n  --scss-spacing-m: 16px;\n  --scss-spacing-l: 24px;\n  --scss-spacing-xl: 32px;\n\n  --scss-border-radius-xs: 4px;\n  --scss-border-radius-s: 8px;\n  --scss-border-radius-m: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNkJBQTZCOztFQUU3QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0VBRXZCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tc2Nzcy1jb2xvcnMtcHJpbWFyeTogIzAwNWI5OTtcbiAgLS1zY3NzLWNvbG9ycy10ZXh0OiAjMmUzNTNmO1xuICAtLXNjc3MtY29sb3JzLXRleHRsaWdodDogIzRmNTk2OTtcbiAgLS1zY3NzLWNvbG9ycy1oZWFkaW5nOiAjMWEyMDJjO1xuICAtLXNjc3MtY29sb3JzLWhlYWRpbmdibGFjazogYmxhY2s7XG4gIC0tc2Nzcy1jb2xvcnMtYWNjZW50OiAjZDFkY2U1O1xuICAtLXNjc3MtY29sb3JzLWJnY29sb3I6ICNlMGUwZTA7XG4gIC0tc2Nzcy1jb2xvcnMtYXZhdGFyOiAjMjkzYzJjO1xuXG4gIC0tc2Nzcy1zcGFjaW5nLXM6IDhweDtcbiAgLS1zY3NzLXNwYWNpbmctbTogMTZweDtcbiAgLS1zY3NzLXNwYWNpbmctbDogMjRweDtcbiAgLS1zY3NzLXNwYWNpbmcteGw6IDMycHg7XG5cbiAgLS1zY3NzLWJvcmRlci1yYWRpdXMteHM6IDRweDtcbiAgLS1zY3NzLWJvcmRlci1yYWRpdXMtczogOHB4O1xuICAtLXNjc3MtYm9yZGVyLXJhZGl1cy1tOiAxMnB4O1xufVxuIl19 */";
styleInject(css_248z$1);

var css_248z = ".card-container {\n  border-radius: 6;\n  color: black;\n  background-size: cover;\n  background-color: white;\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 47%;\n  height: 380px;\n  margin: 10px;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n}\n.card-container:hover {\n  background-color: #e0e0e0;\n}\n\n.card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 100%;\n}\n\n.card-title {\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 1em;\n  font-weight: 700;\n  color: black;\n  flex: 1;\n}\n\n.card-image-container {\n  height: 220px;\n  position: relative;\n}\n.card-image-container::after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(250, 0, 150, 0.2);\n}\n\n.card-image {\n  background-color: #e0e0e0;\n  width: 64px;\n  height: 64px;\n  filter: grayscale(60%);\n}\n\n.card-body {\n  padding: 18px;\n  flex: 1;\n  display: flex;\n  color: #e0e0e0;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.card-footer {\n  display: flex;\n  flex-direction: row;\n}\n\n.author-image {\n  height: 30px;\n  width: 30px;\n  margin-right: 8px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-color: #573535;\n}\n\n.author-and-track {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.author-name {\n  line-height: 1em;\n  font-size: 1.1em;\n  color: black;\n}\n\n.track-length {\n  font-size: 0.8em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYWNrQ2FyZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLCtDQUErQztFQUMvQywyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6IlRyYWNrQ2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNjtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNDclO1xuICBoZWlnaHQ6IDM4MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQtY29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZsZXg6IDE7XG59XG5cbi5jYXJkLWltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkLWltYWdlLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAwLCAxNTAsIDAuMik7XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjAlKTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmF1dGhvci1pbWFnZSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTczNTM1O1xufVxuXG4uYXV0aG9yLWFuZC10cmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmF1dGhvci1uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udHJhY2stbGVuZ3RoIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
styleInject(css_248z);

var TrackCard = function TrackCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, "Lorem"), /*#__PURE__*/React.createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "author-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "author-and-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "author-name"
  }, "Lorem"), /*#__PURE__*/React.createElement("span", {
    className: "track-length"
  }, "Lorem"))))));
};

export { TrackCard as default };
