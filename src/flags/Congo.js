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
        <clipPath id="Congo_svg_clip1">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Congo_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Congo_svg_clip1)" clipRule="evenodd">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(94.509804%,83.529412%,37.254902%)",
              fillOpacity: 1,
            }}
            d="M 39.996094 2.359375 L -1.753906 27.570312 L -5.015625 22.101562 L 36.734375 -3.113281 Z M 39.996094 2.359375 "
          />
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(92.941176%,33.333333%,39.607843%)",
              fillOpacity: 1,
            }}
            d="M 38.941406 1.296875 L -2.8125 26.507812 L -5.015625 23.695312 L 36.734375 -1.515625 Z M 38.941406 1.296875 "
          />
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 4.15625 8.9375 C 3.863281 9.144531 3.695312 9.027344 3.777344 8.675781 L 4.09375 7.371094 C 4.175781 7.019531 4.023438 6.539062 3.753906 6.304688 L 2.804688 5.480469 C 2.535156 5.246094 2.605469 5.042969 2.960938 5.035156 L 4.289062 4.996094 C 4.644531 4.984375 5.019531 4.695312 5.121094 4.347656 L 5.535156 2.921875 C 5.636719 2.578125 5.820312 2.570312 5.941406 2.910156 L 6.441406 4.316406 C 6.5625 4.65625 6.949219 4.9375 7.304688 4.941406 L 8.660156 4.953125 C 9.015625 4.957031 9.089844 5.15625 8.820312 5.390625 L 7.789062 6.300781 C 7.519531 6.539062 7.382812 7.015625 7.480469 7.359375 L 7.808594 8.507812 C 7.910156 8.855469 7.742188 8.984375 7.441406 8.796875 L 6.339844 8.113281 C 6.035156 7.925781 5.550781 7.941406 5.257812 8.148438 Z M 4.15625 8.9375 "
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
