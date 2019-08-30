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
        <clipPath id="Slovakia_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip3">
          <path d="M 0 16 L 37 16 L 37 25 L 0 25 Z M 0 16 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip5">
          <path d="M 3 5 L 15 5 L 15 19 L 3 19 Z M 3 5 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip7">
          <path d="M 4 6 L 14 6 L 14 18 L 4 18 Z M 4 6 " />
        </clipPath>
        <clipPath id="Slovakia_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Slovakia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Slovakia_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Slovakia_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Slovakia_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Slovakia_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 16.484375 L 36.988281 16.484375 L 36.988281 24.992188 L 0 24.992188 Z M 0 16.484375 "
            />
          </g>
        </g>
        <g clipPath="url(#Slovakia_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Slovakia_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 11.632812 7.046875 C 9.917969 7.046875 8.988281 5.847656 8.988281 5.847656 C 8.988281 5.847656 8.058594 7.046875 6.34375 7.046875 C 4.765625 7.046875 3.699219 6.050781 3.699219 6.050781 L 3.699219 12.554688 C 3.746094 16.839844 8.984375 18.609375 8.984375 18.609375 C 8.984375 18.609375 14.265625 16.839844 14.265625 12.554688 L 14.265625 6.050781 C 14.265625 6.050781 13.210938 7.046875 11.632812 7.046875 Z M 11.632812 7.046875 "
            />
          </g>
        </g>
        <g clipPath="url(#Slovakia_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Slovakia_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 11.101562 7.910156 C 9.730469 7.910156 8.988281 6.914062 8.988281 6.914062 C 8.988281 6.914062 8.242188 7.910156 6.871094 7.910156 C 5.609375 7.910156 4.753906 7.082031 4.753906 7.082031 L 4.753906 12.503906 C 4.792969 16.070312 8.984375 17.546875 8.984375 17.546875 C 8.984375 17.546875 13.210938 16.070312 13.210938 12.503906 L 13.210938 7.082031 C 13.210938 7.082031 12.367188 7.910156 11.101562 7.910156 Z M 11.101562 7.910156 "
            />
          </g>
        </g>
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
