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
        <clipPath id="Suriname_svg_clip1">
          <path d="M 0 6 L 37 6 L 37 19 L 0 19 Z M 0 6 " />
        </clipPath>
        <clipPath id="Suriname_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Suriname_svg_clip3">
          <path d="M 0 9 L 37 9 L 37 17 L 0 17 Z M 0 9 " />
        </clipPath>
        <clipPath id="Suriname_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Suriname_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Suriname_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Suriname_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 0 6.914062 L 36.988281 6.914062 L 36.988281 18.609375 L 0 18.609375 Z M 0 6.914062 "
            />
          </g>
        </g>
        <g clipPath="url(#Suriname_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Suriname_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 9.039062 L 36.988281 9.039062 L 36.988281 16.484375 L 0 16.484375 Z M 0 9.039062 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 16.84375 15.851562 C 16.523438 16.066406 16.34375 15.933594 16.445312 15.554688 L 16.824219 14.136719 C 16.925781 13.757812 16.777344 13.230469 16.492188 12.964844 L 15.488281 12.03125 C 15.203125 11.765625 15.285156 11.546875 15.671875 11.546875 L 17.109375 11.550781 C 17.496094 11.550781 17.910156 11.242188 18.027344 10.867188 L 18.523438 9.324219 C 18.644531 8.949219 18.839844 8.949219 18.960938 9.324219 L 19.457031 10.875 C 19.578125 11.25 19.992188 11.570312 20.375 11.585938 L 21.84375 11.644531 C 22.226562 11.660156 22.296875 11.875 22 12.125 L 20.855469 13.085938 C 20.558594 13.335938 20.394531 13.855469 20.492188 14.234375 L 20.8125 15.5 C 20.910156 15.882812 20.726562 16.019531 20.402344 15.804688 L 19.230469 15.019531 C 18.910156 14.804688 18.382812 14.804688 18.0625 15.023438 Z M 16.84375 15.851562 "
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
