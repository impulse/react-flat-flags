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
        <clipPath id="Swaziland_svg_clip1">
          <path d="M 0 4 L 37 4 L 37 22 L 0 22 Z M 0 4 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip3">
          <path d="M 0 5 L 37 5 L 37 20 L 0 20 Z M 0 5 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip5">
          <path d="M 8 10 L 30 10 L 30 12 L 8 12 Z M 8 10 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip7">
          <path d="M 5 12 L 33 12 L 33 14 L 5 14 Z M 5 12 " />
        </clipPath>
        <clipPath id="Swaziland_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Swaziland_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Swaziland_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Swaziland_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 4.253906 L 36.988281 4.253906 L 36.988281 21.269531 L 0 21.269531 Z M 0 4.253906 "
            />
          </g>
        </g>
        <g clipPath="url(#Swaziland_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Swaziland_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 5.847656 L 36.988281 5.847656 L 36.988281 19.675781 L 0 19.675781 Z M 0 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#Swaziland_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Swaziland_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 8.453125 10.632812 L 29.589844 10.632812 L 29.589844 11.167969 L 8.453125 11.167969 Z M 8.453125 10.632812 "
            />
          </g>
        </g>
        <g clipPath="url(#Swaziland_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Swaziland_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,80.392157%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 5.8125 12.761719 L 32.761719 12.761719 L 32.761719 13.824219 L 5.8125 13.824219 Z M 5.8125 12.761719 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(26.27451%,28.627451%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 15.851562 7.976562 C 18.480469 7.976562 20.609375 10.117188 20.609375 12.761719 C 20.609375 15.40625 18.480469 17.546875 15.851562 17.546875 C 13.226562 17.546875 11.097656 15.40625 11.097656 12.761719 C 11.097656 10.117188 13.226562 7.976562 15.851562 7.976562 Z M 15.851562 7.976562 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 21.664062 7.976562 C 24.292969 7.976562 26.421875 10.117188 26.421875 12.761719 C 26.421875 15.40625 24.292969 17.546875 21.664062 17.546875 C 19.039062 17.546875 16.910156 15.40625 16.910156 12.761719 C 16.910156 10.117188 19.039062 7.976562 21.664062 7.976562 Z M 21.664062 7.976562 "
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