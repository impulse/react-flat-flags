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
        <clipPath id="Mexico_svg_prefix__a">
          <path d="M24 0h13v25H24zm0 0" />
        </clipPath>
        <clipPath id="Mexico_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Mexico_svg_prefix__c">
          <path d="M0 0h13v25H0zm0 0" />
        </clipPath>
        <clipPath id="Mexico_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <image
          id="Mexico_svg_prefix__e"
          width={446}
          height={446}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#f5f7f9"
      />
      <g clipPath="url(#Mexico_svg_prefix__a)">
        <g clipPath="url(#Mexico_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M24.836 0H37.52v24.992H24.836zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Mexico_svg_prefix__c)">
        <g clipPath="url(#Mexico_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M-.527 0h12.68v24.992H-.528zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <use
        xlinkHref="#Mexico_svg_prefix__e"
        transform="matrix(.019 0 0 .01911 14.259 8.5)"
      />
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
