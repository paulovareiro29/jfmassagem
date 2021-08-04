import cx from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

import "../styles/components/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  isOutlined?: boolean;
  variant?: "" | "primary" | "success" | "danger" | "success" | "warning";
  size?: "small" | "large";
  label?: string;
  icon?: ReactNode;
  iconDirection?: "right" | "left";
  children?: ReactNode;
};

export function Button({
  fullWidth = false,
  isOutlined = false,
  variant = "",
  size,
  icon,
  iconDirection = "left",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cx("button", className, {
        [`button-${variant}`]: variant,
        [`button-${size}`]: size,
        [`button-outlined-${variant}`]: isOutlined,
        [`button-fullWidth`]: fullWidth,
        [`button-icon-${iconDirection}`]: iconDirection,
      })}
    >
      {icon}
      {children}
    </button>
  );
}
