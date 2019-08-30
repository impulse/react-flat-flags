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
        <clipPath id="Cambodia_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 3 L 0 3 Z M 0 0 " />
        </clipPath>
        <clipPath id="Cambodia_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Cambodia_svg_clip3">
          <path d="M 0 22 L 37 22 L 37 25 L 0 25 Z M 0 22 " />
        </clipPath>
        <clipPath id="Cambodia_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Cambodia_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(27.843137%,34.117647%,66.27451%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Cambodia_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Cambodia_svg_clip2)" clipRule="evenodd">
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
        <g clipPath="url(#Cambodia_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Cambodia_svg_clip4)" clipRule="evenodd">
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
            fillRule: "nonzero",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 27.960938 17.792969 L 27.960938 17.003906 L 27.476562 17.003906 L 27.476562 16.351562 L 27.03125 16.351562 L 27.03125 15.789062 L 26.703125 15.789062 L 26.703125 15.394531 L 26.398438 15.394531 C 26.355469 15.375 26.300781 15.332031 26.25 15.277344 L 26.160156 13.214844 C 26.222656 13.117188 26.304688 13.050781 26.390625 13.011719 L 26.390625 11.574219 C 26.351562 11.683594 26.105469 11.644531 26.105469 11.882812 L 26.105469 11.144531 L 25.886719 11.144531 L 25.886719 11.882812 L 25.820312 11.882812 L 25.820312 11.625 L 25.589844 11.625 L 25.589844 11.523438 L 25.820312 11.523438 L 25.820312 11.332031 L 25.589844 11.332031 L 25.589844 10.746094 C 25.589844 10.648438 25.570312 10.613281 25.496094 10.640625 C 25.398438 10.671875 25.324219 10.78125 25.265625 10.890625 C 25.207031 11 25.078125 10.953125 25.078125 10.878906 C 25.078125 10.570312 25.253906 10.660156 25.253906 10.394531 C 25.253906 10.300781 25.175781 10.335938 25.089844 10.398438 C 25.003906 10.460938 25 10.347656 25 10.246094 C 25 10.09375 25.113281 10.140625 25.113281 9.945312 C 25.113281 9.832031 25.015625 9.890625 24.953125 9.953125 C 24.890625 10.015625 24.851562 9.988281 24.851562 9.851562 C 24.851562 9.703125 25 9.699219 25 9.558594 C 25 9.476562 24.929688 9.5 24.882812 9.5625 C 24.839844 9.625 24.726562 9.613281 24.742188 9.542969 C 24.800781 9.300781 24.675781 9.054688 24.574219 8.972656 C 24.476562 8.886719 24.46875 8.835938 24.46875 8.761719 C 24.46875 8.691406 24.460938 8.652344 24.410156 8.652344 C 24.363281 8.652344 24.355469 8.691406 24.355469 8.761719 C 24.355469 8.835938 24.347656 8.886719 24.246094 8.972656 C 24.148438 9.054688 24.023438 9.300781 24.078125 9.542969 C 24.09375 9.613281 23.984375 9.625 23.9375 9.5625 C 23.894531 9.5 23.824219 9.476562 23.824219 9.558594 C 23.824219 9.699219 23.972656 9.703125 23.972656 9.851562 C 23.972656 9.988281 23.929688 10.015625 23.871094 9.953125 C 23.808594 9.890625 23.710938 9.832031 23.710938 9.945312 C 23.710938 10.140625 23.824219 10.09375 23.824219 10.246094 C 23.824219 10.347656 23.820312 10.460938 23.734375 10.398438 C 23.648438 10.335938 23.570312 10.300781 23.570312 10.394531 C 23.570312 10.660156 23.746094 10.570312 23.746094 10.878906 C 23.746094 10.953125 23.613281 11 23.558594 10.890625 C 23.5 10.78125 23.425781 10.671875 23.328125 10.640625 C 23.25 10.613281 23.234375 10.648438 23.234375 10.746094 L 23.234375 11.882812 L 22.859375 11.882812 L 22.859375 11.730469 L 22.71875 11.730469 L 22.71875 11.882812 L 20.816406 11.882812 L 20.816406 10.898438 C 20.816406 10.941406 20.574219 11.058594 20.574219 11.160156 L 20.230469 11.160156 L 20.230469 10.921875 C 20.300781 10.921875 20.371094 10.855469 20.382812 10.800781 C 20.390625 10.777344 20.375 10.765625 20.351562 10.78125 C 20.328125 10.796875 20.195312 10.855469 20.171875 10.8125 C 20.164062 10.792969 20.160156 10.789062 20.210938 10.75 C 20.25 10.722656 20.386719 10.628906 20.414062 10.609375 C 20.433594 10.597656 20.433594 10.574219 20.421875 10.554688 C 20.421875 10.550781 20.421875 10.550781 20.421875 10.550781 C 20.417969 10.542969 20.414062 10.539062 20.410156 10.53125 C 20.390625 10.503906 20.359375 10.484375 20.34375 10.5 C 20.296875 10.53125 20.226562 10.578125 20.175781 10.613281 C 20.140625 10.640625 20.089844 10.671875 20.070312 10.617188 C 20.046875 10.550781 19.980469 10.492188 19.898438 10.484375 L 19.898438 10.453125 C 19.898438 10.355469 19.882812 10.28125 20 10.1875 C 20.113281 10.089844 20.09375 10.023438 20.09375 9.929688 C 20.09375 9.839844 20.019531 9.777344 19.953125 9.90625 C 19.886719 10.035156 19.824219 9.984375 19.824219 9.945312 L 19.824219 9.777344 C 19.824219 9.703125 19.902344 9.566406 20.003906 9.484375 C 20.105469 9.402344 20.09375 9.363281 20.09375 9.328125 L 20.09375 9.15625 C 20.09375 8.996094 19.917969 9.085938 19.863281 9.203125 C 19.835938 9.265625 19.78125 9.214844 19.78125 9.164062 L 19.78125 8.988281 C 19.78125 8.886719 19.925781 8.847656 19.925781 8.738281 L 19.925781 8.519531 C 19.925781 8.347656 19.761719 8.453125 19.738281 8.507812 C 19.667969 8.660156 19.609375 8.597656 19.609375 8.515625 C 19.609375 8.445312 19.601562 8.378906 19.683594 8.292969 C 19.765625 8.203125 19.742188 8.089844 19.742188 8.03125 C 19.742188 7.839844 19.578125 7.960938 19.539062 8.039062 C 19.503906 8.113281 19.441406 8.132812 19.441406 8.019531 C 19.441406 7.882812 19.558594 7.804688 19.558594 7.699219 C 19.558594 7.578125 19.472656 7.59375 19.460938 7.625 C 19.433594 7.6875 19.320312 7.707031 19.320312 7.601562 C 19.320312 7.503906 19.375 7.496094 19.375 7.371094 C 19.484375 7.371094 19.480469 7.109375 19.375 7.109375 L 19.230469 7.109375 C 19.304688 7.109375 19.304688 7.078125 19.25 7.007812 C 19.195312 6.9375 19.195312 6.921875 19.097656 6.921875 C 19.171875 6.921875 19.171875 6.890625 19.117188 6.820312 C 19.0625 6.746094 19.0625 6.734375 18.960938 6.734375 L 18.90625 6.734375 C 18.90625 6.632812 18.929688 6.382812 18.757812 6.382812 C 18.585938 6.382812 18.609375 6.632812 18.609375 6.734375 L 18.554688 6.734375 C 18.453125 6.734375 18.457031 6.746094 18.402344 6.820312 C 18.34375 6.890625 18.34375 6.921875 18.421875 6.921875 C 18.320312 6.921875 18.324219 6.9375 18.265625 7.007812 C 18.210938 7.078125 18.210938 7.109375 18.289062 7.109375 L 18.144531 7.109375 C 18.039062 7.109375 18.035156 7.371094 18.144531 7.371094 C 18.144531 7.496094 18.195312 7.503906 18.195312 7.601562 C 18.195312 7.707031 18.082031 7.6875 18.054688 7.625 C 18.042969 7.59375 17.957031 7.578125 17.957031 7.699219 C 17.957031 7.804688 18.078125 7.882812 18.078125 8.019531 C 18.078125 8.132812 18.015625 8.113281 17.976562 8.039062 C 17.941406 7.960938 17.777344 7.839844 17.777344 8.03125 C 17.777344 8.089844 17.753906 8.203125 17.835938 8.292969 C 17.917969 8.378906 17.910156 8.445312 17.910156 8.515625 C 17.910156 8.597656 17.847656 8.660156 17.78125 8.507812 C 17.757812 8.453125 17.59375 8.347656 17.59375 8.519531 L 17.59375 8.738281 C 17.59375 8.847656 17.734375 8.886719 17.734375 8.988281 L 17.734375 9.164062 C 17.734375 9.214844 17.683594 9.265625 17.652344 9.203125 C 17.601562 9.085938 17.425781 8.996094 17.425781 9.15625 L 17.425781 9.328125 C 17.425781 9.363281 17.410156 9.402344 17.515625 9.484375 C 17.617188 9.566406 17.695312 9.703125 17.695312 9.777344 L 17.695312 9.945312 C 17.695312 9.984375 17.628906 10.035156 17.5625 9.90625 C 17.496094 9.777344 17.425781 9.839844 17.425781 9.929688 C 17.425781 10.023438 17.402344 10.089844 17.519531 10.1875 C 17.632812 10.28125 17.621094 10.355469 17.621094 10.453125 L 17.621094 10.484375 C 17.539062 10.492188 17.46875 10.550781 17.445312 10.617188 C 17.429688 10.671875 17.378906 10.640625 17.339844 10.613281 C 17.289062 10.578125 17.222656 10.53125 17.175781 10.5 C 17.15625 10.484375 17.125 10.503906 17.109375 10.53125 C 17.101562 10.539062 17.101562 10.542969 17.097656 10.550781 C 17.097656 10.550781 17.097656 10.550781 17.09375 10.554688 C 17.085938 10.574219 17.085938 10.597656 17.101562 10.609375 C 17.128906 10.628906 17.265625 10.722656 17.304688 10.75 C 17.359375 10.789062 17.355469 10.792969 17.34375 10.8125 C 17.324219 10.855469 17.191406 10.796875 17.167969 10.78125 C 17.140625 10.765625 17.128906 10.777344 17.132812 10.800781 C 17.148438 10.855469 17.21875 10.921875 17.289062 10.921875 L 17.289062 11.164062 L 16.925781 11.164062 C 16.925781 11.0625 16.699219 10.941406 16.699219 10.898438 L 16.699219 11.882812 L 14.800781 11.882812 L 14.800781 11.730469 L 14.660156 11.730469 L 14.660156 11.882812 L 14.285156 11.882812 L 14.285156 10.746094 C 14.285156 10.648438 14.265625 10.613281 14.191406 10.640625 C 14.09375 10.671875 14.019531 10.78125 13.960938 10.890625 C 13.902344 11 13.773438 10.953125 13.773438 10.878906 C 13.773438 10.570312 13.949219 10.660156 13.949219 10.394531 C 13.949219 10.300781 13.871094 10.335938 13.785156 10.398438 C 13.699219 10.460938 13.695312 10.347656 13.695312 10.246094 C 13.695312 10.09375 13.808594 10.140625 13.808594 9.945312 C 13.808594 9.832031 13.710938 9.890625 13.648438 9.953125 C 13.585938 10.015625 13.546875 9.988281 13.546875 9.851562 C 13.546875 9.703125 13.695312 9.699219 13.695312 9.558594 C 13.695312 9.476562 13.625 9.5 13.578125 9.5625 C 13.535156 9.625 13.421875 9.613281 13.4375 9.542969 C 13.496094 9.300781 13.371094 9.054688 13.269531 8.972656 C 13.171875 8.886719 13.164062 8.835938 13.164062 8.761719 C 13.164062 8.691406 13.15625 8.652344 13.105469 8.652344 C 13.058594 8.652344 13.050781 8.691406 13.050781 8.761719 C 13.050781 8.835938 13.039062 8.886719 12.941406 8.972656 C 12.84375 9.054688 12.71875 9.300781 12.773438 9.542969 C 12.789062 9.613281 12.679688 9.625 12.632812 9.5625 C 12.589844 9.5 12.519531 9.476562 12.519531 9.558594 C 12.519531 9.699219 12.667969 9.703125 12.667969 9.851562 C 12.667969 9.988281 12.625 10.015625 12.5625 9.953125 C 12.503906 9.890625 12.402344 9.832031 12.402344 9.945312 C 12.402344 10.140625 12.519531 10.09375 12.519531 10.246094 C 12.519531 10.347656 12.515625 10.460938 12.429688 10.398438 C 12.34375 10.335938 12.265625 10.300781 12.265625 10.394531 C 12.265625 10.660156 12.441406 10.570312 12.441406 10.878906 C 12.441406 10.953125 12.308594 11 12.253906 10.890625 C 12.195312 10.78125 12.121094 10.671875 12.023438 10.640625 C 11.945312 10.613281 11.925781 10.648438 11.925781 10.746094 L 11.925781 11.332031 L 11.699219 11.332031 L 11.699219 11.523438 L 11.925781 11.523438 L 11.925781 11.625 L 11.699219 11.625 L 11.699219 11.882812 L 11.632812 11.882812 L 11.632812 11.144531 L 11.414062 11.144531 L 11.414062 11.882812 C 11.414062 11.644531 11.167969 11.683594 11.125 11.574219 L 11.125 13.011719 C 11.214844 13.050781 11.296875 13.117188 11.355469 13.214844 L 11.265625 15.277344 C 11.214844 15.332031 11.160156 15.375 11.117188 15.394531 L 10.8125 15.394531 L 10.8125 15.789062 L 10.484375 15.789062 L 10.484375 16.351562 L 10.042969 16.351562 L 10.042969 17.003906 L 9.558594 17.003906 L 9.558594 17.792969 L 8.980469 17.792969 L 8.980469 18.609375 L 28.535156 18.609375 L 28.535156 17.792969 Z M 27.960938 17.792969 "
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