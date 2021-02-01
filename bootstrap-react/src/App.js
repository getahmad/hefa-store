import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
