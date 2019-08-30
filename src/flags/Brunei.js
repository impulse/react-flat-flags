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
        <clipPath id="Brunei_svg_clip1">
          <path d="M 0 5 L 37 5 L 37 23 L 0 23 Z M 0 5 " />
        </clipPath>
        <clipPath id="Brunei_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Brunei_svg_clip3">
          <path d="M 0 2 L 37 2 L 37 19 L 0 19 Z M 0 2 " />
        </clipPath>
        <clipPath id="Brunei_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Brunei_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(100%,80.392157%,32.54902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Brunei_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Brunei_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M -1.738281 5.785156 L 38.726562 18.085938 L 37.507812 22.15625 L -2.960938 9.855469 Z M -1.738281 5.785156 "
            />
          </g>
        </g>
        <g clipPath="url(#Brunei_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Brunei_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M -0.515625 2.242188 L 39.949219 14.542969 L 38.730469 18.617188 L -1.738281 6.316406 Z M -0.515625 2.242188 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 22.835938 17.523438 C 22.917969 17.355469 22.957031 17.039062 22.84375 16.882812 C 22.773438 17.054688 22.558594 17.144531 22.394531 17.207031 C 22.371094 17.175781 22.339844 17.144531 22.316406 17.113281 C 22.183594 16.957031 22.191406 16.792969 22.152344 16.582031 C 22.136719 16.46875 22.042969 16.289062 21.859375 16.285156 C 22.4375 15.5625 22.78125 14.648438 22.78125 13.65625 C 22.78125 12.636719 22.421875 11.703125 21.820312 10.972656 C 21.886719 10.929688 21.933594 10.875 21.945312 10.792969 C 22.332031 10.769531 22.417969 10.664062 22.46875 10.488281 C 22.824219 10.3125 22.828125 10.085938 22.511719 10.125 C 21.523438 10.242188 21.070312 10.019531 20.375 9.792969 C 19.75 9.589844 19.171875 9.246094 18.664062 9.507812 L 18.652344 9.023438 C 18.726562 8.933594 18.777344 8.8125 18.777344 8.664062 C 18.777344 8.914062 18.910156 9.058594 19.046875 9.15625 C 19.167969 9.035156 19.253906 8.933594 19.253906 8.636719 C 19.253906 8.933594 19.363281 9.109375 19.589844 9.203125 C 19.738281 8.867188 19.585938 8.191406 19.304688 8 C 19.289062 7.980469 19.257812 7.96875 19.214844 7.953125 C 19.207031 7.949219 19.199219 7.949219 19.1875 7.945312 C 19.183594 7.941406 19.175781 7.941406 19.167969 7.9375 C 19.03125 7.898438 18.832031 7.882812 18.632812 7.875 L 18.625 7.546875 C 19.113281 7.566406 19.140625 7.921875 19.785156 7.925781 C 19.53125 7.839844 19.648438 7.554688 19.460938 7.402344 C 19.628906 7.390625 19.757812 7.234375 19.886719 7.097656 C 19.234375 7.09375 19.128906 6.613281 18.605469 6.589844 L 18.605469 6.492188 C 18.734375 6.445312 18.828125 6.324219 18.828125 6.179688 C 18.828125 6 18.679688 5.851562 18.496094 5.851562 C 18.3125 5.851562 18.160156 6 18.160156 6.179688 C 18.160156 6.324219 18.253906 6.445312 18.382812 6.492188 L 18.363281 7.875 C 18.160156 7.882812 17.960938 7.898438 17.824219 7.9375 C 17.816406 7.941406 17.808594 7.941406 17.800781 7.945312 C 17.792969 7.949219 17.785156 7.949219 17.777344 7.953125 C 17.734375 7.96875 17.703125 7.980469 17.683594 8 C 17.40625 8.191406 17.25 8.867188 17.402344 9.203125 C 17.625 9.109375 17.738281 8.933594 17.738281 8.636719 C 17.738281 8.933594 17.820312 9.035156 17.941406 9.15625 C 18.078125 9.058594 18.210938 8.914062 18.210938 8.664062 C 18.210938 8.820312 18.265625 8.941406 18.34375 9.035156 L 18.335938 9.511719 C 17.824219 9.242188 17.242188 9.589844 16.613281 9.792969 C 15.917969 10.019531 15.464844 10.242188 14.476562 10.125 C 14.160156 10.085938 14.164062 10.3125 14.519531 10.488281 C 14.570312 10.664062 14.660156 10.769531 15.042969 10.792969 C 15.054688 10.875 15.101562 10.929688 15.171875 10.972656 C 14.570312 11.703125 14.207031 12.636719 14.207031 13.65625 C 14.207031 14.648438 14.554688 15.5625 15.128906 16.285156 C 14.945312 16.289062 14.855469 16.46875 14.835938 16.582031 C 14.800781 16.792969 14.804688 16.957031 14.675781 17.113281 C 14.648438 17.144531 14.621094 17.175781 14.59375 17.207031 C 14.433594 17.144531 14.214844 17.054688 14.144531 16.882812 C 14.03125 17.039062 14.074219 17.355469 14.152344 17.523438 C 13.777344 17.496094 13.441406 17.679688 13.292969 18.066406 C 13.757812 17.941406 14.265625 17.867188 14.636719 18.144531 C 15.0625 18.460938 15.566406 18.824219 16.554688 18.710938 C 17.027344 18.960938 17.683594 19.140625 18.496094 19.140625 C 19.308594 19.140625 19.960938 18.960938 20.4375 18.710938 C 21.421875 18.824219 21.929688 18.460938 22.351562 18.144531 C 22.726562 17.867188 23.230469 17.941406 23.695312 18.066406 C 23.546875 17.679688 23.210938 17.496094 22.835938 17.523438 Z M 25.773438 11.035156 C 25.71875 11.039062 25.675781 11.066406 25.636719 11.109375 C 25.53125 11.011719 25.359375 11.066406 25.289062 11.175781 C 25.214844 11.148438 25.105469 11.171875 25.046875 11.246094 C 24.992188 11.152344 24.847656 11.183594 24.796875 11.300781 C 24.746094 11.429688 24.71875 11.621094 24.722656 11.757812 C 24.703125 11.796875 24.671875 11.847656 24.640625 11.898438 C 24.542969 11.933594 24.46875 12.042969 24.386719 12.179688 C 24.273438 12.382812 24.066406 12.523438 23.789062 12.710938 C 23.367188 12.996094 23.511719 13.457031 23.511719 13.859375 C 23.511719 14.121094 23.488281 14.8125 23.46875 15.492188 C 23.40625 15.492188 23.1875 15.652344 23.410156 15.828125 C 23.328125 15.871094 23.210938 16.007812 23.394531 16.152344 C 23.304688 16.207031 23.191406 16.355469 23.4375 16.511719 C 23.441406 16.511719 23.445312 16.515625 23.449219 16.515625 C 23.449219 16.59375 23.445312 16.667969 23.445312 16.730469 C 23.445312 16.820312 23.785156 16.898438 24.121094 16.898438 C 24.457031 16.902344 24.792969 16.832031 24.792969 16.730469 C 24.792969 16.675781 24.789062 16.601562 24.785156 16.515625 C 24.789062 16.511719 24.789062 16.511719 24.792969 16.511719 C 25.035156 16.351562 24.925781 16.203125 24.832031 16.152344 C 25.015625 16 24.902344 15.867188 24.816406 15.824219 C 25.035156 15.648438 24.828125 15.492188 24.757812 15.492188 C 24.757812 15.496094 24.753906 15.503906 24.753906 15.511719 C 24.730469 14.785156 24.707031 13.972656 24.710938 13.636719 C 24.898438 13.488281 25.222656 13.1875 25.375 13.019531 C 25.527344 12.851562 25.609375 12.746094 25.648438 12.546875 C 25.6875 12.347656 25.753906 12.210938 25.777344 12.117188 C 25.835938 11.914062 25.863281 11.765625 25.890625 11.347656 C 25.90625 11.097656 25.859375 11.03125 25.773438 11.035156 Z M 13.542969 16.730469 C 13.542969 16.667969 13.542969 16.59375 13.539062 16.515625 C 13.542969 16.515625 13.546875 16.511719 13.550781 16.511719 C 13.800781 16.355469 13.683594 16.207031 13.59375 16.152344 C 13.78125 16.007812 13.664062 15.871094 13.578125 15.828125 C 13.800781 15.652344 13.585938 15.492188 13.519531 15.492188 C 13.5 14.8125 13.480469 14.121094 13.480469 13.859375 C 13.480469 13.457031 13.625 12.996094 13.203125 12.710938 C 12.921875 12.523438 12.714844 12.382812 12.601562 12.179688 C 12.523438 12.042969 12.445312 11.933594 12.347656 11.898438 C 12.316406 11.847656 12.289062 11.796875 12.269531 11.757812 C 12.269531 11.621094 12.246094 11.429688 12.191406 11.300781 C 12.144531 11.183594 12 11.152344 11.941406 11.246094 C 11.882812 11.171875 11.773438 11.148438 11.699219 11.175781 C 11.628906 11.066406 11.457031 11.011719 11.351562 11.109375 C 11.316406 11.066406 11.269531 11.039062 11.214844 11.035156 C 11.128906 11.03125 11.082031 11.097656 11.097656 11.347656 C 11.125 11.765625 11.152344 11.914062 11.210938 12.117188 C 11.238281 12.210938 11.300781 12.347656 11.339844 12.546875 C 11.382812 12.746094 11.460938 12.851562 11.613281 13.019531 C 11.765625 13.1875 12.089844 13.488281 12.277344 13.636719 C 12.28125 13.972656 12.257812 14.785156 12.234375 15.511719 C 12.234375 15.503906 12.230469 15.496094 12.230469 15.492188 C 12.160156 15.492188 11.953125 15.648438 12.171875 15.824219 C 12.085938 15.867188 11.976562 16 12.15625 16.152344 C 12.066406 16.203125 11.957031 16.351562 12.199219 16.511719 C 12.199219 16.511719 12.203125 16.511719 12.203125 16.515625 C 12.199219 16.601562 12.199219 16.675781 12.195312 16.730469 C 12.195312 16.832031 12.53125 16.902344 12.867188 16.898438 C 13.203125 16.898438 13.542969 16.820312 13.542969 16.730469 Z M 18.300781 11.792969 C 18.230469 11.941406 18.191406 12.113281 18.203125 12.253906 C 18.164062 11.988281 17.929688 11.679688 17.636719 11.695312 C 18.074219 12.269531 17.773438 12.808594 17.875 13.328125 C 17.773438 13.246094 17.652344 13.195312 17.515625 13.199219 C 18.074219 13.894531 17.585938 14.539062 17.847656 15.164062 C 17.6875 15.085938 17.496094 15.15625 17.347656 15.105469 C 17.507812 15.363281 17.570312 15.59375 17.597656 15.804688 C 16.214844 15.417969 15.203125 14.160156 15.203125 12.667969 C 15.203125 12.082031 15.363281 11.535156 15.632812 11.058594 C 15.664062 11.058594 15.695312 11.054688 15.722656 11.054688 C 15.746094 11.355469 16.265625 11.292969 16.605469 11.242188 C 16.828125 11.441406 17.175781 11.445312 17.617188 11.261719 C 17.800781 11.332031 18.101562 11.28125 18.308594 11.125 Z M 19.375 11.261719 C 19.8125 11.445312 20.164062 11.441406 20.386719 11.242188 C 20.726562 11.292969 21.246094 11.355469 21.265625 11.054688 C 21.296875 11.054688 21.328125 11.058594 21.359375 11.058594 C 21.628906 11.535156 21.785156 12.082031 21.785156 12.667969 C 21.785156 14.160156 20.773438 15.417969 19.394531 15.804688 C 19.417969 15.59375 19.484375 15.363281 19.644531 15.105469 C 19.496094 15.15625 19.300781 15.085938 19.140625 15.164062 C 19.40625 14.539062 18.917969 13.894531 19.472656 13.199219 C 19.339844 13.195312 19.214844 13.246094 19.113281 13.328125 C 19.214844 12.808594 18.914062 12.269531 19.351562 11.695312 C 19.0625 11.679688 18.824219 11.988281 18.785156 12.253906 C 18.796875 12.125 18.765625 11.96875 18.707031 11.828125 L 18.695312 11.136719 C 18.902344 11.28125 19.191406 11.328125 19.375 11.261719 Z M 18.898438 15.515625 C 18.902344 15.511719 18.902344 15.511719 18.90625 15.511719 C 18.902344 15.519531 18.898438 15.523438 18.898438 15.53125 C 18.898438 15.523438 18.898438 15.519531 18.898438 15.515625 Z M 18.089844 15.53125 C 18.089844 15.523438 18.085938 15.519531 18.085938 15.511719 C 18.085938 15.511719 18.085938 15.511719 18.089844 15.515625 C 18.089844 15.519531 18.089844 15.523438 18.089844 15.53125 Z M 18.089844 15.53125 "
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
