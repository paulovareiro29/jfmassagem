import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Panel } from "./pages/admin/Panel";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/panel/" component={Panel} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
