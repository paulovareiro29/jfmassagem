import { H4, Text } from "../Typography";

import "../../styles/components/pagetitle.scss";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="admin-page-title">
      <H4 className="color-text-dark">{title}</H4>
      {subtitle && <Text className="color-text-light">{subtitle}</Text>}
    </div>
  );
}
