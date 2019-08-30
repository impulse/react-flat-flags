import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 25"
      size={size}
      {...otherProps}
    >
      <g id="Dominica_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(31.764706%,75.686275%,38.039216%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 20.078125 0 L 22.722656 0 L 22.722656 24.992188 L 20.078125 24.992188 Z M 20.078125 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 17.4375 0 L 20.078125 0 L 20.078125 24.992188 L 17.4375 24.992188 Z M 17.4375 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,73.333333%,25.490196%)",
            fillOpacity: 1,
          }}
          d="M 14.796875 0 L 17.4375 0 L 17.4375 24.992188 L 14.796875 24.992188 Z M 14.796875 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
          }}
          d="M 0 13.824219 L 36.988281 13.824219 L 36.988281 16.484375 L 0 16.484375 Z M 0 13.824219 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 0 11.167969 L 36.988281 11.167969 L 36.988281 13.824219 L 0 13.824219 Z M 0 11.167969 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,73.333333%,25.490196%)",
            fillOpacity: 1,
          }}
          d="M 0 8.507812 L 36.988281 8.507812 L 36.988281 11.167969 L 0 11.167969 Z M 0 8.507812 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 18.757812 4.253906 C 23.28125 4.253906 26.949219 7.945312 26.949219 12.496094 C 26.949219 17.046875 23.28125 20.738281 18.757812 20.738281 C 14.234375 20.738281 10.570312 17.046875 10.570312 12.496094 C 10.570312 7.945312 14.234375 4.253906 18.757812 4.253906 Z M 18.757812 4.253906 "
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
