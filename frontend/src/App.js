import "./App.css";
import React from 'react'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { Switch, Route } from "react-router-dom";

import HomePage from "../src/View/Authen/Home";
import LoginPage from "../src/View/Authen/Login";
import RegisterPage from "../src/View/Authen/Register";
import ProductPage from "../src/View/Product/Product";
import PromotionPage from "../src/View/Product/Promotions";
import CustomerPage from "../src/View/Customer/Customer";
import OrderPage from "../src/View/Customer/Orders";
import DetailPage from "../src/View/Customer/Detail";
import CartPage from "../src/View/Purchase/Cart";
import CheckoutPage from "../src/View/Purchase/Checkout";
import PaymentPage from "../src/View/Purchase/Payment";
import DasboardPage from "../src/View/Admin/DasboardInfo";
import AdminOrderPage from "../src/View/Admin/OrderInfo";
import AdminProductPage from "../src/View/Admin/ProductInfo";
import AdminPromotionPage from "../src/View/Admin/PromotionInfo";
import AdminAddPromotionPage from "./View/Admin/AddPromotion";
import AdminAddProductPage from "./View/Admin/AddProduct";
import AdminUpdateProductPage from "../src/View/Admin/UpdateProduct";
import AdminUpdatePromotionPage from "../src/View/Admin/UpdatePromotion";
import AdminDetailOrderPage from "../src/View/Admin/DetailOrder";

import { useSession } from "../../frontend/src/Contexts/SessionContext";


// const Loading = () => <div>Loading...</div>;

// const Loadable = (opts) =>
//   L({
//     loading: Loading,
//     ...opts,
//   });

function App() {
  const { user } = useSession();
  return (
    <div className="App">
      <Navbar />
      <Switch>
        
        {user?.role !== 'Admin' ? (
          <React.Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/promotion" exact component={PromotionPage} />
            <Route path="/customer" exact component={CustomerPage} />
            <Route path="/customer/orders" exact component={OrderPage} />
            <Route
              path="/product/detail/:id_product"
              exact
              component={DetailPage}
            />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path="/payment" exact component={PaymentPage} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route
              path="/product/detail/:id_product"
              exact
              component={DetailPage}
            />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/promotion" exact component={PromotionPage} />
            <Route path="/customer" exact component={CustomerPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/admin/" exact component={DasboardPage} />
            <Route path="/admin/dashboard" exact component={DasboardPage} />
            <Route path="/admin/order" exact component={AdminOrderPage} />
            <Route path="/admin/product" exact component={AdminProductPage} />
            <Route exact path="/admin/promotion/" component={AdminPromotionPage} />
            <Route
              exact
              path="/admin/promotion/create"
              component={AdminAddPromotionPage}
            />
            <Route
              exact
              path="/admin/promotion/update"
              component={AdminUpdatePromotionPage}
            />
            <Route
              path="/admin/product/update/:id_product"
              exact
              component={AdminUpdateProductPage}
            />
            <Route
              path="/admin/product/create"
              exact
              component={AdminAddProductPage}
            />
            <Route
              path="/admin/product/update/"
              exact
              component={AdminUpdateProductPage}
            />
            <Route
              path="/admin/order/:id_order"
              exact
              component={AdminDetailOrderPage}
            />
          </React.Fragment>
        )}

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
