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
        <clipPath id="Uganda_svg_clip1">
          <path d="M 0 0 L 37 0 L 37 5 L 0 5 Z M 0 0 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip3">
          <path d="M 0 4 L 37 4 L 37 9 L 0 9 Z M 0 4 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip5">
          <path d="M 0 12 L 37 12 L 37 18 L 0 18 Z M 0 12 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip7">
          <path d="M 0 17 L 37 17 L 37 22 L 0 22 Z M 0 17 " />
        </clipPath>
        <clipPath id="Uganda_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Uganda_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Uganda_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Uganda_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 36.988281 0 L 36.988281 4.253906 L 0 4.253906 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Uganda_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Uganda_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,73.333333%,25.490196%)",
                fillOpacity: 1,
              }}
              d="M 0 4.253906 L 36.988281 4.253906 L 36.988281 8.507812 L 0 8.507812 Z M 0 4.253906 "
            />
          </g>
        </g>
        <g clipPath="url(#Uganda_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Uganda_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(26.27451%,28.627451%,32.54902%)",
                fillOpacity: 1,
              }}
              d="M 0 12.761719 L 36.988281 12.761719 L 36.988281 17.015625 L 0 17.015625 Z M 0 12.761719 "
            />
          </g>
        </g>
        <g clipPath="url(#Uganda_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Uganda_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,73.333333%,25.490196%)",
                fillOpacity: 1,
              }}
              d="M 0 17.015625 L 36.988281 17.015625 L 36.988281 21.269531 L 0 21.269531 Z M 0 17.015625 "
            />
          </g>
        </g>
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(96.078431%,96.862745%,97.647059%)",
            fillOpacity: 1,
          }}
          d="M 17.964844 8.507812 C 20.300781 8.507812 22.195312 10.414062 22.195312 12.761719 C 22.195312 15.109375 20.300781 17.015625 17.964844 17.015625 C 15.632812 17.015625 13.738281 15.109375 13.738281 12.761719 C 13.738281 10.414062 15.632812 8.507812 17.964844 8.507812 Z M 17.964844 8.507812 "
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
