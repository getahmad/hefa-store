import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/detail">
            <DetailProduct />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
