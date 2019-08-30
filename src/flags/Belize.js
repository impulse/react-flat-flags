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
        <clipPath id="Belize_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 3 L 0 3 Z M 0 0 " />
        </clipPath>
        <clipPath id="Belize_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belize_svg_clip3">
          <path d="M 0 22 L 37 22 L 37 25 L 0 25 Z M 0 22 " />
        </clipPath>
        <clipPath id="Belize_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Belize_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Belize_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Belize_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 2.125 L 0 2.125 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Belize_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Belize_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 22.863281 L 36.988281 22.863281 L 36.988281 24.992188 L 0 24.992188 Z M 0 22.863281 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 18.757812 4.253906 C 23.28125 4.253906 26.949219 7.945312 26.949219 12.496094 C 26.949219 17.046875 23.28125 20.738281 18.757812 20.738281 C 14.234375 20.738281 10.570312 17.046875 10.570312 12.496094 C 10.570312 7.945312 14.234375 4.253906 18.757812 4.253906 Z M 18.757812 4.253906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 18.757812 5.316406 C 22.699219 5.316406 25.894531 8.53125 25.894531 12.496094 C 25.894531 16.460938 22.699219 19.675781 18.757812 19.675781 C 14.820312 19.675781 11.625 16.460938 11.625 12.496094 C 11.625 8.53125 14.820312 5.316406 18.757812 5.316406 Z M 18.757812 5.316406 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 18.757812 6.378906 C 22.113281 6.378906 24.835938 9.117188 24.835938 12.496094 C 24.835938 15.871094 22.113281 18.609375 18.757812 18.609375 C 15.402344 18.609375 12.683594 15.871094 12.683594 12.496094 C 12.683594 9.117188 15.402344 6.378906 18.757812 6.378906 Z M 18.757812 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 19.949219 10.171875 C 19.179688 10.171875 18.761719 9.570312 18.761719 9.570312 C 18.761719 9.570312 18.34375 10.171875 17.570312 10.171875 C 16.859375 10.171875 16.382812 9.671875 16.382812 9.671875 L 16.382812 12.925781 C 16.402344 15.066406 18.757812 15.953125 18.757812 15.953125 C 18.757812 15.953125 21.136719 15.066406 21.136719 12.925781 L 21.136719 9.671875 C 21.136719 9.671875 20.660156 10.171875 19.949219 10.171875 Z M 19.949219 10.171875 "
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