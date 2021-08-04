import { Subtitle2 } from "../Typography";

import "../../styles/components/useravatar.scss";
import { Link } from "react-router-dom";

type UserAvatarProps = {
  id: string;
  avatar?: string;
  name?: string;
};

const defaultAvatar =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const defaultName = "NULL";

export const UserAvatar = ({
  id,
  avatar = defaultAvatar,
  name = defaultName,
}: UserAvatarProps) => {
  return (
    <Link to={`/panel/profile/${id}`} className="user-avatar">
      <img src={avatar} alt="User avatar" />
      <Subtitle2 className="color-text-regular">{name}</Subtitle2>
    </Link>
  );
};
