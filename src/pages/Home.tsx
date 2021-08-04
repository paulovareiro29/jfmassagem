import { Link } from "react-router-dom";
import { H1 } from "../components/Typography";

export function Home() {
  return (
    <>
      <H1>HOME</H1>
      <Link to="/panel/">Panel</Link>
    </>
  );
}
