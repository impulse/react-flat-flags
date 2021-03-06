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
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <path
        d="M2.64 0h10.57v12.762H0V2.66C0 1.328 1.32 0 2.64 0zm0 0"
        fillRule="evenodd"
        fill="#4757a9"
      />
      <path
        d="M4.707 4.516c-.11.078-.172.035-.14-.098l.117-.5a.45.45 0 00-.125-.402l-.356-.317c-.098-.09-.074-.164.059-.168l.496-.015a.356.356 0 00.308-.246l.157-.543c.035-.133.105-.133.148-.004l.188.535a.379.379 0 00.32.238L6.387 3c.133 0 .156.078.058.168l-.386.344a.447.447 0 00-.114.402l.121.438c.04.132-.023.183-.136.109l-.41-.258a.383.383 0 00-.403.012zm0 0M8.77 5.902c-.11.078-.172.035-.141-.097l.117-.496a.454.454 0 00-.125-.407l-.351-.316c-.102-.09-.079-.164.054-.168l.496-.016a.352.352 0 00.309-.246l.156-.543c.04-.129.106-.133.149-.004l.187.536c.047.128.191.238.324.238l.504.004c.133.004.16.078.059.168l-.383.343a.443.443 0 00-.117.407l.125.433c.035.133-.028.184-.14.11l-.411-.258a.383.383 0 00-.402.012zm0 0M2.676 8.328c-.11.082-.172.035-.14-.098l.116-.496a.469.469 0 00-.125-.406l-.355-.312c-.102-.09-.074-.168.058-.172l.497-.012a.362.362 0 00.308-.246l.156-.543c.036-.133.102-.137.149-.004l.187.535a.364.364 0 00.32.235l.508.007c.13 0 .157.075.06.164l-.388.348a.444.444 0 00-.113.402l.121.438c.04.133-.023.18-.137.11l-.41-.262a.383.383 0 00-.402.015zm0 0M7.586 10.074c-.078.059-.125.024-.102-.07l.086-.356a.334.334 0 00-.093-.289l-.254-.222c-.07-.067-.051-.121.043-.121l.355-.012a.261.261 0 00.223-.176l.11-.387c.026-.093.077-.097.109-.004l.132.383c.032.09.137.168.23.168l.364.004c.094 0 .113.055.043.121l-.277.246a.32.32 0 00-.082.29l.09.308c.027.098-.02.133-.102.078l-.293-.183a.284.284 0 00-.29.007zm0 0"
        fill="#fff"
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
