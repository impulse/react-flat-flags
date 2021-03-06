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
        d="M5.445 13.668c-.437.312-.691.137-.562-.387l.469-1.96c.125-.524-.102-1.243-.508-1.598L3.422 8.484c-.402-.351-.297-.652.234-.668l1.992-.054c.532-.016 1.094-.453 1.243-.973l.625-2.14c.152-.52.421-.528.605-.016l.75 2.11c.18.507.766.929 1.297.933l2.031.023c.535.004.64.301.239.653L10.89 9.715c-.403.355-.61 1.074-.461 1.594l.496 1.722c.148.52-.102.711-.559.43L8.72 12.434c-.453-.282-1.184-.258-1.621.054zm0 0M14.5 5.395c-.145.109-.23.05-.188-.133l.157-.68a.627.627 0 00-.172-.555l-.48-.43c-.137-.124-.102-.226.081-.234l.672-.02a.48.48 0 00.418-.335l.211-.742c.051-.18.145-.184.203-.008l.254.734c.063.176.258.32.442.324l.683.008c.18 0 .219.102.082.227l-.523.472a.596.596 0 00-.156.551l.168.602c.05.18-.036.246-.188.148l-.559-.355a.53.53 0 00-.546.015zm0 0M14.5 15.367c-.145.106-.23.047-.188-.137l.157-.68a.627.627 0 00-.172-.554l-.48-.43c-.137-.12-.102-.226.081-.23l.672-.024a.48.48 0 00.418-.335l.211-.743c.051-.18.145-.183.203-.007l.254.734a.509.509 0 00.442.324l.683.008c.18 0 .219.105.082.227l-.523.472a.603.603 0 00-.156.555l.168.598c.05.18-.036.246-.188.148l-.559-.355a.52.52 0 00-.546.019zm0 0M18.164 12.52c-.148.105-.23.046-.191-.137l.16-.68a.627.627 0 00-.172-.555l-.48-.43c-.137-.124-.102-.226.078-.234l.675-.02a.48.48 0 00.418-.335l.211-.742c.051-.18.145-.184.203-.008l.254.734c.063.176.258.32.438.325l.687.007c.18 0 .215.102.082.227l-.523.473a.6.6 0 00-.156.554l.168.598c.05.18-.036.246-.188.148l-.558-.355a.53.53 0 00-.547.015zm0 0M18.164 8.719c-.148.11-.23.047-.191-.133l.16-.68a.627.627 0 00-.172-.554l-.48-.434c-.137-.121-.102-.227.078-.23l.675-.02a.48.48 0 00.418-.336l.211-.746c.051-.18.145-.18.203-.004l.254.73c.063.18.258.325.438.329l.687.004c.18.003.215.105.082.23l-.523.473a.593.593 0 00-.156.55l.168.598c.05.184-.036.25-.188.152l-.558-.359a.52.52 0 00-.547.02zm0 0"
        fill="#f5bb41"
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
