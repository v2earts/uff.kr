const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      as="style"
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
    />,
  ])
}