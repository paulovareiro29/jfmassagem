import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../../components/admin/Card";
import { PageTitle } from "../../components/admin/PageTitle";
import { UserAvatar } from "../../components/admin/UserAvatar";
import { Icon, IconType } from "../../components/Icon";
import { Row } from "../../components/Layout";
import { Table } from "../../components/Table";
import { Text } from "../../components/Typography";

import "../../styles/pages/admin/clients.scss";

const columns = [
  { id: "name", name: "Nome" },
  { id: "contact", name: "Contacto" },
  {
    id: "last_activity",
    name: "Ultima atividade",
  },
  { id: "options", name: "Opções", className: "text-center" },
];

const users: UserData[] = [
  {
    name: "Paulo Vareiro",
    avatar: undefined,
    contact: "jfmassage@gmail.com",
    last_activity: "5 mins",
    isAdmin: true,
  },
  {
    name: "Paulo Vareiro",
    avatar: undefined,
    contact: "jfmassage@gmail.com",
    last_activity: "5 mins",
    isAdmin: false,
  },
];

type UserData = {
  name: string;
  avatar?: string;
  contact: string;
  last_activity: string;
  isAdmin: boolean;
};

export function Clients() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [usersList, setUsersList] = useState(users);
  const [parsedUsers, setParsedUsers] = useState<any>([]);

  const handleToggleAdmin = (user: UserData) => {
    user.isAdmin = !user.isAdmin;

    setUsersList([...usersList]);
  };

  useEffect(() => {
    setParsedUsers(
      usersList.map((user) => {
        return {
          name: <UserAvatar id="1" name={user.name} avatar={user.avatar} />,
          contact: <Text className="color-text-light">{user.contact}</Text>,
          last_activity: (
            <Text className="color-text-light">{user.last_activity}</Text>
          ),
          options: (
            <Icon
              onClick={() => {
                handleToggleAdmin(user);
              }}
              type={user.isAdmin ? IconType.PersonRemove : IconType.PersonAdd}
              color={user.isAdmin ? "danger-regular" : "success-regular"}
              className="cursor-pointer"
            />
          ),
        };
      })
    );
  }, [usersList, setParsedUsers]);

  useEffect(() => {
    searchValue !== "" || undefined
      ? setUsersList(
          users.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase().trim())
          )
        )
      : setUsersList(users);
  }, [searchValue]);

  return (
    <div className="admin-page-clients">
      <PageTitle title="Clientes" />

      <Row>
        <Card size="small" noPadding>
          <input
            type="text"
            placeholder="Procurar cliente..."
            value={searchValue}
            className="admin-page-clients-search-input"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </Card>
      </Row>

      <Row>
        <Card noPadding>
          <Table columns={columns} data={parsedUsers} />
        </Card>
      </Row>
    </div>
  );
}
