import cx from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/components/sidebar.scss";
import { Button } from "../Button";
import { Icon, IconType } from "../Icon";
import { Overline, Subtitle2 } from "../Typography";

type NavbarLinkProps = {
  to: string;
  icon: IconType;
  label: string;
  isClosed: boolean;
  active: boolean;
};

type SidebarProps = {
  defaultActive?: number;
  isClosed: boolean;
  handleToggle: (state: boolean) => void;
};

const routes = [
  {
    path: "/panel/",
    icon: IconType.Dashboard,
    label: "Dashboard",
  },
  {
    path: "/panel/clients",
    icon: IconType.Person,
    label: "Clients",
  },
  {
    path: "/panel/agenda",
    icon: IconType.Agenda,
    label: "Marcações",
  },
  {
    path: "/panel/analytics",
    icon: IconType.Analytics,
    label: "Analytics",
  },
];

function getPath(path: string) {
  if (path.charAt(0) !== "/") {
    return "/" + path;
  }
  return path;
}

export function Sidebar({
  defaultActive = 0,
  isClosed,
  handleToggle,
}: SidebarProps) {
  const { user } = useAuth();
  const [activeIndex, setActiveIndex] = useState<Number>(defaultActive);

  let location = useLocation();

  const handleToggleSidebar = () => {
    handleToggle(!isClosed);
  };

  const changeActiveIndex = (newIndex: number) => {
    localStorage.setItem("sidebarLastActiveIndex", newIndex.toString());
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const activeItem = routes.findIndex(
      (item) => getPath(item.path) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <div className={cx("sidebar", { [`sidebar-closed`]: isClosed })}>
      <header>
        <Link to="/" className="color-primary-dark">
          JF{!isClosed && " Massagem"}
        </Link>
      </header>
      <main>
        <div className="user">
          <Link to={`/panel/profile/${user?.id}`}>
            <img src={user?.avatar} alt="User avatar" />
          </Link>

          {!isClosed && (
            <div className="user-info">
              <Link to={`/panel/profile/${user?.id}`}>
                <Subtitle2 className="user-info-name color-text-regular">
                  {user?.name}
                </Subtitle2>
              </Link>
              <Overline className="color-text-lighter">{user?.email}</Overline>
            </div>
          )}
        </div>

        <nav className="sidebar-navbar">
          {routes.map((route, routeIDx) => (
            <NavbarLink
              key={routeIDx}
              to={route.path}
              icon={route.icon}
              label={route.label}
              isClosed={isClosed}
              active={activeIndex === routeIDx}
            />
          ))}
        </nav>
      </main>
      <footer>
        <Button
          className="p-0"
          icon={<Icon type={IconType.ArrowLeftSquare} color="text-lighter" />}
          onClick={handleToggleSidebar}
        >
          {!isClosed && (
            <Subtitle2 className="color-text-light">Fechar Sidebar</Subtitle2>
          )}
        </Button>
      </footer>
    </div>
  );
}

const NavbarLink = ({ to, icon, label, isClosed, active }: NavbarLinkProps) => {
  return (
    <Link to={to} className={cx({ active: active })}>
      <Icon type={icon} />
      {!isClosed && <Subtitle2>{label}</Subtitle2>}
    </Link>
  );
};
