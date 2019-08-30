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
        <clipPath id="SaintVincentAndGrenadines_svg_clip1">
          <path d="M 12 9 L 18 9 L 18 15 L 12 15 Z M 12 9 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip3">
          <path d="M 15 12 L 22 12 L 22 18 L 15 18 Z M 15 12 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip5">
          <path d="M 19 9 L 25 9 L 25 15 L 19 15 Z M 19 9 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip7">
          <path d="M 0 0 L 11 0 L 11 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip9">
          <path d="M 26 0 L 37 0 L 37 25 L 26 25 Z M 26 0 " />
        </clipPath>
        <clipPath id="SaintVincentAndGrenadines_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="SaintVincentAndGrenadines_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_clip1)"
          clipRule="nonzero"
        >
          <g
            clipPath="url(#SaintVincentAndGrenadines_svg_clip2)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 12.515625 11.699219 L 15.132812 9.066406 L 17.746094 11.699219 L 15.132812 14.332031 Z M 12.515625 11.699219 "
            />
          </g>
        </g>
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_clip3)"
          clipRule="nonzero"
        >
          <g
            clipPath="url(#SaintVincentAndGrenadines_svg_clip4)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 15.878906 15.082031 L 18.496094 12.449219 L 21.109375 15.082031 L 18.496094 17.714844 Z M 15.878906 15.082031 "
            />
          </g>
        </g>
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_clip5)"
          clipRule="nonzero"
        >
          <g
            clipPath="url(#SaintVincentAndGrenadines_svg_clip6)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 19.242188 11.699219 L 21.859375 9.066406 L 24.472656 11.699219 L 21.859375 14.332031 Z M 19.242188 11.699219 "
            />
          </g>
        </g>
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_clip7)"
          clipRule="nonzero"
        >
          <g
            clipPath="url(#SaintVincentAndGrenadines_svg_clip8)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 10.570312 0 L 10.570312 25.523438 L 0 25.523438 Z M 0 0 "
            />
          </g>
        </g>
        <g
          clipPath="url(#SaintVincentAndGrenadines_svg_clip9)"
          clipRule="nonzero"
        >
          <g
            clipPath="url(#SaintVincentAndGrenadines_svg_clip10)"
            clipRule="evenodd"
          >
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 26.421875 0 L 36.988281 0 L 36.988281 25.523438 L 26.421875 25.523438 Z M 26.421875 0 "
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