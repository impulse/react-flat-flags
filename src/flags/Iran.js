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
        <clipPath id="Iran_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="Iran_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Iran_svg_clip3">
          <path d="M 0 17 L 37 17 L 37 25 L 0 25 Z M 0 17 " />
        </clipPath>
        <clipPath id="Iran_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Iran_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Iran_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Iran_svg_clip2)" clipRule="evenodd">
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
        <g clipPath="url(#Iran_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Iran_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 17.015625 L 36.988281 17.015625 L 36.988281 25.523438 L 0 25.523438 Z M 0 17.015625 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 21.089844 12.5625 L 20.882812 12.203125 C 20.820312 12.09375 20.769531 11.898438 20.765625 11.769531 L 20.765625 11.355469 C 20.765625 11.226562 20.675781 11.070312 20.5625 11.007812 L 20.21875 10.808594 C 20.109375 10.746094 19.964844 10.601562 19.902344 10.492188 L 19.703125 10.144531 C 19.636719 10.035156 19.480469 9.941406 19.355469 9.941406 L 18.945312 9.941406 C 18.816406 9.941406 18.621094 9.890625 18.511719 9.828125 L 18.15625 9.621094 C 18.046875 9.558594 17.863281 9.558594 17.753906 9.625 L 17.410156 9.824219 C 17.300781 9.890625 17.105469 9.941406 16.980469 9.941406 L 16.582031 9.941406 C 16.453125 9.941406 16.296875 10.035156 16.234375 10.144531 L 16.027344 10.503906 C 15.964844 10.613281 15.824219 10.757812 15.710938 10.820312 L 15.359375 11.027344 C 15.25 11.09375 15.160156 11.25 15.160156 11.378906 L 15.160156 11.78125 C 15.160156 11.90625 15.109375 12.105469 15.046875 12.214844 L 14.847656 12.5625 C 14.785156 12.671875 14.785156 12.855469 14.847656 12.964844 L 15.050781 13.324219 C 15.117188 13.433594 15.167969 13.628906 15.167969 13.757812 L 15.171875 14.171875 C 15.171875 14.296875 15.261719 14.457031 15.371094 14.519531 L 15.71875 14.71875 C 15.828125 14.78125 15.972656 14.925781 16.035156 15.035156 L 16.234375 15.382812 C 16.296875 15.492188 16.453125 15.585938 16.582031 15.585938 L 16.992188 15.585938 C 17.117188 15.585938 17.3125 15.636719 17.425781 15.699219 L 17.78125 15.90625 C 17.890625 15.96875 18.070312 15.96875 18.183594 15.902344 L 18.523438 15.703125 C 18.636719 15.636719 18.828125 15.585938 18.957031 15.585938 L 19.355469 15.585938 C 19.480469 15.585938 19.636719 15.492188 19.703125 15.382812 L 19.90625 15.023438 C 19.972656 14.914062 20.113281 14.769531 20.222656 14.707031 L 20.578125 14.496094 C 20.6875 14.433594 20.777344 14.273438 20.777344 14.148438 L 20.773438 13.746094 C 20.773438 13.617188 20.828125 13.421875 20.890625 13.3125 L 21.089844 12.964844 C 21.152344 12.855469 21.152344 12.671875 21.089844 12.5625 Z M 19.855469 12.886719 L 19.734375 13.09375 C 19.695312 13.164062 19.664062 13.28125 19.664062 13.359375 L 19.667969 13.601562 C 19.667969 13.675781 19.613281 13.773438 19.546875 13.8125 L 19.332031 13.9375 C 19.265625 13.976562 19.179688 14.0625 19.140625 14.128906 L 19.015625 14.347656 C 18.976562 14.414062 18.882812 14.46875 18.804688 14.46875 L 18.566406 14.46875 C 18.488281 14.46875 18.371094 14.5 18.304688 14.539062 L 18.097656 14.660156 C 18.03125 14.699219 17.921875 14.703125 17.855469 14.664062 L 17.640625 14.539062 C 17.574219 14.5 17.453125 14.46875 17.378906 14.46875 L 17.128906 14.46875 C 17.050781 14.46875 16.957031 14.414062 16.917969 14.347656 L 16.800781 14.136719 C 16.761719 14.070312 16.675781 13.984375 16.609375 13.945312 L 16.398438 13.824219 C 16.332031 13.785156 16.277344 13.691406 16.277344 13.613281 L 16.277344 13.363281 C 16.277344 13.289062 16.242188 13.167969 16.207031 13.101562 L 16.082031 12.886719 C 16.042969 12.816406 16.042969 12.707031 16.082031 12.640625 L 16.203125 12.433594 C 16.238281 12.363281 16.269531 12.246094 16.269531 12.167969 L 16.269531 11.925781 C 16.269531 11.847656 16.324219 11.753906 16.390625 11.714844 L 16.605469 11.589844 C 16.671875 11.550781 16.757812 11.464844 16.796875 11.394531 L 16.917969 11.179688 C 16.957031 11.113281 17.050781 11.058594 17.128906 11.058594 L 17.371094 11.058594 C 17.445312 11.058594 17.566406 11.027344 17.632812 10.988281 L 17.839844 10.863281 C 17.90625 10.824219 18.015625 10.824219 18.082031 10.863281 L 18.296875 10.988281 C 18.363281 11.027344 18.480469 11.058594 18.558594 11.058594 L 18.804688 11.058594 C 18.882812 11.058594 18.976562 11.113281 19.015625 11.179688 L 19.136719 11.390625 C 19.175781 11.457031 19.261719 11.542969 19.328125 11.582031 L 19.539062 11.703125 C 19.605469 11.738281 19.660156 11.835938 19.660156 11.914062 L 19.660156 12.164062 C 19.660156 12.238281 19.691406 12.359375 19.730469 12.425781 L 19.855469 12.640625 C 19.894531 12.707031 19.894531 12.816406 19.855469 12.886719 Z M 19.855469 12.886719 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 1.058594 6.378906 L 2.113281 6.378906 L 2.113281 7.445312 L 1.058594 7.445312 Z M 1.058594 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.171875 6.378906 L 4.226562 6.378906 L 4.226562 7.445312 L 3.171875 7.445312 Z M 3.171875 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 5.285156 6.378906 L 6.339844 6.378906 L 6.339844 7.445312 L 5.285156 7.445312 Z M 5.285156 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 7.398438 6.378906 L 8.453125 6.378906 L 8.453125 7.445312 L 7.398438 7.445312 Z M 7.398438 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 9.511719 6.378906 L 10.570312 6.378906 L 10.570312 7.445312 L 9.511719 7.445312 Z M 9.511719 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 11.625 6.378906 L 12.683594 6.378906 L 12.683594 7.445312 L 11.625 7.445312 Z M 11.625 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 13.738281 6.378906 L 14.796875 6.378906 L 14.796875 7.445312 L 13.738281 7.445312 Z M 13.738281 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 15.851562 6.378906 L 16.910156 6.378906 L 16.910156 7.445312 L 15.851562 7.445312 Z M 15.851562 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 17.964844 6.378906 L 19.023438 6.378906 L 19.023438 7.445312 L 17.964844 7.445312 Z M 17.964844 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 20.078125 6.378906 L 21.136719 6.378906 L 21.136719 7.445312 L 20.078125 7.445312 Z M 20.078125 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 22.195312 6.378906 L 23.25 6.378906 L 23.25 7.445312 L 22.195312 7.445312 Z M 22.195312 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 24.308594 6.378906 L 25.363281 6.378906 L 25.363281 7.445312 L 24.308594 7.445312 Z M 24.308594 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 26.421875 6.378906 L 27.476562 6.378906 L 27.476562 7.445312 L 26.421875 7.445312 Z M 26.421875 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 28.535156 6.378906 L 29.589844 6.378906 L 29.589844 7.445312 L 28.535156 7.445312 Z M 28.535156 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 30.648438 6.378906 L 31.707031 6.378906 L 31.707031 7.445312 L 30.648438 7.445312 Z M 30.648438 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 32.761719 6.378906 L 33.820312 6.378906 L 33.820312 7.445312 L 32.761719 7.445312 Z M 32.761719 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 34.875 6.378906 L 35.933594 6.378906 L 35.933594 7.445312 L 34.875 7.445312 Z M 34.875 6.378906 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 1.058594 18.078125 L 2.113281 18.078125 L 2.113281 19.140625 L 1.058594 19.140625 Z M 1.058594 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.171875 18.078125 L 4.226562 18.078125 L 4.226562 19.140625 L 3.171875 19.140625 Z M 3.171875 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 5.285156 18.078125 L 6.339844 18.078125 L 6.339844 19.140625 L 5.285156 19.140625 Z M 5.285156 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 7.398438 18.078125 L 8.453125 18.078125 L 8.453125 19.140625 L 7.398438 19.140625 Z M 7.398438 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 9.511719 18.078125 L 10.570312 18.078125 L 10.570312 19.140625 L 9.511719 19.140625 Z M 9.511719 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 11.625 18.078125 L 12.683594 18.078125 L 12.683594 19.140625 L 11.625 19.140625 Z M 11.625 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 13.738281 18.078125 L 14.796875 18.078125 L 14.796875 19.140625 L 13.738281 19.140625 Z M 13.738281 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 15.851562 18.078125 L 16.910156 18.078125 L 16.910156 19.140625 L 15.851562 19.140625 Z M 15.851562 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 17.964844 18.078125 L 19.023438 18.078125 L 19.023438 19.140625 L 17.964844 19.140625 Z M 17.964844 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 20.078125 18.078125 L 21.136719 18.078125 L 21.136719 19.140625 L 20.078125 19.140625 Z M 20.078125 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 22.195312 18.078125 L 23.25 18.078125 L 23.25 19.140625 L 22.195312 19.140625 Z M 22.195312 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 24.308594 18.078125 L 25.363281 18.078125 L 25.363281 19.140625 L 24.308594 19.140625 Z M 24.308594 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 26.421875 18.078125 L 27.476562 18.078125 L 27.476562 19.140625 L 26.421875 19.140625 Z M 26.421875 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 28.535156 18.078125 L 29.589844 18.078125 L 29.589844 19.140625 L 28.535156 19.140625 Z M 28.535156 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 30.648438 18.078125 L 31.707031 18.078125 L 31.707031 19.140625 L 30.648438 19.140625 Z M 30.648438 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 32.761719 18.078125 L 33.820312 18.078125 L 33.820312 19.140625 L 32.761719 19.140625 Z M 32.761719 18.078125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 34.875 18.078125 L 35.933594 18.078125 L 35.933594 19.140625 L 34.875 19.140625 Z M 34.875 18.078125 "
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