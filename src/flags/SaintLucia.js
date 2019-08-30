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
        <clipPath id="SaintLucia_svg_clip1">
          <path d="M 7 3 L 29 3 L 29 23 L 7 23 Z M 7 3 " />
        </clipPath>
        <clipPath id="SaintLucia_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaintLucia_svg_clip3">
          <path d="M 9 6 L 27 6 L 27 23 L 9 23 Z M 9 6 " />
        </clipPath>
        <clipPath id="SaintLucia_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaintLucia_svg_clip5">
          <path d="M 7 14 L 29 14 L 29 23 L 7 23 Z M 7 14 " />
        </clipPath>
        <clipPath id="SaintLucia_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="SaintLucia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#SaintLucia_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#SaintLucia_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 7.925781 22.863281 L 18.179688 3.722656 L 28.007812 22.863281 Z M 7.925781 22.863281 "
            />
          </g>
        </g>
        <g clipPath="url(#SaintLucia_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#SaintLucia_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 9.511719 22.863281 L 18.144531 6.382812 L 26.421875 22.863281 Z M 9.511719 22.863281 "
            />
          </g>
        </g>
        <g clipPath="url(#SaintLucia_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#SaintLucia_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 7.925781 22.863281 L 18.144531 14.886719 L 28.007812 22.863281 Z M 7.925781 22.863281 "
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
