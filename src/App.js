import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import Address from "./components/pages/Address";
import Add_Products from "./components/pages/Add_Products";
import Cart from "./components/pages/Cart";
import Featured_Products from "./components/pages/Featured _Products";
import Home from "./components/pages/Home";
import Latest_Products from "./components/pages/Latest_Product";
import NotFound from "./components/pages/NotFound";
import OrderHistory from "./components/pages/OrderHistory";
import Products from "./components/pages/Products";
import Single_Product from "./components/pages/Single_Product";
import Payment from "./components/pages/Payment";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/about/:name" component={About}></Route>
          <Route exact path="/account" component={Account}></Route>
          <Route exact path="/featured" component={Featured_Products}></Route>
          <Route exact path="/latest" component={Latest_Products}></Route>
          <Route exact path="/allproducts" component={Products}></Route>
          <Route exact path="/add_products" component={Add_Products}></Route>
          <Route exact path="/orders" component={OrderHistory}></Route>
          <Route exact path="/payment" component={Payment}></Route>
          <Route
            exact
            path="/single_product/:id"
            component={Single_Product}
          ></Route>
          <Route exact path="/address" component={Address}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
