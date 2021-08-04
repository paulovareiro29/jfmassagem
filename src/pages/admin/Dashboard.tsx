import { useHistory } from "react-router-dom";
import { AnalyticCard } from "../../components/admin/AnalyticCard";
import { Card } from "../../components/admin/Card";
import { PageTitle } from "../../components/admin/PageTitle";
import { UserAvatar } from "../../components/admin/UserAvatar";
import { Button } from "../../components/Button";
import { IconType } from "../../components/Icon";
import { Row } from "../../components/Layout";
import { Table } from "../../components/Table";
import { Subtitle2 } from "../../components/Typography";
import { useAuth } from "../../hooks/useAuth";

import "../../styles/pages/admin/dashboard.scss";

export function Dashboard() {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <div className="admin-page-dashboard">
      <PageTitle
        title="Dashboard"
        subtitle={`Bem-vindo de volta, ${user?.name}`}
      />

      <Row>
        <AnalyticCard
          title="Total Clientes"
          stats={186}
          icon={IconType.Person}
        />
        <AnalyticCard
          title="Lucro Semanal"
          stats={"258 €"}
          icon={IconType.Analytics}
        />
        <AnalyticCard
          title="Total Visitas"
          stats={756}
          icon={IconType.People}
        />
        <AnalyticCard
          title="Marcações Realizadas"
          stats={54}
          icon={IconType.CircleCheckmark}
        />
      </Row>

      <Row>
        <Card
          title="Melhores Clientes"
          subtitle="nº marcações"
          noPadding
          className="admin-dashboard-bestclients"
        >
          <Table
            showHeader={false}
            columns={[
              { id: "nome", name: "Nome" },
              {
                id: "marcacoes",
                name: "Nº Marcações",
                className: "text-right",
              },
            ]}
            data={[
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                marcacoes: (
                  <Subtitle2 className="color-text-lighter">2</Subtitle2>
                ),
              },
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                marcacoes: (
                  <Subtitle2 className="color-text-lighter">2</Subtitle2>
                ),
              },
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                marcacoes: (
                  <Subtitle2 className="color-text-lighter">2</Subtitle2>
                ),
              },
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                marcacoes: (
                  <Subtitle2 className="color-text-lighter">2</Subtitle2>
                ),
              },
            ]}
          />

          <Button
            size="large"
            variant="primary"
            onClick={() => {
              history.push("/panel/clients");
            }}
          >
            VISUALIZAR MAIS
          </Button>
        </Card>
        <Card
          title="Novos Clientes"
          noPadding
          className="admin-dashboard-newclients"
        >
          <Table
            showHeader={false}
            columns={[
              { id: "nome" },
              {
                id: "data",
                className: "text-right",
              },
            ]}
            data={[
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                data: (
                  <Subtitle2 className="color-text-lighter">
                    29-07-2021 16:58
                  </Subtitle2>
                ),
              },
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                data: (
                  <Subtitle2 className="color-text-lighter">
                    29-07-2021 16:58
                  </Subtitle2>
                ),
              },
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                data: (
                  <Subtitle2 className="color-text-lighter">
                    29-07-2021 16:58
                  </Subtitle2>
                ),
              },
              {
                nome: (
                  <UserAvatar
                    id={user?.id || "null"}
                    avatar={user?.avatar}
                    name={user?.name}
                  />
                ),
                data: (
                  <Subtitle2 className="color-text-lighter">
                    29-07-2021 16:58
                  </Subtitle2>
                ),
              },
            ]}
          />

          <Button
            size="large"
            variant="primary"
            onClick={() => {
              history.push("/panel/clients");
            }}
          >
            VISUALIZAR MAIS
          </Button>
        </Card>
      </Row>
    </div>
  );
}
