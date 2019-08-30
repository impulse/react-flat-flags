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
        <clipPath id="SolomonIslands_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 24 L 0 24 Z M 0 0 " />
        </clipPath>
        <clipPath id="SolomonIslands_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="SolomonIslands_svg_clip3">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="SolomonIslands_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(34.117647%,65.490196%,38.823529%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#SolomonIslands_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#SolomonIslands_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(27.843137%,34.117647%,66.27451%)",
                fillOpacity: 1,
              }}
              d="M 0 -0.53125 L 36.988281 -0.53125 L 14.796875 15.421875 L 0 23.394531 Z M 0 -0.53125 "
            />
          </g>
        </g>
        <g clipPath="url(#SolomonIslands_svg_clip3)" clipRule="evenodd">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(100%,80.392157%,32.54902%)",
              fillOpacity: 1,
            }}
            d="M 36.433594 -1.644531 L 38.984375 2.390625 L 1.085938 26.636719 L -1.464844 22.597656 Z M 36.433594 -1.644531 "
          />
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.855469 5.464844 C 3.703125 5.558594 3.625 5.492188 3.679688 5.324219 L 3.886719 4.691406 C 3.945312 4.523438 3.890625 4.28125 3.769531 4.15625 L 3.339844 3.71875 C 3.214844 3.59375 3.257812 3.496094 3.433594 3.503906 L 4.082031 3.53125 C 4.257812 3.539062 4.453125 3.410156 4.515625 3.242188 L 4.777344 2.554688 C 4.84375 2.386719 4.929688 2.390625 4.976562 2.5625 L 5.164062 3.273438 C 5.207031 3.441406 5.386719 3.59375 5.558594 3.609375 L 6.222656 3.660156 C 6.394531 3.675781 6.421875 3.773438 6.28125 3.882812 L 5.738281 4.292969 C 5.597656 4.402344 5.511719 4.628906 5.546875 4.804688 L 5.65625 5.378906 C 5.691406 5.554688 5.605469 5.613281 5.464844 5.507812 L 4.957031 5.136719 C 4.816406 5.03125 4.578125 5.023438 4.425781 5.113281 Z M 3.855469 5.464844 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 10.195312 5.464844 C 10.042969 5.558594 9.964844 5.492188 10.023438 5.324219 L 10.230469 4.691406 C 10.285156 4.523438 10.230469 4.28125 10.109375 4.15625 L 9.679688 3.71875 C 9.558594 3.59375 9.601562 3.496094 9.773438 3.503906 L 10.425781 3.53125 C 10.597656 3.539062 10.792969 3.410156 10.855469 3.242188 L 11.121094 2.554688 C 11.183594 2.386719 11.273438 2.390625 11.316406 2.5625 L 11.503906 3.273438 C 11.546875 3.441406 11.726562 3.59375 11.902344 3.609375 L 12.5625 3.660156 C 12.734375 3.675781 12.761719 3.773438 12.621094 3.882812 L 12.082031 4.292969 C 11.9375 4.402344 11.851562 4.628906 11.886719 4.804688 L 12 5.378906 C 12.035156 5.554688 11.945312 5.613281 11.804688 5.507812 L 11.296875 5.136719 C 11.15625 5.03125 10.917969 5.023438 10.765625 5.113281 Z M 10.195312 5.464844 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 10.195312 11.3125 C 10.042969 11.40625 9.964844 11.34375 10.023438 11.171875 L 10.230469 10.542969 C 10.285156 10.371094 10.230469 10.132812 10.109375 10.007812 L 9.679688 9.566406 C 9.558594 9.441406 9.601562 9.347656 9.773438 9.355469 L 10.425781 9.382812 C 10.597656 9.386719 10.792969 9.257812 10.855469 9.089844 L 11.121094 8.40625 C 11.183594 8.238281 11.273438 8.242188 11.316406 8.414062 L 11.503906 9.121094 C 11.546875 9.292969 11.726562 9.445312 11.902344 9.457031 L 12.5625 9.511719 C 12.734375 9.523438 12.761719 9.625 12.621094 9.730469 L 12.082031 10.144531 C 11.9375 10.25 11.851562 10.480469 11.886719 10.652344 L 12 11.230469 C 12.035156 11.402344 11.945312 11.460938 11.804688 11.359375 L 11.296875 10.984375 C 11.15625 10.882812 10.917969 10.871094 10.765625 10.964844 Z M 10.195312 11.3125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.855469 11.3125 C 3.703125 11.40625 3.625 11.34375 3.679688 11.171875 L 3.886719 10.542969 C 3.945312 10.371094 3.890625 10.132812 3.769531 10.007812 L 3.339844 9.566406 C 3.214844 9.441406 3.257812 9.347656 3.433594 9.355469 L 4.082031 9.382812 C 4.257812 9.386719 4.453125 9.257812 4.515625 9.089844 L 4.777344 8.40625 C 4.84375 8.238281 4.929688 8.242188 4.976562 8.414062 L 5.164062 9.121094 C 5.207031 9.292969 5.386719 9.445312 5.558594 9.457031 L 6.222656 9.511719 C 6.394531 9.523438 6.421875 9.625 6.28125 9.730469 L 5.738281 10.144531 C 5.597656 10.25 5.511719 10.480469 5.546875 10.652344 L 5.65625 11.230469 C 5.691406 11.402344 5.605469 11.460938 5.464844 11.359375 L 4.957031 10.984375 C 4.816406 10.882812 4.578125 10.871094 4.425781 10.964844 Z M 3.855469 11.3125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 7.023438 8.125 C 6.875 8.214844 6.796875 8.152344 6.851562 7.984375 L 7.058594 7.351562 C 7.113281 7.183594 7.058594 6.941406 6.9375 6.816406 L 6.507812 6.378906 C 6.386719 6.253906 6.429688 6.15625 6.601562 6.164062 L 7.253906 6.191406 C 7.429688 6.199219 7.621094 6.066406 7.6875 5.902344 L 7.949219 5.214844 C 8.011719 5.046875 8.101562 5.050781 8.148438 5.222656 L 8.332031 5.929688 C 8.378906 6.101562 8.558594 6.253906 8.730469 6.265625 L 9.390625 6.320312 C 9.566406 6.335938 9.59375 6.433594 9.453125 6.539062 L 8.910156 6.953125 C 8.769531 7.058594 8.679688 7.289062 8.714844 7.464844 L 8.828125 8.039062 C 8.863281 8.214844 8.777344 8.269531 8.636719 8.167969 L 8.125 7.792969 C 7.984375 7.691406 7.746094 7.679688 7.597656 7.773438 Z M 7.023438 8.125 "
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