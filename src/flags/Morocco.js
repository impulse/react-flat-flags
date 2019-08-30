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
      <g id="Morocco_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 15.730469 17.90625 C 15.246094 18.253906 14.960938 18.058594 15.101562 17.472656 L 15.625 15.296875 C 15.765625 14.710938 15.511719 13.914062 15.0625 13.523438 L 13.480469 12.144531 C 13.03125 11.753906 13.144531 11.417969 13.738281 11.402344 L 15.957031 11.339844 C 16.546875 11.324219 17.171875 10.835938 17.339844 10.261719 L 18.035156 7.882812 C 18.203125 7.304688 18.503906 7.296875 18.707031 7.863281 L 19.542969 10.207031 C 19.742188 10.773438 20.394531 11.242188 20.988281 11.246094 L 23.246094 11.269531 C 23.839844 11.277344 23.960938 11.605469 23.511719 12 L 21.792969 13.511719 C 21.34375 13.90625 21.113281 14.703125 21.277344 15.28125 L 21.828125 17.195312 C 21.992188 17.773438 21.714844 17.988281 21.207031 17.675781 L 19.371094 16.535156 C 18.867188 16.21875 18.054688 16.246094 17.570312 16.59375 Z M 15.730469 17.90625 "
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
