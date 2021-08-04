import { Card } from "../../components/admin/Card";
import { Button } from "../../components/Button";
import { H4, H5, Subtitle2 } from "../../components/Typography";
import { useAuth } from "../../hooks/useAuth";

import "../../styles/pages/admin/login.scss";

export function Login() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="login-page">
      <Card size="small">
        <H5 className="text-center color-primary-dark">
          <strong>JF Massagem</strong>
        </H5>
      </Card>
      <Card className="login-page-card">
        <H4 className="mb-16">Dashboard Login</H4>
        <Subtitle2 className="mb-4 color-text-lighter">
          Click to login with google
        </Subtitle2>
        <Button
          variant="primary"
          fullWidth
          size="large"
          onClick={signInWithGoogle}
        >
          LOGIN
        </Button>
      </Card>
    </div>
  );
}
