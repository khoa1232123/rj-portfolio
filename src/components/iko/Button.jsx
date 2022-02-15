import PropTypes from "prop-types";
import React from "react";

const Button = ({
  bgColor,
  color,
  size,
  icon,
  className,
  onClick,
  children,
  iconRight,
  ...props
}) => {
  let classTxt = "btn";

  if (bgColor) {
    classTxt += " bg-" + bgColor;
  } else {
    classTxt += " bg-blue";
  }

  if (color) {
    classTxt += " color-" + color;
  }

  if (size) {
    classTxt += " btn-" + size;
  }
  if (className) {
    classTxt += " " + className;
  }

  return (
    <button className={classTxt} onClick={onClick} {...props}>
      {icon && !iconRight ? <i className={icon}></i> : null}
      <span className="btn__txt">{children}</span>
      {icon && iconRight ? <i className={icon}></i> : null}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  iconRight: PropTypes.bool,
  children: PropTypes.any,
};

export default Button;
