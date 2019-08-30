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
        <clipPath id="Maldives_svg_clip1">
          <path d="M 3 4 L 34 4 L 34 21 L 3 21 Z M 3 4 " />
        </clipPath>
        <clipPath id="Maldives_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Maldives_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Maldives_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Maldives_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 3.699219 4.253906 L 33.289062 4.253906 L 33.289062 20.738281 L 3.699219 20.738281 Z M 3.699219 4.253906 "
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
          d="M 22.042969 15.777344 C 22.039062 15.78125 22.03125 15.78125 22.027344 15.785156 C 21.847656 15.871094 21.65625 15.949219 21.457031 16.003906 C 19.539062 16.566406 17.546875 15.472656 17.003906 13.566406 C 16.898438 13.199219 16.855469 12.828125 16.867188 12.464844 C 16.871094 12.097656 16.933594 11.730469 17.054688 11.363281 C 17.683594 9.472656 19.726562 8.433594 21.617188 9.042969 C 21.8125 9.109375 22 9.1875 22.175781 9.28125 C 22.183594 9.28125 22.1875 9.285156 22.195312 9.285156 C 22.257812 9.308594 22.328125 9.273438 22.347656 9.207031 C 22.367188 9.15625 22.347656 9.101562 22.304688 9.070312 C 21.863281 8.6875 21.34375 8.382812 20.753906 8.195312 C 18.382812 7.425781 15.816406 8.730469 15.023438 11.109375 C 14.878906 11.546875 14.804688 11.996094 14.792969 12.4375 C 14.78125 12.875 14.835938 13.324219 14.964844 13.769531 C 15.644531 16.164062 18.148438 17.539062 20.554688 16.832031 C 21.152344 16.65625 21.6875 16.371094 22.144531 16 C 22.1875 15.96875 22.210938 15.914062 22.195312 15.863281 C 22.175781 15.796875 22.109375 15.757812 22.042969 15.777344 Z M 22.042969 15.777344 "
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