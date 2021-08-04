import cx from "classnames";
import { ReactNode, TableHTMLAttributes } from "react";

import "../styles/components/table.scss";

type Column = {
  id: string;
  name?: string;
  onClick?: () => void;
  className?: string;
};

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  columns: Array<Column>;
  data: Array<Record<string, string | ReactNode>>;
  showHeader?: boolean;
};

export function Table({
  columns,
  data,
  showHeader = true,
  ...props
}: TableProps) {
  return (
    <table {...props}>
      {showHeader && (
        <thead>
          {columns.map((item) => (
            <th
              className={cx(item.className, {
                [`cursor-pointer`]: item.onClick,
              })}
              onClick={item.onClick}
            >
              {item.name}
            </th>
          ))}
        </thead>
      )}
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {columns.map((col) => {
                return <td>{item[col.id]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
