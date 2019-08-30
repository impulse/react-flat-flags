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
        <clipPath id="SaoTomeAndPrincipe_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip3">
          <path d="M 17 10 L 24 10 L 24 16 L 17 16 Z M 17 10 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip5">
          <path d="M 26 10 L 33 10 L 33 16 L 26 16 Z M 26 10 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip7">
          <path d="M 0 17 L 37 17 L 37 25 L 0 25 Z M 0 17 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip9">
          <path d="M 0 0 L 16 0 L 16 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="SaoTomeAndPrincipe_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="SaoTomeAndPrincipe_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#SaoTomeAndPrincipe_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#SaoTomeAndPrincipe_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#SaoTomeAndPrincipe_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#SaoTomeAndPrincipe_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 19.25 15.34375 C 18.980469 15.507812 18.828125 15.40625 18.914062 15.113281 L 19.234375 14.023438 C 19.320312 13.730469 19.195312 13.324219 18.953125 13.121094 L 18.105469 12.402344 C 17.867188 12.199219 17.933594 12.03125 18.261719 12.03125 L 19.476562 12.035156 C 19.804688 12.035156 20.152344 11.796875 20.253906 11.511719 L 20.671875 10.320312 C 20.773438 10.035156 20.941406 10.035156 21.042969 10.320312 L 21.464844 11.515625 C 21.566406 11.804688 21.914062 12.050781 22.242188 12.0625 L 23.480469 12.105469 C 23.808594 12.117188 23.867188 12.285156 23.617188 12.476562 L 22.648438 13.214844 C 22.394531 13.410156 22.257812 13.804688 22.339844 14.101562 L 22.609375 15.074219 C 22.691406 15.367188 22.535156 15.472656 22.261719 15.304688 L 21.273438 14.703125 C 21 14.539062 20.554688 14.539062 20.28125 14.707031 Z M 19.25 15.34375 "
            />
          </g>
        </g>
        <g clipPath="url(#SaoTomeAndPrincipe_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#SaoTomeAndPrincipe_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 27.707031 15.34375 C 27.433594 15.507812 27.28125 15.40625 27.371094 15.113281 L 27.691406 14.023438 C 27.777344 13.730469 27.648438 13.324219 27.410156 13.121094 L 26.5625 12.402344 C 26.320312 12.199219 26.390625 12.03125 26.714844 12.03125 L 27.933594 12.035156 C 28.257812 12.035156 28.609375 11.796875 28.710938 11.511719 L 29.128906 10.320312 C 29.230469 10.035156 29.394531 10.035156 29.496094 10.320312 L 29.917969 11.515625 C 30.019531 11.804688 30.371094 12.050781 30.695312 12.0625 L 31.9375 12.105469 C 32.261719 12.117188 32.324219 12.285156 32.070312 12.476562 L 31.101562 13.214844 C 30.851562 13.410156 30.710938 13.804688 30.792969 14.101562 L 31.066406 15.074219 C 31.148438 15.367188 30.992188 15.472656 30.71875 15.304688 L 29.726562 14.703125 C 29.453125 14.539062 29.007812 14.539062 28.738281 14.707031 Z M 27.707031 15.34375 "
            />
          </g>
        </g>
        <g clipPath="url(#SaoTomeAndPrincipe_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#SaoTomeAndPrincipe_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 17.015625 L 36.988281 17.015625 L 36.988281 25.523438 L 0 25.523438 Z M 0 17.015625 "
            />
          </g>
        </g>
        <g clipPath="url(#SaoTomeAndPrincipe_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#SaoTomeAndPrincipe_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 15.324219 12.761719 L 0 24.992188 Z M 0 0 "
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