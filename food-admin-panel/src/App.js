import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./screen/SignIn";
import Dashboard from "./screen/Dashboard";

function App() {
  return (
    <>
      <Switch>
        <Route path="auth/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
