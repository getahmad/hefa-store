import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProduct";
import CartCheckout from "./pages/CartCheckout";
import CategoryProduct from "./pages/CategoryProduct";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/checkout">
            <CartCheckout />
          </Route>
          <Route path="/detail/:idProduct">
            <DetailProduct />
          </Route>
          <Route path="/category/:category">
            <CategoryProduct />
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
