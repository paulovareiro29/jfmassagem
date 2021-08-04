import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Row = ({ children, ...props }: LayoutProps) => {
  return (
    <div className="row" {...props}>
      {children}
    </div>
  );
};
