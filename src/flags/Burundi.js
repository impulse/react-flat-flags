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
        <clipPath id="Burundi_svg_clip1">
          <path d="M 18 0 L 37 0 L 37 24 L 18 24 Z M 18 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip3">
          <path d="M 0 0 L 18 0 L 18 24 L 0 24 Z M 0 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip5">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip6">
          <path d="M 11 4 L 27 4 L 27 21 L 11 21 Z M 11 4 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip7">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip8">
          <path d="M 16 7 L 22 7 L 22 12 L 16 12 Z M 16 7 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip9">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip10">
          <path d="M 14 12 L 19 12 L 19 18 L 14 18 Z M 14 12 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip11">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip12">
          <path d="M 19 12 L 24 12 L 24 18 L 19 18 Z M 19 12 " />
        </clipPath>
        <clipPath id="Burundi_svg_clip13">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Burundi_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Burundi_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Burundi_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M 36.988281 0.53125 L 18.496094 12.496094 L 36.988281 23.394531 Z M 36.988281 0.53125 "
            />
          </g>
        </g>
        <g clipPath="url(#Burundi_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Burundi_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(31.764706%,75.686275%,38.039216%)",
                fillOpacity: 1,
              }}
              d="M -1.058594 0.53125 L 17.4375 12.496094 L -1.058594 23.394531 Z M -1.058594 0.53125 "
            />
          </g>
        </g>
        <g clipPath="url(#Burundi_svg_clip5)" clipRule="evenodd">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(96.078431%,96.862745%,97.647059%)",
              fillOpacity: 1,
            }}
            d="M -0.480469 26.011719 L -1.949219 23.789062 L 36.726562 -1.292969 L 38.199219 0.925781 Z M -0.480469 26.011719 "
          />
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fill: "rgb(96.078431%,96.862745%,97.647059%)",
              fillOpacity: 1,
            }}
            d="M 37.632812 26.59375 L 39.105469 24.386719 L 0.414062 -0.53125 L -1.058594 1.675781 Z M 37.632812 26.59375 "
          />
        </g>
        <g clipPath="url(#Burundi_svg_clip6)" clipRule="nonzero">
          <g clipPath="url(#Burundi_svg_clip7)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 18.757812 4.785156 C 22.992188 4.785156 26.421875 8.238281 26.421875 12.496094 C 26.421875 16.753906 22.992188 20.207031 18.757812 20.207031 C 14.527344 20.207031 11.097656 16.753906 11.097656 12.496094 C 11.097656 8.238281 14.527344 4.785156 18.757812 4.785156 Z M 18.757812 4.785156 "
            />
          </g>
        </g>
        <g clipPath="url(#Burundi_svg_clip8)" clipRule="nonzero">
          <g clipPath="url(#Burundi_svg_clip9)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 17.917969 11.628906 C 17.722656 11.769531 17.613281 11.691406 17.667969 11.457031 L 17.875 10.585938 C 17.933594 10.351562 17.832031 10.03125 17.652344 9.875 L 17.019531 9.324219 C 16.839844 9.167969 16.886719 9.035156 17.121094 9.027344 L 18.007812 9.003906 C 18.246094 8.996094 18.496094 8.800781 18.5625 8.570312 L 18.839844 7.621094 C 18.90625 7.390625 19.027344 7.386719 19.109375 7.613281 L 19.441406 8.550781 C 19.523438 8.777344 19.78125 8.964844 20.019531 8.964844 L 20.921875 8.976562 C 21.160156 8.976562 21.207031 9.109375 21.027344 9.265625 L 20.339844 9.871094 C 20.160156 10.03125 20.070312 10.347656 20.136719 10.578125 L 20.355469 11.34375 C 20.421875 11.574219 20.308594 11.664062 20.109375 11.535156 L 19.375 11.082031 C 19.171875 10.953125 18.847656 10.964844 18.652344 11.105469 Z M 17.917969 11.628906 "
            />
          </g>
        </g>
        <g clipPath="url(#Burundi_svg_clip10)" clipRule="nonzero">
          <g clipPath="url(#Burundi_svg_clip11)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 15.277344 16.945312 C 15.082031 17.085938 14.96875 17.007812 15.027344 16.773438 L 15.234375 15.902344 C 15.289062 15.667969 15.1875 15.351562 15.007812 15.191406 L 14.375 14.640625 C 14.195312 14.484375 14.242188 14.351562 14.480469 14.34375 L 15.367188 14.320312 C 15.601562 14.3125 15.851562 14.117188 15.917969 13.886719 L 16.195312 12.9375 C 16.265625 12.707031 16.386719 12.703125 16.464844 12.929688 L 16.800781 13.867188 C 16.878906 14.09375 17.140625 14.28125 17.375 14.28125 L 18.28125 14.292969 C 18.515625 14.292969 18.566406 14.425781 18.386719 14.582031 L 17.699219 15.191406 C 17.519531 15.347656 17.425781 15.664062 17.492188 15.898438 L 17.714844 16.664062 C 17.777344 16.894531 17.667969 16.980469 17.464844 16.855469 L 16.730469 16.398438 C 16.53125 16.273438 16.207031 16.28125 16.011719 16.421875 Z M 15.277344 16.945312 "
            />
          </g>
        </g>
        <g clipPath="url(#Burundi_svg_clip12)" clipRule="nonzero">
          <g clipPath="url(#Burundi_svg_clip13)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 20.558594 16.945312 C 20.367188 17.085938 20.253906 17.007812 20.308594 16.773438 L 20.519531 15.902344 C 20.574219 15.667969 20.472656 15.351562 20.292969 15.191406 L 19.660156 14.640625 C 19.480469 14.484375 19.527344 14.351562 19.765625 14.34375 L 20.648438 14.320312 C 20.886719 14.3125 21.136719 14.117188 21.203125 13.886719 L 21.480469 12.9375 C 21.546875 12.707031 21.667969 12.703125 21.75 12.929688 L 22.082031 13.867188 C 22.164062 14.09375 22.425781 14.28125 22.660156 14.28125 L 23.566406 14.292969 C 23.800781 14.292969 23.847656 14.425781 23.671875 14.582031 L 22.984375 15.191406 C 22.804688 15.347656 22.710938 15.664062 22.777344 15.898438 L 22.996094 16.664062 C 23.0625 16.894531 22.953125 16.980469 22.75 16.855469 L 22.015625 16.398438 C 21.8125 16.273438 21.488281 16.28125 21.296875 16.421875 Z M 20.558594 16.945312 "
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
