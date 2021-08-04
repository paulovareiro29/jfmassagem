import cx from "classnames";
import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar";
import { Topbar } from "../../components/admin/Topbar";
import { useAuth } from "../../hooks/useAuth";
import { Agenda } from "./Agenda";
import { Clients } from "./Clients";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

const Authenticated = () => {
  const { url } = useRouteMatch();
  const [sidebarIsClosed, setSidebarIsClosed] = useState(false);

  return (
    <>
      {/* <Switch>
        <Route exact path={url} component={Dashboard} />
        <Route path={`${url}/clients`} component={AA} />
      </Switch> */}
      <Sidebar isClosed={sidebarIsClosed} handleToggle={setSidebarIsClosed} />
      <div
        className={cx("admin-panel-content", {
          sidebarIsClosed: sidebarIsClosed,
        })}
      >
        <Topbar />
        <div className="admin-panel-grid">
          <Switch>
            <Route exact path={url} component={Dashboard} />
            <Route path={`${url}/clients`} component={Clients} />
            <Route path={`${url}/agenda`} component={Agenda} />
          </Switch>{" "}
        </div>
      </div>
    </>
  );
};

export function Panel() {
  const { user } = useAuth();

  return (
    <div className="admin-panel">
      <div className="admin-panel-wrapper">
        {user ? <Authenticated /> : <Login />}
      </div>
    </div>
  );
}
