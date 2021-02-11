import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProduct";
import CartCheckout from "./pages/CartCheckout";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/checkout">
            <CartCheckout />
          </Route>
          <Route path="/detail/:id">
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
