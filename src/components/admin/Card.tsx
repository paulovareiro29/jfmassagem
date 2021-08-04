import cx from "classnames";
import { ReactNode } from "react";

import "../../styles/components/card.scss";
import { Caption, H6 } from "../Typography";

type CardProps = {
  size?: "small";
  title?: string;
  subtitle?: string | ReactNode;
  noPadding?: boolean;
  children?: ReactNode;
  className?: string;
};

export function Card({
  size,
  title,
  subtitle,
  noPadding,
  children,
  className = "",
}: CardProps) {
  return (
    <div className={cx("card", { [`card-${size}`]: size }, className)}>
      {title && (
        <div className="card-title">
          <H6 className="color-text-dark">{title}</H6>
          {subtitle && (
            <Caption className="color-text-lighter">{subtitle}</Caption>
          )}
        </div>
      )}
      <div className={cx("card-wrapper", { [`p-0`]: noPadding })}>
        {children}
      </div>
    </div>
  );
}
