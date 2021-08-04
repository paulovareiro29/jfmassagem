import { useState } from "react";
import { Card } from "../../components/admin/Card";
import { PageTitle } from "../../components/admin/PageTitle";
import { Button } from "../../components/Button";
import { Row } from "../../components/Layout";

const currentDate = new Date();

const generateDates = () => {
  let dates: any = {
    today: null,
    yesterday: null,
    tomorrow: null,
  };

  let keys = Object.keys(dates);

  keys.map((date) => {
    let prev = null;
    if (prev === null && dates[date] === null) {
      dates[date] = new Date();
      prev = dates[date];
    } else if (prev !== null) {
      dates[date] = prev;
    }
  });

  return dates;
};

const parseDate = (milliseconds: number) => {
  const dateToCheck = new Date(milliseconds);
  const datesDict = generateDates();

  datesDict.today.setDate(currentDate.getDate());
  datesDict.yesterday.setDate(currentDate.getDate() - 1);
  datesDict.tomorrow.setDate(currentDate.getDate() + 1);

  if (
    dateToCheck.toLocaleDateString() === datesDict.today.toLocaleDateString()
  ) {
    return "Hoje";
  }

  if (
    dateToCheck.toLocaleDateString() ===
    datesDict.yesterday.toLocaleDateString()
  ) {
    return "Ontem";
  }

  if (
    dateToCheck.toLocaleDateString() === datesDict.tomorrow.toLocaleDateString()
  ) {
    return "Amanhã";
  }

  return dateToCheck.toLocaleDateString();
};

export function Agenda({}) {
  const [showingDate, setShowingDate] = useState(
    parseDate(currentDate.getTime())
  );

  const handleChangeDate = () => {
    console.log("open calendar");
  };

  return (
    <div className="admin-page-agenda">
      <PageTitle title="Agenda de marcações" />

      <Row>
        <Card
          title={showingDate}
          subtitle={
            <Button variant="primary" onClick={handleChangeDate}>
              Alterar data
            </Button>
          }
        ></Card>
      </Row>
    </div>
  );
}
