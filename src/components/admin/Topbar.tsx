import { useAuth } from "../../hooks/useAuth";
import "../../styles/components/topbar.scss";
import { Button } from "../Button";

export function Topbar() {
  const { signOut } = useAuth();

  return (
    <div className="topbar">
      <div></div>
      <div>
        <Button size="large" className="p-0 color-text-light" onClick={signOut}>
          Logout
        </Button>
      </div>
    </div>
  );
}
