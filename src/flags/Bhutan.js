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
        <clipPath id="Bhutan_svg_clip1">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Bhutan_svg_clip2">
          <path d="M 5 3 L 31 3 L 31 22 L 5 22 Z M 5 3 " />
        </clipPath>
        <clipPath id="Bhutan_svg_clip3">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Bhutan_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,83.529412%,37.254902%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Bhutan_svg_clip1)" clipRule="evenodd">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(92.941176%,33.333333%,39.607843%)",
              fillOpacity: 1,
            }}
            d="M 0 24.992188 L 36.988281 0 L 36.988281 24.992188 Z M 0 24.992188 "
          />
        </g>
        <g clipPath="url(#Bhutan_svg_clip2)" clipRule="nonzero">
          <g clipPath="url(#Bhutan_svg_clip3)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(100%,100%,100%)",
                fillOpacity: 1,
              }}
              d="M 30.332031 6.429688 C 29.992188 6.46875 29.675781 6.28125 29.335938 6.324219 C 29.144531 6.339844 28.964844 6.414062 28.800781 6.511719 L 28.46875 6.585938 L 28.765625 6.289062 C 28.996094 6.109375 29.324219 6.148438 29.554688 5.964844 L 29.722656 5.558594 L 29.5 5.703125 C 29.328125 5.773438 29.148438 5.765625 28.96875 5.746094 L 28.503906 5.777344 L 28.183594 6.066406 L 28.308594 5.746094 L 28.515625 5.347656 L 28.539062 4.925781 L 28.695312 4.589844 C 28.8125 4.4375 28.992188 4.324219 29.054688 4.136719 L 28.96875 3.722656 L 28.992188 3.722656 L 28.964844 3.722656 L 28.894531 4.007812 C 28.785156 4.171875 28.609375 4.273438 28.457031 4.390625 L 28.253906 4.714844 L 28.183594 5.0625 L 27.953125 5.351562 C 27.808594 5.484375 27.6875 5.65625 27.683594 5.855469 L 27.589844 6.289062 L 27.308594 6.355469 L 26.84375 6.359375 C 26.664062 6.21875 26.4375 6.125 26.210938 6.140625 C 26.15625 5.972656 26.066406 5.8125 25.914062 5.714844 L 25.527344 5.671875 L 25.398438 5.746094 C 25.253906 5.636719 25.089844 5.546875 24.90625 5.523438 C 24.71875 5.492188 24.523438 5.53125 24.359375 5.617188 C 24.234375 5.460938 24.058594 5.355469 23.867188 5.296875 C 23.679688 5.226562 23.46875 5.210938 23.304688 5.085938 C 23.117188 4.894531 22.886719 4.753906 22.648438 4.640625 C 22.375 4.519531 22.082031 4.433594 21.78125 4.421875 L 21.4375 4.476562 L 21.191406 4.625 L 21.640625 4.628906 C 21.851562 4.65625 22.058594 4.730469 22.246094 4.835938 L 21.804688 4.738281 L 21.527344 4.867188 L 21.910156 4.921875 L 22.183594 5.082031 L 22.128906 5.265625 C 21.847656 5.074219 21.527344 4.917969 21.179688 4.882812 C 20.992188 4.863281 20.78125 4.894531 20.640625 5.042969 C 20.417969 4.988281 20.160156 4.972656 19.949219 5.089844 L 19.757812 5.390625 L 20.082031 5.273438 L 20.523438 5.296875 L 20.523438 5.339844 L 20.570312 5.3125 L 20.871094 5.421875 L 20.789062 5.492188 C 20.613281 5.460938 20.425781 5.445312 20.261719 5.523438 L 20.023438 5.765625 L 20.277344 5.675781 L 20.652344 5.6875 L 20.609375 6.007812 C 20.222656 5.867188 19.8125 5.761719 19.402344 5.789062 C 19.195312 5.804688 18.980469 5.855469 18.820312 5.996094 C 18.667969 6.121094 18.59375 6.34375 18.667969 6.53125 C 18.753906 6.722656 18.988281 6.851562 19.1875 6.800781 L 19.378906 6.554688 L 19.1875 6.59375 L 18.988281 6.464844 L 19.128906 6.265625 C 19.34375 6.199219 19.574219 6.242188 19.796875 6.273438 L 19.816406 6.71875 C 19.476562 6.746094 19.132812 6.859375 18.886719 7.101562 C 18.6875 7.113281 18.476562 7.097656 18.273438 7.132812 C 18.074219 7.160156 17.867188 7.210938 17.71875 7.355469 L 17.574219 7.738281 L 17.875 7.515625 C 18.15625 7.386719 18.480469 7.40625 18.785156 7.441406 C 19.007812 7.464844 19.234375 7.507812 19.460938 7.484375 L 19.429688 7.667969 C 19.25 7.78125 19.191406 8.023438 19.238281 8.21875 L 19.15625 8.582031 C 18.765625 8.722656 18.507812 9.070312 18.335938 9.429688 L 18.421875 9.484375 C 18.589844 9.3125 18.804688 9.179688 19.039062 9.117188 L 18.929688 9.464844 C 18.839844 9.605469 18.703125 9.71875 18.660156 9.886719 C 18.617188 10.070312 18.707031 10.25 18.796875 10.40625 L 18.820312 10.332031 C 18.839844 10.160156 18.917969 9.980469 19.0625 9.871094 L 19.519531 9.753906 C 19.503906 9.921875 19.5625 10.097656 19.699219 10.207031 L 19.949219 10.320312 C 19.882812 10.554688 19.992188 10.847656 20.226562 10.941406 L 20.105469 11.058594 C 19.933594 11.089844 19.753906 11.019531 19.601562 11.101562 L 19.410156 11.359375 L 19.652344 11.296875 L 19.972656 11.464844 C 20.125 11.566406 20.316406 11.589844 20.496094 11.5625 L 20.566406 11.882812 L 20.226562 11.910156 L 19.933594 11.800781 L 19.84375 11.636719 L 19.785156 11.914062 L 19.949219 12.117188 L 19.875 12.144531 L 19.628906 11.863281 C 19.464844 11.792969 19.28125 11.765625 19.109375 11.824219 C 19.0625 11.582031 18.765625 11.429688 18.542969 11.527344 L 18.480469 11.398438 L 18.269531 11.21875 L 18.097656 10.839844 L 17.773438 10.617188 L 17.75 10.414062 L 17.625 10.753906 L 17.753906 11.003906 L 17.777344 11.148438 L 17.390625 11.121094 L 17.332031 11.101562 L 16.851562 11.0625 L 16.351562 11.003906 C 16.265625 10.839844 16.117188 10.707031 15.933594 10.679688 L 15.523438 10.570312 L 15.382812 10.332031 L 15.34375 10.648438 L 15.609375 10.929688 L 15.664062 11.109375 L 15.230469 11.113281 C 15.066406 11.1875 14.980469 11.363281 14.980469 11.535156 L 14.492188 11.601562 L 14.367188 11.867188 C 14.1875 11.753906 13.929688 11.734375 13.753906 11.867188 L 13.398438 12.03125 L 13.128906 12.128906 L 13.070312 12.382812 L 13.277344 12.273438 L 13.535156 12.316406 L 13.777344 12.328125 L 13.6875 12.558594 L 13.675781 12.875 C 13.496094 12.917969 13.351562 13.066406 13.308594 13.246094 L 13.339844 13.65625 C 13.058594 13.753906 12.859375 13.988281 12.613281 14.148438 L 12.238281 14.269531 L 12.003906 14.21875 L 12.300781 14.492188 C 12.550781 14.546875 12.789062 14.417969 13.039062 14.378906 L 12.910156 14.832031 L 12.960938 15.082031 C 12.796875 15.195312 12.679688 15.375 12.65625 15.574219 C 12.46875 15.617188 12.339844 15.761719 12.183594 15.847656 L 11.898438 15.832031 L 12 16.011719 L 12.328125 16.179688 L 12.128906 16.320312 L 11.921875 16.296875 L 12.035156 16.617188 C 11.832031 16.640625 11.621094 16.710938 11.421875 16.628906 L 11.480469 16.945312 C 11.269531 16.882812 11.039062 16.871094 10.820312 16.898438 L 10.480469 17.058594 L 10.441406 17.15625 L 10.675781 17.175781 L 10.433594 17.183594 L 10.425781 17.164062 L 10.414062 17.179688 L 10.40625 17.195312 C 10.234375 17.210938 10.039062 17.261719 9.875 17.175781 C 9.671875 17.050781 9.441406 16.933594 9.195312 16.933594 L 8.832031 16.949219 L 8.523438 16.835938 C 8.335938 16.78125 8.117188 16.808594 7.980469 16.949219 L 7.910156 17.199219 L 8.171875 17.078125 C 8.367188 17.105469 8.5 17.265625 8.683594 17.320312 L 9.152344 17.308594 C 9.414062 17.308594 9.644531 17.441406 9.867188 17.558594 C 9.664062 17.5625 9.453125 17.589844 9.257812 17.671875 L 8.894531 17.839844 C 8.667969 17.914062 8.425781 17.910156 8.195312 17.949219 L 7.910156 18.09375 L 7.859375 18.308594 L 8.023438 18.230469 C 8.28125 18.164062 8.546875 18.3125 8.796875 18.214844 C 8.980469 18.121094 9.175781 18.050781 9.386719 18.0625 C 9.253906 18.21875 9.054688 18.304688 8.855469 18.332031 C 8.652344 18.363281 8.441406 18.382812 8.261719 18.492188 L 7.925781 18.730469 C 7.710938 18.828125 7.460938 18.789062 7.253906 18.902344 L 7.015625 19.109375 L 6.636719 19.367188 L 6.339844 19.421875 L 6.769531 19.570312 C 7.066406 19.527344 7.285156 19.296875 7.5625 19.195312 L 7.914062 19.160156 C 8.09375 19.136719 8.277344 19.09375 8.433594 18.996094 L 8.230469 19.132812 C 8.046875 19.207031 7.847656 19.238281 7.664062 19.308594 C 7.4375 19.390625 7.234375 19.519531 7.074219 19.691406 C 6.871094 19.890625 6.683594 20.117188 6.4375 20.265625 C 6.246094 20.378906 6.03125 20.441406 5.8125 20.457031 L 5.8125 20.46875 L 6.019531 20.621094 L 6.425781 20.546875 C 6.742188 20.421875 7.03125 20.242188 7.363281 20.160156 C 7.527344 20.117188 7.707031 20.144531 7.871094 20.097656 C 8.066406 20.050781 8.238281 19.945312 8.375 19.808594 L 8.679688 19.519531 L 9.023438 19.460938 C 9.269531 19.398438 9.40625 19.160156 9.613281 19.03125 L 9.914062 18.949219 L 10.097656 18.804688 L 9.84375 19.09375 L 9.511719 19.191406 C 9.65625 19.261719 9.824219 19.328125 9.988281 19.265625 C 10.25 19.175781 10.417969 18.929688 10.664062 18.808594 L 11.019531 18.722656 L 10.71875 18.957031 L 10.316406 19.179688 L 10.175781 19.550781 L 10.515625 19.316406 C 10.683594 19.234375 10.875 19.214844 11.058594 19.179688 C 11.234375 19.148438 11.402344 19.066406 11.511719 18.925781 C 11.640625 18.753906 11.789062 18.59375 11.96875 18.472656 C 12.140625 18.347656 12.351562 18.265625 12.484375 18.09375 L 12.644531 17.8125 L 12.992188 17.527344 C 13.203125 17.402344 13.425781 17.292969 13.621094 17.148438 L 13.871094 17.144531 L 14.1875 17.171875 L 14.136719 17.566406 L 13.769531 17.539062 L 13.566406 17.683594 L 13.746094 17.773438 L 13.910156 17.910156 L 13.6875 17.980469 L 13.511719 18.273438 L 13.277344 18.335938 L 13.464844 18.488281 C 13.636719 18.53125 13.808594 18.460938 13.960938 18.375 L 14.042969 18.570312 L 14.007812 18.726562 L 14.222656 18.675781 L 14.40625 18.324219 L 14.582031 18.582031 L 14.675781 18.769531 L 14.726562 18.992188 L 14.660156 19.234375 C 14.4375 19.273438 14.21875 19.375 14.085938 19.558594 C 13.960938 19.734375 13.933594 19.964844 13.984375 20.171875 L 14.046875 20.425781 C 14.117188 20.566406 14.25 20.683594 14.25 20.847656 C 14.261719 21.074219 14.351562 21.296875 14.507812 21.464844 C 14.671875 21.65625 14.917969 21.777344 15.171875 21.800781 L 15.359375 21.800781 C 15.613281 21.777344 15.855469 21.65625 16.023438 21.46875 C 16.195312 21.277344 16.289062 21.019531 16.277344 20.765625 L 16.421875 20.488281 C 16.503906 20.335938 16.488281 20.148438 16.433594 19.988281 C 16.449219 19.8125 16.394531 19.632812 16.285156 19.5 L 16.425781 19.449219 L 16.730469 19.601562 L 16.992188 19.921875 C 17.027344 20.132812 17.015625 20.347656 16.988281 20.554688 C 17.109375 20.414062 17.222656 20.253906 17.261719 20.070312 C 17.308594 19.863281 17.277344 19.640625 17.1875 19.453125 L 17.074219 19.042969 L 16.683594 18.855469 L 16.125 18.84375 L 15.832031 18.753906 C 15.851562 18.605469 15.792969 18.425781 15.632812 18.382812 C 15.628906 18.171875 15.480469 17.992188 15.28125 17.929688 C 15.191406 17.589844 15.265625 17.238281 15.347656 16.90625 L 15.746094 16.96875 L 16.15625 17.253906 L 16.445312 17.425781 C 16.632812 17.476562 16.835938 17.476562 17.019531 17.425781 L 17.300781 17.40625 C 17.542969 17.378906 17.773438 17.238281 17.917969 17.035156 C 18.074219 16.808594 18.117188 16.511719 18.027344 16.253906 C 17.972656 16.085938 17.863281 15.945312 17.730469 15.835938 L 17.6875 15.59375 C 17.605469 15.402344 17.394531 15.265625 17.1875 15.285156 L 17.015625 15.304688 L 16.609375 15.363281 L 16.347656 15.441406 L 16.347656 15.273438 L 16.554688 15.019531 L 16.871094 14.964844 L 17.105469 14.992188 L 16.828125 14.707031 C 16.640625 14.601562 16.417969 14.574219 16.210938 14.601562 C 16.039062 14.628906 15.890625 14.753906 15.832031 14.914062 L 15.765625 15.0625 C 15.632812 15.195312 15.59375 15.394531 15.609375 15.578125 L 15.441406 15.691406 L 15.265625 15.644531 L 15.097656 15.253906 C 15.082031 15.089844 15.175781 14.945312 15.203125 14.789062 L 15.222656 14.5625 L 15.261719 14.210938 L 15.421875 13.957031 L 15.726562 13.65625 C 15.90625 13.707031 16.121094 13.648438 16.222656 13.484375 C 16.382812 13.558594 16.589844 13.566406 16.742188 13.464844 L 16.871094 13.546875 C 17.035156 13.625 17.226562 13.605469 17.398438 13.578125 L 17.84375 13.707031 L 18.089844 13.835938 L 18.433594 13.898438 C 18.652344 14.023438 18.921875 14.085938 19.171875 14.039062 C 19.417969 14.222656 19.742188 14.242188 20.035156 14.230469 C 20.179688 14.316406 20.371094 14.351562 20.53125 14.285156 L 20.8125 14.363281 L 20.765625 14.652344 L 20.574219 14.683594 L 20.421875 14.734375 L 20.054688 14.628906 L 19.875 14.792969 L 20.109375 14.851562 L 20.371094 15.015625 L 20.148438 15.242188 L 19.964844 15.496094 L 19.722656 15.511719 L 20.105469 15.714844 C 20.316406 15.683594 20.417969 15.460938 20.613281 15.410156 L 20.675781 15.675781 L 20.589844 15.921875 L 20.816406 15.882812 L 21.0625 15.523438 C 21.101562 15.726562 21.316406 15.851562 21.511719 15.816406 C 21.59375 16.011719 21.824219 16.097656 22.027344 16.078125 C 22.160156 16.246094 22.414062 16.292969 22.613281 16.230469 C 22.746094 16.382812 22.964844 16.4375 23.164062 16.4375 L 23.492188 16.375 L 23.886719 16.574219 L 23.765625 16.855469 L 23.921875 17.21875 L 24.074219 17.644531 L 24.386719 17.816406 L 24.671875 18.101562 C 24.871094 18.1875 25.101562 18.203125 25.3125 18.152344 C 25.65625 18.3125 26.078125 18.289062 26.394531 18.082031 C 26.707031 17.886719 26.910156 17.523438 26.902344 17.15625 C 26.910156 16.902344 26.8125 16.652344 26.660156 16.457031 C 26.796875 16.207031 26.703125 15.882812 26.488281 15.707031 L 26.335938 15.519531 L 26.011719 15.453125 L 25.550781 15.460938 L 25.644531 15.175781 L 25.835938 15.097656 L 26.101562 14.890625 L 26.433594 14.9375 L 26.132812 14.667969 C 25.898438 14.5625 25.613281 14.582031 25.398438 14.714844 L 25.003906 14.820312 L 24.871094 15.132812 C 24.683594 15.105469 24.5 15.25 24.472656 15.4375 L 24.125 15.617188 C 24.003906 15.503906 23.832031 15.453125 23.667969 15.46875 L 23.496094 15.34375 L 23.125 15.304688 L 23.011719 15.28125 L 22.738281 15.273438 C 22.632812 15.132812 22.46875 15.035156 22.285156 15.042969 L 22.382812 14.597656 L 22.605469 14.335938 L 22.851562 13.910156 C 23.300781 13.335938 23.472656 12.585938 23.417969 11.867188 C 23.613281 11.71875 23.902344 11.628906 24.132812 11.753906 L 24.066406 12.136719 L 23.804688 12.269531 L 24.039062 12.371094 L 24.332031 12.285156 C 24.320312 12.472656 24.316406 12.679688 24.425781 12.839844 L 24.816406 13.066406 L 24.742188 12.84375 L 24.886719 12.433594 L 25.117188 12.757812 L 25.132812 12.996094 L 25.316406 12.679688 C 25.332031 12.445312 25.167969 12.253906 25.121094 12.035156 C 25.367188 12.039062 25.621094 12.023438 25.835938 11.886719 C 26.03125 11.757812 26.21875 11.613281 26.429688 11.503906 L 26.648438 11.449219 L 27.003906 11.742188 L 27.257812 11.824219 C 27.429688 11.921875 27.632812 11.917969 27.820312 11.929688 C 28.019531 11.933594 28.199219 11.832031 28.335938 11.699219 L 28.597656 11.660156 C 28.808594 11.574219 28.957031 11.386719 29.03125 11.179688 L 29.300781 10.921875 C 29.332031 10.746094 29.261719 10.542969 29.117188 10.441406 L 28.96875 10.109375 L 28.664062 9.914062 C 28.617188 9.574219 28.359375 9.269531 28.027344 9.175781 C 27.726562 9.082031 27.378906 9.15625 27.148438 9.367188 C 26.992188 9.5 26.902344 9.691406 26.859375 9.886719 C 26.726562 10.039062 26.625 10.207031 26.53125 10.382812 L 26.3125 10.351562 C 26.035156 10.359375 25.765625 10.460938 25.5 10.53125 C 25.339844 10.574219 25.175781 10.554688 25.011719 10.535156 C 24.796875 10.507812 24.578125 10.46875 24.371094 10.394531 L 24.089844 10.238281 L 23.675781 9.972656 C 23.460938 9.878906 23.238281 9.820312 23.019531 9.75 C 22.792969 9.667969 22.652344 9.457031 22.527344 9.265625 L 22.800781 9.300781 L 23 9.378906 C 23.179688 9.453125 23.328125 9.582031 23.464844 9.71875 L 23.804688 9.957031 L 24.226562 9.898438 L 23.894531 9.773438 C 23.707031 9.625 23.632812 9.378906 23.441406 9.230469 L 23.121094 9.085938 C 23.285156 8.882812 23.574219 8.789062 23.828125 8.855469 C 24.015625 8.910156 24.21875 8.9375 24.410156 8.882812 L 24.566406 8.832031 C 24.851562 8.871094 25.105469 9.035156 25.300781 9.246094 L 25.511719 9.492188 L 25.246094 9.796875 L 24.96875 9.84375 L 25.160156 9.957031 C 25.328125 10.039062 25.527344 10.003906 25.675781 9.898438 L 25.75 10.152344 L 26.089844 10.332031 L 25.964844 10.121094 L 26.136719 9.882812 L 26.285156 10.0625 L 26.25 10.269531 L 26.488281 10.167969 L 26.617188 9.828125 L 26.921875 9.539062 C 27.007812 9.375 27.011719 9.1875 27.019531 9.003906 C 27.433594 9.121094 27.886719 9.109375 28.304688 8.984375 C 28.59375 8.914062 28.902344 8.859375 29.207031 8.890625 L 29.617188 9.078125 L 29.664062 9.464844 L 29.863281 9.15625 L 29.683594 8.773438 C 29.492188 8.628906 29.242188 8.566406 29 8.542969 C 28.972656 8.300781 28.785156 8.050781 28.527344 8.054688 L 28.171875 8.238281 L 27.667969 8.246094 L 27.722656 7.964844 L 27.636719 7.6875 L 27.679688 7.515625 L 27.746094 7.34375 L 27.835938 7.230469 C 28.265625 7.179688 28.699219 7.050781 29.058594 6.804688 C 29.417969 6.652344 29.820312 6.746094 30.203125 6.695312 L 30.542969 6.554688 L 30.648438 6.355469 Z M 30.332031 6.429688 "
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