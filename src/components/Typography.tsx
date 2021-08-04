import cx from "classnames";
import { ReactNode } from "react";

type TypographyProps = {
  children?: ReactNode;
  className?: string;
};

export function H1({ children = "", className = "" }: TypographyProps) {
  return <h1 className={className}>{children}</h1>;
}

export function H2({ children = "", className = "" }: TypographyProps) {
  return <h2 className={className}>{children}</h2>;
}

export function H3({ children = "", className = "" }: TypographyProps) {
  return <h3 className={className}>{children}</h3>;
}

export function H4({ children = "", className = "" }: TypographyProps) {
  return <h4 className={className}>{children}</h4>;
}

export function H5({ children = "", className = "" }: TypographyProps) {
  return <h5 className={className}>{children}</h5>;
}

export function H6({ children = "", className = "" }: TypographyProps) {
  return <h6 className={className}>{children}</h6>;
}

export function Subtitle({ children = "", className = "" }: TypographyProps) {
  return <p className={cx("subtitle", className)}>{children}</p>;
}

export function Subtitle2({ children = "", className = "" }: TypographyProps) {
  return <p className={cx("subtitle-2", className)}>{children}</p>;
}

export function Text({ children = "", className = "" }: TypographyProps) {
  return <p className={cx("body", className)}>{children}</p>;
}

export function Text2({ children = "", className = "" }: TypographyProps) {
  return <p className={cx("body-2", className)}>{children}</p>;
}

export function Caption({ children = "", className = "" }: TypographyProps) {
  return <p className={cx("caption", className)}>{children}</p>;
}

export function Overline({ children = "", className = "" }: TypographyProps) {
  return <p className={cx("overline", className)}>{children}</p>;
}
