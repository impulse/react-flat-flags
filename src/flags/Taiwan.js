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
      <defs>
        <clipPath id="Taiwan_svg_clip1">
          <path d="M 0 0 L 17 0 L 17 13 L 0 13 Z M 0 0 " />
        </clipPath>
        <clipPath id="Taiwan_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Taiwan_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Taiwan_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Taiwan_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 16.382812 0 L 16.382812 12.761719 L 0 12.761719 Z M 0 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 11.753906 7.707031 C 11.753906 7.566406 11.808594 7.355469 11.875 7.234375 L 12.09375 6.859375 C 12.160156 6.738281 12.160156 6.542969 12.09375 6.421875 L 11.871094 6.035156 C 11.800781 5.917969 11.746094 5.703125 11.742188 5.566406 L 11.742188 5.117188 C 11.742188 4.980469 11.644531 4.808594 11.523438 4.742188 L 11.148438 4.527344 C 11.03125 4.457031 10.875 4.300781 10.804688 4.183594 L 10.589844 3.808594 C 10.523438 3.6875 10.351562 3.589844 10.214844 3.589844 L 9.769531 3.589844 C 9.632812 3.589844 9.421875 3.53125 9.300781 3.464844 L 8.917969 3.242188 C 8.796875 3.171875 8.601562 3.171875 8.484375 3.242188 L 8.109375 3.460938 C 7.992188 3.53125 7.78125 3.589844 7.644531 3.589844 L 7.214844 3.589844 C 7.074219 3.589844 6.90625 3.6875 6.835938 3.808594 L 6.613281 4.195312 C 6.546875 4.3125 6.390625 4.46875 6.273438 4.539062 L 5.890625 4.765625 C 5.769531 4.835938 5.671875 5.003906 5.671875 5.144531 L 5.675781 5.578125 C 5.675781 5.714844 5.621094 5.929688 5.550781 6.046875 L 5.335938 6.421875 C 5.265625 6.542969 5.265625 6.738281 5.335938 6.859375 L 5.558594 7.246094 C 5.628906 7.367188 5.683594 7.578125 5.683594 7.71875 L 5.6875 8.164062 C 5.6875 8.304688 5.785156 8.472656 5.90625 8.542969 L 6.277344 8.757812 C 6.398438 8.828125 6.554688 8.980469 6.621094 9.101562 L 6.835938 9.476562 C 6.90625 9.597656 7.074219 9.695312 7.214844 9.695312 L 7.65625 9.695312 C 7.796875 9.695312 8.003906 9.75 8.125 9.820312 L 8.511719 10.042969 C 8.628906 10.109375 8.824219 10.109375 8.945312 10.039062 L 9.316406 9.820312 C 9.4375 9.753906 9.648438 9.695312 9.785156 9.695312 L 10.214844 9.695312 C 10.351562 9.695312 10.523438 9.597656 10.589844 9.476562 L 10.8125 9.089844 C 10.882812 8.96875 11.035156 8.8125 11.15625 8.742188 L 11.539062 8.519531 C 11.65625 8.449219 11.753906 8.277344 11.753906 8.140625 Z M 11.753906 7.707031 "
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
