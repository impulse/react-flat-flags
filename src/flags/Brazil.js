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
      <g id="Brazil_svg_surface1">
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
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 3.066406 12.511719 L 18.496094 0.53125 L 33.921875 12.511719 L 18.496094 24.488281 Z M 3.066406 12.511719 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 18.496094 4.253906 C 22.871094 4.253906 26.421875 7.824219 26.421875 12.230469 C 26.421875 16.636719 22.871094 20.207031 18.496094 20.207031 C 14.117188 20.207031 10.570312 16.636719 10.570312 12.230469 C 10.570312 7.824219 14.117188 4.253906 18.496094 4.253906 Z M 18.496094 4.253906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 25.363281 15.953125 C 25.585938 15.480469 25.765625 14.980469 25.894531 14.460938 C 24.269531 10.652344 20.472656 7.976562 16.050781 7.976562 C 14.230469 7.976562 12.519531 8.429688 11.019531 9.226562 C 10.835938 9.613281 10.6875 10.015625 10.566406 10.433594 C 12.027344 9.6875 13.683594 9.265625 15.4375 9.265625 C 19.9375 9.265625 23.785156 12.035156 25.363281 15.953125 Z M 25.363281 15.953125 "
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