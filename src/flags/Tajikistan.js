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
        <clipPath id="Tajikistan_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="Tajikistan_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Tajikistan_svg_clip3">
          <path d="M 0 16 L 37 16 L 37 25 L 0 25 Z M 0 16 " />
        </clipPath>
        <clipPath id="Tajikistan_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Tajikistan_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Tajikistan_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Tajikistan_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Tajikistan_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Tajikistan_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 16.484375 L 36.988281 16.484375 L 36.988281 24.992188 L 0 24.992188 Z M 0 16.484375 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 22.878906 15.914062 C 22.761719 15.992188 22.691406 15.945312 22.726562 15.8125 L 22.855469 15.308594 C 22.886719 15.171875 22.828125 14.984375 22.71875 14.894531 L 22.332031 14.574219 C 22.222656 14.484375 22.25 14.40625 22.394531 14.402344 L 22.933594 14.390625 C 23.078125 14.386719 23.230469 14.273438 23.269531 14.140625 L 23.4375 13.585938 C 23.480469 13.453125 23.554688 13.453125 23.601562 13.582031 L 23.804688 14.125 C 23.855469 14.257812 24.011719 14.367188 24.15625 14.367188 L 24.707031 14.375 C 24.847656 14.375 24.878906 14.449219 24.769531 14.542969 L 24.351562 14.894531 C 24.242188 14.984375 24.1875 15.167969 24.226562 15.304688 L 24.359375 15.746094 C 24.402344 15.882812 24.332031 15.929688 24.210938 15.859375 L 23.765625 15.59375 C 23.640625 15.519531 23.445312 15.527344 23.328125 15.605469 Z M 12.769531 15.914062 C 12.648438 15.992188 12.582031 15.945312 12.617188 15.8125 L 12.742188 15.308594 C 12.777344 15.171875 12.714844 14.984375 12.605469 14.894531 L 12.222656 14.574219 C 12.113281 14.484375 12.140625 14.40625 12.285156 14.402344 L 12.824219 14.390625 C 12.964844 14.386719 13.117188 14.273438 13.160156 14.140625 L 13.328125 13.585938 C 13.367188 13.453125 13.441406 13.453125 13.492188 13.582031 L 13.695312 14.125 C 13.742188 14.257812 13.902344 14.367188 14.042969 14.367188 L 14.59375 14.375 C 14.738281 14.375 14.765625 14.449219 14.65625 14.542969 L 14.238281 14.894531 C 14.132812 14.984375 14.074219 15.167969 14.117188 15.304688 L 14.25 15.746094 C 14.289062 15.882812 14.222656 15.929688 14.097656 15.859375 L 13.652344 15.59375 C 13.53125 15.519531 13.332031 15.527344 13.214844 15.605469 Z M 20.886719 13.445312 C 20.765625 13.527344 20.699219 13.480469 20.734375 13.34375 L 20.859375 12.839844 C 20.894531 12.707031 20.832031 12.519531 20.722656 12.429688 L 20.339844 12.109375 C 20.230469 12.019531 20.257812 11.941406 20.402344 11.9375 L 20.941406 11.921875 C 21.082031 11.917969 21.234375 11.804688 21.277344 11.671875 L 21.445312 11.121094 C 21.484375 10.988281 21.558594 10.984375 21.609375 11.117188 L 21.8125 11.660156 C 21.859375 11.792969 22.019531 11.898438 22.160156 11.902344 L 22.710938 11.90625 C 22.855469 11.90625 22.882812 11.984375 22.777344 12.074219 L 22.359375 12.425781 C 22.25 12.519531 22.191406 12.703125 22.234375 12.835938 L 22.367188 13.28125 C 22.40625 13.414062 22.339844 13.464844 22.214844 13.390625 L 21.769531 13.128906 C 21.648438 13.054688 21.449219 13.0625 21.332031 13.140625 Z M 14.597656 13.445312 C 14.480469 13.527344 14.410156 13.480469 14.445312 13.34375 L 14.574219 12.839844 C 14.605469 12.707031 14.546875 12.519531 14.4375 12.429688 L 14.050781 12.109375 C 13.941406 12.019531 13.96875 11.941406 14.113281 11.9375 L 14.652344 11.921875 C 14.796875 11.917969 14.949219 11.804688 14.988281 11.671875 L 15.15625 11.121094 C 15.199219 10.988281 15.273438 10.984375 15.320312 11.117188 L 15.523438 11.660156 C 15.574219 11.792969 15.730469 11.898438 15.875 11.902344 L 16.425781 11.90625 C 16.566406 11.90625 16.597656 11.984375 16.488281 12.074219 L 16.070312 12.425781 C 15.960938 12.519531 15.90625 12.703125 15.945312 12.835938 L 16.078125 13.28125 C 16.121094 13.414062 16.050781 13.464844 15.929688 13.390625 L 15.484375 13.128906 C 15.359375 13.054688 15.164062 13.0625 15.046875 13.140625 Z M 17.71875 11.464844 C 17.601562 11.546875 17.53125 11.5 17.566406 11.367188 L 17.691406 10.859375 C 17.726562 10.726562 17.664062 10.539062 17.554688 10.449219 L 17.171875 10.128906 C 17.0625 10.039062 17.089844 9.960938 17.234375 9.957031 L 17.773438 9.941406 C 17.917969 9.9375 18.066406 9.828125 18.109375 9.691406 L 18.277344 9.140625 C 18.320312 9.007812 18.390625 9.003906 18.441406 9.136719 L 18.644531 9.679688 C 18.691406 9.8125 18.851562 9.921875 18.996094 9.921875 L 19.542969 9.925781 C 19.6875 9.929688 19.71875 10.003906 19.609375 10.097656 L 19.191406 10.445312 C 19.082031 10.539062 19.027344 10.722656 19.066406 10.855469 L 19.199219 11.300781 C 19.238281 11.433594 19.171875 11.484375 19.050781 11.414062 L 18.601562 11.148438 C 18.480469 11.074219 18.28125 11.082031 18.164062 11.160156 Z M 17.71875 11.464844 "
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
