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
        <clipPath id="GuineaBissau_svg_clip1">
          <path d="M 0 12 L 37 12 L 37 25 L 0 25 Z M 0 12 " />
        </clipPath>
        <clipPath id="GuineaBissau_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="GuineaBissau_svg_clip3">
          <path d="M 0 0 L 13 0 L 13 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="GuineaBissau_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="GuineaBissau_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#GuineaBissau_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#GuineaBissau_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 0 12.761719 L 36.988281 12.761719 L 36.988281 24.992188 L 0 24.992188 Z M 0 12.761719 "
            />
          </g>
        </g>
        <g clipPath="url(#GuineaBissau_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#GuineaBissau_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 12.152344 0 L 12.152344 24.992188 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 5.085938 15.324219 C 4.816406 15.515625 4.664062 15.410156 4.738281 15.085938 L 5.027344 13.890625 C 5.105469 13.570312 4.964844 13.128906 4.71875 12.914062 L 3.847656 12.15625 C 3.597656 11.941406 3.664062 11.757812 3.988281 11.746094 L 5.207031 11.714844 C 5.535156 11.703125 5.878906 11.4375 5.96875 11.121094 L 6.351562 9.8125 C 6.445312 9.496094 6.609375 9.488281 6.722656 9.800781 L 7.179688 11.089844 C 7.292969 11.402344 7.648438 11.660156 7.976562 11.664062 L 9.21875 11.675781 C 9.546875 11.679688 9.609375 11.859375 9.363281 12.074219 L 8.417969 12.910156 C 8.171875 13.125 8.046875 13.5625 8.136719 13.882812 L 8.4375 14.933594 C 8.53125 15.253906 8.375 15.371094 8.097656 15.199219 L 7.089844 14.570312 C 6.808594 14.398438 6.363281 14.414062 6.097656 14.601562 Z M 5.085938 15.324219 "
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
