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
        <clipPath id="Honduras_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 9 L 0 9 Z M 0 0 " />
        </clipPath>
        <clipPath id="Honduras_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Honduras_svg_clip3">
          <path d="M 0 17 L 37 17 L 37 25 L 0 25 Z M 0 17 " />
        </clipPath>
        <clipPath id="Honduras_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Honduras_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Honduras_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Honduras_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(23.137255%,68.627451%,85.098039%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 8.507812 L 0 8.507812 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Honduras_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Honduras_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(23.137255%,68.627451%,85.098039%)",
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
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 18.074219 13.78125 C 17.953125 13.867188 17.882812 13.820312 17.917969 13.671875 L 18.050781 13.128906 C 18.085938 12.984375 18.023438 12.785156 17.910156 12.6875 L 17.515625 12.339844 C 17.402344 12.242188 17.433594 12.160156 17.578125 12.15625 L 18.132812 12.140625 C 18.277344 12.136719 18.433594 12.015625 18.476562 11.871094 L 18.648438 11.277344 C 18.691406 11.132812 18.765625 11.128906 18.816406 11.269531 L 19.023438 11.859375 C 19.074219 12 19.234375 12.117188 19.382812 12.117188 L 19.945312 12.125 C 20.09375 12.125 20.125 12.207031 20.011719 12.304688 L 19.585938 12.683594 C 19.472656 12.78125 19.414062 12.980469 19.457031 13.125 L 19.59375 13.605469 C 19.632812 13.75 19.566406 13.800781 19.4375 13.722656 L 18.980469 13.4375 C 18.855469 13.359375 18.65625 13.367188 18.535156 13.453125 Z M 18.074219 13.78125 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 12.261719 12.1875 C 12.140625 12.273438 12.070312 12.226562 12.105469 12.078125 L 12.238281 11.535156 C 12.273438 11.386719 12.207031 11.1875 12.097656 11.089844 L 11.703125 10.746094 C 11.589844 10.648438 11.621094 10.566406 11.765625 10.5625 L 12.320312 10.546875 C 12.464844 10.539062 12.621094 10.417969 12.664062 10.273438 L 12.835938 9.679688 C 12.878906 9.535156 12.953125 9.535156 13.003906 9.675781 L 13.210938 10.261719 C 13.261719 10.402344 13.421875 10.519531 13.570312 10.523438 L 14.132812 10.527344 C 14.28125 10.53125 14.3125 10.613281 14.199219 10.710938 L 13.773438 11.089844 C 13.660156 11.1875 13.601562 11.386719 13.644531 11.53125 L 13.78125 12.007812 C 13.820312 12.152344 13.753906 12.207031 13.625 12.128906 L 13.167969 11.84375 C 13.042969 11.765625 12.839844 11.773438 12.722656 11.859375 Z M 12.261719 12.1875 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 12.261719 15.910156 C 12.140625 15.996094 12.070312 15.945312 12.105469 15.800781 L 12.238281 15.257812 C 12.273438 15.109375 12.207031 14.910156 12.097656 14.8125 L 11.703125 14.46875 C 11.589844 14.371094 11.621094 14.289062 11.765625 14.28125 L 12.320312 14.265625 C 12.464844 14.261719 12.621094 14.140625 12.664062 13.996094 L 12.835938 13.402344 C 12.878906 13.257812 12.953125 13.257812 13.003906 13.398438 L 13.210938 13.984375 C 13.261719 14.125 13.421875 14.242188 13.570312 14.246094 L 14.132812 14.25 C 14.28125 14.25 14.3125 14.332031 14.199219 14.433594 L 13.773438 14.8125 C 13.660156 14.910156 13.601562 15.109375 13.644531 15.253906 L 13.78125 15.730469 C 13.820312 15.875 13.753906 15.929688 13.625 15.851562 L 13.167969 15.566406 C 13.042969 15.488281 12.839844 15.492188 12.722656 15.582031 Z M 12.261719 15.910156 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 23.886719 12.1875 C 23.765625 12.273438 23.695312 12.226562 23.730469 12.078125 L 23.863281 11.535156 C 23.898438 11.386719 23.835938 11.1875 23.722656 11.089844 L 23.328125 10.746094 C 23.214844 10.648438 23.246094 10.566406 23.394531 10.5625 L 23.945312 10.546875 C 24.09375 10.539062 24.246094 10.417969 24.289062 10.273438 L 24.460938 9.679688 C 24.503906 9.535156 24.578125 9.535156 24.628906 9.675781 L 24.835938 10.261719 C 24.886719 10.402344 25.050781 10.519531 25.195312 10.523438 L 25.757812 10.527344 C 25.90625 10.53125 25.9375 10.613281 25.824219 10.710938 L 25.398438 11.089844 C 25.285156 11.1875 25.226562 11.386719 25.269531 11.53125 L 25.40625 12.007812 C 25.445312 12.152344 25.378906 12.207031 25.25 12.128906 L 24.792969 11.84375 C 24.667969 11.765625 24.46875 11.773438 24.347656 11.859375 Z M 23.886719 12.1875 "
        />
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(23.137255%,68.627451%,85.098039%)",
            fillOpacity: 1,
          }}
          d="M 23.886719 15.910156 C 23.765625 15.996094 23.695312 15.945312 23.730469 15.800781 L 23.863281 15.257812 C 23.898438 15.109375 23.835938 14.910156 23.722656 14.8125 L 23.328125 14.46875 C 23.214844 14.371094 23.246094 14.289062 23.394531 14.28125 L 23.945312 14.265625 C 24.09375 14.261719 24.246094 14.140625 24.289062 13.996094 L 24.460938 13.402344 C 24.503906 13.257812 24.578125 13.257812 24.628906 13.398438 L 24.835938 13.984375 C 24.886719 14.125 25.050781 14.242188 25.195312 14.246094 L 25.757812 14.25 C 25.90625 14.25 25.9375 14.332031 25.824219 14.433594 L 25.398438 14.8125 C 25.285156 14.910156 25.226562 15.109375 25.269531 15.253906 L 25.40625 15.730469 C 25.445312 15.875 25.378906 15.929688 25.25 15.851562 L 24.792969 15.566406 C 24.667969 15.488281 24.46875 15.492188 24.347656 15.582031 Z M 23.886719 15.910156 "
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
