import { Icon, IconType } from "../Icon";
import { Caption, H4 } from "../Typography";
import { Card } from "./Card";

import "../../styles/components/analyticcard.scss";

type AnalyticCardProps = {
  title: string;
  stats?: string | number;
  icon: IconType;
};

export function AnalyticCard({ title, stats = 0, icon }: AnalyticCardProps) {
  return (
    <Card size="small" className="analytic-card">
      <div>
        <H4 className="color-text-dark">
          <strong>{stats}</strong>
        </H4>
        <Caption className="color-text-light">{title}</Caption>
      </div>
      <div>
        <Icon type={icon} size={48} color="primary-dark" />
      </div>
    </Card>
  );
}
